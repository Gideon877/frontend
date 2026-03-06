# OMS Assessment - Document Data Extraction Frontend

This is a Next.js project bootstrapped with create-next-app.

A premium, Apple-inspired web interface designed for seamless identity document processing. This application allows users to upload ID documents (Images/PDFs) to extract textual data and calculate age metrics using OCR technology.

🚀 **Live Demo**
[URL](https://oms-assessment-frontend.onrender.com)

🛠️ **Tech Stack**
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS 4.0 (utilizing advanced @theme variables)
- **State Management:** * Zustand: Global UI state (Toasts/Notifications)
- **React Context:** Application data flow (OCR results)
- **Language:** TypeScript

🧩 **Component Overview**

### Core UI Components
- `UploadForm.tsx`: The main entry point. Features a highly interactive form with "Apple-card" styling. It handles FormData submission, triggers global processing states, and manages navigation transitions.
- `ResultDisplay.tsx`: A clean, tabulated view that displays the extracted name, calculated age (years and detailed breakdown), and the raw OCR text.
- `Navbar.tsx`: A glassmorphism-style sticky navigation bar for toggling between the Upload and Results views.
- `Toast.tsx`: A global notification system driven by Zustand. It provides visual feedback for processing, success, and error states.

### State & Logic
- `useToastStore.ts`: A Zustand store that centralizes the application's notification logic, allowing any component to trigger a toast without "prop-drilling."
- `globals.css`: Defines a custom design system with Apple-specific design tokens (colors like apple-blue and custom shadows).

⚙️ **Getting Started**

First, run the development server:
```bash
npm run dev
```
or using yarn:
```bash
yarn dev
```
or pnpm:
```bash
pnpm dev
```
or bun:
```bash
bun dev
```

# Open Your Project
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses **next/font** to automatically optimize and load Geist, a new font family for Vercel.

---

## ⚙️ Local Setup Instructions
Follow these steps to get the frontend running on your local machine:

### Prerequisites:
- Node.js (v18.x or higher recommended)
- npm or yarn

### Clone the Repository:
```bash
git clone https://github.com/gideon877/frontend.git
```
### Navigate to the repository directory:
```bash
cd frontend
```
### Install Dependencies:
```bash
npm install  # or yarn install
```
### Environment Configuration:
Create a `.env.local` file in the root directory and point it to your backend API:
```
nEXT_PUBLIC_API_URL=http://localhost:5000/api
```
### Run Development Server:
```bash
npm run dev  # or yarn dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📚 Learn More
to learn more about Next.js, take a look at the following resources:
- **Documentation** - Learn about Next.js features and API.
- **Learn Next.js** - An interactive Next.js tutorial.
- **Next.js GitHub Repository** - Your feedback and contributions are welcome!

---

## ☁️ Deployment Details
the application is hosted as a Static Site on Render.
- **Service Name:** oms-assessment-frontend
- **Service ID:** srv-d6l9fg1aae7s7382qg40
- **Deployment Type:** Manual Deploy
- **Branch:** main
- **Build Command:** npm run build 
- **Publish Directory:** `out` (if static) or standard Next.js build 

**Deploy on Vercel**
the easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.
Check out our [Next.js deployment documentation](https://vercel.com/docs) for more details.

Developed by [gideon877](https://github.com/gideon877). Feel free to reach out via [LinkedIn](https://linkedin.com/in/gideon877) or check out more projects on [GitHub](https://github.com/gideon877).
