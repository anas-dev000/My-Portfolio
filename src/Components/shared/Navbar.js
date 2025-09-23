import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: FaHome, label: "Home", to: "/" },
    { icon: FaUser, label: "About", to: "/about" },
    { icon: FaProjectDiagram, label: "Projects", to: "/projects" },
    { icon: FaCode, label: "Skills", to: "/skills" },
    { icon: FaEnvelope, label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <button
        className="l:hidden fixed top-4 left-4 z-30 p-2 rounded-lg text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "" : <FaBars size={24} />}
      </button>

      <nav
        className={`fixed top-0 left-0 w-full h-16 z-40
          flex items-center justify-center gap-6 py-4
          transition-all duration-300
          ${
            isOpen
              ? "translate-y-0 pointer-events-auto"
              : "-translate-y-full pointer-events-none l:translate-y-0"
          }
        `}
      >
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="relative group cursor-pointer"
            >
              <div
                className="p-3 rounded-2xl shadow-lg 
                bg-gradient-to-b from-black/20 via-black/10 to-transparent
                backdrop-blur-md"
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Tooltip */}
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                  bg-black/70 text-white text-sm px-2 py-1 rounded-lg 
                  opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
