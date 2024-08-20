# User Registration and Authenticated Routes in Node.js

## Overview

This project demonstrates a user registration system and authenticated routes using the MVC architecture in Node.js. Key features include user registration, login functionality, and protected routes.

## Features

- **User Registration:** 
  - Registration form with validation.
  - Password hashing with bcrypt.
  - MongoDB for data storage.
  
- **User Login:** 
  - Login form with JWT authentication.
  - Redirects to `/profile` upon successful login.

- **Authenticated Routes:** 
  - Protected `/profile` route.
  - Logout functionality.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/prateek2102/liaplus.git
   cd repository
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Setup Environment Variables:**

   Create a `.env` file with the following:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/yourdbname
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Application:**

   ```bash
   npm start
   ```

   Access the app at `http://localhost:3000`.

## Usage

- **Register:** Visit `/register`
- **Login:** Visit `/login`
- **Profile:** Access your profile at `/profile` after logging in
- **Logout:** Visit `/logout`
