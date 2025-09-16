import {
  FaServer,
  FaReact,
  FaDesktop,
  FaJs,
  FaMobileAlt,
} from "react-icons/fa";
import FlexibleCard from "../shared/FlexibleCard";
import GradientTitle from "../shared/GradientTitle";

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto" id="projects">
        <GradientTitle
          gradientWords={["Projects"]}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          My Projects
        </GradientTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FlexibleCard
            title="Autism Awareness Platform"
            subtitle="Freelance Frontend React"
            description="This project is a responsive Arabic-language web platform created to raise awareness and provide resources for individuals with autism. Developed using React, Vite, and Framer Motion, it features a clean RTL layout, smooth animations, and accessible design principles to ensure an inclusive user experience. The app was structured with reusable modular components and is prepared for future backend API integration, making it both scalable and maintainable."
            icon={FaReact}
            imageSrc="https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024921/Edrak_mn5hvv.jpg"
            imageAlt="Autism Awareness Project"
            imageShape="rounded"
            buttonHref="https://autism-blog.vercel.app/"
            showButton={true}
          />

          <FlexibleCard
            title="Restaurant POS System"
            subtitle="Freelance Desktop Project"
            description="This project is a desktop cashier system designed for restaurants, built with CustomTkinter to provide a modern, user-friendly interface with full Arabic language support. It features role-based access control for cashiers and administrators, secured with an SQLite database that manages orders, products, categories, and user shifts dynamically. The system supports real-time order processing, customer management, and shift tracking, while ensuring reliable database connectivity across both development and production environments. Special care was taken to integrate proper Arabic text rendering using arabic_reshaper and bidi, delivering a seamless right-to-left experience."
            icon={FaDesktop}
            imageSrc="https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024804/SystemPOS_pi0m5i.jpg"
            imageAlt="Restaurant POS System"
            imageShape="rounded"
            buttonHref="https://www.linkedin.com/posts/anas-elgebaly000_%D8%AC%D8%A7%D9%84%D9%8A-%D8%B7%D9%84%D8%A8-%D9%85%D9%86-%D8%B5%D8%AF%D9%8A%D9%82-%D8%A5%D9%86%D9%8A-%D8%A3%D8%B9%D9%85%D9%84-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%83%D8%A7%D8%B4%D9%8A%D8%B1-%D9%84%D9%85%D8%B7%D8%B9%D9%85-activity-7331315296965640194-ES26?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECbU6QBD2lHQcu5tDCz0Psbw6SiclkS0ak"
            showButton={true}
          />
          <FlexibleCard
            title="Angular Movie Website"
            subtitle="Training Angular ITI"
            description="This project is a modern movie browsing website developed with Angular 20, built as a practice project to enhance my skills in building scalable front-end applications. It integrates with the TMDb API to fetch and display real-time movie data, including details, trailers, and recommendations. The app features a responsive design, dark mode support, internationalization, and a personalized watchlist stored in LocalStorage. By developing this project, I focused on improving my understanding of Angular’s core concepts, API handling, state management, and creating a smooth user experience with dynamic and SEO-friendly content."
            icon={FaJs}
            imageSrc="https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024924/moveis_gx3fzs.jpg"
            imageAlt="Movie Cinema"
            buttonHref="https://movie-angular-app.vercel.app"
            imageShape="rounded"
            showButton={true}
          />

          <FlexibleCard
            title="Prophets Journey"
            subtitle="Training Vanilla JS Project"
            description="This project is a fully responsive Arabic website called “Prophets Journey”, created as a training exercise to strengthen my front-end development skills. It was built entirely with HTML, CSS, and vanilla JavaScript, without using any external libraries or frameworks. The site includes a hero section, an interactive card system for exploring stories, a dedicated family tree page, and a modal feature for displaying details in a clean way. The goal of the project was to practice writing structured, accessible code while focusing on layout, interactivity, and overall user experience."
            icon={FaJs}
            imageSrc="https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024921/masera_fjhydd.jpg"
            imageAlt="Restaurant POS System"
            buttonHref="https://lnkd.in/dgcXb7_W"
            imageShape="rounded"
            showButton={true}
          />

          <FlexibleCard
            title="Intelligent Hardware Recommendation System"
            subtitle="Graduation Project"
            description="Developed Akhtarly, a Node.js and Express.js-based backend API with MongoDB, delivering an intelligent hardware recommendation system that matches software requirements (e.g., Cyberpunk 2077, Adobe Premiere Pro) to optimal CPUs and GPUs using benchmarks, compatibility, and budget constraints. Designed a scalable three-tier architecture with Mongoose ODM, JWT authentication, role-based access control (ADMIN, OWNER, USER), and features like smart filtering, pagination, and input validation for secure, efficient performance. Implemented RESTful endpoints for CRUD operations, optimized queries, and robust error handling, showcasing expertise in full-stack development, database design, and API optimization for gaming and content creation applications."
            icon={FaMobileAlt}
            imageShape="rounded"
            buttonHref="https://github.com/anas-dev000/Akhtarly---Hardware-Recommendation-System"
            showButton={true}
          />

          <FlexibleCard
            title="Hotel Management System API"
            subtitle="Training Backend Project"
            description="I built a Hotel Management System to level up my skills and tackle new challenges. Built with Node.js, Express.js, Sequelize, PostgreSQL, Stripe, Nodemailer, JWT, and Cron, it showcases scalable backend development. Features include role-based access control, advanced querying with filtering, sorting, and pagination, secure Stripe payments, email notifications, automated cleanup of unpaid bookings, and clear Swagger documentation. This project strengthened my expertise in modern tools, problem-solving, and building robust systems. Check out the full project on GitHub."
            icon={FaServer}
            imageShape="rounded"
            buttonHref="https://github.com/anas-dev000/hotel-management-api"
            showButton={true}
          />

          <FlexibleCard
            title="Ecommercify API"
            subtitle="Training Backend Project"
            description="A complete e-commerce backend built with Node.js, Express, and MongoDB, designed for scalability and security. Features include JWT authentication, role-based access control, product, brand, and category management, shopping cart and order processing, discount coupons, reviews, and Stripe payment integration. The API also supports image uploads and provides full Swagger documentation for maintainable endpoints."
            icon={FaServer}
            imageShape="rounded"
            buttonHref="https://github.com/anas-dev000/ecommercify-api"
            showButton={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
