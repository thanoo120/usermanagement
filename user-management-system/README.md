# User Management System

A modern, responsive React-based user management application built with Vite, Tailwind CSS, and React Router. This application provides a clean interface for managing users with features like pagination, user details, and status management.

here i used user.json file to store and fetch user details.

## �� Features

- **User Dashboard**: Display users in a clean, responsive table format
- **Pagination**: Navigate through large user lists efficiently
- **User Details**: View detailed information about individual users
- **Status Management**: Track user status (Active, Suspended, Inactive)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS for a beautiful, modern interface
- **Fast Development**: Hot module replacement with Vite

## ��️ Technologies Used

- **React 18.2.0** - UI library for building user interfaces
- **Vite 5.0.8** - Fast build tool and development server
- **React Router DOM 6.20.1** - Client-side routing
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **Lucide React 0.263.1** - Beautiful icon library
- **ESLint 8.56.0** - Code linting and quality assurance
- **PostCSS 8.4.32** - CSS processing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

You can check your versions with:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd user-management-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

### Development
```bash
# Start development server with hot reload
npm run dev
```

```bash
# Install additional packages
npm install react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

### Production
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Code Quality
```bash
# Run ESLint to check code quality
npm run lint
```

### Dependency Management
```bash
# Check dependency tree
npm ls

# Check for outdated packages
npm outdated

# Update packages
npm update

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix
```

## ��️ Project Structure


ser-management-system/
├── public/ # Static assets
│ ├── users.json # User data
│ └── vite.svg # Vite logo
├── src/
│ ├── components/ # React components
│ │ ├── CartDetail.jsx # User detail card component
│ │ ├── DashBoard.jsx # Main dashboard component
│ │ ├── Header.jsx # Header component
│ │ ├── PersonalInfo.jsx # Personal info component
│ │ ├── UserCard.jsx # User card component
│ │ └── UserDetail.jsx # User detail component
│ ├── pages/ # Page components
│ │ ├── UserDetail.jsx # User detail page
│ │ └── UserList.jsx # User list page
│ ├── assets/ # Static assets
│ │ └── react.svg # React logo
│ ├── App.jsx # Main app component
│ ├── main.jsx # Application entry point
│ ├── App.css # App-specific styles
│ └── index.css # Global styles with Tailwind
├── package.json # Dependencies and scripts
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
├── .eslintrc.cjs # ESLint configuration
└── README.md # This file
