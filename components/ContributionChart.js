import { useStats } from "@/context/StatsContext";
import { ActivityCalendar } from "react-activity-calendar";
import { useState, useEffect } from "react";

export default function ContributionChart() {
  const { calendarData } = useStats();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    // Check initial theme
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="p-[1rem] bg-white dark:bg-[hsl(0,0%,0%)] rounded-xl">
        <h3 className="font-bold mb-4">Contribution Graph</h3>

        {/* The Calendar Component */}
        <ActivityCalendar
          data={calendarData}
          blockSize={12} // Size of squares
          blockMargin={4} // Space between squares
          colorScheme={isDark ? "dark" : "light"} // Dynamic theme detection
          fontSize={12}
          theme={{
            light: ["#ebedf0", "#4683b484", "#5190c4d5", "#4682b4", "#3c6f9a"],
            dark: ["#161b22", "#1e3a5f", "#2e5984", "#4a90e2", "#5dade2"],
          }}
        />
      </div>
    </>
  );
}
