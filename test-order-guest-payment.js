async function test() {
    const payloads = [
        { name: "With platformId", body: { platformId: 1 } },
        { name: "Without platformId", body: {} }
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
            payments: [{
                paymentToken: "tok_visa",
                paymentMethodType: "Card",
                amount: 5.00
            }],
            ...p.body
        };
        
        const res = await fetch('https://olowebapidev2.azurewebsites.net/api/CustomerOrder/guest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(body)
        });
        
        const text = await res.text();
        console.log(`[${p.name}] Status:`, res.status, "Response:", text.substring(0, 150));
    }
}
test();
