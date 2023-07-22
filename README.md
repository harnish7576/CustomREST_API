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

## Error Handling

The API handles basic error scenarios and provides appropriate error messages and status codes.

## Examples

You can use tools like Postman or `curl` to interact with the API and test the endpoints.

## Conclusion

This REST API provides basic CRUD operations for managing user data. You can use the provided endpoints to create, retrieve, update, and delete user records. Feel free to extend and customize the API according to your specific needs. Happy coding!

