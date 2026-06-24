# Changelog

## v1.0.0 - Initial Release (2024-08-01)

This is the first public release of the Developer Portfolio & Agency Showcase template.

### ✨ Features Added

-   **Project Scaffolding**: Initialized a modern frontend stack using React, TypeScript, and Tailwind CSS.
-   **UI Component Library**: Developed a set of reusable, animated UI components including Cards, Buttons, Modals, and Carousels using Framer Motion and Swiper.
-   **Core Pages & Routing**: Implemented a complete single-page application structure with views for Home, Services (index and detail), Case Studies (index and detail), Blog (index and detail), and a full Contact page.
-   **Data-Driven Content**: Architected the site to pull content dynamically from JSON files (`services.json`, `caseStudies.json`, etc.), making content updates easy and centralized.
-   **Blog Engine**: Created a simple but effective blog system where posts are authored as individual `.tsx` components and managed via a central `blogPosts.json` metadata file.
-   **Dynamic SEO**: Implemented a `<Seo>` component to dynamically update page titles, meta descriptions, and Open Graph tags for improved search engine visibility.
-   **Contact Form & API**: Built a fully-featured contact form with client-side validation using `react-hook-form` and a serverless API endpoint placeholder (`/api/contact.ts`) ready for integration with an email service.
-   **Theming System**: Established a centralized theming system using CSS variables in `styles/globals.css` for easy customization of colors and branding.
-   **Deployment Ready**: Configured the project for seamless deployment on Vercel with a `vercel.json` file to handle static routing and serverless functions.
-   **Optional Analytics**: Added a mechanism to inject Google Analytics or Plausible scripts based on the presence of environment variables (requires a framework with a build step like Next.js to be fully functional).
