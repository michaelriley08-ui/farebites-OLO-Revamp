async function test() {
    // 1. Register a new user to get a token
    const email = "test" + Date.now() + "@test.com";
    const regRes = await fetch('https://olowebapidev2.azurewebsites.net/api/Account/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: "Password123!",
            confirmPassword: "Password123!",
            firstName: "Test",
            lastName: "User",
            phoneNumber: "5551234567"
        })
    });
    
    // In Farebites, registration returns nothing, we need to login
    const loginRes = await fetch('https://olowebapidev2.azurewebsites.net/api/Account/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: "Password123!" })
    });
    
    let token = null;
    if (loginRes.ok) {
        const loginData = await loginRes.json();
        token = loginData.data?.token || loginData.token;
    }
    
    if (!token) {
        console.log("Failed to get token", await loginRes.text());
        return;
    }
    
    // 2. Place order
    const body = {
        orderType: "In-store",
        locationId: 7,
        restaurantId: 7,
        platformId: 1,
        tipAmount: 0,
        pickUpTime: null,
        isCustomTime: false,
        tableNum: null,
        isGuestUser: false,
        guestFirstName: "Guest",
        guestLastName: "User",
        guestPhoneNumber: "0000000000",
        guestEmailAddress: "guest@farebites.com",
        items: [{
            menuItemId: 1,
            quantity: 1,
            specialInstruction: null,
            subItems: [],
            subMenuChoices: []
        }]
    };
    
    const res = await fetch('https://olowebapidev2.azurewebsites.net/api/CustomerOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'PlatformId': '1',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    });
    
    const text = await res.text();
    console.log("Status:", res.status);
    console.log("Response:", text);
}

test();
