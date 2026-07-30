async function test() {
    const payloads = [
        { name: "Lowercase platformId", body: { platformId: 1 } },
        { name: "Uppercase PlatformId", body: { PlatformId: 1 } },
        { name: "Both", body: { platformId: 1, PlatformId: 1 } },
        { name: "String platformId", body: { platformId: "1" } },
        { name: "None", body: {} }
    ];

    for (const p of payloads) {
        const body = {
            orderType: "In-store",
            locationId: 7,
            restaurantId: 7,
            tipAmount: 0,
            pickUpTime: null,
            isCustomTime: false,
            tableNum: null,
            isGuestUser: true,
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
            }],
            ...p.body
        };
        
        const res = await fetch('https://olowebapidev2.azurewebsites.net/api/CustomerOrder/guest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(body)
        });
        
        const text = await res.text();
        console.log(`[${p.name}] Status:`, res.status, "Response:", text.substring(0, 100));
    }
}
test();
