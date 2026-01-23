import ContributionChart from "./ContributionChart";
import GithubStatistics from "./GithubStats";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import TechStack from "./TechStack";

export default function LeftSection() {
  return (
    // 1. OUTER CONTAINER
    // ❌ REMOVED: dark:bg-zinc-900
    // ✅ ADDED: bg-[var(--background)] (Forces it to match your CSS variable exactly)
    <div className="h-[99vh] w-[100%] lg:w-[650px] shadow-lg px-2 pb-4 bg-[var(--background)] flex flex-col rounded-xl lg:overflow-hidden">
      {/* 2. INNER CONTAINER */}
      <div className="flex-1 h-full overflow-y-auto flex flex-col gap-2 rounded-xl no-scrollbar scroll-shadows">
        <Header />

        <div>
          <ProfileCard />
        </div>

        <GithubStatistics />
        <TechStack />
        <ContributionChart />
      </div>
    </div>
  );
}
