# 🍪 Admin Panel - Cookie Authentication

A secure and responsive **Admin Panel** built with **Node.js, Express.js, MongoDB, EJS, and Bootstrap**. This project implements cookie-based authentication with complete CRUD operations for admin management.

---

## 🚀 Features

- 🔐 Admin Registration
- 🔑 Secure Login & Logout
- 🍪 Cookie-Based Authentication
- 📊 Admin Dashboard
- ➕ Add New Admin
- 👥 View All Admins
- ✏️ Update Admin Details
- 🗑️ Delete Admin
- 📷 Profile Image Upload
- 🔒 Password Hashing using Bcrypt
- 📱 Fully Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Cookie Parser
- Bcrypt

### File Upload
- Multer

---

## 📁 Project Structure

```text
AdminPanel-cookie/
│
├── config/
│   └── db.js
│
├── controller/
│   └── adminController.js
│
├── models/
│   └── adminModel.js
│
├── public/
│   ├── assets/
│   └── uploads/
│
├── routes/
│   └── adminRoutes.js
│
├── views/
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd AdminPanel-cookie
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure MongoDB

Update your MongoDB connection string inside:

```text
config/db.js
```

### 5. Start the application

```bash
npm start
```

The server will run on:

```
http://localhost:8080
```

---

## 📌 Available Routes

| Route | Description |
|-------|-------------|
| `/signup` | Register Admin |
| `/login` | Login |
| `/` | Dashboard |
| `/add-admin` | Add New Admin |
| `/view-admin` | View All Admins |
| `/edit-admin/:id` | Edit Admin |
| `/delete-admin/:id` | Delete Admin |
| `/logout` | Logout |

---

## 🔒 Security Features

- Password Encryption using Bcrypt
- Cookie-Based Authentication
- Protected Routes
- Secure Login System
- File Upload Validation

---

## 📸 Screenshots

Add screenshots of your application here.

Example:

```
screenshots/
├── login.png
├── dashboard.png
├── add-admin.png
└── view-admin.png
```

---

## 📦 Dependencies

- Express.js
- Mongoose
- EJS
- Cookie Parser
- Bcrypt
- Multer
- Nodemon

---

## 🌟 Future Enhancements

- JWT Authentication
- Forgot Password
- Email Verification
- Role-Based Authentication
- Search & Filter
- Pagination
- Dashboard Analytics
- Dark Mode

---
