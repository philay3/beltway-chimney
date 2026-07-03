# Beltway Chimney Redesign

A professional, high-performance, and modern web application redesign for **Beltway Chimney**, migrated from a legacy Wix website builder. Built using the latest Next.js (App Router), React, and TypeScript architecture with clean Vanilla CSS.

---

## 🌟 Motto & Philosophy
> **"Protecting People, Property, and Peace of Mind"**

Beltway Chimney provides certified chimney sweeping, flue inspection, and creosote cleaning services across the Washington D.C., Maryland, and Northern Virginia Metropolitan area. This platform is designed to educate homeowners on fire safety, carbon monoxide prevention, and provide seamless online scheduling and billing tools.

---

## 🛠️ Technology Stack

<p align="left">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  </a>
  <a href="https://vercel.com/">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </a>
</p>

- **Framework**: [Next.js (App Router)](https://nextjs.org/) – React framework for server-side rendering, static optimization, and performance.
- **Language**: [TypeScript](https://www.typescriptlang.org/) – Providing type safety and autocompletion interfaces.
- **Styling**: [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) – Scoped layouts utilizing CSS variables and `styled-jsx` for fluid modular designs without heavy CSS frameworks.
- **Icons**: [Lucide React](https://lucide.dev/) – A collection of clean, SVG-based stroke icons.

---

## ✨ Features & Architecture

### 1. Interstate Shield Brand Redesign
The brand colors and layouts are inspired by the company's Capital Beltway (I-495) name, styling a custom Interstate Shield logo inside navigation and footer panels:
- **Navy Blue** (`#1b3a60`)
- **Highway Red** (`#e61c24`)
- **Slate Light** (`#f8fafc`)

### 2. Interactive Booking Wizard (`/appointments`)
An interactive scheduler allowing clients to book services. It guides users through:
- **Service Selection**: Options with transparent pricing.
- **Time Slot & Calendar Picker**: Custom calendar interface (blocking Sundays) with dynamic slot allocation.
- **Service Location Details**: Gathers location and chimney details.
- **Booking Reference Code**: Generates a receipt summary with unique reference keys (`BC-XXXXXX`).

### 3. Payment Billing Portal (`/pay`)
A billing gateway that supports:
- Quick pay options for invoice reference codes.
- **Click-to-Pay** express buttons mocking **Apple Pay** and **Google Pay** checks.
- Traditional credit card input validations.
- Custom state changes (processing spinner -> success receipt overlay).

### 4. Interactive Testimonial Slider & Service Cards
- Auto-cycling slider showing DMV customer reviews with star ratings.
- Service detail overlays that open modal dialogs when clicked.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone or download the repository files.
2. Install the package dependencies:
   ```bash
   npm install
   ```

### Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### Production Build
Build the static and dynamic files for server deployment:
```bash
npm run build
```
Run the compiled build:
```bash
npm start
```

---

## 🛡️ Verification & Type-Safety
This project is configured with Strict TypeScript compiling and ESLint configs. It builds cleanly into static route modules on Vercel or any Node server.
