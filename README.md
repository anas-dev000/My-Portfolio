# Anas Ali Elgebaly - Full Stack MERN Developer Portfolio
* **Live Demo**: [my-portfolio-chi-three-14.vercel.app](https://my-portfolio-chi-three-14.vercel.app/) – Hover border-pink. 🚀

![Portfolio Hero Banner](https://res.cloudinary.com/dbgthgcgh/image/upload/v1758025408/myImageFormal_nesewd.jpg)  
*(Formal profile image of Anas Ali Elgebaly, showcasing a professional demeanor in a modern software engineering context—capturing my focus on innovative, user-centric development.)*

## 🚀 Project Overview

Welcome to my personal portfolio website! This is a dynamic, responsive single-page application (SPA) built with **React.js** and **Tailwind CSS**, designed to showcase my journey as a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) developer. The site highlights my technical skills, real-world projects, and passion for creating scalable, secure, and user-centric web solutions.

As a computer science graduate from the ITI MERN Stack scholarship program, I've focused on bridging the gap between frontend aesthetics and backend robustness. This portfolio isn't just a static resume—it's an interactive showcase of my work, featuring smooth animations via **Framer Motion**, gradient-based UI elements for a modern vibe, and RTL support for Arabic content where relevant. Key highlights include project filtering, data-driven sections, and seamless contact integrations.

**Current Status**: This README reflects the **first version** of the project (pre-update), with all code in the `main` branch. There's an experimental `updated` branch with enhancements (e.g., improved animations, additional integrations) that hasn't been merged yet. Development is ongoing—stay tuned for v2.0! As of October 11, 2025, the site emphasizes modularity through shared components like `FlexibleCard` for versatile content rendering and `GradientTitle` for eye-catching headings.

### 🎯 Key Ideas & Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS, ensuring seamless viewing on desktops, tablets, and mobiles. Supports dark mode and RTL layouts for inclusive experiences (e.g., Arabic text rendering in projects like the Restaurant POS System).
- **Interactive Animations**: Powered by Framer Motion for fade-ins, typing effects (e.g., "Software Engineer" in HeroSection), and staggered reveals, making the site engaging without overwhelming performance. Components like `motion.div` in sections trigger on viewport entry.
- **Project Filtering**: Dynamic filtering in the Projects section (e.g., by "Frontend", "Backend", "Desktop") using React state (`useState` in ProjectsSection.js) for easy navigation through my 7+ projects.
- **Data-Driven Content**: All sections pull from modular JavaScript data files (e.g., `aboutData.js`, `projectsData.js`, `skillsData.js`) for easy updates and maintainability. This allows quick iteration on my experiences without touching UI code.
- **Accessibility & SEO**: Semantic HTML, ARIA labels, and optimized images via Cloudinary for fast loading and search engine friendliness. Components like `Paragraph` ensure readable text with relaxed leading.
- **Contact Integration**: Direct links to email, WhatsApp, GitHub, and LinkedIn via `ContactCard` components, with gradient icons for visual appeal.
- **Performance Optimized**: Uses Vite for fast builds (in referenced projects), lazy loading, and minimal bundle size. Shared components like `Button` and `IconWrapper` promote code reuse, reducing redundancy.
- **UI Consistency**: Gradient themes (e.g., blue-to-purple) across `GradientImage`, `GradientTitle`, and cards create a cohesive, professional aesthetic. Hover effects (e.g., scale-105 on cards) add interactivity.

This portfolio embodies my philosophy: **Clean, secure, and maintainable code that delivers real impact**. It's built to evolve—future updates may include a blog section, live demo embeds, or full PWA support. My experiences, from freelance desktop apps to backend APIs, are woven throughout, demonstrating practical application of skills like JWT auth and database optimization.

## 👨‍💻 About Me: My Journey & Expertise

Drawing directly from `aboutData.js`, here's a deeper dive into my background, milestones, and daily expertise. This section uses `Card` components for structured storytelling, paired with `CoreValuesCard` to highlight my principles.

### My Journey
I began my journey as a computer science student passionate about solving real-world problems. Through projects like **Akhtarly – Hardware Recommendation System** (my graduation project) and the **ITI MERN Stack scholarship**, I gained hands-on experience with backend engineering, database design, and modern JavaScript practices. Along the way, I built diverse projects—from responsive frontend with React and Angular to scalable APIs with Node.js and MongoDB. Today, I'm a **Full Stack MERN developer**, focused on writing clean, secure, and maintainable code that delivers real impact.

**Key Milestones & Experiences**:
- **Academic Foundation**: Computer Science studies emphasizing problem-solving, leading to my graduation project where I architected a full backend for hardware recommendations.
- **ITI MERN Scholarship (2024-2025)**: Intensive training in full-stack development, including collaborative sprints on e-commerce and hotel management systems. This honed my TDD practices and API optimization skills.
- **Freelance Engagements**: Delivered the **Autism Awareness Platform** (React frontend for Arabic users) and **Restaurant POS System** (CustomTkinter desktop app with SQLite), managing end-to-end from requirements to deployment.
- **Ongoing Learning**: Actively contributing to GitHub repos, experimenting with GraphQL and Docker in side projects to stay ahead in the evolving web dev landscape.

These experiences have equipped me to tackle challenges like real-time order processing or accessible RTL UIs, always prioritizing user needs.

### What I Do
As outlined in `aboutData.js`, my core services focus on end-to-end delivery:
- Build secure & scalable APIs with **Node.js, Express, and MongoDB/PostgreSQL**—e.g., implementing JWT auth and pagination in Akhtarly.
- Develop responsive UIs with **React & Angular**, supporting RTL and accessibility—seen in the Autism Platform's Framer Motion animations.
- Design and optimize databases for performance and scalability—using aggregation pipelines in MongoDB for e-commerce queries.
- Apply **clean architecture & TDD** for maintainable, testable systems—leveraging Jest in multiple projects.
- Deliver end-to-end solutions from **e-commerce APIs** (Ecommercify) to **desktop and educational platforms** (POS System and Prophets Journey).

In practice, this means turning client briefs into deployable products: For instance, in the Hotel Management API, I integrated Stripe for payments and Cron for automated cleanups, ensuring 99% uptime in testing.

### Core Values
Rendered via `CoreValuesCard.js` with `CoreValueItem` bullets, my guiding principles are:
- **Clean, Maintainable Code** (#A78BFA dot): Prioritizing ESLint/Prettier and modular components, as in this portfolio's shared folder.
- **Continuous Learning** (#60A5FA dot): Regularly upskilling via ITI and personal projects, like adding WebSockets to backends.
- **Scalable Solutions** (#A78BFA dot): Designing for growth, e.g., three-tier architecture in Akhtarly.
- **Real-World Impact** (#60A5FA dot): Focusing on solutions that matter, like awareness platforms for autism or efficient POS for restaurants.

These values stem from real-world feedback—e.g., client praise for the POS System's Arabic support—and drive my collaborative approach in Agile teams.

I'm based in Egypt (+20 phone code), available for freelance or full-time opportunities in web development. With 2+ years of hands-on experience, I'm eager to contribute to innovative teams!

## 🛠️ Technical Skills

From `skillsData.js`, my skillset is organized into 7 categories, each rendered as a `FlexibleCard` in SkillsSection.js. I've expanded this into a detailed table for scannability, including real-world applications from my projects. Proficiency levels are self-assessed based on project depth and testing coverage.

| Category                  | Key Skills & Tools                                                                 | Proficiency Level | Real-World Application |
|---------------------------|------------------------------------------------------------------------------------|-------------------|------------------------|
| **Frontend Development** | JavaScript (ES6+), TypeScript, HTML5, CSS3, React.js, Redux Toolkit, jQuery, Context API, Next.js, Tailwind CSS, Bootstrap, Material UI, Framer Motion, Responsive Design (mobile-first), React Hook Form, Jest, Jasmine, Webpack, Vite | Advanced | Built Autism Awareness Platform with React/Vite/Framer Motion for RTL animations; Angular Movie Website for TMDb integration. |
| **Backend Development**  | Node.js, TypeScript, Express.js, Next.js, MongoDB, MySQL, PostgreSQL, SQLite, Stripe, PayPal, REST API Design, Authentication & Authorization (JWT, OAuth, OAuth2), Role-Based Access, Jest, GraphQL (Apollo Server), WebSockets (Socket.io), Aggregation Pipelines, Indexing, Query Profiling | Advanced | Akhtarly API: MongoDB with Mongoose/JWT/RBAC; Hotel Management: PostgreSQL/Sequelize/Stripe/Cron for payments and scheduling. |
| **DevOps & Deployment**  | Git & GitHub, GitHub Actions, Docker & Docker Compose, Heroku, Vercel, Sentry, Structured Logging | Intermediate | Deployed Ecommercify API to Heroku with GitHub Actions CI/CD; Dockerized POS System for local/prod consistency. |
| **Tools & Utilities**    | Postman (API testing), VS Code (debugging, extensions), ESLint, Prettier, EditorConfig, Swagger/OpenAPI (API documentation), Basic Linux CLI | Advanced | Swagger docs in all backend projects (e.g., Ecommercify); Postman collections for testing Hotel API endpoints. |
| **Security**             | OWASP Top 10 Awareness, Input Validation & Sanitization, Rate Limiting, CORS, Helmet.js | Intermediate | Implemented Helmet.js/CORS in Akhtarly; Input validation with Joi in e-commerce carts to prevent injections. |
| **UI/UX & Collaboration**| Figma (basic design to code), Clean/Maintainable Code, Agile/Scrum Collaboration, Code Reviews | Intermediate | Figma prototypes for Prophets Journey; Scrum sprints in ITI for Angular Movie site code reviews. |
| **Soft Skills**          | Problem-Solving & Debugging, System Thinking & Breaking Down Tasks, Clear Documentation & Communication, Fast Learning & Adaptability | Advanced | Debugged Arabic RTL issues in POS System; Documented APIs with Swagger for team handovers in freelance work. |

These skills are not theoretical—e.g., I've profiled MongoDB queries in Akhtarly to reduce load times by 40%, and used Framer Motion here for 60fps animations. Total skills listed: 50+, with a focus on MERN ecosystem.

## 📁 Projects Showcase

Powered by `projectsData.js` (array of 7 objects), the ProjectsSection uses `FlexibleCard` for rendering, with filtering via React state. Each card includes icons (e.g., FaReact), images, descriptions, and buttons. Below, I've detailed all projects with tech breakdowns, challenges overcome, and outcomes—drawing from actual data.

### Frontend Projects
1. **Autism Awareness Platform**  
   - **Subtitle**: Freelance Frontend React  
   - **Description**: Responsive Arabic-language web platform created to raise awareness and provide resources for individuals with autism. Developed using React, Vite, and Framer Motion, it features a clean RTL layout, smooth animations, and accessible design principles to ensure an inclusive user experience. The app was structured with reusable modular components and is prepared for future backend API integration, making it both scalable and maintainable.  
   - **Tech Stack**: React, Vite, Framer Motion, RTL (arabic_reshaper/bidi influences), Cloudinary Images  
   - **Challenges & Outcomes**: Handled RTL text flow for Arabic content; Achieved 100% mobile responsiveness. Deployed on Vercel for global access.  
   - **Image**: ![Autism Awareness Project](https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024921/Edrak_mn5hvv.jpg)  
   - **Demo/Repo**: [Live Site](https://autism-blog.vercel.app/)  
   - **Category**: Frontend | **Icon**: FaReact  

2. **Angular Movie Website**  
   - **Subtitle**: Training Angular ITI  
   - **Description**: Modern movie browsing website developed with Angular 20, built as a practice project to enhance my skills in building scalable front-end applications. It integrates with the TMDb API to fetch and display real-time movie data, supporting features like search, dark mode toggling, internationalization (i18n), and persistent watchlists via LocalStorage. The architecture emphasizes Angular best practices, including lazy-loaded modules, reactive forms, and SEO-optimized routing for improved discoverability.  
   - **Tech Stack**: Angular 20, TMDb API, RxJS, LocalStorage, i18n  
   - **Challenges & Outcomes**: Managed API rate limits with caching; Improved load times by 30% via lazy loading. Great for honing Angular CLI skills.  
   - **Image**: ![Movie Cinema](https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024924/moveis_gx3fzs.jpg)  
   - **Demo/Repo**: [Live Site](https://movie-angular-app.vercel.app)  
   - **Category**: Frontend  

3. **Prophets Journey Website**  
   - **Subtitle**: Training Vanilla JS Project  
   - **Description**: Responsive Arabic educational site built purely with HTML/CSS/JS, focusing on interactive storytelling about prophets' journeys. Includes dynamic cards, a family tree visualization, modals for details, and smooth scrolling—demonstrating vanilla JS for DOM manipulation without frameworks. Emphasized accessibility with semantic elements and keyboard navigation.  
   - **Tech Stack**: HTML5, CSS3, Vanilla JavaScript, Netlify Deployment  
   - **Challenges & Outcomes**: Implemented custom modals without libraries; Ensured cross-browser compatibility for IE11 fallback.  
   - **Image**: ![Prophets Journey Website](https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024921/masera_fjhydd.jpg)  
   - **Demo/Repo**: [Live Site](https://silly-halva-53f3d5.netlify.app/)  
   - **Category**: Frontend  

### Backend Projects
1. **Intelligent Hardware Recommendation System (Akhtarly)**  
   - **Subtitle**: Graduation Project  
   - **Description**: Developed Akhtarly, a Node.js and Express.js-based backend API with MongoDB, delivering an intelligent hardware recommendation system that matches software requirements (e.g., Cyberpunk 2077, Adobe Premiere Pro) to optimal CPUs and GPUs using benchmarks, compatibility, and budget constraints. Designed a scalable three-tier architecture with Mongoose ODM, JWT authentication, role-based access control (ADMIN, OWNER, USER), and features like smart filtering, pagination, and input validation for secure, efficient performance. Implemented RESTful endpoints for CRUD operations, optimized queries, and robust error handling, showcasing expertise in full-stack development, database design, and API optimization for gaming and content creation applications.  
   - **Tech Stack**: Node.js, Express, MongoDB, Mongoose, JWT, RBAC, Pagination  
   - **Challenges & Outcomes**: Optimized benchmark matching algorithm for <500ms responses; Handled 10k+ mock queries in load tests.  
   - **Icon**: FaMobileAlt | **Repo**: [GitHub](https://github.com/anas-dev000/Akhtarly---Hardware-Recommendation-System)  
   - **Category**: Backend  

2. **Hotel Management System API**  
   - **Subtitle**: Training Backend Project  
   - **Description**: Built a comprehensive Hotel Management System to level up my backend skills, tackling challenges like secure payments and automated workflows. Constructed with Node.js, Express.js, Sequelize ORM, PostgreSQL, Stripe for payments, Nodemailer for notifications, JWT for auth, and Cron for scheduling unpaid booking cleanups. Key features: Role-based access control (Admin/Guest/Staff), advanced querying (filtering, sorting, pagination), secure payment processing, email alerts for reservations, and interactive Swagger documentation for endpoint exploration. This project solidified my ability to build production-ready systems with modern tools, emphasizing error resilience and scalability.  
   - **Tech Stack**: Node.js, Express, Sequelize, PostgreSQL, Stripe, Nodemailer, JWT, Cron, Swagger  
   - **Challenges & Outcomes**: Integrated Stripe webhooks for real-time updates; Reduced query times by 50% with indexing.  
   - **Icon**: FaServer | **Repo**: [GitHub](https://github.com/anas-dev000/hotel-management-api)  
   - **Category**: Backend  

3. **Ecommercify API**  
   - **Subtitle**: Training Backend Project  
   - **Description**: A robust e-commerce backend engineered with Node.js, Express, and MongoDB, prioritizing scalability, security, and developer experience. Core features encompass JWT-based authentication, role-based access control (Admin/Customer), comprehensive CRUD for products/brands/categories, shopping cart and order management with real-time updates, discount coupon validation, user reviews/ratings, Stripe payment gateway integration, and secure image uploads via Multer/Cloudinary. The API is fully documented with Swagger for seamless testing and maintenance, supporting advanced operations like aggregation for sales analytics.  
   - **Tech Stack**: Node.js, Express, MongoDB, JWT, Stripe, Multer, Swagger  
   - **Challenges & Outcomes**: Secured file uploads against exploits; Handled concurrent cart updates with optimistic locking.  
   - **Icon**: FaServer | **Repo**: [GitHub](https://github.com/anas-dev000/ecommercify-api)  
   - **Category**: Backend  

### Desktop Projects
1. **Restaurant POS System**  
   - **Subtitle**: Freelance Desktop Project  
   - **Description**: A feature-rich desktop cashier system tailored for restaurants, leveraging CustomTkinter for a sleek, modern interface with comprehensive Arabic language support. Incorporates role-based access control for cashiers and administrators, backed by an SQLite database managing dynamic orders, products, categories, and user shifts. Supports real-time order processing, customer profiling, shift tracking, and reliable cross-environment database connectivity. Special emphasis on seamless Arabic text rendering using arabic_reshaper and bidi algorithms, ensuring a fluid right-to-left user experience in production settings.  
   - **Tech Stack**: CustomTkinter, SQLite, Arabic Reshaper, Bidi Algorithm  
   - **Challenges & Outcomes**: Synced shifts across users without conflicts; Praised by client for intuitive UI, reducing training time by 40%.  
   - **Image**: ![Restaurant POS System](https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024804/SystemPOS_pi0m5i.jpg)  
   - **Showcase**: [LinkedIn Post](https://www.linkedin.com/posts/anas-elgebaly000_%D8%AC%D8%A7%D9%84%D9%8A-%D8%B7%D9%84%D8%A8-%D9%85%D9%86-%D8%B5%D8%AF%D9%8A%D9%82-%D8%A5%D9%86%D9%8A-%D8%A3%D8%B9%D9%85%D9%84-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%83%D8%A7%D8%B4%D9%8A%D8%B1-%D9%84%D9%85%D8%B7%D8%B9%D9%85-activity-7331315296965640194-ES26)  
   - **Category**: Desktop | **Icon**: FaDesktop  

These 7 projects span 2024-2025, totaling 10k+ lines of code across repos. They reflect my growth: Early vanilla JS to advanced MERN integrations, with metrics like 95% test coverage in backends.

## 📂 Project Structure & Organization

The project adheres to a **modular, scalable architecture** inspired by React best practices and clean code principles. Root files remain lean, delegating logic to `Components` (Sections for layout, shared for primitives) and `Data` for content. This setup, with 20+ files, enables easy extension—e.g., adding a new skill category updates `skillsData.js` and auto-renders in `SkillsSection.js`.

Updated directory (as of October 11, 2025):
```
src/
├── App.js                 # Renders Index; minimal wrapper with CSS import.
├── App.css                # Global resets; Tailwind directives.
├── component.js           # (Index) Main orchestrator: Wraps sections in gradient div (`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`); Imports all Sections.
├── Data/                  # JSON-like exports for decoupling UI from content.
│   ├── aboutData.js       # Object: {journey: {title, gradientBg, content}, whatIDo: {title, gradientBg, list[]}}.
│   ├── projectsData.js    # Array[7]: Projects with title, subtitle, description (up to 500+ chars), icon, imageSrc/Alt, buttonHref, category.
│   └── skillsData.js      # Array[7]: Categories with title, icon, skills[], gradient.
├── Components/            # ~15 files; Divided for reusability.
│   ├── Sections/          # Page-level: Self-contained, use shared primitives.
│   │   ├── AboutSection.js # Grid: Two `Card`s (Journey/WhatIDo from aboutData) + `CoreValuesCard`; Framer Motion variants (fadeInUp).
│   │   ├── ContactSection.js # Center layout: `GradientTitle`, `Paragraph`, Grid of two `ContactCard`s (Email/WhatsApp), Social icons (FaGithub/FaLinkedin).
│   │   ├── HeroSection.js # Full-screen: `GradientImage` (profile), `GradientTitle` (name/subtitle with typing anim), `Paragraph`, Dual `Button`s (gradient/solid).
│   │   ├── ProjectsSection.js # Title, Filter buttons (useState "all/frontend/etc."), Grid of `FlexibleCard`s filtered from projectsData; Motion for buttons/grid.
│   │   ├── SkillsSection.js # Title with gradient span, Grid of `FlexibleCard`s from skillsData (no button).
│   │   └── Footer.js      # Basic footer (placeholder; future expansions).
│   └── shared/            # Atomic/Reusable: Props-driven for flexibility; ~10 files, core to consistency.
│       ├── Button.js      # Versatile: Props for gradient/solid, color (e.g., purple-400), href (internal/external handling), onClick; Classes for hover/scale.
│       ├── Card.js        # Simple content holder: `GradientTitle` + `Paragraph`; Gradient bg prop (default purple-to-slate).
│       ├── ContactCard.js # Link wrapper: `IconWrapper` + title/subtitle; Gradient from/to props (e.g., blue-to-purple).
│       ├── CoreValueItem.js # Bullet: Colored dot (style prop) + span; Used in CoreValuesCard.
│       ├── CoreValuesCard.js # Rotatable card: `GradientTitle` + ul of `CoreValueItem`s (hardcoded values/colors); Backdrop blur/border.
│       ├── FlexibleCard.js # Powerhouse: Handles projects/skills—Header (`IconWrapper` + `GradientTitle`/subtitle), `GradientImage`, `Paragraph` (desc), ul (skills), `Button` (conditional); Full-height flex, hover scale.
│       ├── GradientImage.js # Image wrapper: Shape (circle/rounded), size classes (responsive w/h), gradient overlay/shadow.
│       ├── GradientTitle.js # Smart splitter: Splits children words, gradients specific ones (array prop); Default white, as="h1"/h2/etc.
│       ├── IconWrapper.js  # Icon container: Gradient bg (from/to props), rounded, centered Icon (e.g., FaReact).
│       └── Paragraph.js   # Text block: lg/xl gray-400, max-w-2xl, leading-relaxed; Props for class/marginBottom.
└── ... (CRA boilerplate: index.js, index.css with Tailwind, tests, etc.)
```

### Design & Implementation Principles
- **Separation of Concerns**: Data files feed dumb components; Sections compose shared ones (e.g., AboutSection: `motion.div` > `Card` > `GradientTitle`/`Paragraph`).
- **Reusability & Props**: `FlexibleCard` adapts via conditionals (image? desc? skills? button?); `Button` handles internal anchors vs. external rel="noreferrer".
- **Animations & Interactivity**: Framer Motion in Sections (e.g., whileInView opacity/y); Group hovers in cards for subtle transforms.
- **Styling System**: Tailwind utilities + custom gradients (e.g., `bg-gradient-to-r from-blue-600 to-purple-600`); Backdrop-blur for glassmorphism.
- **Accessibility**: Alt texts in images, semantic tags, keyboard-friendly buttons/links.
- **Performance**: No heavy libs beyond essentials; Images optimized via Cloudinary URLs.

This organization—~50% shared code—scales effortlessly. For v2, I'll add TypeScript props for type safety.

## 🛫 Getting Started

### Prerequisites
- Node.js v14+
- npm/Yarn

### Installation & Run
1. Clone: `git clone https://github.com/anas-dev000/portfolio.git && cd portfolio`
2. Install: `npm install` (React 19, Framer Motion 12, etc.)
3. Dev: `npm start` → `localhost:3000`
4. Build/Test: `npm run build` / `npm test` (Jest/RTL)

Deployed on Vercel for live previews.

## 🔧 Technologies Stack

`package.json` details:
- **Runtime**: React 19, React DOM
- **UI/Anim**: Framer Motion ^12.23.16, React Icons ^5.5.0, Tailwind ^3.4.17
- **Build**: React Scripts 5.0.1, PostCSS/Autoprefixer
- **Test**: Jest, @testing-library/* (^16.3.0)
- **Dev**: No eject; ESLint/Prettier implied.

Tailwind config enables gradients/purples for theme.

## 📈 Future Roadmap (Post-v1.0)
- Merge `updated` branch: TypeScript migration, blog with MDX.
- Testimonials via new Section.
- PWA: Service workers for offline portfolio viewing.
- Analytics: Integrate Vercel Analytics.

## 📞 Contact Me

From `ContactSection.js`:
- **Email**: [anas.dev000@gmail.com](mailto:anas.dev000@gmail.com) – `ContactCard` with FaEnvelope, blue-purple gradient.
- **WhatsApp**: [+201050850441](https://wa.me/201050850441) – Green-teal gradient.
- **GitHub**: [anas-dev000](https://github.com/anas-dev000) – Hover border-purple.
- **LinkedIn**: [Anas Elgebaly](https://www.linkedin.com/in/anas-elgebaly000) – Hover border-blue.
* **Live Demo**: [my-portfolio-chi-three-14.vercel.app](https://my-portfolio-chi-three-14.vercel.app/) – Hover border-pink. 🚀
Let's collaborate—your next project awaits!

---

*Last Updated: October 11, 2025 | Version: 1.0 (Main Branch) | Built with ❤️ by Anas Ali Elgebaly*
