import {
  FaServer,
  FaReact,
  FaDesktop,
  FaJs,
  FaMobileAlt,
} from "react-icons/fa";

export const projects = [
  {
    title: "Faltarah System – فلترة",
    subtitle: "Freelance Full Stack Multi-Company Platform",
    description:
      "A powerful multi-tenant management system built for water filter & AC maintenance companies. Features full Arabic RTL support, role-based dashboards (Manager & Employee), comprehensive business operations (clients, invoices, installments, maintenance, products, suppliers, reports), automated subscription handling with free trial, cron-based email reminders, and data cleanup for expired trials. Includes AI-powered natural language reporting, PDF invoice/report generation, real-time charts, and a fully independent data structure per company. Tech stack: Fastify + Prisma + PostgreSQL (Backend), React + Tailwind + Framer Motion (Manager/Employee Dashboard), Angular 20 + Bootstrap (Admin & Landing), Puppeteer, Nodemailer, JWT, Cloudinary.",
    icon: FaServer,
    imageSrc:
      "https://res.cloudinary.com/dbgthgcgh/image/upload/v1764537308/Gemini_Generated_Image_n3jgiin3jgiin3jg_muga2i.png",
    imageAlt: "Faltarah System Dashboard",
    buttonHref: "https://lnkd.in/dYZ4deDc",
    showButton: true,
    category: "frontend",
  },

  {
    title: "Amlak Construction & Supplies",
    subtitle: "Freelance Frontend Web",
    description:
      "A professional Arabic-only static corporate website built for Amlak Construction & Supplies, a leading engineering company with over 15 years of experience. Developed using React, Vite, TypeScript, Tailwind CSS, and Framer Motion, it delivers a fully RTL-optimized, mobile-first design with smooth modern animations, Dark/Light Mode support, and SEO-optimized semantic structure. The project showcases a high-end business presentation including services, projects gallery with popups, company profile, and seamless contact experience with WhatsApp integration and live Google Map.",
    icon: FaReact,
    imageSrc:
      "https://res.cloudinary.com/dbgthgcgh/image/upload/v1764538668/Gemini_Generated_Image_t3ma38t3ma38t3ma_fx9oql.png",
    imageAlt: "Amlak Construction Website",
    buttonHref: "https://amlak-company.vercel.app/",
    showButton: true,
    category: "frontend",
  },

  ,
  {
    title: "Autism Awareness Platform",
    subtitle: "Freelance Frontend React",
    description:
      "This project is a responsive Arabic-language web platform created to raise awareness and provide resources for individuals with autism. Developed using React, Vite, and Framer Motion, it features a clean RTL layout, smooth animations, and accessible design principles to ensure an inclusive user experience. The app was structured with reusable modular components and is prepared for future backend API integration, making it both scalable and maintainable.",
    icon: FaReact,
    imageSrc:
      "https://res.cloudinary.com/dbgthgcgh/image/upload/v1764539588/Gemini_Generated_Image_z63twbz63twbz63t_zz6xln.png",
    imageAlt: "Autism Awareness Project",
    buttonHref: "https://autism-blog.vercel.app/",
    showButton: true,
    category: "frontend",
  },
  {
    title: "Restaurant POS System",
    subtitle: "Freelance Desktop Project",
    description:
      "This project is a desktop cashier system designed for restaurants, built with CustomTkinter to provide a modern, user-friendly interface with full Arabic language support. It features role-based access control for cashiers and administrators, secured with an SQLite database that manages orders, products, categories, and user shifts dynamically. The system supports real-time order processing, customer management, and shift tracking, while ensuring reliable database connectivity across both development and production environments. Special care was taken to integrate proper Arabic text rendering using arabic_reshaper and bidi, delivering a seamless right-to-left experience.",
    icon: FaDesktop,
    imageSrc:
      "https://res.cloudinary.com/dbgthgcgh/image/upload/v1761092749/C2410D58-CBC0-4EBC-B7B3-86E573246C41_fjzyaw.png",
    imageAlt: "Restaurant POS System",
    buttonHref:
      "https://www.linkedin.com/posts/anas-elgebaly000_%D8%AC%D8%A7%D9%84%D9%8A-%D8%B7%D9%84%D8%A8-%D9%85%D9%86-%D8%B5%D8%AF%D9%8A%D9%82-%D8%A5%D9%86%D9%8A-%D8%A3%D8%B9%D9%85%D9%84-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%83%D8%A7%D8%B4%D9%8A%D8%B1-%D9%84%D9%85%D8%B7%D8%B9%D9%85-activity-7331315296965640194-ES26",
    showButton: true,
    category: "desktop",
  },
  {
    title: "Angular Movie Website",
    subtitle: "Training Angular ITI",
    description:
      "This project is a modern movie browsing website developed with Angular 20, built as a practice project to enhance my skills in building scalable front-end applications. It integrates with the TMDb API to fetch and display real-time movie data, including details, trailers, and recommendations. The app features a responsive design, dark mode support, internationalization, and a personalized watchlist stored in LocalStorage. By developing this project, I focused on improving my understanding of Angular’s core concepts, API handling, state management, and creating a smooth user experience with dynamic and SEO-friendly content.",
    icon: FaJs,
    imageSrc:
      "https://res.cloudinary.com/dbgthgcgh/image/upload/v1761092752/30A2CA62-3A02-40B3-9166-149B059B646D_xcqhzu.png",
    imageAlt: "Movie Cinema",
    buttonHref: "https://movie-angular-app.vercel.app",
    showButton: true,
    category: "frontend",
  },
  {
    title: "Prophets Journey",
    subtitle: "Training Vanilla JS Project",
    description:
      "This project is a fully responsive Arabic website called “Prophets Journey”, created as a training exercise to strengthen my front-end development skills. It was built entirely with HTML, CSS, and vanilla JavaScript, without using any external libraries or frameworks. The site includes a hero section, an interactive card system for exploring stories, a dedicated family tree page, and a modal feature for displaying details in a clean way. The goal of the project was to practice writing structured, accessible code while focusing on layout, interactivity, and overall user experience.",
    icon: FaJs,
    buttonHref: "https://silly-halva-53f3d5.netlify.app/",
    showButton: true,
    imageSrc:
      "https://res.cloudinary.com/dbgthgcgh/image/upload/v1761092740/F70AFC3D-5CF5-4A84-A027-010ECF43ACCC_cstdzb.png",
    imageAlt: "Prophets Journey Website",
    category: "frontend",
  },
  {
    title: "Intelligent Hardware Recommendation System",
    subtitle: "Graduation Project",
    description:
      "Developed Akhtarly, a Node.js and Express.js-based backend API with MongoDB, delivering an intelligent hardware recommendation system that matches software requirements (e.g., Cyberpunk 2077, Adobe Premiere Pro) to optimal CPUs and GPUs using benchmarks, compatibility, and budget constraints. Designed a scalable three-tier architecture with Mongoose ODM, JWT authentication, role-based access control (ADMIN, OWNER, USER), and features like smart filtering, pagination, and input validation for secure, efficient performance. Implemented RESTful endpoints for CRUD operations, optimized queries, and robust error handling, showcasing expertise in full-stack development, database design, and API optimization for gaming and content creation applications.",
    icon: FaMobileAlt,
    buttonHref:
      "https://github.com/anas-dev000/Akhtarly---Hardware-Recommendation-System",
    showButton: true,
    category: "backend",
  },
  {
    title: "GraphQL Dashboard Management System",
    subtitle: "Training Full Stack GraphQL",
    description:
      "A full-stack dashboard application built using GraphQL, React, and Node.js to manage users and companies with clean and modern UI/UX. The app features a responsive tab-based interface with CRUD operations for users and companies, real-time UI updates using Apollo Client, and an optimized backend with DataLoader for batching MongoDB queries. Designed with Tailwind CSS for a professional dashboard experience, this project demonstrates expertise in GraphQL schema design, client-server communication, and scalable full-stack architecture.",
    icon: FaServer,
    buttonHref: "https://github.com/anas-dev000/graphql-dashboard-app",
    showButton: true,
    category: "fullstack",
  },
  {
    title: "Hotel Management System API",
    subtitle: "Training Backend Project",
    description:
      "I built a Hotel Management System to level up my skills and tackle new challenges. Built with Node.js, Express.js, Sequelize, PostgreSQL, Stripe, Nodemailer, JWT, and Cron, it showcases scalable backend development. Features include role-based access control, advanced querying with filtering, sorting, and pagination, secure Stripe payments, email notifications, automated cleanup of unpaid bookings, and clear Swagger documentation. This project strengthened my expertise in modern tools, problem-solving, and building robust systems. Check out the full project on GitHub.",
    icon: FaServer,
    buttonHref: "https://github.com/anas-dev000/hotel-management-api",
    showButton: true,
    category: "backend",
  },
  {
    title: "Ecommercify API",
    subtitle: "Training Backend Project",
    description:
      "A complete e-commerce backend built with Node.js, Express, and MongoDB, designed for scalability and security. Features include JWT authentication, role-based access control, product, brand, and category management, shopping cart and order processing, discount coupons, reviews, and Stripe payment integration. The API also supports image uploads and provides full Swagger documentation for maintainable endpoints.",
    icon: FaServer,
    buttonHref: "https://github.com/anas-dev000/ecommercify-api",
    showButton: true,
    category: "backend",
  },
];
