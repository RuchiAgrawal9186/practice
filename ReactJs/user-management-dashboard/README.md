# User Management Dashboard

## Live Demo link - https://practice-ddco.vercel.app/

A responsive and interactive User Management Dashboard built using **React**, **Axios**, and **Plain CSS**. This application allows users to view, search, sort, filter, add, edit, and delete user records using the JSONPlaceholder API.

---

## 🚀 Live Features

- View all users from API
- Add a new user
- Edit existing user details
- Delete users
- Search users
- Sort users
- Filter users using popup modal
- Pagination with configurable page size
- Responsive design
- Form validation
- Error handling
- Loading states

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Axios
- Plain CSS
- JSONPlaceholder API

---

## 📁 Project Structure

```bash
src/
│
├── api/
│   └── userApi.js
│
├── components/
│   ├── Header.jsx
│   ├── UserTable.jsx
│   ├── UserModal.jsx
│   ├── FilterModal.jsx
│   ├── Pagination.jsx
│   ├── Loader.jsx
│   └── EmptyState.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── styles/
│   ├── dashboard.css
│   ├── header.css
│   ├── table.css
│   ├── modal.css
│   └── pagination.css
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/RuchiAgrawal9186/practice.git
```

Navigate to project folder:

```bash
cd practice/reactjs/user-management-dashboard
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## 🔗 API Used

The application uses the free mock REST API provided by JSONPlaceholder.

API Endpoint:

```bash
https://jsonplaceholder.typicode.com/users
```

---

## ✨ Features Implemented

### 1. View Users
- Fetches users from JSONPlaceholder API
- Displays users in a responsive table

### 2. Add User
- Opens modal form
- Validates input fields
- Sends POST request
- Updates UI immediately

### 3. Edit User
- Opens prefilled modal
- Updates user information
- Sends PUT request

### 4. Delete User
- Confirmation dialog
- Sends DELETE request
- Removes user from UI

### 5. Search
Search users by:
- First Name
- Last Name
- Email
- Department

### 6. Sort
Sort users by:
- First Name
- Last Name
- Department

### 7. Filter
Filter users using popup modal by:
- First Name
- Last Name
- Email
- Department

### 8. Pagination
Supports pagination with:
- 10 records
- 25 records
- 50 records
- 100 records

### 9. Responsive Design
- Desktop view
- Tablet view
- Mobile view

### 10. Validation
Client-side validation for:
- First Name
- Last Name
- Email
- Department

### 11. Error Handling
Handles:
- API errors
- Form validation errors
- Network failures

---

## 📸 Application Screens

- Dashboard
- Add User Modal
- Edit User Modal
- Filter Modal
- Pagination
- Responsive Mobile View



## ⚠️ Challenges Faced

During development, several challenges were encountered:

- JSONPlaceholder API does not persist POST, PUT, and DELETE operations.
- Managing search, sorting, filtering, and pagination simultaneously.
- Designing reusable modal components.
- Implementing responsive tables for smaller devices.
- Maintaining consistent state updates across CRUD operations.

---

## 🚀 Future Improvements

If given more time, the following improvements could be added:

- Redux Toolkit for state management
- Debounced search
- Toast notifications
- Server-side pagination
- Authentication and authorization
- Dark mode support
- Unit testing with Jest and React Testing Library
- Data caching using React Query

---

## 👨‍💻 Author

**Ruchi Agrawal**

Frontend Developer

Tech Stack:
- HTML
- CSS
- JavaScript
- React.js
- Node.js
- Express.js
- MongoDB

---
