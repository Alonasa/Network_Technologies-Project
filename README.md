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

## System Design

### Database
- Designed using **Crow’s Foot ERD notation**.
- Normalized to **3NF** to avoid redundancy.
- SQL `CREATE TABLE` queries are documented in **DB_TABLES.md**.

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

## ⚙️ Technologies
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

## 📊 Workflow
1. **Design ERD & Schema** → normalized to 3NF.
2. **Create SQL Tables** → see `DB_TABLES.md`.
3. **Develop REST API** → implemented with Express.js.
4. **Mobile Integration** → mobile client communicates with API using HTTP + JSON.

---

## 🔗 API Endpoints

| Method | Endpoint              | Description                  | Request Body (JSON) Example                |
|--------|-----------------------|------------------------------|--------------------------------------------|
| **POST**   | `/users/register`      | Register a new user          | `{ "username": "john", "email": "j@mail.com", "password": "secret123" }` |
| **POST**   | `/users/login`         | Authenticate & return token  | `{ "email": "j@mail.com", "password": "secret123" }` |
| **GET**    | `/habits`              | Get all habits for user      | –                                          |
| **POST**   | `/habits`              | Create a new habit           | `{ "name": "Drink Water", "frequency": "daily", "goal_value": 1 }` |
| **PUT**    | `/habits/:id`          | Update an existing habit     | `{ "name": "Read Books", "frequency": "daily", "goal_value": 2 }` |
| **DELETE** | `/habits/:id`          | Delete a habit               | –                                          |
| **GET**    | `/habits/:id/logs`     | Get all logs for a habit     | –                                          |
| **POST**   | `/habits/:id/logs`     | Add a log entry (mark done)  | `{ "log_date": "2025-09-29", "count": 1 }` |

---

## 🚀 Elevator Pitch
**My Habits** is a mobile app with a REST API built in Express.js and SQL. It demonstrates CRUD operations over HTTP, secure user authentication, and normalized database design — reflecting real‑world application architecture.