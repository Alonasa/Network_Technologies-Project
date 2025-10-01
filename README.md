# API for Mobile App "My Habits"

**My Habits** is a mobile **React-native** habit‑tracking application supported by a custom backend API.  
The project demonstrates practical knowledge in **Networking Technologies** through the
use of core **HTTP methods** (`GET`, `POST`, `PUT`, `DELETE`), and **Status codes** (`200`, `400`, `500`) for CRUD
operations,
combined with principles of **Database Design and Development**.

---

## Objectives

- Showcase implementation of a **RESTful API**.
- Apply **3rd Normal Form (3NF)** database design for efficient data storage.
- Secure **user authentication** with password encryption.
- Provide features to:
  - Create and manage personal habits.
  - Record daily progress.
  - Track history and habit streaks.

---

### API

- Built with **Express.js**.
- Uses **SQL database** for persistence.
- Communicates via **JSON**.
- Implements the classical CRUD operations:
  - `POST /habits-lists` → Create a new habit list
  - `GET /habits-lists` → Read habits list
  - `PUT /habits-lists/:id` → Update habits list
  - `DELETE /habits-lists/:id` → Delete habits list

### Security

- Passwords stored securely with **hashing**.
- Each user can access only their own data.

---

## Technologies

- **Git** – Version control
- **Node.js** (runtime environment)
- **JavaScript** – Backend logic
- **Express.js** – API framework
- **SQL** – Database management
- **JSON** – Data transfer format
- **Password Hashing** – Secure authentication
- **Swagger** - API documentation
- **Postman** – Checking API responses

---

## Workflow

1**Develop REST API** → implemented with Express.js.
2**Mobile Integration** → mobile client communicates with API using HTTP + JSON.

---

## API Endpoints

| Method     | Endpoint                      | Description                           | Request Body (JSON) Example                                                                                                                            |
| ---------- | ----------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **POST**   | `/users/register`             | Register a new user                   | `{ "name": "john", "email": "j@mail.com", "password": "secret123" }`                                                                                   |
| **POST**   | `/users/login`                | Authenticate & return token           | `{ "email": "j@mail.com", "password": "secret123", "remember_me": true }`                                                                              |
| **GET**    | `/habits-list`                | Get all habits lists for user         | –                                                                                                                                                      |
| **POST**   | `/habits-list`                | Create a new habit list               | `{ "user_id": 1, "status_id": 1, "priority_id": 1, "title": "Studying every day", "creation_date": "2025-09-29"}`                                      |
| **PUT**    | `/habits-list/:id`            | Update an existing habit list         | `{ "user_id": 1, "status_id": 1, "priority_id": 2, "title": "Finish semester", "creation_date": "2025-09-29" }`                                        |
| **DELETE** | `/habits-list/:id`            | Delete a habit list                   | `{ "list_id": 2 }`                                                                                                                                     |
| **GET**    | `/habits-list/:id/habits`     | Get all habits portion for habit-list | `{ "list_id": 2, count: 5, page: 2}`                                                                                                                   |
| **POST**   | `/habits-list/:id/habits`     | Create new habit in current list      | `{ "list_id": 1, "title": "Network Tecnologies", "description": "Make the end project", "creation_date": "2025-09-29", "deadline_date": "2025-12-25"}` |
| **PUT**    | `/habits-list/:id/habits/:id` | Update certain habit in certain list  | `{ "list_id": 1, "title": "Network Tecnologies", "description": "Make the end project", "creation_date": "2025-09-29", "deadline_date": "2025-12-25"}` |
| **DELETE** | `/habits-list/:id/habits/:id` | Delete certain habit in certain list  | `{ "list_id": 1, "habit_id": 1}`                                                                                                                       |

---

## How I started the Express project

This backend was initialized using the official Express generator.

Steps I used to bootstrap the project:

1. Scaffold the app using the generator with EJS views
   - npx express-generator --view=ejs
   - (Alternative if installed globally): npx express-generator --view=ejs .

2. Install dependencies
   - npm install

3. Run the development server
   - npm start

The generator created the basic structure you see now:

- app.js, routes/, views/, public/

From there, I added routes and logic for the My Habits API,
based on the endpoints **_habits_** and **_users_** which I defined at the top of this README
