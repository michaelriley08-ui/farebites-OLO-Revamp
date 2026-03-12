const PAGE_FILE_MAP = {
    "landing-page": "landing-page.html",
    "home": "home.html",
    "home-auth": "home-auth.html",
    "search": "search.html",
    "cart": "cart.html",
    "order-details": "order-details.html",
    "payment": "payment.html",
    "confirmation": "confirmation.html",
    "status": "status.html",
    "restaurant-homepage": "restaurant-homepage.html",
    "bobs-boba-auth": "bobs-boba-auth.html",
    "bobs-fulfillment-select": "bobs-fulfillment-select.html",
    "bobs-dine-in-instruction": "bobs-dine-in-instruction.html",
    "menu": "menu.html",
    "location-selection": "location-selection.html",
    "location-favorites": "location-favorites.html",
    "genre": "genre.html",
    "login": "login.html",
    "register": "register.html",
    "my-account": "my-account.html",
    "privacy": "privacy.html",
    "merchant-dashboard": "merchant-dashboard.html",
    "index": "index.html"
};
const PAGE_LABELS = {
    "landing-page": "FareBites Landing Page",
    "home": "FareBites Homepage (Logged In)",
    "home-auth": "Homepage (Sign In/Sign Up Modal)",
    "search": "Restaurant Search",
    "cart": "Cart / Review",
    "order-details": "Order Details (Customization)",
    "payment": "Payment Page",
    "confirmation": "Confirmation",
    "status": "Order Status",
    "restaurant-homepage": "Bob's Boba Homepage (Standard)",
    "bobs-boba-auth": "Bob's Boba (Sign In Sign Up)",
    "bobs-fulfillment-select": "Bob's Boba (Order Type Select)",
    "bobs-dine-in-instruction": "Bob's Boba (Dine-In Instruction)",
    "menu": "Restaurant Menu",
    "location-selection": "Location Selection",
    "location-favorites": "Location Favorites",
    "genre": "Browse by Genre",
    "login": "Login (Phone)",
    "register": "Registration",
    "my-account": "My Account",
    "privacy": "Privacy Policy",
    "merchant-dashboard": "Merchant Dashboard"
};
const STORAGE_KEYS = {
    state: 'farebitesMockupState',
    viewport: 'farebitesViewport'
};
const DEFAULT_STATE = {
    fulfillmentMode: 'In-store',
    orderTime: 'ASAP',
    locationFilter: 'Nearby',
    selectedDay: 'Today',
    selectedTimeSlot: '12:30 PM',
    sugarLevel: '50%',
    itemQuantity: 1,
    bagQuantity: 0,
    noBagsSelected: false,
    toppings: ['BOBA'],
    modalOpen: null,
    paymentMethod: 'card'
};

let currentViewport = sessionStorage.getItem(STORAGE_KEYS.viewport) || 'mobile';
let currentPage = document.body.dataset.page || 'landing-page';
let mockupState = loadMockupState();

function loadMockupState() {
    try {
        const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.state) || 'null');
        return saved ? { ...DEFAULT_STATE, ...saved } : { ...DEFAULT_STATE };
    } catch (error) {
        return { ...DEFAULT_STATE };
    }
}

function persistAllState() {
    sessionStorage.setItem(STORAGE_KEYS.state, JSON.stringify(mockupState));
    sessionStorage.setItem(STORAGE_KEYS.viewport, currentViewport);
}

const assets = {
    featured: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    steak: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    bobaHero: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1200&q=80",
    boba1: "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?auto=format&fit=crop&w=800&q=80",
    boba2: "https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?auto=format&fit=crop&w=800&q=80",
    boba3: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    boba4: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80",
    menuHero: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    cobbSalad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    shrimpTacos: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
    burritoBowl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&getSet=80",
    icedMatcha: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106518.42371900132!2d-112.4414169904297!3d33.4571167448373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b394142f9b23b%3A0xc3f92d47101783e4!2sGoodyear%2C%20AZ!5e0!3m2!1sen!2sus!4v1709854800000!5m2!1sen!2sus"
};

function toggleMenu(e) {
    e.stopPropagation();
    document.getElementById('dropdown-menu').classList.toggle('show');
}

document.addEventListener('click', () => {
    const menu = document.getElementById('dropdown-menu');
    if (menu) menu.classList.remove('show');
});


