# DSA Sheet Tracker

A full-stack web application that helps users track their progress while solving Data Structures and Algorithms (DSA) problems. Users can log in, browse topic-wise problems, mark problems as completed, and track their progress across sessions.

## Live Demo

**Frontend:** `http://dsa-sheet-tracker-diwakar.s3-website.ap-south-2.amazonaws.com`

**Backend:** `http://18.60.226.215/`

## Demo Credentials

Email: `test@apnacollege.com`

Password: `Password@123`

---

## Features

### Authentication

* JWT-based authentication
* Secure login functionality
* Protected routes
* Persistent user sessions

### DSA Problem Tracking

* Topic-wise organization of DSA problems
* Difficulty levels (Easy, Medium, Hard)
* Resource links for:

  * YouTube Tutorials
  * Articles
  * Coding Practice Platforms

### Progress Tracking

* Mark problems as completed
* Progress persists across sessions
* Visual progress overview
* Completion statistics

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* JWT Authentication
* Mongoose

### Database

* MongoDB Atlas

### Deployment

* AWS EC2 (Amazon Linux 2023)
* Nginx Reverse Proxy
* PM2 Process Manager
* AWS S3 Static Website Hosting

---

## Project Structure

```text
dsa-sheet-app/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   │
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── services/
│   │
│   └── package.json
│
└── README.md
```

---

## Database Schema

### User

```javascript
{
  email: String,
  password: String
}
```

### Topic

```javascript
{
  name: String
}
```

### Problem

```javascript
{
  title: String,
  difficulty: String,
  youtubeLink: String,
  articleLink: String,
  codingLink: String,
  topic: ObjectId
}
```

### Progress

```javascript
{
  user: ObjectId,
  completedProblems: [ObjectId]
}
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/login
```

### Topics

```http
GET /api/topics
```

### Progress

```http
GET /api/progress
```

```http
POST /api/progress/toggle
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/Diwakar-Rai/dsa-sheet-app.git
```

### Backend Setup

```bash
cd backend

npm install
```

### Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

## Deployment Architecture

```text
React (S3 Static Hosting)
            │
            ▼
      AWS EC2
      (Nginx + PM2)
            │
            ▼
      Express API
            │
            ▼
      MongoDB Atlas
```

---

## Future Improvements

* User Registration
* Search and Filter Problems
* Notes for Problems
* Streak Tracking
* Progress Analytics Dashboard
* Dark Mode

---

## Author

Diwakar Rai

GitHub: https://github.com/Diwakar-Rai/

---

## Assignment Submission

This project was developed as part of the Full Stack Developer Assignment and demonstrates:

* Full-stack application development
* Authentication & Authorization
* REST API development
* Database design
* AWS deployment
* Responsive UI development
* State management and persistence
