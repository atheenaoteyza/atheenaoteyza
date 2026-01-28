import { Geist, Geist_Mono } from "next/font/google";
import LeftSection from "@/components/LeftSection";
import { getGitHubStats } from "@/lib/github";
import { StatsProvider } from "@/context/StatsContext";
import RighSection from "@/components/RightSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ stats, calendarData }) {
  return (
    <StatsProvider stats={stats} calendarData={calendarData}>
      {/* 1. flex-col: Stack vertically on mobile.
          2. lg:flex-row: Side-by-side on large screens.
          3. overflow-hidden & h-screen: Removed on mobile to allow scrolling.
      */}
      <div
        className={`${geistSans.className} ${geistMono.className} font-sans flex flex-col lg:flex-row w-full lg:h-screen lg:overflow-hidden bg-[var(--background)] p-4 gap-2`}
      >
        {/* SIDEBAR: 
            Full width on mobile, fixed width on desktop.
        */}
        <aside className="w-full lg:w-[450px] flex-shrink-0">
          <LeftSection />
        </aside>

        {/* MAIN CONTENT: 
            Goes below on mobile, to the right on desktop.
        */}
        <RighSection />
      </div>
    </StatsProvider>
  );
}

export async function getStaticProps() {
  const stats = await getGitHubStats("atheenaoteyza");

  //Fetch the Calendar Data (using a public helper API)
  const res = await fetch(
    "https://github-contributions-api.jogruber.de/v4/atheenaoteyza?y=last",
  );
  const json = await res.json();
  const calendarData = json.contributions; // This is the array of data
  return {
    props: {
      stats,
      calendarData,
    },
    // Optional: Re-generate the page every hour so stats update
    revalidate: 3600,
  };
}
