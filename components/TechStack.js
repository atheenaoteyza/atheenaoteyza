import { useStats } from "@/context/StatsContext";

export default function TechStack() {
  const { calendarData } = useStats();
  return (
    <>
      <div className="flex p-[1rem] bg-white dark:bg-[hsl(0,0%,0%)] rounded-xl bg-white dark:bg-[hsl(0,0%,0%)]">
        <h3 className="font-bold mb-4">TechStack</h3>
      </div>
    </>
  );
}
