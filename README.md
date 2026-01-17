# 📱 Mobile Shop – Your Trusted Mobile Store

A modern and responsive Mobile Shop web application built using **Next.js (App Router)**.
This project demonstrates routing, authentication, API integration, and component-based UI development as part of the SCIC assignment requirements.

---

## 🚀 Live Project

* **Live Site:** [https://your-vercel-link.vercel.app](https://your-vercel-link.vercel.app)
* **GitHub Repository:** [https://github.com/your-username/mobile-shop](https://github.com/your-username/mobile-shop)

---

## 🔐 Login Credentials (Mock Authentication)

**User Login**

* Email: `puser@gmail.com`
* Password: `123456`

> Authentication is implemented using cookies with protected routes.

---

## 🧾 Project Overview

The Mobile Shop application allows users to browse mobile products, view product details, and manage a cart.
It includes public and protected routes, mock authentication, and data fetching from JSON / Express API.

The goal of this project is to demonstrate:

* Client-side routing
* Authentication handling
* Dynamic pages
* API-based data fetching
* Clean and responsive UI design

---

## 🛠️ Technologies Used

### Frontend

* Next.js 15/16 (App Router)
* React.js
* Tailwind CSS
* Framer Motion (animations)
* js-cookie
* react-hot-toast
* swiper.js
* lucide-react
* react-icons

---

## ✨ Key Features

* ✅ Fully responsive landing page with 7 sections
* ✅ Professional Navbar & Footer
* ✅ Mock authentication using cookies
* ✅ Public item listing page
* ✅ Dynamic item details page
* ✅ Client-side cart functionality
* ✅ Protected route (Add Item page)
* ✅ Smooth animations with Framer Motion
* ✅ Toast notifications for user actions

---

## 🧭 Route Summary

| Route         | Description          | Access    |
| ------------- | -------------------- | --------- |
| `/`           | Landing Page         | Public    |
| `/items`      | All Products List    | Public    |
| `/items/[id]` | Product Details Page | Public    |
| `/cart`       | Cart Page            | Public    |
| `/login`      | Login Page           | Public    |
| `/add-item`   | Add New Product      | Protected |
| `/about`      | About Page           | Public    |

---

## 📦 Data Handling

* Product data is fetched from:

  * Static JSON file (initially)
* Cart state is managed on the client side
* Authentication status is stored using browser cookies

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mobile-shop.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The application will run on:

```
http://localhost:3000
```

---

## 🧠 Design Decisions

* JSON-based data was used to keep the project lightweight and focused
* Authentication is mock-based to demonstrate protected routes
* The architecture is scalable and can be extended to MongoDB in the future
* Emphasis was placed on clean UI, responsiveness, and user experience

---

## 📌 Future Improvements

* MongoDB integration
* User registration system
* Payment gateway integration
* Admin dashboard
* Order history tracking

---

## 👨‍💻 Author

**Parvez Hasan**
Frontend & MERN Stack Developer

---

## ✅ Conclusion

This project successfully fulfills all the SCIC assignment requirements by implementing a real-world style application using Next.js with authentication, routing, and API integration.

Thank you for reviewing this project!
