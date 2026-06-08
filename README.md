# Deadline Remainder

Deadline Remainder is a simple web application for creating and tracking deadline reminders. Users can sign up, log in, add reminders, edit existing reminders, delete reminders, and view upcoming deadlines from a dashboard.

## Features

- User signup and login
- JWT-based authentication
- Add new deadline reminders
- Edit reminder details
- Delete reminders
- Dashboard showing all reminders
- Deadline status based on remaining days

## Tech Stack

- Frontend: HTML, CSS, JavaScript, Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication: JSON Web Token and bcryptjs

## Project Structure

```text
deadline-remainder/
├── frontend/
│   ├── css/
│   ├── js/
│   ├── home.html
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── addReminder.html
│   └── editReminder.html
└── backend/
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── package.json
    └── server.js
```

## Local Setup

Install backend dependencies:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Run the backend server:

```bash
npm run dev
```

Open the frontend pages from the `frontend` folder in your browser. The app uses the backend API at:

```text
http://localhost:5000/api
```

## Main Pages

- `home.html`: Landing page
- `signup.html`: User registration
- `login.html`: User login
- `dashboard.html`: Reminder dashboard
- `addReminder.html`: Add a new reminder
- `editReminder.html`: Edit an existing reminder
