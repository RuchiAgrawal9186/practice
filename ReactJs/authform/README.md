# React + Vite

# Authentication UI – Login & Signup

This project is a frontend authentication UI built as part of a technical assignment.  
It includes **Login** and **Signup** forms with proper validations, clean UI, and reusable logic.

---

## ✨ Features

- Login and Signup UI with tab switching
- Responsive and modern UI using **Tailwind CSS**
- Single reusable authentication component
- Form validation with clear error messages
- Success messages on valid actions
- Clean and readable code structure
- Separation of concerns using service and data files

---

## 🛠️ Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **HTML5**

---

## 📂 Project Structure

```
src/
├─ components/
│ └─ AuthForm.jsx # Main authentication component
├─ utils/
│ └─ authService.js # Login & signup logic / storing user details in localstorage
| └─ validation.js  # Form validation logic
└─ App.jsx ```


---

## 🔐 Authentication Flow

### Signup
- User enters name, email, password, and confirm password
- Validations applied:
  - Name: required, min 3 chars, max 50 chars, no numbers
  - Email: valid email format
  - Password:
    - Minimum 6 characters
    - At least 1 uppercase letter
    - At least 1 lowercase letter
    - At least 1 number
    - At least 1 special character
  - Confirm password must match password
- On success, user data is stored in an **in-memory array**

### Login
- User enters email and password
- Credentials are matched against stored users
- Displays success or error message accordingly


## ▶️ How to Run the Project

1. Clone the repository
  - git clone <repository-url>

2. Install dependencies
  - npm install 

3. Start the development server  
  - npm run dev
