# REST API using CRUD Operations

This is a simple REST API built using Node.js and Express, implementing CRUD (Create, Read, Update, Delete) operations for managing user data. The API allows you to create, retrieve, update, and delete user records. The data is stored in-memory using a JavaScript array.

## Setup

1. Clone the repository and navigate to the project directory.
2. Install the required dependencies by running `npm install`.
3. Start the server by running `npm start`. The server will run on port 8000 by default.

## API Endpoints

### Create a User

- **URL:** `/users`
- **Method:** POST
- **Request Body:** JSON object containing user data

### Get All Users

- **URL:** `/users`
- **Method:** GET
- **Response:** Array of user objects

### Get a User by ID

- **URL:** `/users/:id`
- **Method:** GET
- **URL Parameters:** `id` (string) - The unique ID of the user
- **Response:** User object

### Update a User

- **URL:** `/users/:id`
- **Method:** PATCH
- **URL Parameters:** `id` (string) - The unique ID of the user to be updated
- **Request Body:** JSON object containing user data to be updated (any or all of firstname, lastname, age)

### Delete a User

- **URL:** `/users/:id`
- **Method:** DELETE
- **URL Parameters:** `id` (string) - The unique ID of the user to be deleted

## Response Format

All responses are in JSON format.

## Using Postman for Testing

1. Open Postman on your computer.

2. Use the provided examples or refer to the API endpoints section to construct requests.

3. Set the request URL to the appropriate endpoint, e.g., `http://localhost:8000/users`.

4. Choose the HTTP method (GET, POST, PATCH, DELETE).

5. If applicable, add a JSON request body for POST and PATCH.

6. Click "Send" to execute the request.

7. View the response with status code and JSON data.

8. Test all CRUD operations using Postman.

## Error Handling

The API handles basic error scenarios and provides appropriate error messages and status codes.


## Conclusion

This REST API provides basic CRUD operations for managing user data. You can use the provided endpoints to create, retrieve, update, and delete user records. Feel free to extend and customize the API according to your specific needs. Happy coding!

