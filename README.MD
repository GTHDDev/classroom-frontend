
# 🎓 Classroom Dashboard - Frontend

<div align="center">
  <h3 align="center">University Dashboard Management System</h3>

  <p align="center">
    A high-performance academic hub built with modern full-stack technologies.
    Multi-role system for Admins, Teachers, and Students.
  </p>

  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-available-scripts">Scripts</a>
  </p>
</div>

---

## 📚 Table of Contents

1. [✨ Introduction](#-introduction)
2. [🎯 Features](#-features)
3. [⚙️ Tech Stack](#-tech-stack)
4. [🤸 Quick Start](#-quick-start)
5. [📦 Available Scripts](#-available-scripts)
6. [🛠️ Code Quality](#-code-quality)
7. [📖 Project Structure](#-project-structure)
8. [🚀 Deployment](#-deployment)
9. [🤝 Contributing](#-contributing)
10. [📝 License](#-license)

---

## 🎬 Tutorial

This repository contains the code for an in-depth tutorial available on **[JavaScript Mastery](https://www.youtube.com/@javascriptmastery/videos)** YouTube channel.

👉 **Watch the full tutorial:** [https://youtu.be/ek7hmv5PVV8](https://youtu.be/ek7hmv5PVV8)

---

## ✨ Introduction

A **high-performance PERN stack** (PostgreSQL, Express, React, Node.js) academic hub designed for educational institutions.

### Key Highlights:
- 🔐 **Multi-Role System**: Admin, Teacher, and Student portals with role-based access control
- 🎯 **Decoupled Architecture**: Express/Node.js backend with modular React frontend powered by Refine
- 📊 **Real-Time Analytics**: Dashboard with live statistics on enrollments, classes, and faculty
- 🔒 **Type-Safe**: PostgreSQL with Neon + Drizzle ORM for data integrity
- 🚀 **Secure Access**: Better-Auth for robust authentication and authorization
- ☁️ **Media Management**: Cloudinary integration for profile images and media assets

> **Need Help?** Join our active Discord community with **50k+ members** at [discord.com/invite/n6EdbFJ](https://discord.com/invite/n6EdbFJ)

---

## 🎯 Features

### 👥 Multi-Role Authentication
A secure authentication system powered by **Better Auth** and **Arcjet** that dynamically routes Students, Teachers, and Admins to protected dashboards with strict role-based permissions.

### 📊 Unified Analytics Dashboard
High-level overview of institutional health featuring:
- Real-time statistics on student enrollment
- Active classes tracking
- Faculty distribution metrics
- Campus-wide insights via Refine's data providers

### 🎓 Intelligent Subject Management
Centralized curriculum control:
- Create and manage subjects
- Apply instant filters
- Drill down into class assignments
- Monitor teacher workloads

### 🏛️ Departmental Governance
Structural management layer:
- Organize subjects and faculties into departments
- Detailed views of students and educators per department
- Faculty workload distribution
- Academic hierarchy management

### 👨‍🏫 Dynamic Faculty Directory
Robust, paginated directory with:
- Advanced search by name or email
- Profile image hosting via **Cloudinary**
- Complete teaching schedule visibility
- Department associations

### 🗓️ Advanced Class Orchestration
Core scheduling engine with:
- Session scheduling and management
- Capacity limit configuration
- Multi-teacher assignment across sections
- Real-time conflict detection
- Built with **Drizzle ORM** for data integrity

### 🔐 Code-Based Enrollment System
Google Classroom-inspired workflow:
- Unique 6-8 digit joining codes
- Instant course access for students
- Secure, controlled-access environment
- Real-time enrollment tracking

---

## ⚙️ Tech Stack

### 🎨 Frontend

| Technology | Purpose |
|-----------|---------|
| **React** | UI library for building interactive components |
| **Refine** | Framework for data-intensive admin panels |
| **shadcn/ui** | Re-usable, accessible UI components |
| **Tailwind CSS** | Utility-first styling framework |
| **TypeScript** | Static typing for safer code |
| **Zod** | Runtime schema validation |

### 🖥️ Backend

| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework for APIs |
| **PostgreSQL** | Relational database |
| **Neon** | Serverless PostgreSQL platform |
| **Drizzle ORM** | Type-safe database access |
| **Better Auth** | Authentication framework |

### 🔒 Security & Monitoring

| Technology | Purpose |
|-----------|---------|
| **Arcjet** | Rate limiting, bot protection, data masking |
| **Cloudinary** | Image/video management |
| **CodeRabbit** | AI-powered code review |
| **Site24x7** | Application monitoring & uptime tracking |

---

## 🤸 Quick Start

### Prerequisites

Ensure you have installed:
- **[Git](https://git-scm.com/)**
- **[Node.js](https://nodejs.org/)** (v18 or higher)
- **[npm](https://www.npmjs.com/)** (comes with Node.js)

### Clone the Repository

```bash
git clone https://github.com/JavaScript-Mastery-Pro/classroom.git
cd classroom
```

## 📥 Installation & Local Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```
# Backend API
VITE_BACKEND_BASE_URL=http://localhost:8000/api/

# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
VITE_CLOUDINARY_UPLOAD_URL=https://api.cloudinary.com/v1_1/your_cloud_name/image/upload
```

Get your credentials:

-   **Cloudinary**: Sign up at [https://cloudinary.com](https://cloudinary.com)

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

| Command           | Purpose                                  |
| :---------------- | :--------------------------------------- |
| `npm run dev`     | Start development server                 |
| `npm run build`   | Build for production                     |
| `npm start`       | Start production server                  |
| `npm run lint`    | Run ESLint checks                        |
| `npm run lint:fix`| Fix ESLint issues automatically          |
| `npm run format`  | Format code with Prettier                |
| `npm run format:check`| Check code formatting                |
| `npm run type-check`| Run TypeScript type checking           |
| `npm run validate`| Run all checks (type, format, lint)      |

### Development Workflow

1.  **Code locally**: Make your changes
2.  **Validate before commit**: `npm run validate`
3.  **Auto-fix issues**: `npm run lint:fix && npm run format`
4.  **Create pull request**: Our CI/CD pipeline will verify

## 🛠️ Code Quality

### ESLint Configuration

Your code follows these ESLint rules:

-   ✅ TypeScript best practices
-   ✅ React Hooks conventions
-   ✅ React Refresh compatibility
-   ✅ No unexpected multiline statements

Run locally: `npm run lint`

### Prettier Configuration

Your code is formatted with:

-   ✅ No semicolons
-   ✅ Single quotes for JavaScript
-   ✅ Single quotes for JSX
-   ✅ Max line width: 80 characters
-   ✅ 2-space indentation

Run locally: `npm run format`

### Husky Pre-Commit Hooks

Automatically runs linting and formatting before each commit to maintain code quality.

### GitHub Actions CI/CD

Every pull request runs automated checks:

-   ESLint validation
-   Prettier format check
-   TypeScript type checking
-   Detailed PR comments with issues

## 📁 Project Structure

```plaintext
classroom-frontend/
├── src/
│   ├── components/        # Reusable React components
│   ├── constants/         # App-wide constants
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities, auth, and schema definitions
│   ├── pages/             # Page components (routes)
│   ├── providers/         # Data and auth providers for Refine
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Root component
│   └── index.tsx          # Main entry point
├── public/                # Static assets
├── eslint.config.mjs      # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Environment Variables for Production

Update your `.env.production` or deployment platform variables:

```
VITE_BACKEND_BASE_URL=https://api.yourdomain.com/api/
VITE_CLOUDINARY_CLOUD_NAME=your_production_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_production_preset
VITE_CLOUDINARY_UPLOAD_URL=https://api.cloudinary.com/v1_1/your_production_cloud_name/image/upload
```

### Deployment Platforms

-   **Vercel**: `vercel deploy`
-   **Netlify**: Connect your repo directly
-   **GitHub Pages**: Configure in repository settings
-   **Docker**: Create a Dockerfile for containerized deployment

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1.  Fork the repository
2.  Create a feature branch: `git checkout -b feature/your-feature`
3.  Commit changes: `git commit -m "Add your feature"`
4.  Run validation: `npm run validate`
5.  Push to branch: `git push origin feature/your-feature`
6.  Open a Pull Request

### Code Style Guidelines

-   Follow ESLint rules: `npm run lint`
-   Format with Prettier: `npm run format`
-   Use TypeScript for all new code
-   Write meaningful commit messages

## 📝 License

This project is open source and available under the MIT License.

## 🎓 Learning Resources

-   [React Documentation](https://react.dev/docs)
-   [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
-   [Tailwind CSS Docs](https://tailwindcss.com/docs)
-   [Refine Framework](https://refine.dev/)
-   [PostgreSQL Docs](https://www.postgresql.org/docs/)
