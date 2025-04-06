# ECycleNow

A full-stack application designed to simplify e-waste management by connecting users with certified recyclers. This project features a React frontend and a Node.js/Express backend.

## Table of Contents
1. [Features](#features)  
2. [Project Structure](#project-structure)  
3. [Installation](#installation)  
4. [Environment Variables](#environment-variables)  
5. [Running Locally](#running-locally)  
6. [Deployment](#deployment)  
7. [Key Files](#key-files)  
8. [License](#license)

---

## Features
- User registration and authentication using Google OAuth or standard sign-up  
- Intuitive UI built with React + Vite  
- RESTful API using Express for handling e-waste recycling data  
- MongoDB integration for persisting user and recycle data  
- Rewards system under development for eco-friendly actions  

---

## Project Structure

```
ECycleNow/
  Backend/
    .env
    .gitignore
    Oauth.js
    package.json
    server.js
    src/
      app.js
      constant.js
      index.js
      controllers/
      db/
      errors/
      models/
      routes/
      utils/
  Frontend/
    .env
    .gitignore
    eslint.config.js
    index.html
    package.json
    postcss.config.js
    README.md
    tailwind.config.js
    vite.config.js
    public/
    src/
      App.jsx
      index.css
      main.jsx
      assets/
      components/
      Context/
      pages/
  README.md
```

- [Backend](Backend)  
  - [server.js](Backend/server.js): Entry point that initializes the Express server.  
  - [src/app.js](Backend/src/app.js): Configures Express middleware, routes, session, CORS, and static file serving.  
  - [src/routes](Backend/src/routes): Contains route modules like [features.routes.js](Backend/src/routes/features.routes.js), [about.routes.js](Backend/src/routes/about.routes.js), etc.  
  - [src/db/index.js](Backend/src/db/index.js): MongoDB connection logic.  

- [Frontend](Frontend)  
  - [index.html](Frontend/index.html): Main HTML entry point.  
  - [src/main.jsx](Frontend/src/main.jsx): React entry point that renders the App component.  
  - [src/pages](Frontend/src/pages): Contains React page components (e.g. [Homepage.jsx](Frontend/src/pages/Homepage.jsx), [About.jsx](Frontend/src/pages/About.jsx)).  
  - [src/components/layout/Layout.jsx](Frontend/src/components/layout/Layout.jsx): Layout wrapper for consistent page structure.  

---

## Installation

1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/ECycleNow.git
   ```
2. Install dependencies for frontend and backend:
   ```sh
   # In the Frontend directory
   npm install
   
   # In the Backend directory
   npm install
   ```

---

## Environment Variables

### Backend (.env)
Replace values with your own credentials:

```
PORT=8000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
DB_NAME=ecyclenow
CORS_ORIGIN=http://localhost:5173
CLIENT_URL=http://localhost:5173
SESSION_SECRET=YourSessionSecret
GOOGLE_CLIENT_ID=YourGoogleClientID
GOOGLE_CLIENT_SECRET=YourGoogleClientSecret
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback
ACCESS_TOKEN_SECRET=YourAccessTokenSecret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=YourRefreshTokenSecret
REFRESH_TOKEN_EXPIRY=10d
COOKIE_SECRET=YourCookieSecret
```

### Frontend (.env)
```
VITE_BACKEND_URL=http://localhost:8000
# VITE_BACKEND_URL=https://ecyclenow.onrender.com
```
Ensure you update `VITE_BACKEND_URL` if deploying the backend on Render or another platform.

---

## Running Locally

1. Start the Backend:
   ```sh
   # In the Backend directory
   npm run dev
   ```
   By default, it listens on PORT=8000.

2. Start the Frontend:
   ```sh
   # In the Frontend directory
   npm run dev
   ```
   By default, the frontend is served on http://localhost:5173.

3. Update any absolute paths in the React code to use:
   ```js
   import.meta.env.VITE_BACKEND_URL
   ```
   if needed.

---

## Deployment

1. **Frontend (Vercel)**  
   - Create a new project on Vercel and connect your Frontend repo.  
   - Add the variable `VITE_BACKEND_URL` to Vercel’s Environment Variables.  
   - Deploy and note your production URL (e.g., https://your-vercel-domain.vercel.app).

2. **Backend (Render)**  
   - Create a new web service on Render from your Backend repo.  
   - Add the environment variables from your `.env` to Render.  
   - Use the `npm install` build command and `npm start` for the start command.  
   - Take note of your Render domain (e.g., https://ecyclenow.onrender.com) and update your Frontend `.env` accordingly.

---

## Key Files

- [Backend/src/app.js](Backend/src/app.js): Main Express config (middleware, routes, sessions)  
- [Backend/src/routes/features.routes.js](Backend/src/routes/features.routes.js): Serves features data to the frontend  
- [Frontend/src/pages/Homepage.jsx](Frontend/src/pages/Homepage.jsx): Home page with dynamic features  
- [Frontend/src/pages/About.jsx](Frontend/src/pages/About.jsx): About page with team info  
- [Frontend/src/pages/auth/CompanyRegister.jsx](Frontend/src/pages/auth/CompanyRegister.jsx): Company registration form  

---

## License

This project is available under an open license. See [README.md](README.md) at the project root for more details (or add your preferred license here).
