import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // We can leave this as false initially, the useEffect will correct it immediately
  const [isDark, setIsDark] = useState(false); 

  // 1. Check memory on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    // If there is no saved theme, default to true (dark). 
    // Otherwise, check if the saved theme is "dark".
    const isSavedDark = savedTheme === null ? true : savedTheme === "dark";
    
    setIsDark(isSavedDark);
    document.documentElement.classList.toggle("dark", isSavedDark);
    
    // Optional: Save the default dark state on first load
    if (savedTheme === null) {
        localStorage.setItem("theme", "dark");
    }
  }, []);

  // 2. Toggle and Save
  const toggle = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    document.documentElement.classList.toggle("dark", nextState);
    localStorage.setItem("theme", nextState ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="p-1 rounded cursor-pointer dark:bg-[#161b22]"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}