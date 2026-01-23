import { useStats } from "@/context/StatsContext";
import { ActivityCalendar } from "react-activity-calendar";
export default function ContributionChart() {
  const { calendarData } = useStats();
  return (
    <>
      <div className="p-[1rem] bg-gray-200 dark:bg-[hsl(0,0%,0%)] rounded-xl">
        <h3 className="font-bold mb-4">Contribution Graph</h3>

        {/* The Calendar Component */}
        <ActivityCalendar
          data={calendarData}
          blockSize={12} // Size of squares
          blockMargin={4} // Space between squares
          colorScheme="dark" // Auto-matches your dark mode!
          fontSize={12}
          theme={{
            light: ["#ebedf0", "#add8e6", "#87ceeb", "#4682b4", "#00008b"],
            dark: ["#161b22", "#1e3a5f", "#2e5984", "#4a90e2", "#5dade2"],
          }}
        />
      </div>
    </>
  );
}
