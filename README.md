project-folder :-
│
├── controller/
│   └── authentication.js   # Logic for user registration, login, and user management
├── middleware/
│   └── authmiddleware.js    # Authentication middleware for protected routes
├── models/
│   └── schema.js         # Defines the schema for user data
├── routes/
│   └── route.js         # Defines routes for user authentication
├── config/
│   └── db.js                # Database configuration (MongoDB connection)
├── node_modules/            # Project dependencies (automatically generated)
├── package.json             # Lists dependencies and project configuration
└── index.js                 # Main entry point to start the server 


 API Endpoints:-

POST /api/register: Register a new user.
POST /api/login: Log in with existing credentials.
GET /api/userlist: Retrieve a list of users (requires authentication).
GET /api/search?country={countryName}: Search users by country.

port no :-
localhost 8900
