import ContributionChart from "./ContributionChart";
import GithubStatistics from "./GithubStats";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import TechStack from "./TechStack";

// components/LeftSection.js
export default function LeftSection() {
  return (
    <div className="w-[35%] h-full overflow-y-auto flex flex-col gap-2 p-2 rounded-xl ">
      <Header />

      <div className="shrink-0 h-96">
        <ProfileCard />
      </div>

      <GithubStatistics />
      <TechStack />
      <ContributionChart />

      <div className="p-2 bg-background rounded-xl">a</div>
    </div>
  );
}
