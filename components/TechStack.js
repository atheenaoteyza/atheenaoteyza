import { useStats } from "@/context/StatsContext";

export default function TechStack() {
  const { calendarData } = useStats();
  return (
    <>
      <div className="flex p-[1rem] bg-gray-200 dark:bg-[hsl(0,0%,0%)] rounded-xl bg-gray-200 dark:bg-[hsl(0,0%,0%)]">
        <h3 className="font-bold mb-4">TechStack</h3>
      </div>
    </>
  );
}
