# Food Wagon - Backend 🍔

A simple node.js web server that fetches data from a third-party (Swiggy) API and exposes it to a client (food-wagon) app.

### API Endpoints

1. List all restaurants for the given location (lat & lng)

   - API Endpoint: `/api/restaurants`

   - HTTP Method: `GET`

   - Query Parameters:

     - `lat (required)` : latitude of the location to search for restaurants

     - `lng (required)` : longitude of the location to search for restaurants

   - Response Format: `JSON`

   - URL: `https://food-wagon-backend.onrender.com/api/restaurants?lat=:latquery&lng=:lngquery`

   - Example Request: `https://food-wagon-backend.onrender.com/api/restaurants?lat=26.9124336&lng=75.7872709`

   - Explanation : This API fetches the restaurant data for the given location from Swiggy API and exposes it to the clients. The response format of this API is same as Swiggy API endpoint.

2. List all menu items for the given restaurant Id (menuId)

   - API Endpoint: `/api/menu`

   - HTTP Method: `GET`

   - Query Parameters:

     - `lat` (required) : latitude of the location to search for restaurants.

     - `lng`(required) : longitude of the location to search for restaurants.

     - `menuId` (required): ID of the restaurant's menu.

   - Response Format: `JSON`

   - URL: `https://food-wagon-backend.onrender.com/api/restaurants?lat=:latquery&lng=:lngquery&menuId=:menuId`

   - Example Request: `https://food-wagon-backend.onrender.com/api/menu?lat=26.9124336&lng=75.7872709&restaurantId=45607`

   - Explanation : This API fetches the restaurant menu data in json format for the given location and menu id from Swiggy API and exposes it to the clients. The response format of this API is same as Swiggy API endpoint.
