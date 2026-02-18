import { Outlet } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

const Layout = () => {
  return (
    <div
      className="min-h-screen text-white relative px-3 overflow-x-hidden"
      style={{
        /*
         * paddingBottom clears the fixed bottom nav on mobile.
         * paddingTop    clears the fixed top nav on desktop.
         * Both values come from CSS variables defined in index.css
         * and are automatically 0 on the opposite breakpoint.
         */
        paddingBottom: "var(--bottom-nav-height)",
        paddingTop: "var(--top-nav-height)",
      }}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
