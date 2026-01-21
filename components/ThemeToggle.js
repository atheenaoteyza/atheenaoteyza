"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // 1. Check memory on load
  useEffect(() => {
    const isSavedDark = localStorage.getItem("theme") === "dark";
    setIsDark(isSavedDark);
    document.documentElement.classList.toggle("dark", isSavedDark);
  }, []);

  // 2. Toggle and Save
  const toggle = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    document.documentElement.classList.toggle("dark", nextState);
    localStorage.setItem("theme", nextState ? "dark" : "light");
  };

  return (
    <button onClick={toggle} className=" p-1 border rounded">
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
