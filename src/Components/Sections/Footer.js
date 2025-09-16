import { FaPhone } from "react-icons/fa";
import Paragraph from "../shared/Paragraph";

const Footer = () => {
  return (
    <footer className="py-4 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <Paragraph className="text-gray-400">
          © 2025 Anas Ali Elgebaly. Built with passion and clean code.
        </Paragraph>

        {/* Phone number */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-gray-200 font-medium">+20 105 085 0441</span>
          <FaPhone className="w-6 h-6 text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
