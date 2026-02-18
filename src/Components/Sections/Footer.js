import { FaPhone } from "react-icons/fa";
import Paragraph from "../shared/Paragraph";

const Footer = () => {
  return (
    <footer className="mt-8 px-4 relative z-20">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <Paragraph className="text-gray-400 text-[10px] md:text-sm tracking-[0.15em] opacity-80 uppercase leading-tight">
          © 2025 ANAS ALI ELGEBALY. BUILT WITH PASSION & CLEAN CODE.
        </Paragraph>

        {/* Phone number */}
        <div className="flex items-center justify-center gap-2 opacity-90 leading-tight">
          <FaPhone className="w-3 h-3 text-purple-500/80" />
          <span className="text-gray-300 font-medium text-xs md:text-base tracking-widest">+20 105 085 0441</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
