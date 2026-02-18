import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { icon: FaUser,          label: "About",    to: "/about"   },
  { icon: FaProjectDiagram,label: "Projects", to: "/projects"},
  { icon: FaHome,          label: "Home",     to: "/",       isHome: true },
  { icon: FaCode,          label: "Skills",   to: "/skills"  },
  { icon: FaEnvelope,      label: "Contact",  to: "/contact" },
];

/* ─── Desktop top navbar items (original order) ─── */
const desktopItems = [
  { icon: FaHome,          label: "Home",     to: "/"        },
  { icon: FaUser,          label: "About",    to: "/about"   },
  { icon: FaProjectDiagram,label: "Projects", to: "/projects"},
  { icon: FaCode,          label: "Skills",   to: "/skills"  },
  { icon: FaEnvelope,      label: "Contact",  to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [tappedIndex, setTappedIndex] = useState(null);

  /* Clear tap highlight quickly */
  useEffect(() => {
    if (tappedIndex !== null) {
      const t = setTimeout(() => setTappedIndex(null), 300);
      return () => clearTimeout(t);
    }
  }, [tappedIndex]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP — top navbar (hidden on mobile)
      ══════════════════════════════════════════ */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full h-16 z-40
        items-center justify-center gap-6
        bg-gradient-to-b from-black/30 via-black/10 to-transparent
        backdrop-blur-md">
        {desktopItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.to);
          const isProjects = item.label === "Projects";
          
          return (
            <Link
              key={item.to}
              to={item.to}
              className="relative group cursor-pointer"
            >
              <div
                className={`p-3 rounded-2xl shadow-lg transition-all duration-200
                  ${active
                    ? isProjects ? "bg-purple-500/30 shadow-purple-500/40" : "bg-white/20 shadow-white/20"
                    : isProjects ? "bg-purple-900/20 hover:bg-purple-500/20" : "bg-black/20 hover:bg-white/10"
                  }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-200
                    ${active 
                      ? isProjects ? "text-purple-300" : "text-white" 
                      : isProjects ? "text-purple-400/80 group-hover:text-purple-300" : "text-white/60 group-hover:text-white"
                    }`}
                />
              </div>
              {/* Tooltip */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                bg-black/70 text-white text-xs px-2 py-1 rounded-lg
                opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
              {/* Active dot */}
              {active && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2
                  w-1 h-1 rounded-full bg-white" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE — fixed bottom navigation bar
      ══════════════════════════════════════════ */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50
          flex items-end justify-around
          bg-black/40 backdrop-blur-xl
          border-t border-white/10
          shadow-[0_-4px_30px_rgba(0,0,0,0.4)]"
        style={{
          paddingBottom: "env(safe-area-inset-bottom, 12px)",
          paddingTop: "10px",
        }}
      >
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const active = isActive(item.to);
          const tapped = tappedIndex === i;

          if (item.isHome) {
            /* ── Centred Home button ── */
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setTappedIndex(i)}
                className="relative flex flex-col items-center"
                style={{ marginBottom: "8px" }}
              >
                <motion.div
                  animate={
                    active
                      ? { scale: [1, 1.08, 1], boxShadow: ["0 0 0px #fff0", "0 0 18px #a78bfa99", "0 0 10px #a78bfa55"] }
                      : { scale: 1, boxShadow: "0 0 0px #fff0" }
                  }
                  whileTap={{ scale: 0.88 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl
                    ${active
                      ? "bg-gradient-to-br from-violet-500 to-purple-700 shadow-violet-500/50"
                      : "bg-gradient-to-br from-white/20 to-white/5 border border-white/20"
                    }`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Label */}
                <AnimatePresence>
                  {active && (
                    <motion.span
                      key="home-label"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 text-[10px] font-semibold text-violet-300"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          }

          /* ── Regular nav item ── */
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setTappedIndex(i)}
              className="relative flex flex-col items-center min-w-[52px]"
            >
              <motion.div
                whileTap={{ scale: 0.82 }}
                animate={tapped ? { scale: [0.82, 1.05, 1] } : { scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center
                  transition-all duration-200
                  ${active
                    ? "bg-white/15 shadow-lg shadow-white/10"
                    : "bg-transparent"
                  }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-200
                    ${active ? "text-white" : "text-white/45"}`}
                />
              </motion.div>

              {/* Label — shown only when active */}
              <AnimatePresence>
                {active && (
                  <motion.span
                    key={`label-${item.to}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="mt-0.5 text-[10px] font-medium text-white/80"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Active indicator dot */}
              {active && (
                <motion.span
                  layoutId="mobile-active-dot"
                  className="absolute -top-1 left-1/2 -translate-x-1/2
                    w-1 h-1 rounded-full bg-white"
                />
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
