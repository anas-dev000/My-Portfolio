import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Moving Grid - Increased opacity for visibility */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-50" />
      
      {/* Dynamic Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[0%] right-[-5%] w-[45%] h-[45%] bg-purple-600/20 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: "-2s" }} />
      
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[150px] pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;