const routes = {
    'landing-page': () => `
            <div class="flex flex-col h-full relative overflow-hidden bg-black">
                <div class="absolute inset-0 z-0">
                    <img src="${assets.featured}" class="w-full h-full object-cover opacity-80">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60"></div>
                </div>
                
                <div class="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center mt-12">
                    <h1 class="text-6xl font-black text-red-600 tracking-tighter uppercase italic drop-shadow-2xl">FAREBITES</h1>
                    <p class="text-white font-bold tracking-widest uppercase mt-4 text-sm drop-shadow-md">Food you love, delivered.</p>
                </div>

                <div class="relative z-10 px-6 pb-12 w-full shrink-0">
                    <button onclick="navigateTo('home-auth')" class="w-full bg-red-600 text-white py-4 rounded-full font-black text-lg shadow-[0_10px_30px_rgba(220,38,38,0.4)] active:scale-95 transition-transform uppercase tracking-wider italic">Log In</button>
                </div>
            </div>`,
    'merchant-dashboard': () => `
            <div class="flex flex-col h-full bg-[#f0f2f5] relative">
                <header class="bg-[#1a1a1a] px-6 py-4 flex justify-between items-center z-50 shrink-0 shadow-md">
                    <div class="flex flex-col text-left">
                        <span class="text-[10px] font-black text-red-500 tracking-widest uppercase">Merchant Portal</span>
                        <span class="text-[15px] font-black text-white italic tracking-tight">DASHBOARD</span>
                    </div>
                    <div class="w-10 h-10 flex items-center justify-center text-white bg-gray-800 rounded-full"><i class="fa-solid fa-store text-lg"></i></div>
                </header>
                <div class="flex-1 overflow-y-auto relative scrollbar-hide px-5 py-6 space-y-5 pb-32">
                    <!-- Stats Overview -->
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                            <span class="text-3xl font-black text-gray-900">12</span>
                            <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Active Orders</span>
                        </div>
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                            <span class="text-3xl font-black text-green-600">$458</span>
                            <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Today's Sales</span>
                        </div>
                    </div>

                    <h2 class="text-lg font-black text-gray-900 uppercase italic tracking-tight px-1">Manage Store</h2>

                    <div class="space-y-3">
                        <!-- Menu Items -->
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-utensils text-xl"></i></div>
                            <div class="flex-1">
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Menu & Items</h3>
                                <p class="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Update prices, edit items, mark out of stock</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>

                        <!-- Store Hours -->
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-clock text-xl"></i></div>
                            <div class="flex-1">
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Store Hours</h3>
                                <p class="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Regular hours, holidays & temporary closures</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>

                        <!-- Promotions & Coupons -->
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-ticket text-xl"></i></div>
                            <div class="flex-1">
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Promos & Coupons</h3>
                                <p class="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Create and manage active discounts</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>

                        <!-- Featured Dishes -->
                        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-star text-xl"></i></div>
                            <div class="flex-1">
                                <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Featured Dishes</h3>
                                <p class="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Highlight specials and top-selling items</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
                        </div>
                    </div>
                </div>
                
                <div class="flex-shrink-0 bg-white border-t border-gray-100 p-6 sticky bottom-0 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                    <div class="flex justify-around text-[10px] font-black uppercase">
                        <div class="text-red-600 flex flex-col items-center gap-1 cursor-pointer"><i class="fa-solid fa-chart-line text-xl"></i>DASH</div>
                        <div class="text-gray-400 flex flex-col items-center gap-1 cursor-pointer"><i class="fa-solid fa-list-check text-xl"></i>ORDERS</div>
                        <div class="text-gray-400 flex flex-col items-center gap-1 cursor-pointer"><i class="fa-solid fa-gear text-xl"></i>SETTINGS</div>
                    </div>
                </div>
            </div>`,
    'home': () => {
        if (currentViewport === 'desktop') {
            return `
                <div class="flex flex-col w-full min-h-full">
                    <nav class="flex justify-between items-center px-16 py-6 bg-white sticky top-0 z-50 shadow-sm">
                        <div class="flex items-center gap-8"><span class="text-3xl font-black text-red-600 tracking-tighter cursor-pointer" onclick="navigateTo('home')">FAREBITES</span></div>
                        <div class="flex items-center gap-6"><span class="font-black text-gray-800">Hi Mike!</span><div class="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-red-600 transition"><i class="fa-solid fa-user text-gray-600"></i></div></div>
                    </nav>
                    <div class="desktop-hero" style="background-image: url('${assets.featured}')">
                        <div class="relative z-10 w-full max-w-5xl px-12 text-center text-white py-24">
                            <h1 class="text-7xl font-black mb-10 leading-tight tracking-tight">Food you love,<br>delivered.</h1>
                            <div class="bg-white rounded-full p-2.5 flex shadow-2xl mx-auto max-w-3xl w-full">
                                <div class="flex-1 flex items-center px-8 gap-4 text-gray-800"><i class="fa-solid fa-location-dot text-red-600"></i><input type="text" placeholder="Enter delivery address" class="w-full py-4 text-lg outline-none font-medium placeholder-gray-400"></div>
                                <button class="bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-red-700 transition group"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>`;
        } else {
            return `
                <div class="flex flex-col h-full bg-white relative">
                    <div class="flex-shrink-0 bg-white px-6 pt-10 pb-4">
                        <div class="bg-gray-100 flex items-center gap-3 px-5 py-3.5 rounded-full shadow-sm">
                            <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                            <input type="text" placeholder="Search for food" class="bg-transparent border-none outline-none w-full font-semibold text-gray-800 placeholder-gray-400">
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto scrollbar-hide">
                        <!-- Red Category Icons (Lucide stroke-width 2) -->
                        <div class="flex gap-8 overflow-x-auto px-8 pb-10 pt-6 scrollbar-hide">
                            <div class="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer">
                                <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter">pick up</span>
                            </div>
                            <div class="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer">
                                <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11c0 5 4 9 9 9s9-4 9-9H3Z"/><path d="m19 2-8 10"/><path d="m22 3-9 10"/></svg>
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter">dine in</span>
                            </div>
                            <div class="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer">
                                <svg class="w-12 h-12 text-red-600 lucide lucide-car" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter">drive up</span>
                            </div>
                            <div class="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer">
                                <svg class="w-12 h-12 text-red-600 lucide lucide-store" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter text-center leading-none">in store<br>pickup</span>
                            </div>
                        </div>
                        <div class="px-6">
                            <h3 class="font-black text-2xl tracking-tight text-gray-900 mb-6 uppercase">Recently viewed</h3>
                            <div class="min-w-[280px] group cursor-pointer" onclick="navigateTo('restaurant-homepage')">
                                <div class="relative overflow-hidden rounded-2xl mb-3 aspect-[16/10] shadow-sm"><img src="${assets.bobaHero}" class="w-full h-full object-cover"></div>
                                <p class="text-base font-black text-gray-900 uppercase">Bob's Boba Tea</p>
                                <p class="text-sm font-semibold text-gray-500 italic">4.8 • 0.3 mi • 10 min</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-shrink-0 bg-white border-t border-gray-100 p-6 sticky bottom-0 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                        <button onclick="navigateTo('restaurant-homepage')" class="w-full bg-[#d92323] text-white py-4 rounded-full font-black text-lg shadow-xl mb-4 active:scale-95 transition-all uppercase">START ORDER</button>
                        <div class="flex justify-around text-[10px] font-black uppercase">
                            <div class="text-red-600 flex flex-col items-center gap-1" onclick="navigateTo('home')"><i class="fa-solid fa-house text-xl"></i>HOME</div>
                            <div class="text-gray-400 flex flex-col items-center gap-1" onclick="navigateTo('restaurant-homepage')"><i class="fa-solid fa-utensils text-xl"></i>ORDER</div>
                            <div class="text-gray-400 flex flex-col items-center gap-1"><i class="fa-solid fa-qrcode text-xl"></i>SCAN</div>
                            <div class="text-gray-400 flex flex-col items-center gap-1" onclick="navigateTo('my-account')"><i class="fa-solid fa-user text-xl"></i>ACCOUNT</div>
                        </div>
                    </div>
                </div>`;
        }
    },
    'home-auth': () => `
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${assets.featured}')"></div>
            <div class="modal-overlay" onclick="navigateTo('home')">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <button class="absolute top-6 left-6 text-gray-500" onclick="navigateTo('home')"><i class="fa-solid fa-xmark text-2xl"></i></button>
                    <div class="text-center mb-6 mt-6 uppercase"><span class="text-2xl font-black text-red-600 tracking-tighter uppercase font-black italic">FAREBITES</span></div>
                    <h2 class="text-3xl font-black text-center mb-8 uppercase tracking-tight">Sign in / Sign up</h2>
                    <div class="space-y-4">
                        <div class="flex gap-2">
                            <div class="bg-gray-100 px-4 py-4 rounded-xl font-bold text-gray-700 min-w-[100px] flex items-center justify-center">+1 <i class="fa-solid fa-chevron-down text-[10px] ml-2"></i></div>
                            <input type="tel" placeholder="Mobile Number" class="flex-1 min-w-0 bg-gray-100 px-4 py-4 rounded-xl border-2 border-transparent focus:border-black outline-none font-bold text-lg">
                        </div>
                        <button onclick="navigateTo('home')" class="w-full bg-red-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase font-black italic">Continue</button>
                        
                        <div class="flex items-center gap-4 py-2">
                            <div class="flex-1 h-px bg-gray-200"></div>
                            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">or</span>
                            <div class="flex-1 h-px bg-gray-200"></div>
                        </div>

                        <div class="space-y-3">
                            <button class="w-full bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-gray-50 active:scale-95 transition-all">
                                <i class="fa-brands fa-google text-lg text-red-500"></i> Continue with Google
                            </button>
                            <button class="w-full bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-gray-50 active:scale-95 transition-all">
                                <i class="fa-brands fa-apple text-lg text-black"></i> Continue with Apple
                            </button>
                            <button class="w-full bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-gray-50 active:scale-95 transition-all">
                                <i class="fa-brands fa-facebook text-lg text-[#1877F2]"></i> Continue with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>`,
    'restaurant-homepage': () => {
        const cardWidth = currentViewport === 'desktop' ? 'w-[24%] min-w-[240px] max-w-[300px]' : (currentViewport === 'tablet' ? 'w-[45%]' : 'w-full');
        const isDesktop = currentViewport === 'desktop';
        return `
            <div class="flex flex-col h-full relative overflow-hidden">
                <!-- Full Viewport Background Image -->
                <div class="absolute inset-0 z-0">
                    <img src="${assets.bobaHero}" class="w-full h-full object-cover">
                    <!-- Subtle gradient to ensure text readability -->
                    <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90"></div>
                </div>

                <header class="bg-transparent px-6 pt-6 pb-2 flex justify-between items-center z-50 shrink-0 relative">
                    <button onclick="navigateTo('home')" class="w-10 h-10 flex items-center justify-center text-[#3A2218]"><i class="fa-regular fa-user text-2xl"></i></button>
                    <div class="flex flex-col items-center cursor-pointer" onclick="navigateTo('location-selection')">
                        <div class="flex items-center gap-1"><span class="text-[11px] font-black text-[#3A2218] tracking-[0.15em] uppercase">DELIVERY</span><i class="fa-solid fa-chevron-down text-[9px] text-[#3A2218]"></i></div>
                        <span class="text-[13px] font-medium text-[#3A2218] mt-0.5">Home</span>
                    </div>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-[#3A2218] hover:opacity-80 transition-opacity cursor-pointer">
                        <i class="fa-solid fa-bag-shopping text-2xl"></i>
                        <span class="absolute top-0 right-0 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content shadow-sm">1</span>
                    </button>
                </header>
                
                <div class="flex-1 overflow-y-auto relative scrollbar-hide z-10 flex flex-col">
                    <!-- Titles & CTA -->
                    <div class="text-center pt-2 relative z-10 shrink-0">
                        <div class="text-violet-600 text-[11px] font-black tracking-[0.2em] uppercase mb-1">Limited Time Only</div>
                        <h1 class="text-5xl font-black text-violet-600 uppercase tracking-tighter leading-[0.9] font-sans scale-y-110 mt-2 ${isDesktop ? 'mb-4' : 'mb-2'}">I-TEA<br>MENU</h1>
                        ${isDesktop ? `<button onclick="navigateTo('bobs-fulfillment-select')" class="bg-violet-600 text-white px-8 py-3.5 rounded-full font-black text-sm shadow-lg active:scale-95 transition-transform uppercase tracking-wider inline-block">Order Now</button>` : ''}
                    </div>
                    
                    <!-- Spacer so background image can be seen before the carousel -->
                    <div class="w-full flex-1 min-h-[140px]"></div>
                    
                    <!-- Carousel Container -->
                    <div class="relative z-20 w-full mt-auto shrink-0 pb-2">
                        <div class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 before:content-[''] before:w-0 before:shrink-0 after:content-[''] after:w-2 after:shrink-0 ${isDesktop ? 'justify-center' : ''}">
                            <!-- Card 1 -->
                            <div class="snap-start shrink-0 ${cardWidth} bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('order-details')">
                                <div class="p-3 pb-0 rounded-t-lg overflow-hidden w-full"><img src="${assets.boba1}" class="w-full aspect-video object-cover rounded shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">New Item</div>
                                    <div class="text-base font-black text-[#3A2218] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">M7 Crème Brûlée Boba Milk Tea</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 2 -->
                            <div class="snap-start shrink-0 ${cardWidth} bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('order-details')">
                                <div class="p-3 pb-0 rounded-t-lg overflow-hidden w-full"><img src="${assets.boba2}" class="w-full aspect-video object-cover rounded shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Popular</div>
                                    <div class="text-base font-black text-[#3A2218] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">P4 Brown Sugar Boba Latte</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 3 -->
                            <div class="snap-start shrink-0 ${cardWidth} bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('order-details')">
                                <div class="p-3 pb-0 rounded-t-lg overflow-hidden w-full"><img src="${assets.boba3}" class="w-full aspect-video object-cover rounded shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Specialty</div>
                                    <div class="text-base font-black text-[#3A2218] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">M8 Taro Boba Purée Latte</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.75</div>
                                </div>
                            </div>
                            <!-- Card 4 -->
                            <div class="snap-start shrink-0 ${cardWidth} bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95" onclick="navigateTo('order-details')">
                                <div class="p-3 pb-0 rounded-t-lg overflow-hidden w-full"><img src="${assets.boba4}" class="w-full aspect-video object-cover rounded shadow-sm"></div>
                                <div class="p-5 text-center bg-white flex flex-col justify-between flex-1">
                                    <div class="text-violet-600 text-[11px] font-black tracking-widest uppercase mb-1">Fruit Tea</div>
                                    <div class="text-base font-black text-[#3A2218] uppercase tracking-tight scale-y-110 px-1 leading-tight mb-2">P1 Super Fruit Tea</div>
                                    <div class="text-sm font-bold text-gray-500 mt-auto">$5.95</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Pagination Dots -->
                        <div class="flex justify-center items-center gap-2 mt-2 mb-4 pr-6">
                            <div class="w-2 h-2 rounded-full bg-violet-200"></div>
                            <div class="w-6 h-2 rounded-full bg-violet-600"></div>
                            <div class="w-2 h-2 rounded-full bg-violet-200"></div>
                            <div class="w-2 h-2 rounded-full bg-violet-200"></div>
                        </div>
                    </div>
                </div>

                ${!isDesktop ? `
                <!-- Order Now Button (Fixed above bottom nav on mobile/tablet) -->
                <div class="px-6 pb-4 pt-2 relative z-20 shrink-0">
                    <button onclick="navigateTo('bobs-fulfillment-select')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-transform uppercase tracking-wider">Order Now</button>
                </div>` : ''}

                <!-- Bottom Navigation -->
                <div class="flex-shrink-0 bg-white/90 backdrop-blur-md px-6 py-5 flex justify-between items-center z-50 border-t border-gray-200 relative">
                    <button class="text-violet-600 font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('restaurant-homepage')">HOME</button>
                    <button class="text-[#3A2218] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('menu')">MENU</button>
                    <button class="text-[#3A2218] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('cart')">REORDER</button>
                    <button class="text-[#3A2218] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('my-account')">REWARDS</button>
                    <button class="text-[#3A2218] font-black text-[14px] uppercase tracking-tighter scale-y-110" onclick="navigateTo('bobs-dine-in-instruction')">SCAN</button>
                </div>
            </div>`;
    },
    'location-selection': () => {
        const getSet = () => {
            const allLocations = [
                { name: "I-TEA - TEMPE", address: "825 W UNIVERSITY, Tempe, AZ", dist: "0.8 mi", fav: true, hours: "11:30 AM to 9:30 PM" },
                { name: "I-TEA - ALAMEDA", address: "1860 PARK ST, Alameda, CA", dist: "12.4 mi", fav: false, hours: "12:00 PM to 9:30 PM" },
                { name: "I-TEA - CASTRO VALLEY", address: "20666 REDWOOD RD, Castro Valley, CA", dist: "15.1 mi", fav: false, hours: "10:30 AM to 10:00 PM" },
                { name: "I-TEA - UC DAVIS", address: "236 A ST, Davis, CA", dist: "45.0 mi", fav: false, hours: "11:00 AM to 8:00 PM" },
                { name: "I-TEA - FREMONT #1", address: "43421 CHRISTY ST, Fremont, CA", dist: "18.2 mi", fav: false, hours: "11:30 AM to 9:00 PM" },
                { name: "I-TEA - FRESNO", address: "345 E SHAW AVE, Fresno, CA", dist: "120.5 mi", fav: false, hours: "1:00 PM to 6:45 PM" },
                { name: "I-TEA - MILPITAS", address: "766 E CALAVERAS BLVD, Milpitas, CA", dist: "25.3 mi", fav: false, hours: "11:30 AM to 9:20 PM" },
                { name: "I-TEA - MORAGA", address: "1460 MORAGA RD, Moraga, CA", dist: "15.8 mi", fav: false, hours: "12:30 PM to 8:00 PM" },
                { name: "I-TEA - NEWARK", address: "34925 NEWARK BLVD, Newark, CA", dist: "20.1 mi", fav: false, hours: "11:30 AM to 9:20 PM" },
                { name: "I-TEA - OAKLAND", address: "388 9TH ST, 126A, Oakland, CA", dist: "8.5 mi", fav: true, hours: "11:00 AM to 6:00 PM" },
                { name: "I-TEA - PITTSBURG", address: "212A LOVERIDGE RD, Pittsburg, CA", dist: "32.4 mi", fav: false, hours: "11:00 AM to 7:00 PM" },
                { name: "I-TEA - PLEASANTON", address: "915 MAIN ST, STE C, Pleasanton, CA", dist: "28.0 mi", fav: false, hours: "11:30 AM to 7:30 PM" },
                { name: "I-TEA - STOCKTON", address: "6846 STOCKTON BLVD, Sacramento, CA", dist: "85.2 mi", fav: false, hours: "10:20 AM to 8:00 PM" },
                { name: "I-TEA - TEARAY", address: "253 KEARNY ST, San Francisco, CA", dist: "2.1 mi", fav: true, hours: "12:00 PM to 6:00 PM" },
                { name: "I-TEA - SAN JOSE", address: "2936 ABORN SQUARE RD, San Jose, CA", dist: "35.6 mi", fav: false, hours: "11:30 AM to 9:30 PM" },
                { name: "I-TEA - SAN LEANDRO", address: "177 PELTON CENTER WAY, San Leandro, CA", dist: "10.2 mi", fav: false, hours: "Open 24 Hours" }
            ];

            if (mockupState.locationFilter === 'Near Me' || mockupState.locationFilter === 'Nearby') return allLocations;
            if (mockupState.locationFilter === 'Favorites') return allLocations.filter(loc => loc.fav);
            if (mockupState.locationFilter === 'Previous') return [allLocations[13], allLocations[0], allLocations[9]]; // TEARAY, TEMPE, OAKLAND
            
            return allLocations;
        };

        if (currentViewport === 'desktop') {
            return `
                <div class="flex flex-row h-full bg-white">
                    <div class="w-[450px] flex flex-col shrink-0 border-r border-gray-200 z-10 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.05)]">
                        <header class="p-4 border-b border-gray-100 flex items-center bg-white">
                            <button onclick="navigateTo('restaurant-homepage')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-arrow-left"></i></button>
                            <h1 class="text-xl font-black tracking-tight uppercase italic text-gray-900">Choose Location</h1>
                        </header>
                        <div class="p-5 border-b border-gray-100 bg-white">
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner mb-5 border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                            </div>
                            <div class="flex gap-2 overflow-x-auto scrollbar-hide">
                                <button onclick="updateMockupState('locationFilter', 'Near Me')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Near Me' || mockupState.locationFilter === 'Nearby' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500 hover:bg-gray-50'}">Near Me</button>
                                <button onclick="updateMockupState('locationFilter', 'Previous')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Previous' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500 hover:bg-gray-50'}">Previous</button>
                                <button onclick="updateMockupState('locationFilter', 'Favorites')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Favorites' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500 hover:bg-gray-50'}">Favorites</button>
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/30">
                            ${getSet().map((s, idx) => `
                                <div class="p-5 border ${s.fav ? 'border-violet-200 bg-violet-50/40' : 'border-gray-200 bg-white'} rounded-2xl flex justify-between items-start cursor-pointer transition hover:border-violet-400 hover:shadow-md" onclick="updateMockupState('selectedLocation', '${s.name}'); navigateTo('bobs-fulfillment-select')">
                                    <div>
                                        ${idx === 0 ? '<span class="text-[9px] font-black text-violet-600 uppercase tracking-widest mb-1 block">Home</span>' : ''}
                                        ${idx === 1 ? '<span class="text-[9px] font-black text-violet-600 uppercase tracking-widest mb-1 block">Office</span>' : ''}
                                        <h3 class="font-bold text-base tracking-tight uppercase italic flex items-center gap-2 text-gray-900">${s.name} ${s.fav ? '<i class="fa-solid fa-heart text-violet-600 text-xs"></i>' : ''}</h3>
                                        <p class="text-[10px] font-bold text-gray-400 mt-1.5 uppercase tracking-widest"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                                        <div class="flex gap-4 mt-4">
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500"><i class="fa-solid fa-shop"></i> In store</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500"><i class="fa-solid fa-car"></i> Drive-thru</span>
                                            <span class="flex items-center gap-1.5 text-[10px] font-black uppercase text-gray-500"><i class="fa-solid fa-square-parking"></i> Curbside</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end justify-between h-full gap-4">
                                        <div class="text-[11px] font-black text-gray-400 uppercase font-mono">${s.dist}</div>
                                        <span class="bg-violet-600 text-white text-[9px] px-3.5 py-1.5 rounded-full uppercase font-black tracking-widest italic shadow-sm hover:bg-violet-700 transition" onclick="event.stopPropagation(); navigateTo('location-favorites')">Edit</span>
                                    </div>
                                </div>`).join('')}
                        </div>
                    </div>
                    <div class="flex-1 relative bg-[#e5e3df]">
                        <iframe src="${assets.googleMapsEmbed}" class="absolute inset-0 w-full h-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>`;
        } else {
            return `
                <div class="flex flex-col h-full bg-[#f4f4f2] relative">
                    <header class="p-4 flex items-center bg-white z-20 shrink-0 shadow-sm relative">
                        <button onclick="navigateTo('restaurant-homepage')" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 mr-4 hover:bg-gray-100 transition-colors"><i class="fa-solid fa-arrow-left"></i></button>
                        <h1 class="text-xl font-black tracking-tight uppercase italic text-gray-900">Choose Location</h1>
                    </header>
                    
                    <div class="w-full h-[35%] min-h-[220px] shrink-0 relative z-0">
                        <iframe src="${assets.googleMapsEmbed}" class="absolute inset-0 w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div class="flex-1 overflow-y-auto bg-white z-10 -mt-6 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.12)] flex flex-col relative pb-6">
                        <div class="p-5 border-b border-gray-100 shrink-0 sticky top-0 bg-white/95 backdrop-blur-md z-20 rounded-t-3xl">
                            <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5"></div>
                            <div class="bg-gray-100 flex items-center gap-3 px-4 py-3.5 rounded-full shadow-inner mb-4 border border-gray-200/50">
                                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                                <input type="text" placeholder="Search city, state, or zip" class="bg-transparent border-none outline-none w-full font-bold text-gray-800 text-sm placeholder-gray-400">
                            </div>
                            <div class="flex gap-2 overflow-x-auto scrollbar-hide">
                                <button onclick="updateMockupState('locationFilter', 'Near Me')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Near Me' || mockupState.locationFilter === 'Nearby' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500'}">Near Me</button>
                                <button onclick="updateMockupState('locationFilter', 'Previous')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Previous' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500'}">Previous</button>
                                <button onclick="updateMockupState('locationFilter', 'Favorites')" class="px-6 py-2 rounded-full text-[10px] font-black uppercase transition ${mockupState.locationFilter === 'Favorites' ? 'bg-violet-600 text-white shadow-md' : 'border-2 border-gray-100 text-gray-500'}">Favorites</button>
                            </div>
                        </div>

                        <div class="p-4 space-y-3 flex-1 bg-gray-50/30">
                            ${getSet().map((s, idx) => `
                                <div class="p-5 border ${s.fav ? 'border-violet-200 bg-violet-50/40' : 'border-gray-200 bg-white'} rounded-2xl flex justify-between items-start cursor-pointer active:scale-[0.98] transition-all hover:shadow-md" onclick="navigateTo('bobs-fulfillment-select')">
                                    <div>
                                        ${idx === 0 ? '<span class="text-[9px] font-black text-violet-600 uppercase tracking-widest mb-1 block">Home</span>' : ''}
                                        ${idx === 1 ? '<span class="text-[9px] font-black text-violet-600 uppercase tracking-widest mb-1 block">Office</span>' : ''}
                                        <h3 class="font-bold text-base tracking-tight uppercase italic flex items-center gap-2 text-gray-900">${s.name} ${s.fav ? '<i class="fa-solid fa-heart text-violet-600 text-xs"></i>' : ''}</h3>
                                        <p class="text-xs text-gray-500 italic mt-1.5">${s.address}</p>
                                        <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest"><i class="fa-regular fa-clock mr-1"></i> ${s.hours}</p>
                                        <div class="flex gap-4 mt-3">
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-gray-500"><i class="fa-solid fa-shop text-[13px]"></i> In store</span>
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-gray-500"><i class="fa-solid fa-car text-[13px]"></i> Drive-thru</span>
                                            <span class="flex items-center gap-1.5 text-[9px] font-black uppercase text-gray-500"><i class="fa-solid fa-square-parking text-[13px]"></i> Curbside</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end justify-between h-full gap-4">
                                        <div class="text-[11px] font-black text-gray-400 uppercase font-mono">${s.dist}</div>
                                        <span class="bg-violet-600 text-white text-[9px] px-3.5 py-1.5 rounded-full uppercase font-black tracking-widest italic shadow-sm" onclick="event.stopPropagation(); navigateTo('location-favorites')">Edit</span>
                                    </div>
                                </div>`).join('')}
                        </div>
                    </div>
                </div>`;
        }
    },
    'location-favorites': () => `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0 border-b border-gray-100">
                    <button onclick="navigateTo('location-selection')" class="w-10 h-10 flex items-center justify-center text-gray-700 mr-4 hover:bg-gray-50 rounded-full transition-colors"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase italic text-gray-900 flex-1 text-center">Favorite Locations</h1>
                    <div class="w-10"></div>
                </header>
                <div class="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    <!-- Location 1 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-black text-gray-900 uppercase italic tracking-tight">McDowell Rd</h3>
                                <p class="text-xs text-gray-500 font-medium">8738 S. Emerald Dr</p>
                            </div>
                            <button class="text-red-500 hover:text-red-700 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-lg"></i></button>
                        </div>
                        
                        <div class="space-y-3">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Assign Label</p>
                            <div class="flex gap-2">
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Home</button>
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-gray-100 text-gray-400 bg-white">Work</button>
                            </div>
                            <div class="relative">
                                <input type="text" placeholder="Custom Label (e.g. Gym)" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-violet-300 transition-colors">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Instructions</p>
                            <textarea placeholder="Gate codes, floor number, drop-off spot..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs font-medium outline-none focus:border-violet-300 h-24 resize-none leading-relaxed"></textarea>
                        </div>
                    </div>

                    <!-- Location 2 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-black text-gray-900 uppercase italic tracking-tight">Camelback & Litchfield</h3>
                                <p class="text-xs text-gray-500 font-medium">13802 W Camelback Rd</p>
                            </div>
                            <button class="text-red-500 hover:text-red-700 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-lg"></i></button>
                        </div>
                        
                        <div class="space-y-3">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Assign Label</p>
                            <div class="flex gap-2">
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-gray-100 text-gray-400 bg-white">Home</button>
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Work</button>
                            </div>
                            <div class="relative">
                                <input type="text" placeholder="Custom Label" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-violet-300 transition-colors">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Instructions</p>
                            <textarea placeholder="Delivery instructions for this location..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs font-medium outline-none focus:border-violet-300 h-24 resize-none leading-relaxed"></textarea>
                        </div>
                    </div>
                </div>
                <div class="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                    <button onclick="navigateTo('location-selection')" class="w-full bg-violet-600 text-white py-4 rounded-xl font-black uppercase italic tracking-wider shadow-lg active:scale-[0.98] transition-all">Save Changes</button>
                </div>
            </div>
        `,
    'bobs-fulfillment-select': () => {
        const btn = (icon, label) => {
            const isActive = mockupState.fulfillmentMode === label;
            const clickHandler = label === 'Dine In' ? `navigateTo('bobs-dine-in-instruction')` : `updateMockupState('fulfillmentMode', '${label}')`;
            return `
                    <button onclick="${clickHandler}" class="flex flex-col items-center justify-center gap-1 py-3 border-2 rounded-xl font-bold transition-all shadow-sm ${isActive ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-800 border-gray-100'}">
                        <i class="fa-solid ${icon} text-xl ${isActive ? 'text-white' : 'text-violet-600'}"></i>
                        <span class="text-[11px] font-black uppercase">${label}</span>
                    </button>`;
        };

        const monthOffset = mockupState.monthOffset || 0;
        const months = [
            { name: 'March 2026', days: 31, startDay: 0 },
            { name: 'April 2026', days: 30, startDay: 3 },
            { name: 'May 2026', days: 31, startDay: 5 }
        ];
        const currentMonth = months[monthOffset];

        let calendarCells = '';
        for (let i = 0; i < currentMonth.startDay; i++) {
            calendarCells += `<div></div>`;
        }
        for (let i = 1; i <= currentMonth.days; i++) {
            let isPast = monthOffset === 0 && i < 8; // Assuming the 8th is "Today" based on previous mockup
            if (isPast) {
                calendarCells += `<div class="py-2 text-gray-300 font-bold text-sm text-center">${i}</div>`;
            } else {
                const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                const dayName = dayNames[(currentMonth.startDay + i - 1) % 7];
                const monthNameShort = currentMonth.name.split(' ')[0].substring(0, 3);
                let label = (i === 8 && monthOffset === 0) ? 'Today' : ((i === 9 && monthOffset === 0) ? 'Tomorrow' : `${dayName}, ${monthNameShort} ${i}`);
                let isSelected = mockupState.selectedDay === label;
                calendarCells += `<button onclick="updateMockupState('selectedDay', '${label}'); mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="py-2 rounded-full font-bold text-sm text-center ${isSelected ? 'bg-violet-600 text-white shadow-md flex items-center justify-center shrink-0 w-8 h-8 mx-auto' : 'text-gray-800 hover:bg-violet-100 transition-colors flex items-center justify-center shrink-0 w-8 h-8 mx-auto'}">${i}</button>`;
            }
        }

        const dateModalClass = mockupState.modalOpen === 'date' ? 'flex' : 'hidden';
        const timeModalClass = mockupState.modalOpen === 'time' ? 'flex' : 'hidden';
        const warningModalClass = mockupState.modalOpen === 'warning' ? 'flex' : 'hidden';

        const times15 = ['11:30 AM', '11:45 AM', '12:00 PM', '12:15 PM', '12:30 PM', '12:45 PM', '1:00 PM', '1:15 PM', '1:30 PM', '1:45 PM', '2:00 PM', '2:15 PM', '2:30 PM', '2:45 PM', '3:00 PM', '3:15 PM', '3:30 PM', '3:45 PM', '4:00 PM', '4:15 PM', '4:30 PM', '4:45 PM', '5:00 PM', '5:15 PM', '5:30 PM', '5:45 PM', '6:00 PM', '6:15 PM', '6:30 PM', '6:45 PM', '7:00 PM', '7:15 PM', '7:30 PM', '7:45 PM', '8:00 PM', '8:15 PM', '8:30 PM', '8:45 PM', '9:00 PM'];
        
        // Proximity to close check
        const isNearClose = mockupState.selectedTimeSlot.includes('8:') || mockupState.selectedTimeSlot.includes('9:');

        const locationTitle = mockupState.selectedLocation || "BOB'S BOBA";

        return `
                <div class="flex flex-col h-full bg-[#FAF9F6] relative overflow-hidden">
                    <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black italic"><button onclick="navigateTo('location-selection')" class="mr-4"><i class="fa-solid fa-chevron-left text-xl text-gray-600"></i></button><span class="text-lg font-black text-violet-600 flex-1 text-center">${locationTitle}</span><div class="w-6"></div></header>
                    <div class="flex-1 overflow-y-auto px-6 pt-5 pb-32">
                        <!-- Location Info Card -->
                        <div class="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 mb-5">
                            <div class="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                                <i class="fa-solid fa-location-dot text-xl"></i>
                            </div>
                            <div>
                                <h3 class="font-black text-[#33424A] uppercase tracking-tight text-sm leading-tight">Bob's Boba Tea</h3>
                                <p class="text-[12px] font-medium text-gray-500 mt-0.5">4728 E Ray Rd, Phoenix, AZ 85044</p>
                            </div>
                        </div>

                        <h1 class="text-2xl font-black text-gray-900 leading-tight mb-4 tracking-tighter uppercase font-black italic">Order Type</h1>
                        <div class="grid grid-cols-2 gap-3">
                            ${btn('fa-shop', 'In-store')}
                            ${btn('fa-car', 'Drive Through')}
                            ${btn('fa-square-parking', 'Curbside')}
                            ${btn('fa-mobile-screen-button', 'Dine In')}
                        </div>
                        <div class="mt-4 pt-4 border-t border-gray-100">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 font-black">Ordering For</p>
                            <div class="grid grid-cols-2 gap-3">
                                <button onclick="updateMockupState('orderTime', 'ASAP')" class="py-3 border-2 rounded-xl font-bold flex flex-col items-center gap-1 ${mockupState.orderTime === 'ASAP' ? 'bg-violet-600 text-white' : 'bg-white text-gray-400 border-gray-100'} font-black uppercase italic"><i class="fa-solid fa-bolt text-lg mb-0.5"></i>ASAP</button>
                                <button onclick="updateMockupState('orderTime', 'Later'); mockupState.modalOpen = 'date'; updateMockupState('acknowledgedClose', false); navigateTo(currentPage);" class="py-3 border-2 rounded-xl font-bold flex flex-col items-center gap-1 ${mockupState.orderTime === 'Later' ? 'bg-violet-600 text-white' : 'bg-white text-gray-400 border-gray-100'} font-black uppercase italic"><i class="fa-solid fa-calendar-day text-lg mb-0.5"></i>Later</button>
                            </div>
                            
                            ${mockupState.orderTime === 'Later' ? `
                            <div class="mt-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all animate-[fadeIn_0.3s_ease-out]">
                                <div class="flex justify-between items-center mb-3">
                                    <p class="text-[10px] font-black text-violet-600 uppercase tracking-widest italic">Scheduled Pickup</p>
                                </div>
                                <div class="flex gap-3">
                                    <button onclick="mockupState.modalOpen = 'date'; navigateTo(currentPage);" class="flex-1 py-3 px-4 border-2 border-violet-100 hover:border-violet-300 rounded-xl font-bold text-sm text-gray-800 flex items-center justify-between transition-colors min-w-0 bg-white">
                                        <span class="flex items-center gap-2 overflow-hidden w-full"><i class="fa-regular fa-calendar text-violet-600 shrink-0"></i> <span class="truncate block w-full text-left font-black tracking-tight">${mockupState.selectedDay}</span></span>
                                        <div class="shrink-0 ml-2 w-6 h-6 flex items-center justify-center bg-violet-50 rounded-md shadow-sm text-violet-600"><i class="fa-solid fa-chevron-down text-[10px]"></i></div>
                                    </button>
                                    <button onclick="mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="flex-1 py-3 px-4 border-2 border-violet-100 hover:border-violet-300 rounded-xl font-bold text-sm text-gray-800 flex items-center justify-between transition-colors min-w-0 bg-white">
                                        <span class="flex items-center gap-2 overflow-hidden w-full"><i class="fa-regular fa-clock text-violet-600 shrink-0"></i> <span class="truncate block w-full text-left font-black tracking-tight">${mockupState.selectedTimeSlot}</span></span>
                                        <div class="shrink-0 ml-2 w-6 h-6 flex items-center justify-center bg-violet-50 rounded-md shadow-sm text-violet-600"><i class="fa-solid fa-chevron-down text-[10px]"></i></div>
                                    </button>
                                </div>
                            </div>
                            ` : `
                            <div class="mt-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all animate-[fadeIn_0.3s_ease-out]">
                                <div class="flex justify-between items-center mb-1">
                                    <p class="text-[10px] font-black text-violet-600 uppercase tracking-widest italic">Estimated Pickup Time</p>
                                </div>
                                <div class="flex items-center gap-2 mt-1">
                                    <i class="fa-regular fa-clock text-violet-600 border border-violet-100 rounded p-1"></i>
                                    <p class="font-black text-gray-800 text-sm tracking-tight">Today at ${times15[0]}</p>
                                </div>
                            </div>
                            `}
                        </div>
                    </div>
                    <div class="p-6 bg-white border-t border-gray-100 absolute bottom-0 left-0 right-0 z-50 shadow-lg"><button onclick="navigateTo('menu')" class="w-full bg-violet-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all uppercase tracking-widest font-black italic">Start Order</button></div>

                    <!-- Date Modal -->
                    <div id="date-modal" class="absolute inset-0 bg-black/60 z-[100] ${dateModalClass} flex-col justify-end sm:justify-center items-center backdrop-blur-sm p-4 pt-10">
                        <div class="bg-white w-full sm:w-[420px] max-w-full rounded-3xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col max-h-[85vh]">
                            <div class="flex justify-between items-center mb-5 shrink-0">
                                <h3 class="font-black text-xl uppercase italic text-gray-900">Choose Day</h3>
                                <button onclick="mockupState.modalOpen = null; navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            <!-- Stylized Calendar -->
                            <div class="bg-white rounded-2xl p-4 border border-violet-100 shadow-sm overflow-y-auto scrollbar-hide">
                                <div class="flex justify-between items-center mb-3 px-1">
                                    <button onclick="mockupState.monthOffset = Math.max(0, (mockupState.monthOffset||0) - 1); navigateTo(currentPage);" class="${monthOffset === 0 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-500 hover:text-violet-600 transition-colors'} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-left text-sm"></i></button>
                                    <span class="font-black text-sm uppercase tracking-widest text-gray-800">${currentMonth.name}</span>
                                    <button onclick="mockupState.monthOffset = Math.min(2, (mockupState.monthOffset||0) + 1); navigateTo(currentPage);" class="${monthOffset === 2 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-500 hover:text-violet-600 transition-colors'} w-8 h-8 flex items-center justify-center"><i class="fa-solid fa-chevron-right text-sm"></i></button>
                                </div>
                                <div class="grid grid-cols-7 gap-1 text-center mb-2">
                                    ${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => `<div class="text-[10px] font-black text-gray-400">${d}</div>`).join('')}
                                </div>
                                <div class="grid grid-cols-7 gap-1 text-center">
                                    ${calendarCells}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Time Modal -->
                    <div id="time-modal" class="absolute inset-0 bg-black/60 z-[100] ${timeModalClass} flex-col justify-end sm:justify-center items-center backdrop-blur-sm p-4 pt-10">
                        <div class="bg-white w-full sm:w-[420px] max-w-full rounded-3xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col h-[85vh] sm:max-h-[85vh]">
                            <div class="flex justify-between items-center mb-5 shrink-0">
                                <h3 class="font-black text-xl uppercase italic text-gray-900">Choose Time</h3>
                                <button onclick="mockupState.modalOpen = null; navigateTo(currentPage);" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            
                            <div class="flex-1 flex flex-col min-h-0">
                                <div class="overflow-y-auto scrollbar-hide flex-1 pb-4">
                                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                        ${times15.map(time => {
                                            const isThisTimeNearClose = time.includes('8:') || time.includes('9:');
                                            const clickAction = isThisTimeNearClose && !mockupState.acknowledgedClose 
                                                ? `updateMockupState('selectedTimeSlot', '${time}'); mockupState.modalOpen = 'warning'; navigateTo(currentPage);` 
                                                : `updateMockupState('selectedTimeSlot', '${time}'); navigateTo(currentPage);`;
                                            
                                            return `
                                            <button onclick="${clickAction}" class="py-2.5 rounded-xl border-2 ${mockupState.selectedTimeSlot === time ? 'border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-200' : 'border-gray-100 text-gray-600 hover:border-violet-200 bg-white'} font-black text-[13px] transition-all tracking-tight">${time}</button>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>

                                <div class="mt-2 pt-4 border-t border-gray-100 shrink-0">
                                    <label class="block text-[10px] font-black text-violet-600 uppercase tracking-widest mb-3 italic">Or enter a custom pickup time</label>
                                    <div class="flex items-center gap-3">
                                        <div class="relative flex-1">
                                            <i class="fa-regular fa-clock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                            <input type="time" class="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-600 focus:ring-0 font-bold text-gray-800 outline-none transition-colors" onchange="let val = this.value; let parts = val.split(':'); let h = parseInt(parts[0]); let ampm = h >= 12 ? 'PM' : 'AM'; h = h % 12; h = h || 12; let formatted = h + ':' + parts[1] + ' ' + ampm; updateMockupState('selectedTimeSlot', formatted); if(h >= 8 && ampm === 'PM') { mockupState.modalOpen = 'warning'; mockupState.acknowledgedClose = false; } navigateTo(currentPage);" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                            <div class="pt-5 mt-auto bg-white border-t border-gray-50 shrink-0">
                                <button onclick="
                                    if(isNearClose && !mockupState.acknowledgedClose) {
                                        mockupState.modalOpen = 'warning';
                                    } else {
                                        mockupState.modalOpen = null;
                                    }
                                    navigateTo(currentPage);
                                " class="w-full py-4 rounded-xl bg-violet-600 text-white font-black uppercase text-sm tracking-widest shadow-xl shadow-violet-200 transition-all active:scale-95">Confirm Time</button>
                            </div>
                        </div>
                    </div>

                    <!-- Warning Modal -->
                    <div id="warning-modal" class="absolute inset-0 bg-black/60 z-[110] ${warningModalClass} flex-col justify-center items-center backdrop-blur-sm p-4">
                        <div class="bg-red-600 w-full sm:w-[380px] max-w-full rounded-3xl p-6 shadow-2xl animate-[slideUp_0.3s_ease-out] flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <i class="fa-solid fa-clock text-red-600 text-3xl"></i>
                            </div>
                            
                            <h3 class="font-black text-2xl uppercase italic text-white mb-2 leading-tight">Store Closes<br>at 9:00 PM</h3>
                            
                            <p class="text-red-100 font-bold mb-8 px-2">
                                ${isNearClose ? "You have selected a pickup time within an hour of close. Please ensure you pick up your order before our doors close." : "Please ensure you pick up your order before our doors close."}
                            </p>
                            
                            <button onclick="updateMockupState('acknowledgedClose', true); mockupState.modalOpen = null; navigateTo('menu');" class="w-full py-4 rounded-xl bg-white text-red-600 font-black uppercase text-sm tracking-widest shadow-xl hover:bg-gray-50 transition-colors active:scale-95 flex items-center justify-center gap-2">
                                <i class="fa-solid fa-check text-lg"></i> I Understand
                            </button>
                            
                            <button onclick="mockupState.modalOpen = 'time'; navigateTo(currentPage);" class="mt-4 text-red-200 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Go Back</button>
                        </div>
                    </div>
                        </div>
                    </div>

                </div>`;
    },
    'bobs-dine-in-instruction': () => `
            <div class="flex flex-col h-full bg-white relative">
                <header class="bg-white px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 uppercase font-black italic"><button onclick="navigateTo('bobs-fulfillment-select')" class="mr-4"><i class="fa-solid fa-chevron-left text-xl text-gray-600"></i></button><span class="text-lg font-black text-violet-600 flex-1 text-center">BOB'S BOBA</span><div class="w-6"></div></header>
                <div class="flex-1 flex flex-col items-center justify-center px-8 text-center">
                    <svg class="w-64 h-64 text-violet-600 mb-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <!-- Custom illustration: Hand holding phone over QR Table Tent -->
                        <rect x="35" y="10" width="45" height="80" rx="6" /><path d="M45 35h-3v3"/><path d="M73 35h3v3"/><path d="M42 57v3h3"/><path d="M76 57v-3h-3"/>
                        <path d="M35 70c-10 0-14 10-14 18 0 10 6 12 14 12" stroke-width="2.5"/><path d="M35 70c-2-8-3-15 3-20 4-3 8-2 10 3L45 60" stroke-width="2.5"/><path d="M35 95c10 0 15-2 15-5" stroke-width="2.5"/>
                        <rect x="49" y="40" width="17" height="17" fill="currentColor" opacity="0.1"/>
                    </svg>
                    <h2 class="text-2xl font-black mb-6 uppercase tracking-tight font-black italic text-gray-900 leading-tight">Ready to Dine In?</h2>
                    <div class="space-y-4 text-left italic uppercase font-black text-gray-600">
                        <p class="text-sm">1. Find the QR code on your table.</p>
                        <p class="text-sm">2. Tap the button below to open camera.</p>
                        <p class="text-sm">3. Scan to start your order.</p>
                    </div>
                </div>
                <div class="p-6 border-t sticky bottom-0 bg-white"><button onclick="navigateTo('menu')" class="w-full bg-violet-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all uppercase shadow-violet-100 font-black italic"><i class="fa-solid fa-camera"></i><span>SCAN TABLE QR</span></button></div>
            </div>`,
    'menu': () => {
        const isDesktop = currentViewport === 'desktop';
        return `
            <div class="flex flex-col h-full bg-[#f9fafb] relative overflow-y-auto scrollbar-hide">
                <!-- Header Component -->
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0 border-b border-gra                    <button onclick="navigateTo('restaurant-homepage')" class="w-10 h-10 flex items-center justify-center text-gray-700 mr-4 hover:bg-gray-50 rounded-full transition-colors"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                    <div class="flex-1">
                        <h1 class="text-xl font-black tracking-tight uppercase italic text-gray-900">I-TEA Menu</h1>
                    </div>
                    <button onclick="navigateTo('cart')" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
                        <i class="fa-solid fa-bag-shopping text-xl"></i>
                        <span class="absolute top-1 right-1 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content box-border">2</span>
                    </button>
                </header>

                <div class="p-6 md:p-8 max-w-6xl mx-auto w-full">
                    <!-- Greeting -->
                    <div class="mb-8">
                        <h1 class="text-4xl font-black text-gray-900 tracking-tighter mb-1">Hi Mike!</h1>
                        <p class="text-gray-600 font-medium">Your favorites are ready to go. What's on the menu today?</p>
                    </div>

                    <div class="flex flex-col ${isDesktop ? 'lg:flex-row gap-8' : 'gap-8'}">
                        <!-- MAIN CONTENT COLUMN -->
                        <div class="flex-1 space-y-8">
                            <!-- Hero Special Card -->
                            <div class="relative w-full rounded-3xl overflow-hidden shadow-lg min-h-[300px] flex flex-col justify-end p-8">
                                <img src="${assets.bobaHero}" class="absolute inset-0 w-full h-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                                
                                <div class="relative z-10 w-full max-w-md">
                                    <span class="bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block shadow-sm">Popular</span>
                                    <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">Brown Sugar<br>Boba Latte</h2>
                                    <p class="text-gray-200 font-medium mb-6 text-sm leading-relaxed max-w-xs">P4 • 356 to 478 calories. A perfectly sweet and creamy favorite.</p>
                                    <button onclick="navigateTo('order-details')" class="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-full font-black uppercase text-sm shadow-lg transition-transform active:scale-95 inline-block tracking-wide">Start Order</button>
                                </div>
                            </div>

                            <!-- Seasonal Specials Grid -->
                            <div>
                                <div class="flex justify-between items-end mb-4 px-1">
                                    <h3 class="text-2xl font-black text-gray-900 tracking-tight">New Items</h3>als</h3>
                                    <button class="text-violet-600 font-bold text-sm hover:underline tracking-tight">View All</button>
                                </div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <!-- Item 1 -->
                                    <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                                        <div class="w-full h-44 rounded-xl overflow-hidden mb-5 relative">
                                            <img src="${assets.boba1}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                                        </div>
                                        <div class="flex justify-between items-start mb-2">
                                            <h4 class="font-black text-gray-900 text-lg leading-tight w-2/3 tracking-tight">M7 Crème Brûlée Boba Milk Tea</h4>
                                            <span class="font-black text-violet-600">$5.75</span>
                                        </div>
                                        <p class="text-gray-500 text-xs font-medium mb-6 flex-1 leading-relaxed">377 calories to 549 calories</p>
                                        <button onclick="navigateTo('order-details')" class="w-full py-3 rounded-full border-[1.5px] border-violet-200 text-violet-600 font-black text-sm uppercase hover:bg-violet-50 hover:border-violet-300 transition-colors active:scale-95 tracking-wide">+ Add to Order</button>
                                    </div>
                                    <!-- Item 2 -->
                                    <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                                        <div class="w-full h-44 rounded-xl overflow-hidden mb-5 relative">
                                            <img src="${assets.boba2}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                                        </div>
                                        <div class="flex justify-between items-start mb-2">
                                            <h4 class="font-black text-gray-900 text-lg leading-tight w-2/3 tracking-tight">M8 Taro Boba Purée Latte</h4>
                                            <span class="font-black text-violet-600">$5.75</span>
                                        </div>
                                        <p class="text-gray-500 text-xs font-medium mb-6 flex-1 leading-relaxed">Come With Fresh Taro Puree, Freshly Made Taro Boba</p>
                                        <button onclick="navigateTo('order-details')" class="w-full py-3 rounded-full border-[1.5px] border-violet-200 text-violet-600 font-black text-sm uppercase hover:bg-violet-50 hover:border-violet-300 transition-colors active:scale-95 tracking-wide">+ Add to Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- SIDEBAR COLUMN -->
                        <div class="${isDesktop ? 'w-[340px] shrink-0' : 'w-full'} space-y-6">
                            <!-- Rewards Card -->
                            <div class="bg-violet-50 rounded-2xl p-6 border border-violet-100 relative overflow-hidden">
                                <div class="flex items-center gap-4 mb-5 relative z-10">
                                    <div class="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-md">
                                        <i class="fa-solid fa-award text-xl"></i>
                                    </div>
                                    <div>
                                        <div class="text-violet-600 font-black text-sm tracking-tight uppercase">Gold Member</div>
                                        <div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">1,240 pts until next reward</div>
                                    </div>
                                </div>
                                <div class="w-full bg-violet-200/60 h-2 rounded-full overflow-hidden relative z-10">
                                    <div class="bg-violet-600 h-full w-[65%] rounded-full relative overflow-hidden">
                                        <div class="absolute inset-0 bg-white/20 w-full h-full skew-x-12 -translate-x-1/2"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Reorder Favorites -->
                            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div class="flex justify-between items-center mb-6">
                                    h3 class="font-black text-gray-900 tracking-tight text-lg">Reorder Favorites</h3>
                                    <button class="text-violet-600 font-bold text-xs hover:underline tracking-tight">See All</button>
                                </div>
                                <div class="space-y-5 mb-6">
                                    <!-- Fav 1 -->
                                    <div class="flex items-center justify-between group">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0"><img src="${assets.boba3}" class="w-full h-full object-cover"></div>
                                            <div>
                                                <div class="font-black text-sm text-gray-900 leading-tight w-40 truncate">P1 Super Fruit Tea</div>
                                                <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">Last ordered: 3 days ago</div>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('order-details')" class="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-md transition-transform active:scale-95"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                    <!-- Fav 2 -->
                                    <div class="flex items-center justify-between group">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0"><img src="${assets.boba4}" class="w-full h-full object-cover"></div>
                                            <div>
                                                <div class="font-black text-sm text-gray-900 leading-tight w-40 truncate">P2 Super Lime Sijichun</div>
                                                <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">Last ordered: 1 week ago</div>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('order-details')" class="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-md transition-transform active:scale-95"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                    <!-- Fav 3 -->
                                    <div class="flex items-center justify-between group">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0"><img src="${assets.boba1}" class="w-full h-full object-cover"></div>
                                            <div>
                                                <div class="font-black text-sm text-gray-900 leading-tight w-40 truncate">P3 Super Grapefruit</div>
                                                <div class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wide">Last ordered: Yesterday</div>
                                            </div>
                                        </div>
                                        <button onclick="navigateTo('order-details')" class="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 shadow-md transition-transform active:scale-95"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                </div>
                                <button class="w-full py-3 rounded-full bg-gray-50 text-gray-800 font-black text-sm hover:bg-gray-100 transition-colors">Manage Favorites</button>
                            </div>

                            <!-- Promo Card -->
                            <div class="bg-[#0b132b] rounded-2xl p-6 relative overflow-hidden text-white shadow-xl">
                                <i class="fa-solid fa-tag absolute -right-3 -top-3 text-7xl text-white/5 rotate-12"></i>
                                <h3 class="font-black text-xl tracking-tight mb-2 relative z-10">Free Delivery</h3>
                                <p class="text-xs text-blue-100/80 font-medium mb-5 relative z-10 leading-relaxed pr-6">On orders over $35. Valid for your next 3 orders.</p>
                                <div class="text-[11px] font-black text-violet-500 uppercase tracking-widest relative z-10">CODE: BITESFREE35</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer Area -->
                    <div class="mt-16 pt-10 border-t border-gray-200">
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                            <div class="col-span-2 md:col-span-1">
                                <div class="font-black text-violet-600 text-xl tracking-tighter italic mb-4 flex items-center"><i class="fa-solid fa-mug-hot mr-2 text-lg"></i>BOB'S BOBA TEA</div>
                                <p class="text-xs text-gray-500 font-medium leading-relaxed max-w-xs">Delicious drinks and meals delivered straight to your doorstep.</p>
                            </div>
                            <div>
                                <h4 class="font-black text-gray-900 mb-4 text-sm tracking-tight">Explore</h4>
                                <ul class="space-y-3 text-xs text-gray-500 font-bold">
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Menu</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Locations</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Gift Cards</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Nutrition</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-black text-gray-900 mb-4 text-sm tracking-tight">Support</h4>
                                <ul class="space-y-3 text-xs text-gray-500 font-bold">
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Contact Us</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Help Center</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Feedback</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Accessibility</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-black text-gray-900 mb-4 text-sm tracking-tight">Legal</h4>
                                <ul class="space-y-3 text-xs text-gray-500 font-bold">
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" class="hover:text-violet-600 transition-colors">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col-reverse md:flex-row justify-between items-center pt-6 border-t border-gray-100 text-[11px] text-gray-400 font-medium gap-4">
                            <p>© 2026 Bob's Boba Tea Inc. All rights reserved.</p>
                            <div class="flex gap-5 text-gray-400">
                                <i class="fa-solid fa-award text-lg hover:text-violet-600 transition-colors cursor-pointer"></i>
                                <i class="fa-regular fa-star text-lg hover:text-violet-600 transition-colors cursor-pointer"></i>
                                <i class="fa-regular fa-envelope text-lg hover:text-violet-600 transition-colors cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    },
    'order-details': () => {
        const isDesktop = currentViewport === 'desktop';
        const basePrice = 5.75;
        const totalPrice = (basePrice * mockupState.itemQuantity).toFixed(2);
        const content = `
                <div class="${isDesktop ? 'modal-content max-w-xl p-0 overflow-hidden' : 'flex flex-col h-full bg-white'}">
                    ${!isDesktop ? `
                    <header class="bg-white px-6 py-4 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-50">
                        <button onclick="navigateTo('menu')" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 rounded-full transition-colors shrink-0"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                        <h1 class="text-xl font-black tracking-tight uppercase italic text-gray-900 flex-1 text-center">Customize Item</h1>
                        <div class="w-10"></div>
                    </header>` : ''}

                    <div id="order-details-scroller" class="flex-1 overflow-y-auto scrollbar-hide">
                        <!-- Header / Modal Top -->
                        <div class="relative ${isDesktop ? 'bg-violet-600 p-4 text-white flex justify-between items-center' : 'hidden'}">
                            h2 class="font-black uppercase italic tracking-tight">Order Details</h2>
                            <button onclick="navigateTo('menu')" class="text-white hover:opacity-70"><i class="fa-solid fa-xmark text-xl"></i></button>
                        </div>

                        <!-- Item Banner Image -->
                        <div class="w-full h-64 sm:h-80 overflow-hidden relative">
                            <img src="${assets.boba3}" class="w-full h-full object-cover">
                        </div>

                        <!-- Info & Price -->
                        <div class="p-6 text-center border-b border-gray-100">
                            <div class="text-2xl font-black text-gray-900 tracking-tight mb-1">$5.75</div>
                            <h3 class="text-xl font-black text-violet-600 uppercase tracking-tighter leading-tight mb-2">MB Taro Boba Purée Latte</h3>
                            <p class="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed px-4">Come with fresh taro purée, freshly made taro boba</p>
                        </div>

                        <!-- Customization Sections -->
                        <div class="p-6 space-y-8">
                            <!-- Quantity -->
                            <div class="flex justify-between items-center">
                                <span class="text-xs font-black text-gray-400 uppercase tracking-widest">Quantity</span>
                                <div class="flex items-center bg-gray-50 rounded-full border border-gray-100 px-4 py-2 gap-6 shadow-sm">
                                    <button onclick="updateMockupState('itemQuantity', Math.max(1, mockupState.itemQuantity - 1))" class="text-gray-400 hover:text-gray-900 transition-colors"><i class="fa-solid fa-minus"></i></button>
                                    <span class="font-black text-gray-900 min-w-[20px] text-center">${mockupState.itemQuantity}</span>
                                    <button onclick="updateMockupState('itemQuantity', mockupState.itemQuantity + 1)" class="text-gray-400 hover:text-violet-600 transition-colors"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>

                            <!-- Options Grid from Image -->
                            <div class="space-y-6">
                                <!-- Sugar Level -->
                                <div>
                                    <div class="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
                                        <span class="text-xs font-black text-violet-600 uppercase tracking-widest italic">Sugar Level</span>
                                        <i class="fa-solid fa-chevron-up text-[10px] text-gray-400"></i>
                                    </div>
                                    <div class="space-y-3">
                                        ${['SUGAR 0%', 'SUGAR 30%', 'SUGAR 50%', 'SUGAR 80%', 'SUGAR 100%'].map(lvl => `
                                            <button onclick="updateMockupState('sugarLevel', '${lvl}')" class="w-full flex justify-between items-center group">
                                                <span class="text-sm font-black text-gray-700 uppercase tracking-tight">${lvl}</span>
                                                <div class="w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${mockupState.sugarLevel === lvl ? 'border-violet-600 bg-violet-600 text-white' : 'border-gray-200 group-hover:border-violet-300'}">
                                                    ${mockupState.sugarLevel === lvl ? '<i class="fa-solid fa-check text-[10px]"></i>' : ''}
                                                </div>
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>

                                <!-- Extra Toppings -->
                                <div>
                                    <div class="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
                                        <span class="text-xs font-black text-violet-600 uppercase tracking-widest italic">Extra Toppings</span>
                                        <i class="fa-solid fa-chevron-up text-[10px] text-gray-400"></i>
                                    </div>
                                    <div class="space-y-3">
                                        ${[
                { name: 'AGAR BOBA', price: '+$0.75' },
                { name: 'ALMOND MILK', price: '+$0.75' },
                { name: 'ALOE VERA', price: '+$0.50' },
                { name: 'BOBA', price: '+$0.00' },
                { name: 'CHIA SEED', price: '+$0.00' }
            ].map(t => `
                                            <div class="w-full flex justify-between items-center">
                                                <div class="flex flex-col text-left">
                                                    <span class="text-sm font-black text-gray-700 uppercase tracking-tight">${t.name}</span>
                                                    <span class="text-[10px] font-bold text-gray-400">${t.price}</span>
                                                </div>
                                                <button class="w-8 h-8 rounded-full bg-gray-50 text-gray-400 border border-gray-100 flex items-center justify-center hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all"><i class="fa-solid fa-plus text-xs"></i></button>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>

                                <!-- Cup Option -->
                                <div>
                                    <div class="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
                                        <span class="text-xs font-black text-violet-600 uppercase tracking-widest italic">Cup Option</span>
                                        <i class="fa-solid fa-chevron-up text-[10px] text-gray-400"></i>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <div class="flex flex-col text-left">
                                            <span class="text-sm font-black text-gray-700 uppercase tracking-tight">SPLIT CUP</span>
                                            <span class="text-[10px] font-bold text-gray-400">+$1.00</span>
                                        </div>
                                        <button class="w-8 h-8 rounded-full bg-gray-50 text-gray-400 border border-gray-100 flex items-center justify-center hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all"><i class="fa-solid fa-plus text-xs"></i></button>
                                    </div>
                                </div>

                                <!-- Special Instructions -->
                                <div>
                                    <div class="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Special Order Instructions (Max 25 Characters)</div>
                                    <textarea maxlength="25" placeholder="Ex. Less ice, no boba" class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm font-medium outline-none focus:border-violet-300 resize-none h-20"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sticky Bottom Actions -->
                    <div class="p-6 bg-white border-t border-gray-100 shrink-0 sticky bottom-0 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.02)] space-y-3">
                        <button onclick="navigateTo('cart')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider italic">Add to Cart - $${totalPrice}</button>
                        <button onclick="navigateTo('menu')" class="w-full text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition-colors py-2">Cancel</button>
                    </div>
                </div>
            `;

        return isDesktop ? `<div class="modal-overlay">${content}</div>` : content;
    },
    'cart': () => {
        const bagFee = (mockupState.bagQuantity * 0.10);
        const subtotal = 19.00;
        const taxes = 2.45;
        const finalTotal = (subtotal + taxes + bagFee).toFixed(2);

        const selectionNotMade = mockupState.bagQuantity === 0 && !mockupState.noBagsSelected;
        const paymentAction = selectionNotMade ? `updateMockupState('modalOpen', 'bag-alert')` : `navigateTo('payment')`;

        return `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-6 py-4 flex items-center justify-between shadow-sm z-50 shrink-0 sticky top-0">
                    <button onclick="navigateTo('restaurant-homepage')" class="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 rounded-full transition-colors shrink-0"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase italic text-gray-900 flex-1 text-center">Your Order</h1>
                    <button class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 rounded-full transition-colors shrink-0">
                        <i class="fa-solid fa-bag-shopping text-xl"></i>
                        <span class="absolute top-1 right-1 w-4 h-4 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white box-content box-border">2</span>
                    </button>
                </header>
                <div id="cart-scroller" class="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide pb-32">
                    
                    <!-- Order Details Card -->
                    <div class="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-3 shrink-0">
                        <div class="flex justify-between items-start">
                            <div class="flex gap-3">
                                <i class="fa-solid fa-location-dot text-violet-600 mt-1 text-lg"></i>
                                <div>
                                    <h3 class="font-black text-[#33424A] text-lg uppercase tracking-tight leading-tight">Bob's Boba Tea</h3>
                                    <p class="text-[13px] font-medium text-gray-500 mt-0.5">4728 E Ray Rd, Phoenix, AZ 85044</p>
                                </div>
                            </div>
                            <button onclick="navigateTo('location-selection')" class="text-[#354E57] font-black text-[11px] uppercase tracking-wide border-b-[1.5px] border-dashed border-[#354E57] pb-0.5 mt-1 shrink-0 hover:opacity-70 transition-opacity">CHANGE</button>
                        </div>
                        
                        <div class="h-px w-full bg-gray-200/80 my-1"></div>
                        
                        <div class="flex flex-col gap-3">
                            <div class="flex justify-between items-center">
                                <div class="flex gap-3 items-center">
                                    <i class="fa-solid fa-bag-shopping text-violet-600 w-4 text-center text-sm"></i>
                                    <span class="text-[13px] font-medium text-gray-500">Order Type: <span class="font-bold text-gray-700 italic ml-1">${mockupState.fulfillmentMode}</span></span>
                                </div>
                                <button onclick="navigateTo('bobs-fulfillment-select')" class="text-[#354E57] font-black text-[11px] uppercase tracking-wide border-b-[1.5px] border-dashed border-[#354E57] pb-0.5 shrink-0 hover:opacity-70 transition-opacity">CHANGE</button>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex gap-3 items-center">
                                    <i class="fa-regular fa-clock text-violet-600 w-4 text-center text-sm"></i>
                                    <span class="text-[13px] font-medium text-gray-500">Order Time: <span class="font-bold text-gray-700 italic ml-1">${mockupState.orderTime === 'Later' ? mockupState.selectedDay + ' @ ' + mockupState.selectedTimeSlot : mockupState.orderTime}</span></span>
                                </div>
                                <button onclick="navigateTo('bobs-fulfillment-select')" class="text-[#354E57] font-black text-[11px] uppercase tracking-wide border-b-[1.5px] border-dashed border-[#354E57] pb-0.5 shrink-0 hover:opacity-70 transition-opacity">CHANGE</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">For: Mike</h2>
                        <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 divide-y divide-gray-100">
                            <!-- Item 1 -->
                            <div class="flex justify-between items-start pb-5 mb-5">
                                <div class="flex gap-4 items-center">
                                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 cursor-pointer" onclick="navigateTo('order-details')"><img src="${assets.boba2}" class="w-full h-full object-cover"></div>
                                    <div>
                                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm leading-tight cursor-pointer" onclick="navigateTo('order-details')">Brown Sugar Pearl</h3>
                                        <p class="text-[11px] text-gray-500 font-medium mb-3 cursor-pointer line-clamp-2 hover:text-gray-700 transition-colors leading-relaxed" onclick="this.classList.toggle('line-clamp-2')" title="Click to expand/collapse customizations">Large, Less Ice, Extra Boba, Oat Milk, 50% Sweetness, No Foam, Double Pearl, Less Sweet, Extra Ice, Cheese Foam, Lychee Jelly</p>
                                        
                                        <!-- Quantity Selector Pill -->
                                        <div class="flex items-center bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-50 px-3 py-1.5 gap-5 w-fit">
                                            <button class="text-gray-900 hover:text-red-500 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-[13px]"></i></button>
                                            <span class="font-black text-[13px] text-gray-900 min-w-[8px] text-center">1</span>
                                            <button class="text-gray-900 hover:text-violet-600 transition-colors active:scale-90"><i class="fa-solid fa-plus text-[13px]"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="font-black text-gray-900">$6.50</span>
                                </div>
                            </div>
                            <!-- Item 2 -->
                            <div class="flex justify-between items-start pt-5">
                                <div class="flex gap-4 items-center">
                                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 cursor-pointer" onclick="navigateTo('order-details')"><img src="${assets.boba1}" class="w-full h-full object-cover"></div>
                                    <div>
                                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm leading-tight cursor-pointer" onclick="navigateTo('order-details')">Protein Bowl</h3>
                                        <p class="text-xs text-gray-500 font-medium mb-3">Extra Chicken</p>
                                        
                                        <!-- Quantity Selector Pill -->
                                        <div class="flex items-center bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-50 px-3 py-1.5 gap-5 w-fit">
                                            <button class="text-gray-900 hover:text-red-500 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-[13px]"></i></button>
                                            <span class="font-black text-[13px] text-gray-900 min-w-[8px] text-center">1</span>
                                            <button class="text-gray-900 hover:text-violet-600 transition-colors active:scale-90"><i class="fa-solid fa-plus text-[13px]"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="font-black text-gray-900">$12.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button onclick="navigateTo('menu')" class="w-full bg-transparent border-2 border-violet-600 text-violet-600 py-3.5 rounded-xl font-black text-sm shadow-sm hover:bg-violet-50 active:scale-95 transition-all uppercase tracking-wider italic flex items-center justify-center gap-2 shrink-0">
                        <i class="fa-solid fa-plus"></i> Add another menu item
                    </button>

                    <!-- You May Also Like Carousel -->
                    <div class="shrink-0">
                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm mb-3 px-1">You May Also Like</h3>
                        <div class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
                            <!-- Suggestion 1 -->
                            <div class="snap-center shrink-0 w-[140px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                                <div class="h-24 relative cursor-pointer" onclick="navigateTo('order-details')"><img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover"></div>
                                <div class="p-3 text-left">
                                    <h4 class="text-xs font-black text-gray-900 uppercase tracking-tight truncate cursor-pointer" onclick="navigateTo('order-details')">Matcha Cookie</h4>
                                    <div class="flex justify-between items-center mt-2">
                                        <span class="text-sm font-black text-violet-600">$3.00</span>
                                        <button onclick="navigateTo('order-details')" class="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center hover:bg-violet-200 active:scale-95 transition-transform"><i class="fa-solid fa-plus text-[10px]"></i></button>
                                    </div>
                                </div>
                            </div>
                            <!-- Suggestion 2 -->
                            <div class="snap-center shrink-0 w-[140px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                                <div class="h-24 relative cursor-pointer" onclick="navigateTo('order-details')"><img src="${assets.boba4}" class="w-full h-full object-cover"></div>
                                <div class="p-3 text-left">
                                    <h4 class="text-xs font-black text-gray-900 uppercase tracking-tight truncate cursor-pointer" onclick="navigateTo('order-details')">Matcha Latte</h4>
                                    <div class="flex justify-between items-center mt-2">
                                        <span class="text-sm font-black text-violet-600">$5.50</span>
                                        <button onclick="navigateTo('order-details')" class="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center hover:bg-violet-200 active:scale-95 transition-transform"><i class="fa-solid fa-plus text-[10px]"></i></button>
                                    </div>
                                </div>
                            </div>
                            <!-- Suggestion 3 -->
                            <div class="snap-center shrink-0 w-[140px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                                <div class="h-24 relative cursor-pointer" onclick="navigateTo('order-details')"><img src="${assets.boba3}" class="w-full h-full object-cover"></div>
                                <div class="p-3 text-left">
                                    <h4 class="text-xs font-black text-gray-900 uppercase tracking-tight truncate cursor-pointer" onclick="navigateTo('order-details')">Taro Milk Tea</h4>
                                    <div class="flex justify-between items-center mt-2">
                                        <span class="text-sm font-black text-violet-600">$6.00</span>
                                        <button onclick="navigateTo('order-details')" class="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center hover:bg-violet-200 active:scale-95 transition-transform"><i class="fa-solid fa-plus text-[10px]"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bag Selection (California Compliance) -->
                    <div class="shrink-0 bg-violet-50 rounded-2xl p-4 border border-violet-100 flex flex-col gap-4">
                        <div class="flex justify-between items-start">
                            <div class="flex-1 pr-4">
                                <h3 class="text-sm font-black text-gray-900 uppercase tracking-tight leading-tight">Do you need plastic bag(s)? <span class="text-red-600">*</span></h3>
                                <p class="text-[10px] font-bold text-gray-500 italic mt-0.5">10 cents for each bag</p>
                            </div>
                            <div class="flex items-center bg-white rounded-full shadow-sm border border-gray-50 px-3 py-1.5 gap-4">
                                <button onclick="mockupState.noBagsSelected = false; updateMockupState('bagQuantity', Math.max(0, mockupState.bagQuantity - 1))" class="text-gray-900 hover:text-red-500 transition-colors"><i class="fa-solid fa-minus text-xs"></i></button>
                                <span class="font-black text-sm text-gray-900 min-w-[12px] text-center">${mockupState.bagQuantity}</span>
                                <button onclick="mockupState.noBagsSelected = false; updateMockupState('bagQuantity', mockupState.bagQuantity + 1)" class="text-gray-900 hover:text-violet-600 transition-colors"><i class="fa-solid fa-plus text-xs"></i></button>
                            </div>
                        </div>
                        
                        <div class="flex gap-2">
                            <button onclick="mockupState.bagQuantity = 0; updateMockupState('noBagsSelected', true);" 
                                    class="flex-1 py-2 px-3 rounded-lg border-2 text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${mockupState.noBagsSelected ? 'bg-violet-600 text-white border-violet-600 shadow-md' : 'bg-white text-gray-400 border-gray-100 hover:border-violet-200'}">
                                <i class="fa-solid ${mockupState.noBagsSelected ? 'fa-circle-check' : 'fa-circle-dot'}"></i>
                                No plastic bags needed
                            </button>
                        </div>
                    </div>
                    
                    <!-- Pricing Summary -->
                    <div class="mt-auto bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-3 shrink-0">
                        <div class="flex justify-between text-sm font-bold text-gray-600"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
                        <div class="flex justify-between text-sm font-bold text-gray-600"><span>Taxes & Fees</span><span>$${taxes.toFixed(2)}</span></div>
                        ${mockupState.bagQuantity > 0 ? `<div class="flex justify-between text-sm font-bold text-gray-600"><span>Plastic Bag(s)</span><span>$${bagFee.toFixed(2)}</span></div>` : ''}
                        <div class="h-px bg-gray-200 w-full my-2"></div>
                        <div class="flex justify-between text-lg font-black text-gray-900 uppercase italic"><span>Total</span><span>$${finalTotal}</span></div>
                    </div>
                </div>

                <!-- Floating Checkout Button -->
                <button onclick="${paymentAction}" class="absolute bottom-8 right-6 bg-violet-600 text-white px-8 py-4 rounded-full font-black text-lg shadow-[0_12px_40px_-5px_rgba(124,58,237,0.5)] z-[60] active:scale-95 transition-all uppercase tracking-wider italic">
                    Checkout $${finalTotal}
                </button>

                <!-- Bag Alert Modal -->
                ${mockupState.modalOpen === 'bag-alert' ? `
                <div class="modal-overlay z-[200]">
                    <div class="bg-white w-[90%] max-w-[400px] rounded-3xl text-center p-8 relative shadow-2xl">
                        <div class="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fa-solid fa-shopping-bag text-3xl"></i>
                        </div>
                        <h2 class="text-2xl font-black text-gray-900 uppercase italic mb-3">Wait! One Last Thing</h2>
                        <p class="text-gray-500 font-medium mb-8 leading-relaxed">California law requires us to confirm if you need plastic bags for your order. Please select an option before continuing.</p>
                        
                        <div class="flex flex-col items-center gap-6">
                            <!-- Integrated Quantity Selector (Static Styling for no flicker) -->
                            <div class="flex items-center bg-gray-50 rounded-full border border-gray-100 px-6 py-3 gap-8 shadow-sm">
                                <button onclick="mockupState.noBagsSelected = false; updateMockupState('bagQuantity', Math.max(0, mockupState.bagQuantity - 1))" class="text-gray-900 hover:text-red-500 transition-colors"><i class="fa-solid fa-minus text-xs"></i></button>
                                <span class="font-black text-xl text-gray-900 min-w-[24px] text-center">${mockupState.bagQuantity}</span>
                                <button onclick="mockupState.noBagsSelected = false; updateMockupState('bagQuantity', mockupState.bagQuantity + 1)" class="text-gray-900 hover:text-violet-600 transition-colors"><i class="fa-solid fa-plus text-xs"></i></button>
                            </div>
                            
                            <div class="w-full space-y-3">
                                ${mockupState.bagQuantity > 0 ?
                    `<button onclick="mockupState.modalOpen = null; navigateTo('payment');" class="w-full bg-violet-600 text-white py-4 rounded-full font-black uppercase italic tracking-wide active:scale-95 transition-all shadow-md">Continue with ${mockupState.bagQuantity} bag(s)</button>` :
                    `<button onclick="mockupState.modalOpen = null; mockupState.noBagsSelected = true; navigateTo('payment');" class="w-full bg-violet-600 text-white py-4 rounded-full font-black uppercase italic tracking-wide active:scale-95 transition-all shadow-md">I don't need bags</button>`
                }
                            </div>
                        </div>
                    </div>
                </div>` : ''}

            </div>`;
    },
    'search': () => `<div class="p-10 text-center uppercase font-black font-2xl italic">Search View</div>`,
    'genre': () => `<div class="p-10 text-center uppercase font-black font-2xl italic">Browse Genre</div>`,
    'my-account': () => `<div class="p-10 text-center uppercase font-black italic h-full flex flex-col items-center justify-center"><h1>My Account</h1><button onclick="navigateTo('home')" class="underline mt-4">Logout</button></div>`,
    'status': () => `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0">
                    <button onclick="navigateTo('home')" class="w-10 h-10 flex items-center justify-center text-gray-700 mr-4"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase italic text-gray-900">Order Status</h1>
                </header>
                
                <div class="flex-1 overflow-y-auto p-6 space-y-6">
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                        <h2 class="text-3xl font-black text-gray-900 uppercase tracking-tighter italic mb-1">Preparing</h2>
                        <p class="text-sm font-bold text-gray-500">Estimated pickup at 12:45 PM</p>
                    </div>

                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
                        <!-- Vertical line connecting steps -->
                        <div class="absolute left-[39px] top-10 bottom-10 w-0.5 bg-gray-200 z-0"></div>
                        
                        <div class="space-y-8 relative z-10">
                            <!-- Step 1: Received (Completed) -->
                            <div class="flex gap-4 items-center opacity-50">
                                <div class="w-10 h-10 rounded-full bg-green-50 text-white flex items-center justify-center shrink-0 shadow-md">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <div>
                                    <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Order Received</h3>
                                    <p class="text-xs text-gray-500 font-medium">12:30 PM</p>
                                </div>
                            </div>
                            <!-- Step 2: Preparing (Active) -->
                            <div class="flex gap-4 items-center">
                                <div class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md ring-4 ring-red-100">
                                    <i class="fa-solid fa-fire-burner"></i>
                                </div>
                                <div>
                                    <h3 class="font-black text-red-600 uppercase tracking-tight text-sm">Preparing Food</h3>
                                    <p class="text-xs text-gray-500 font-medium">Currently in the kitchen</p>
                                </div>
                            </div>
                            <!-- Step 3: Ready (Pending) -->
                            <div class="flex gap-4 items-center opacity-40">
                                <div class="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center shrink-0 border-2 border-white">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>
                                <div>
                                    <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm">Ready for Pickup</h3>
                                    <p class="text-xs text-gray-500 font-medium">Waiting for completion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm mb-3 border-b border-gray-100 pb-2">Order #FB-9824</h3>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm font-bold text-gray-600">1x Brown Sugar Pearl</span>
                            <span class="text-sm font-black text-gray-900">$6.50</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm font-bold text-gray-600">1x Protein Bowl</span>
                            <span class="text-sm font-black text-gray-900">$12.50</span>
                        </div>
                    </div>
                </div>
                
                <div class="p-6 bg-white border-t border-gray-100 shrink-0 sticky bottom-0">
                    <button class="w-full bg-gray-100 text-gray-700 py-4 rounded-full font-black text-lg active:scale-95 transition-all uppercase tracking-wider italic flex justify-center items-center gap-2">
                        <i class="fa-solid fa-phone"></i> Contact Store
                    </button>
                </div>
            </div>`,
    'register': () => `<div class="p-10 text-center uppercase font-black italic">Registration</div>`,
    'login': () => `<div class="p-10 text-center uppercase font-black italic">Login View</div>`,
    'privacy': () => `<div class="p-10 text-center uppercase font-black italic">Privacy Policy</div>`,
    'confirmation': () => `
            <div class="flex flex-col h-full bg-white relative items-center justify-center p-8 text-center">
                <div class="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
                    <i class="fa-solid fa-check text-5xl"></i>
                </div>
                <h1 class="text-4xl font-black text-gray-900 uppercase tracking-tighter italic mb-2">Order Confirmed!</h1>
                <p class="text-gray-500 font-medium mb-8">Your order #FB-9824 is being sent to the kitchen.</p>
                
                <div class="bg-gray-50 w-full rounded-2xl p-6 mb-8 border border-gray-100">
                    <div class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Prep Time</div>
                    <div class="text-3xl font-black text-gray-900 uppercase italic">10-15 Mins</div>
                </div>

                <div class="w-full space-y-4">
                    <button onclick="navigateTo('status')" class="w-full bg-red-600 text-white py-4 rounded-full font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider italic">Track Order</button>
                    <button onclick="navigateTo('home')" class="w-full bg-white border-2 border-gray-100 text-gray-700 py-4 rounded-full font-black text-lg active:scale-95 transition-all uppercase tracking-wider italic hover:bg-gray-50">Back to Home</button>
                </div>
            </div>`,
    'payment': () => `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0">
                    <button onclick="navigateTo('cart')" class="w-10 h-10 flex items-center justify-center text-gray-700 mr-4"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase italic text-gray-900">Payment</h1>
                </header>
                <div id="payment-scroller" class="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    <h2 class="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Payment Method</h2>
                    
                    <div class="space-y-3">
                        <!-- Credit or Debit Card Option -->
                        <div onclick="updateMockupState('paymentMethod', 'card')" class="bg-white rounded-2xl p-4 shadow-sm border-2 flex items-center justify-between cursor-pointer transition-all ${mockupState.paymentMethod === 'card' ? 'border-violet-600' : 'border-gray-100'}">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-credit-card text-2xl text-gray-400"></i>
                                <div>
                                    <span class="font-black text-gray-900 uppercase text-sm block">Credit or Debit Card</span>
                                    <div class="flex gap-2 mt-1 opacity-60">
                                        <i class="fa-brands fa-cc-visa text-xs"></i>
                                        <i class="fa-brands fa-cc-mastercard text-xs"></i>
                                        <i class="fa-brands fa-cc-amex text-xs"></i>
                                        <i class="fa-brands fa-cc-discover text-xs"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="w-5 h-5 rounded-full border-4 transition-all ${mockupState.paymentMethod === 'card' ? 'border-violet-600 bg-white' : 'border-gray-200 bg-white'}"></div>
                        </div>

                        <!-- Apple Pay Option -->
                        <div onclick="updateMockupState('paymentMethod', 'apple')" class="bg-white rounded-2xl p-4 shadow-sm border-2 flex items-center justify-between cursor-pointer transition-all ${mockupState.paymentMethod === 'apple' ? 'border-violet-600' : 'border-gray-100'}">
                            <div class="flex items-center gap-3">
                                <i class="fa-brands fa-apple text-2xl text-black"></i>
                                <span class="font-black text-gray-900 uppercase text-sm">Apple Pay</span>
                            </div>
                            <div class="w-5 h-5 rounded-full border-4 transition-all ${mockupState.paymentMethod === 'apple' ? 'border-violet-600 bg-white' : 'border-gray-200 bg-white'}"></div>
                        </div>

                        <!-- Gift Card Option -->
                        <div onclick="updateMockupState('paymentMethod', 'gift')" class="bg-white rounded-2xl p-4 shadow-sm border-2 flex items-center justify-between cursor-pointer transition-all ${mockupState.paymentMethod === 'gift' ? 'border-violet-600' : 'border-gray-100'}">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-gift text-2xl text-violet-400"></i>
                                <span class="font-black text-gray-900 uppercase text-sm">Gift Card</span>
                            </div>
                            <div class="w-5 h-5 rounded-full border-4 transition-all ${mockupState.paymentMethod === 'gift' ? 'border-violet-600 bg-white' : 'border-gray-200 bg-white'}"></div>
                        </div>

                        <!-- Loyalty Rewards Option -->
                        <div onclick="updateMockupState('paymentMethod', 'rewards')" class="bg-white rounded-2xl p-4 shadow-sm border-2 flex items-center justify-between cursor-pointer transition-all ${mockupState.paymentMethod === 'rewards' ? 'border-violet-600' : 'border-gray-100'}">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-award text-2xl text-amber-400"></i>
                                <div class="flex flex-col">
                                    <span class="font-black text-gray-900 uppercase text-sm">Loyalty Rewards</span>
                                    <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Available: $12.50</span>
                                </div>
                            </div>
                            <div class="w-5 h-5 rounded-full border-4 transition-all ${mockupState.paymentMethod === 'rewards' ? 'border-violet-600 bg-white' : 'border-gray-200 bg-white'}"></div>
                        </div>
                    </div>

                    ${mockupState.paymentMethod === 'card' ? `
                    <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mt-6 animate-[fadeIn_0.3s_ease-out]">
                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm mb-4">Card Details</h3>
                        <div class="space-y-4">
                            <div class="relative">
                                <input type="text" placeholder="Cardholder Name" value="Mike Smith" class="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl font-bold text-gray-700 outline-none focus:border-violet-600 transition-colors">
                            </div>
                            <div class="relative">
                                <input type="text" placeholder="Card Number" value="•••• •••• •••• 4242" class="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl font-bold text-gray-700 outline-none focus:border-violet-600 transition-colors">
                                <div class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1.5 opacity-40">
                                    <i class="fa-brands fa-cc-visa"></i>
                                    <i class="fa-brands fa-cc-mastercard"></i>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <input type="text" placeholder="MM/YY" value="12/26" class="w-1/2 bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl font-bold text-gray-700 outline-none focus:border-violet-600 transition-colors">
                                <input type="text" placeholder="CVC" value="•••" class="w-1/2 bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl font-bold text-gray-700 outline-none focus:border-violet-600 transition-colors">
                            </div>
                        </div>
                    </div>` : mockupState.paymentMethod === 'gift' ? `
                    <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mt-6 animate-[fadeIn_0.3s_ease-out]">
                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm mb-4">Redeem Gift Card</h3>
                        <div class="space-y-3">
                            <input type="text" placeholder="Gift Card Number" class="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl font-bold text-gray-700 outline-none focus:border-violet-600 transition-colors">
                            <button class="w-full bg-violet-600 text-white px-6 py-3 rounded-xl font-black uppercase text-sm tracking-widest active:scale-95 transition-transform shadow-sm">Apply Gift Card</button>
                        </div>
                    </div>` : mockupState.paymentMethod === 'rewards' ? `
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6 animate-[fadeIn_0.3s_ease-out]">
                        <h3 class="font-black text-gray-900 uppercase tracking-tight text-sm mb-4">Your Punch Card</h3>
                        <div class="bg-violet-50 rounded-2xl p-5 border border-violet-100">
                            <div class="grid grid-cols-5 gap-3 mb-6">
                                ${Array.from({ length: 10 }).map((_, i) => {
                                    let stampClass = 'bg-white border-violet-100 text-violet-100';
                                    if (i < 6) stampClass = 'bg-violet-600 border-violet-600 text-white shadow-sm';
                                    if (i === 6) stampClass = 'bg-emerald-500 border-emerald-500 text-white shadow-sm ring-2 ring-emerald-200'; // Newest stamp today
                                    return `
                                    <div class="aspect-square rounded-full border-2 flex items-center justify-center ${stampClass}">
                                        <i class="fa-solid fa-mug-hot text-lg"></i>
                                    </div>
                                    `;
                                }).join('')}
                            </div>
                            <div class="text-center">
                                <p class="text-xs font-black text-violet-600 uppercase tracking-widest mb-1 italic">3 More Bobas Left!</p>
                                <p class="text-[10px] text-gray-400 font-bold uppercase tracking-tighter leading-tight">You've earned 7 stamps. Collect 10 to receive a free regular drink of your choice.</p>
                            </div>
                        </div>
                        <button class="w-full mt-6 bg-gray-50 text-gray-400 py-3 rounded-xl font-black uppercase text-xs tracking-widest cursor-not-allowed">Apply Free Drink (Locked)</button>
                    </div>` : ''}
                </div>
                </div>

                <!-- Footer Action Buttons -->
                <div class="p-6 bg-white border-t border-gray-100 shrink-0 sticky bottom-0 z-50 flex justify-between gap-4">
                    <button onclick="navigateTo('cart')" class="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 shadow-sm transition-all active:scale-95 shrink-0 border border-gray-100"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                    <button onclick="navigateTo('confirmation')" class="flex-1 bg-violet-600 text-white rounded-xl font-black text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider italic">Purchase Order</button>
                </div>
            </div>`,
    'location-favorites': () => `
            <div class="flex flex-col h-full bg-[#f6f6f6] relative">
                <header class="bg-white px-6 py-4 flex items-center shadow-sm z-50 shrink-0 sticky top-0 border-b border-gray-100">
                    <button onclick="navigateTo('location-selection')" class="w-10 h-10 flex items-center justify-center text-gray-700 mr-4 hover:bg-gray-50 rounded-full transition-colors"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                    <h1 class="text-xl font-black tracking-tight uppercase italic text-gray-900 flex-1 text-center">Favorite Locations</h1>
                    <div class="w-10"></div>
                </header>
                <div class="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    <!-- Location 1 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-black text-gray-900 uppercase italic tracking-tight">McDowell Rd</h3>
                                <p class="text-xs text-gray-500 font-medium">8738 S. Emerald Dr</p>
                            </div>
                            <button class="text-red-500 hover:text-red-700 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-lg"></i></button>
                        </div>
                        
                        <div class="space-y-3">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Assign Label</p>
                            <div class="flex gap-2">
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Home</button>
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-gray-100 text-gray-400 bg-white">Work</button>
                            </div>
                            <div class="relative">
                                <input type="text" placeholder="Custom Label (e.g. Gym)" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-violet-300 transition-colors">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Instructions</p>
                            <textarea placeholder="Gate codes, floor number, drop-off spot..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs font-medium outline-none focus:border-violet-300 h-24 resize-none leading-relaxed"></textarea>
                        </div>
                    </div>

                    <!-- Location 2 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-black text-gray-900 uppercase italic tracking-tight">Camelback & Litchfield</h3>
                                <p class="text-xs text-gray-500 font-medium">13802 W Camelback Rd</p>
                            </div>
                            <button class="text-red-500 hover:text-red-700 transition-colors active:scale-90"><i class="fa-regular fa-trash-can text-lg"></i></button>
                        </div>
                        
                        <div class="space-y-3">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Assign Label</p>
                            <div class="flex gap-2">
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Home</button>
                                <button class="px-5 py-2 rounded-full text-[10px] font-black uppercase border-2 border-violet-600 bg-violet-600 text-white shadow-sm">Work</button>
                            </div>
                            <div class="relative">
                                <input type="text" placeholder="Custom Label" class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-violet-300 transition-colors">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Instructions</p>
                            <textarea placeholder="Delivery instructions for this location..." class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs font-medium outline-none focus:border-violet-300 h-24 resize-none leading-relaxed"></textarea>
                        </div>
                    </div>
                </div>
                <div class="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                    <button onclick="navigateTo('location-selection')" class="w-full bg-violet-600 text-white py-4 rounded-xl font-black uppercase italic tracking-wider shadow-lg active:scale-[0.98] transition-all">Save Changes</button>
                </div>
            </div>
        `
};



routes['bobs-boba-auth'] = routes['restaurant-homepage'];

function applyViewport() {
    const wrapper = document.getElementById('preview-wrapper');
    const canvas = document.getElementById('canvas');
    if (!wrapper || !canvas) return;

    wrapper.classList.remove('view-mobile', 'view-tablet', 'view-desktop');
    document.querySelectorAll('.btn-toggle').forEach(b => b.classList.remove('active'));
    wrapper.classList.add(`view-${currentViewport}`);

    const btn = document.getElementById(`btn-${currentViewport}`);
    if (btn) btn.classList.add('active');

    if (currentViewport === 'desktop') {
        canvas.classList.remove('justify-center');
        canvas.classList.add('p-0');
    } else {
        canvas.classList.add('justify-center');
        canvas.classList.add('p-10');
    }
}

function renderPage() {
    const label = document.getElementById('current-page-label');
    const items = document.querySelectorAll('.dropdown-item');
    items.forEach(item => {
        if ((item.getAttribute('onclick') || '').includes(`'${currentPage}'`)) {
            if (label) label.innerText = item.innerText.trim();
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    if (label && !label.innerText.trim()) {
        label.innerText = PAGE_LABELS[currentPage] || currentPage;
    }
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.remove('show');
    const viewport = document.getElementById('app-viewport');
    if (!viewport) return;
    viewport.innerHTML = routes[currentPage]
        ? routes[currentPage]()
        : `<div class="p-10 text-center uppercase font-black italic">404 - Page Not Found</div>`;
    viewport.scrollTop = 0;
    persistAllState();
    document.title = `FareBites – ${PAGE_LABELS[currentPage] || currentPage}`;
}

function updateMockupState(key, value) {
    mockupState[key] = value;
    persistAllState();

    const scroller = document.getElementById('order-details-scroller') ||
        document.getElementById('cart-scroller') ||
        document.getElementById('payment-scroller') ||
        document.querySelector('.overflow-y-auto') ||
        document.getElementById('app-viewport');

    const scrollPos = scroller ? scroller.scrollTop : 0;
    renderPage();

    const newScroller = document.getElementById('order-details-scroller') ||
        document.getElementById('cart-scroller') ||
        document.getElementById('payment-scroller') ||
        document.querySelector('.overflow-y-auto') ||
        document.getElementById('app-viewport');
    if (newScroller) newScroller.scrollTop = scrollPos;
}

function navigateTo(pageId) {
    persistAllState();
    if (pageId === currentPage) {
        renderPage();
        return;
    }
    const nextFile = PAGE_FILE_MAP[pageId] || `${pageId}.html`;
    window.location.href = nextFile;
}

function setViewport(size) {
    currentViewport = size;
    persistAllState();
    applyViewport();
    renderPage();
}

function renderDropdownMenu() {
    const menuHTML = `
        <div>
            <div class="dropdown-column-title">Core Flow</div>
            <div class="dropdown-item" onclick="navigateTo('landing-page')">FareBites Landing Page</div>
            <div class="dropdown-item" onclick="navigateTo('home')">FareBites Homepage (Logged In)</div>
            <div class="dropdown-item" onclick="navigateTo('home-auth')">Homepage (Sign In/Sign Up Modal)</div>
            <div class="dropdown-item" onclick="navigateTo('search')">Restaurant Search</div>
            <div class="dropdown-item" onclick="navigateTo('cart')">Cart / Review</div>
            <div class="dropdown-item" onclick="navigateTo('order-details')">Order Details (Customization)</div>
            <div class="dropdown-item" onclick="navigateTo('payment')">Payment Page</div>
            <div class="dropdown-item" onclick="navigateTo('confirmation')">Confirmation</div>
            <div class="dropdown-item" onclick="navigateTo('status')">Order Status</div>
        </div>
        <div>
            <div class="dropdown-column-title">Restaurant Pages</div>
            <div class="dropdown-item" onclick="navigateTo('restaurant-homepage')">Bob's Boba Homepage (Standard)</div>
            <div class="dropdown-item" onclick="navigateTo('bobs-boba-auth')">Bob's Boba (Sign In Sign Up)</div>
            <div class="dropdown-item" onclick="navigateTo('bobs-fulfillment-select')">Bob's Boba (Order Type Select)</div>
            <div class="dropdown-item" onclick="navigateTo('bobs-dine-in-instruction')">Bob's Boba (Dine-In Instruction)</div>
            <div class="dropdown-item" onclick="navigateTo('menu')">Restaurant Menu</div>
            <div class="dropdown-item" onclick="navigateTo('location-selection')">Location Selection</div>
            <div class="dropdown-item" onclick="navigateTo('location-favorites')">Location Favorites</div>
            <div class="dropdown-item" onclick="navigateTo('genre')">Browse by Genre</div>
        </div>
        <div>
            <div class="dropdown-column-title">Authentication & Account</div>
            <div class="dropdown-item" onclick="navigateTo('login')">Login (Phone)</div>
            <div class="dropdown-item" onclick="navigateTo('register')">Registration</div>
            <div class="dropdown-item" onclick="navigateTo('my-account')">My Account</div>
            <div class="dropdown-item" onclick="navigateTo('privacy')">Privacy Policy</div>
        </div>
        <div>
            <div class="dropdown-column-title">Merchant Portal</div>
            <div class="dropdown-item" onclick="navigateTo('merchant-dashboard')">Merchant Dashboard</div>
        </div>
    `;
    const menuContainer = document.getElementById('dropdown-menu');
    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    applyViewport();
    renderPage();
    renderDropdownMenu();
});
