"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div 
        className="w-5 h-5" 
        aria-hidden="true" 
      />
    );
  }

  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";
  const Icon = isDark ? FiSun : FiMoon;

  return (
    <button
      className={`text-xl w-5 ${
        isDark ? "text-yellow-500" : "text-gray-500"
      }`}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
// "use client";

// import { FiSun, FiMoon } from "react-icons/fi";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import Image from "next/image";

// export default function ThemeSwitch() {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();

//   useEffect(() => setMounted(true), []);

//   if (!mounted){
//     return <div className="size-5"/>;
//   }
//   if (resolvedTheme === "dark") {
//     return (
//       <button
//         className="text-yellow-500 text-xl w-5"
//         aria-label="Switch to light mode"
//         title="Light mode"
//         onClick={() => setTheme("light")}
//       >
//         <FiSun aria-hidden="true" />
//       </button>
//     );
//   }

//   if (resolvedTheme === "light") {
//     return (
//       <button
//         className="text-gray-500 text-xl w-5"
//         aria-label="Switch to dark mode"
//         title="Dark mode"
//         onClick={() => setTheme("dark")}
//       >
//         <FiMoon aria-hidden="true" />
//       </button>
//     );
//   }
// }
