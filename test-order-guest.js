async function test() {
    const body = {
        orderType: "In-store",
        locationId: 7,
        restaurantId: 7,
        platformId: 1,
        tipAmount: 0,
        pickUpTime: null,
        isCustomTime: false,
        tableNum: null,
        isGuestUser: true,
        guestFirstName: "Guest",
        guestLastName: "User",
        guestPhoneNumber: "0000000000",
        guestEmailAddress: "guest@farebites.com",
        items: []
    };
    
    const res = await fetch('https://olowebapidev2.azurewebsites.net/api/CustomerOrder/guest?PlatformId=1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'PlatformId': '1'
        },
        body: JSON.stringify(body)
    });
    
    const text = await res.text();
    console.log("Status:", res.status);
    console.log("Response:", text);
}

test();
