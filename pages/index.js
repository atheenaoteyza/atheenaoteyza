import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import LeftSection from "@/components/LeftSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans flex justify-center  min-h-screen min-w-full sm:items-start bg-gray-500 dark:bg-gray-900 `}
    >
      <main className="flex p-[1rem] w-[100%] self-stretch items-center min-h-full bg-gray-500 dark:bg-gray-600 rounded-xl">
        <LeftSection />
      </main>
    </div>
  );
}
