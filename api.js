const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const APP_API_BASE_URL = isLocal ? 'https://olowebapidev2.azurewebsites.net' : '';

const ApiService = {
    getToken() {
        return sessionStorage.getItem('farebites_access_token') || localStorage.getItem('farebites_access_token');
    },

    setToken(token, rememberMe = false) {
        if (token) {
            if (rememberMe) {
                localStorage.setItem('farebites_access_token', token);
                sessionStorage.removeItem('farebites_access_token');
            } else {
                sessionStorage.setItem('farebites_access_token', token);
                localStorage.removeItem('farebites_access_token');
            }
        } else {
            localStorage.removeItem('farebites_access_token');
            sessionStorage.removeItem('farebites_access_token');
        }
    },

    async request(endpoint, method = 'GET', body = null) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const token = this.getToken();
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const config = {
            method,
            headers
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(`${APP_API_BASE_URL}${endpoint}`, config);
            
            // Check for unauthorized - might need token refresh
            if (response.status === 401 && endpoint !== '/api/Account/login') {
                // In a robust implementation, we would try to refresh the token here
                // For now, if we get a 401, we clear the token and let the app handle it
                console.warn('Unauthorized request, token may be expired');
                this.setToken(null);
                // Optionally trigger a custom event that app.js can listen to
                window.dispatchEvent(new Event('auth-expired'));
            }

            // Return empty object for 200 OK with no body (e.g., logout)
            const text = await response.text();
            let data = {};
            if (text) {
                try {
                    data = JSON.parse(text);
                } catch(e) {
                    data = { message: text };
                }
            }

            if (!response.ok) {
                throw { status: response.status, data };
            }

            return data;
        } catch (error) {
            console.error(`API Error on ${method} ${endpoint}:`, error);
            throw error;
        }
    },

    // --- Account Endpoints ---

    async login(email, password, rememberMe = false) {
        // Swagger typically uses email/password for CustomerAuthenticationRequest
        const response = await this.request('/api/Account/login', 'POST', { email, password });
        console.log('Raw Login API Response:', response);
        const token = response.jwtToken || response.token || response.accessToken || response.jwt;
        if (token) {
            this.setToken(token, rememberMe);
        } else {
            console.warn('No token found in login response keys! Available keys:', Object.keys(response || {}));
        }
        return response;
    },

    async register(userData) {
        return await this.request('/api/Account/register', 'POST', userData);
    },

    async logout() {
        try {
            await this.request('/api/Account/logout', 'POST');
        } catch(e) {
            console.error("Logout API failed, continuing local logout");
        } finally {
            this.setToken(null);
        }
    },

    async getProfile() {
        return await this.request('/api/Account/profile', 'GET');
    },

    async updateProfile(profileData) {
        return await this.request('/api/Account/profile', 'PUT', profileData);
    },

    async changePassword(oldPassword, newPassword) {
        return await this.request('/api/Account/change-password', 'POST', { oldPassword, newPassword });
    },

    async forgotPassword(email) {
        try {
            // Fix for testing via file:/// URLs which cause SendGrid to drop the email due to invalid link format
            let origin = window.location.origin;
            if (origin === "null" || origin.includes("file://")) {
                origin = "http://localhost:8000";
            }
            
            return await this.request('/api/Account/forgot-password', 'POST', { 
                Email: email,
                ResetPasswordUrl: origin + "/reset-password.html",
                WebsiteUrl: "support@farebites.com",
                WebsiteShortName: "Farebites"
            });
        } catch (error) {
            // If the endpoint is not implemented (404/405), simulate a successful request for frontend demo purposes
            if (error && (error.status === 404 || error.status === 405)) {
                console.warn('Forgot password API endpoint not found on server, using fallback mock response');
                // Simulate a network delay
                await new Promise(resolve => setTimeout(resolve, 800));
                return { success: true, message: "If this email is registered, you will receive a password reset link shortly." };
            }
            throw error;
        }
    },

    async resetPassword(email, code, newPassword, confirmPassword) {
        return await this.request('/api/Account/reset-password', 'POST', {
            email: email,
            code: code,
            password: newPassword,
            confirmPassword: confirmPassword
        });
    },

    async getOrders(page = 1, pageSize = 10) {
        return await this.request(`/api/Account/orders?page=${page}&pageSize=${pageSize}`, 'GET');
    },

    // --- Menu Endpoints (public, no auth required) ---

    async getMenuItemDetail(locationId, menuItemId) {
        try {
            const response = await fetch(
                `${APP_API_BASE_URL}/api/RestaurantMenu/location/${locationId}/menu-item/${menuItemId}`
            );
            if (!response.ok) throw { status: response.status };
            return await response.json();
        } catch (error) {
            console.error(`API Error fetching menu item detail (loc=${locationId}, item=${menuItemId}):`, error);
            throw error;
        }
    },

    // --- Order Endpoints ---

    async placeOrder(orderData) {
        const endpoint = orderData.isGuestUser ? '/api/CustomerOrder/guest' : '/api/CustomerOrder';
        return await this.request(endpoint, 'POST', orderData);
    },

    async getOrderDetails(orderId) {
        return await this.request(`/api/CustomerOrder/${orderId}`, 'GET');
    }
};

window.ApiService = ApiService;
