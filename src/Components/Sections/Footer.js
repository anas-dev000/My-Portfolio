import { FaPhone } from "react-icons/fa";
import Paragraph from "../shared/Paragraph";

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-gradient-to-r from-slate-900 to-purple-900/50 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <Paragraph className="text-gray-300 text-sm md:text-base">
          © 2025 Anas Ali Elgebaly. Built with passion and clean code.
        </Paragraph>

        {/* Phone number */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-purple-300 font-medium text-sm md:text-base">+20 105 085 0441</span>
          <FaPhone className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
