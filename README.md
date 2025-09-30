#  API for Mobile App "My Habits"

**My Habits** is a mobile **React-native** habit‑tracking application supported by a custom backend API.  
The project demonstrates practical knowledge in **Networking Technologies** through the
use of core **HTTP methods** (`GET`, `POST`, `PUT`, `DELETE`), and **Status codes** (`200`, `400`, `500`) for CRUD operations,
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
    - `POST /habits` → Create new habit
    - `GET /habits` → Read habits list
    - `PUT /habits/:id` → Update habit
    - `DELETE /habits/:id` → Delete habit

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

| Method     | Endpoint               | Description                  | Request Body (JSON) Example                |
|------------|------------------------|------------------------------|--------------------------------------------|
| **POST**   | `/users/register`      | Register a new user          | `{ "username": "john", "email": "j@mail.com", "password": "secret123" }` |
| **POST**   | `/users/login`         | Authenticate & return token  | `{ "email": "j@mail.com", "password": "secret123" }` |
| **GET**    | `/habits`              | Get all habits for user      | –                                          |
| **POST**   | `/habits`              | Create a new habit           | `{ "name": "Drink Water", "frequency": "daily", "goal_value": 1 }` |
| **PUT**    | `/habits/:id`          | Update an existing habit     | `{ "name": "Read Books", "frequency": "daily", "goal_value": 2 }` |
| **DELETE** | `/habits/:id`          | Delete a habit               | –                                          |
| **GET**    | `/habits/:id/logs`     | Get all logs for a habit     | –                                          |
| **POST**   | `/habits/:id/logs`     | Add a log entry (mark done)  | `{ "log_date": "2025-09-29", "count": 1 }` |

---

## How I started the Express project

This backend was initialized using the official Express generator.

Steps I used to bootstrap the project:

1) Scaffold the app using the generator with EJS views
   - npx express-generator --view=ejs
   - (Alternative if installed globally): npx express-generator --view=ejs .

2) Install dependencies
   - npm install

3) Run the development server
   - npm start

The generator created the basic structure you see now:
- app.js, routes/, views/, public/

From there, I added routes and logic for the My Habits API,
based on the endpoints ***habits*** and ***users*** which I defined at the top of this README
