# Task API

A simple CRUD REST API built with **Node.js, Express, and TypeScript**.

This project was built as part of my backend learning journey to understand how APIs work from the ground up, including HTTP methods, request/response handling, route parameters, validation, in-memory data, CRUD operations, and OpenAPI/Swagger documentation.

---

## 🚀 Tech Stack

- Node.js
- Express 5
- TypeScript
- Swagger UI
- OpenAPI 3.0
- curl
- Git & GitHub

---

## 📚 What I Learned

While building this project, I focused on understanding the concepts rather than using a generated API or framework boilerplate.

### Express & HTTP

- Creating an Express server
- Understanding the request → response cycle
- HTTP methods:
  - GET
  - POST
  - PUT
  - DELETE
- HTTP status codes:
  - 200 OK
  - 201 Created
  - 204 No Content
  - 400 Bad Request
  - 404 Not Found

### Express Concepts

- Routes and endpoints
- Route parameters using `:id`
- Reading route parameters with `req.params`
- Reading JSON request bodies with `req.body`
- `express.json()` middleware
- Returning JSON responses
- Input validation

### JavaScript / TypeScript

- Arrays of objects
- `find()`
- `findIndex()`
- `push()`
- `splice()`
- Arrow functions
- Working with objects and properties
- TypeScript types for Express requests and responses

### REST API Design

The project follows the basic CRUD pattern:

| Operation | HTTP Method | Endpoint |
|-----------|-------------|----------|
| Create | POST | `/tasks` |
| Read all | GET | `/tasks` |
| Read one | GET | `/tasks/:id` |
| Update | PUT | `/tasks/:id` |
| Delete | DELETE | `/tasks/:id` |

### API Documentation

- OpenAPI 3.0
- Swagger UI
- OpenAPI schemas
- Path parameters
- Request bodies
- Response descriptions
- `$ref` reusable schemas

---

## 📁 Project Structure

```text
to-do-app/
│
├── src/
│   ├── app.ts
│   └── openapi.ts
│
├── dist/
│   ├── app.js
│   └── openapi.js
│
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md