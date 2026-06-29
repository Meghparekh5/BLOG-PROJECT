# AdminPanel-cookie
<br><br><br>

# 🎥 Project Explanation Video

> **📌 Project explanation video link**

[![Watch-Video](https://img.shields.io/badge/▶️-Watch%20Video-red)](https://drive.google.com/file/d/1J7NN3nyTdtvAa8ZBjr1MAgK3M7vHfy5z/view?usp=sharing)

---

# Admin Panel

A secure and responsive **Admin Panel** built using **Node.js, Express.js, MongoDB, EJS, and Bootstrap**. The application provides complete admin authentication along with CRUD functionality for managing admin users.

---

## 📌 Features

- 🔐 Admin Registration
- 🔑 Secure Login System
- 🍪 Cookie-Based Authentication
- 📊 Dashboard
- ➕ Add New Admin
- 👀 View All Admins
- ✏️ Edit Admin Details
- 🗑️ Delete Admin
- 🖼️ Upload Admin Profile Image
- 🔒 Password Encryption using Bcrypt
- 📱 Responsive User Interface

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

### Authentication & Security
- Bcrypt
- Cookie Parser

### File Upload
- Multer

---

## 📂 Folder Structure

```
Admin-panel/
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
│   ├── css/
│   ├── images/
│   └── uploads/
│
├── routes/
│   └── adminRoutes.js
│
├── views/
│   ├── dashboard.ejs
│   ├── login.ejs
│   ├── signup.ejs
│   ├── add-admin.ejs
│   ├── edit-admin.ejs
│   └── view-admin.ejs
│
├── app.js
├── package.json
└── README.md
```

---



## Available Pages

| Route | Description |
|--------|-------------|
| `/signup` | Register Admin |
| `/login` | Login |
| `/` | Dashboard |
| `/add-admin` | Add New Admin |
| `/view-admin` | View Admin List |
| `/edit-admin/:id` | Edit Admin |
| `/delete-admin/:id` | Delete Admin |
| `/logout` | Logout |

---

## Security Features

- Password Hashing with Bcrypt
- Cookie-Based Authentication
- Protected Routes
- Image Upload Validation
- Secure Admin Login

---

## Project Highlights

- Clean MVC Architecture
- CRUD Operations
- Authentication System
- Responsive Design
- MongoDB Integration
- Image Upload Support
- Easy to Customize

---

## Future Improvements

- JWT Authentication
- Forgot Password
- Email Verification
- Role-Based Access Control
- Pagination
- Search & Filter
- Dark Mode
- Dashboard Analytics

---

---

## Author

**Jainish Rana**
