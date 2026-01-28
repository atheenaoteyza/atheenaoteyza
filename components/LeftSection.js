import ContributionChart from "./ContributionChart";
import GithubStatistics from "./GithubStats";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import TechStack from "./TechStack";

export default function LeftSection() {
  return (
    /* Change lg:h-[99vh] to lg:h-full. 
       Since the parent is h-screen minus padding, h-full will fit perfectly. 
    */
    <div className="w-full lg:w-full lg:h-full bg-[var(--background)] shadow-lg px-2 pb-4 flex flex-col rounded-xl lg:overflow-hidden">
      <div className="lg:flex-1 lg:h-full lg:overflow-y-auto flex flex-col no-scrollbar custom-scroll-shadows">
        <header className="sticky mb-[.6rem]">
          <Header />
        </header>

        <section className="space-y-2">
          <ProfileCard />
          <GithubStatistics />
          <TechStack />
          <ContributionChart />
        </section>
      </div>
    </div>
  );
}
