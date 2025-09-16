import { FaServer, FaCode, FaDatabase } from "react-icons/fa";
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
            title="Ecommercify API"
            subtitle="Training Backend Project"
            description="A complete e-commerce backend built with Node.js, Express, and MongoDB, designed for scalability and security. Features include JWT authentication, role-based access control, product, brand, and category management, shopping cart and order processing, discount coupons, reviews, and Stripe payment integration. The API also supports image uploads and provides full Swagger documentation for maintainable endpoints."
            icon={FaServer}
            imageShape="rounded"
            buttonHref="https://autism-blog.vercel.app/"
            showButton={true}
          />
          <FlexibleCard
            title="Hotel Management System API"
            subtitle="Training Backend Project"
            description="I built a Hotel Management System to level up my skills and tackle new challenges. Built with Node.js, Express.js, Sequelize, PostgreSQL, Stripe, Nodemailer, JWT, and Cron, it showcases scalable backend development. Features include role-based access control, advanced querying with filtering, sorting, and pagination, secure Stripe payments, email notifications, automated cleanup of unpaid bookings, and clear Swagger documentation. This project strengthened my expertise in modern tools, problem-solving, and building robust systems. Check out the full project on GitHub."
            icon={FaServer}
            imageShape="rounded"
            buttonHref="https://autism-blog.vercel.app/"
            showButton={true}
          />

          <FlexibleCard
            title="Autism Awareness Platform"
            subtitle="Freelance Frontend Project"
            description="A responsive Arabic-language web platform supporting individuals with Autism. Built with React and Framer Motion, featuring RTL layout, accessibility features, and interactive content."
            icon={FaCode}
            imageSrc="https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024921/Edrak_mn5hvv.jpg"
            imageAlt="Autism Awareness Project"
            imageShape="rounded"
            buttonHref="https://autism-blog.vercel.app/"
            showButton={true}
          />

          <FlexibleCard
            title="Restaurant POS System"
            subtitle="Freelance Desktop Project"
            description="A desktop point-of-sale system for daily restaurant operations. Handles 200+ transactions per day with sales tracking and reporting features."
            icon={FaDatabase}
            imageSrc="https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024921/masera_fjhydd.jpg"
            imageAlt="Restaurant POS System"
            buttonHref="https://autism-blog.vercel.app/"
            imageShape="rounded"
            showButton={true}
          />

          <FlexibleCard
            title="Restaurant POS System"
            subtitle="Freelance Desktop Project"
            description="A desktop point-of-sale system for daily restaurant operations. Handles 200+ transactions per day with sales tracking and reporting features."
            icon={FaDatabase}
            imageSrc="https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024804/SystemPOS_pi0m5i.jpg"
            imageAlt="Restaurant POS System"
            imageShape="rounded"
            buttonHref="https://autism-blog.vercel.app/"
            showButton={true}
          />
          <FlexibleCard
            title="Restaurant POS System"
            subtitle="Freelance Desktop Project"
            description="A desktop point-of-sale system for daily restaurant operations. Handles 200+ transactions per day with sales tracking and reporting features."
            icon={FaDatabase}
            imageSrc="https://res.cloudinary.com/dbgthgcgh/image/upload/v1758024924/moveis_gx3fzs.jpg"
            imageAlt="Restaurant POS System"
            buttonHref="https://autism-blog.vercel.app/"
            imageShape="rounded"
            showButton={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
