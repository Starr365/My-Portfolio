# Personal Portfolio of Nzeribe Mmesoma Stella ✨

A premium, highly interactive personal portfolio built using **React 19**, **Next.js 16**, and **TypeScript**. This project serves as a comprehensive digital resume, showcasing a professional journey through tech, creative project galleries, and technical expertise. Built with a mobile-first approach, it features a sophisticated **Glassmorphism design** and vibrant, performant animations.

---

## Project Overview
It targets potential employers, collaborators, and clients, providing a seamless interface to explore my professional background, project history, and core competencies. The application is built to be fast, accessible, and visually stunning, reflecting my commitment to high-quality frontend engineering.

---

## Key Features & Challenges
*   **Dynamic Visuals & Motion Architecture**: Implemented a complex motion system using **Framer Motion**, including scroll-triggered entry animations, background parallax effects, and micro-interactions.
*   **Performance Optimization**: Solved the challenge of maintaining high Core Web Vitals while using heavy animations by implementing **Code Splitting (Dynamic Imports)** and **Optimized Image Processing** via Next.js.
*   **Responsive Integrity**: Built a fully adaptive grid system that maintains visual fidelity from ultra-wide monitors down to standard mobile devices.

---

## Technologies Used

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

*   **Framework**: Next.js 16 (App Router)
*   **Frontend**: React 19, TypeScript
*   **Styling**: Tailwind CSS 4, Lucide React
*   **State / UI**: Shadcn/UI, Next-Themes (Dark Mode)
*   **Deployment**: Vercel

---

## Architecture Overview
The project follows a modular **Atomic Design** philosophy. Components are separated into logical layers:
*   **Sectional Components**: High-level wrappers for page segments (Hero, About, Projects).
*   **UI Primitives**: Base-level reusable components (Buttons, Cards, Inputs).
*   **Service Layer**: External logic handling (e.g., Supabase client, Web3Forms integration).

I chose the **App Router** for improved routing performance and the ability to leverage **Server Components** for static sections, reducing the client-side JavaScript footprint.

---

## Technical Decisions
1.  **Tailwind CSS 4**: Selected for its JIT compiler and robust design token system, enabling the complex OKLCH-based color palette and glassmorphism utilities.
2.  **Code Splitting**: Used `next/dynamic` to lazy-load heavy sections like `Projects` and `Contact`, ensuring the "Above the Fold" content (Hero) is interactive almost instantly.

---

## Setup & Installation
Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Starr365/My-Portfolio.git
    cd My-Portfolio
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root directory:
    ```env
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
    ```

4.  **Run Development Server:**
    ```sh
    npm run dev
    ```

---

## 7. Folder Structure
```text
my-portfolio/
├── app/            # Next.js App Router (Layouts, Pages, Globals)
├── components/     # UI Sections and Reusable Components
│   └── ui/         # Shadcn/UI primitives
├── lib/            # Utilities and Service Clients
├── hooks/          # Custom Reusable React Hooks
├── public/         # Static Assets (Images, Icons)
└── styles/         # Global Stylesheets
```

---

## Performance & Accessibility
*   **Image Optimization**: All images utilize `next/image` with proper `fill` and `sizes` attributes for responsive loading.
*   **A11y (Accessibility)**: Implementation of `ARIA roles`, descriptive `labels`, and semantic HTML5 tags ensures WCAG AA compliance.
*   **Hydration Control**: Used dynamic imports to prevent hydration mismatches and prioritize interactive elements.

## License & Author
Copyright © 2026 **Nzeribe Mmesoma Stella**. All rights reserved.

- **LinkedIn**: [Mmesoma Nzeribe](https://www.linkedin.com/in/mmesoma-nzeribe)
- **GitHub**: [Starr365](https://github.com/Starr365)
- **X (Twitter)**: [@starr_o25](https://x.com/starr_o25)