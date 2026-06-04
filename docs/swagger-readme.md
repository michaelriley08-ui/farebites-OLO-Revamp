# API Documentation (Swagger)

This directory contains `swagger.json`, which is the OpenAPI (Swagger) specification for the backend `WebApiCore` that this frontend application communicates with.

### What the hell is this?
It is basically the instruction manual for your backend API. It describes all the available endpoints (e.g., `/api/Account/login`, `/api/CustomerOrder`), what data they require to work, and what responses they give back. 

### Why is it here?
It is extremely useful to keep around as a reference when you are building out the frontend. Whenever you need to make an API call in `api.js` and are unsure of the exact URL, the required payload, or the expected response, you can look up the endpoint in `swagger.json`. 

You can also drag and drop this file into a tool like [Swagger Editor](https://editor.swagger.io/) to view a clean, interactive, and human-readable web interface of the entire API.
