import React from "react";

export default function BrandLogo({ size = "normal", as: Component = "h2" }) {
  const sizes = {
    normal: "text-2xl",
    large: "text-6xl sm:text-7xl lg:text-8xl",
  };

  return (
    <Component className={`font-bold flex items-center gap-2 ${sizes[size]}`}>
      <span className="font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent hover:from-red-400 hover:to-orange-400 transition-all duration-300">
        Scrum
      </span>
      <span className="text-gray-100 font-light tracking-wider">Pulse</span>
    </Component>
  );
}
