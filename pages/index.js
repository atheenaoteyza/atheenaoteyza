import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import LeftSection from "@/components/LeftSection";
import { getGitHubStats } from "@/lib/github";
import { StatsProvider } from "@/context/StatsContext";

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
      <div
        className={`${geistSans.className} ${geistMono.className} font-sans flex justify-center min-w-ful h-full sm:items-start `}
      >
        <main className="flex p-[1rem] w-[100%] self-stretch items-center h-full rounded-xl">
          <LeftSection />
        </main>
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
