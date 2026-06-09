const orderData = {
    orderType: "In-store",
    locationId: 7,
    restaurantId: 7,
    tipAmount: 0,
    pickUpTime: null,
    isCustomTime: false,
    tableNum: null,
    isGuestUser: true,
    guestFirstName: "Test",
    guestLastName: "User",
    guestPhoneNumber: "1234567890",
    guestEmailAddress: "test@example.com",
    items: [
        {
            menuItemId: 110,
            quantity: 1,
            specialInstruction: null,
            subItems: [],
            subMenuChoices: []
        }
    ]
};

fetch('https://olowebapidev2.azurewebsites.net/api/CustomerOrder/guest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
}).then(res => res.json().then(data => ({status: res.status, data})))
  .then(console.log)
  .catch(console.error);
