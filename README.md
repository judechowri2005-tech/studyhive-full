# StudyHive — Full MERN App

React + Express + MongoDB app with authentication, study groups, a live
chat, and a profile page — matching your existing repo structure
(`studyhive-backend` + `StudyHive-React`).

## Folder structure

```
studyhive-backend/
├── models/
│   ├── User.js
│   ├── StudyGroup.js
│   └── Message.js
├── routes/
│   ├── auth.js
│   ├── studyGroups.js
│   └── messages.js
├── middleware/
│   └── auth.js
├── server.js
├── .env
└── package.json

StudyHive-React/
├── src/
│   ├── assets/            (empty — put images here)
│   ├── components/
│   │   ├── AuthContext.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── GroupCard.jsx
│   │   └── AddGroupForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   └── Chat.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── api.js
│   └── main.jsx
├── index.html
├── .env
└── package.json
```

## 1. MongoDB

Make sure MongoDB is running locally and Compass can connect to
`mongodb://127.0.0.1:27017`. The backend uses the exact same URI.

## 2. Start the backend

```bash
cd studyhive-backend
npm install
npm run dev
```

You should see:
```
Connected to MongoDB: mongodb://127.0.0.1:27017/studyhive
Server running on http://localhost:5000
```

## 3. Start the frontend

In a second terminal:

```bash
cd StudyHive-React
npm install
npm run dev
```

Visit `http://localhost:5173`.

## How it works

- **Register/Login** (`/register`) — creates a user with a bcrypt-hashed
  password, returns a JWT, stored in `localStorage`.
- **Dashboard** (`/dashboard`, protected) — add/view/delete study groups,
  saved to the `studygroups` collection in MongoDB.
- **Chat** (`/chat`, protected) — a shared chat room. Polls the backend
  every 3 seconds for new messages (simple stand-in for real-time sockets).
  Messages are saved to the `messages` collection.
- **Profile** (`/profile`, protected) — view your account and edit your bio,
  saved to the `users` collection.
- **About** (`/about`) — static info page.
- **Protected routes** — Dashboard, Chat, and Profile redirect to
  `/register` if you're not logged in (see `ProtectedRoute.jsx`).
- **Text-file details** (`/api/file-system`) — read details with `GET`, replace
  them with `PUT` and `{ "data": "..." }`, append with `POST /append`, or
  delete them with `DELETE`. The data is stored in
  `studyhive-backend/data/details.txt`.

Open MongoDB Compass at any point and look at the `studyhive` database —
you'll see `users`, `studygroups`, and `messages` collections fill up as
you use the app.

## Notes / next steps

- Passwords are hashed with bcrypt — never stored in plain text. The text-file
  module is for simple non-password details.
- The chat is a single shared room for simplicity; splitting it by study
  group would be a natural next step.
- `src/assets/` is empty — drop any images or logos there and import them
  normally in your components.
