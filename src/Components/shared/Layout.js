import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white relative px-3">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20 pointer-events-none"></div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
