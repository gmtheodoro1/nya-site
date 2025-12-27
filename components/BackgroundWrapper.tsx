import React from 'react';

const BackgroundWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#131129]">
      {/* Fixed Global Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        
        {/* Top-Left: Deep Purple Depth */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#302b63] opacity-20 blur-[120px] mix-blend-screen"></div>
        
        {/* Center-Right: Faint Lavender Glow (Subtle) */}
        <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-[#c2a7e4] opacity-5 blur-[150px] mix-blend-screen animate-pulse-slow"></div>
        
        {/* Bottom: Midnight Depth */}
        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#131129] to-transparent opacity-80"></div>

        {/* Floating Subtle Orbs for movement */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 blur-[100px] rounded-full animate-float"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;