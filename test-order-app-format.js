async function test() {
    const body = {
        orderType: "In-store",
        locationId: 7,
        restaurantId: 7,
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
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    });
    
    const text = await res.text();
    console.log("Status:", res.status);
    console.log("Response:", text);
}

test();
