import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactCard from "../shared/ContactCard";
import GradientTitle from "../shared/GradientTitle";
import Paragraph from "../shared/Paragraph";

const ContactSection = () => {
  return (
    <section className="py-36 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
      <div className="max-w-4xl mx-auto text-center" id="contact">
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
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ContactCard
            icon={FaEnvelope}
            title="Send Email"
            subtitle="anas.dev000@gmail.com"
            href="mailto:anas.dev000@gmail.com"
            gradientFrom="blue-600"
            gradientTo="purple-600"
          />

          <ContactCard
            icon={FaWhatsapp}
            title="WhatsApp"
            subtitle="+201050850441"
            href="https://wa.me/201050850441"
            gradientFrom="green-600"
            gradientTo="teal-600"
          />
        </div>

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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
