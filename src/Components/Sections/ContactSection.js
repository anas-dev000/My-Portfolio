import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactCard from "../shared/ContactCard";
import GradientTitle from "../shared/GradientTitle";
import Paragraph from "../shared/Paragraph";
import Footer from "./Footer";

// Variants for container & items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay بين العناصر
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-36 px-4 bg-gradient-to-r h-screen from-slate-900/50 to-purple-900/50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <GradientTitle
          gradientWords={["Connect"]}
          className="text-4xl md:text-5xl mb-8"
        >
          Let's Connect
        </GradientTitle>

        <Paragraph className="mb-12 text-xl text-gray-300">
          Ready to bring your ideas to life? Let's discuss your next project.
        </Paragraph>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: FaEnvelope,
              title: "Send Email",
              subtitle: "anas.dev000@gmail.com",
              href: "mailto:anas.dev000@gmail.com",
              gradientFrom: "blue-600",
              gradientTo: "purple-600",
            },
            {
              icon: FaWhatsapp,
              title: "WhatsApp",
              subtitle: "+201050850441",
              href: "https://wa.me/201050850441",
              gradientFrom: "green-600",
              gradientTo: "teal-600",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ContactCard {...card} />
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/anas-dev000"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800/50 rounded-full border border-gray-600 hover:border-purple-400 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <FaGithub className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/anas-elgebaly000"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800/50 rounded-full border border-gray-600 hover:border-blue-400 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <FaLinkedin className="w-6 h-6 text-white" />
          </a>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
