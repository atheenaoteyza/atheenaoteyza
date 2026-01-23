import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="lg:h-[28rem] h-full overflow-y-auto rounded-xl bg-gray-200 dark:bg-[hsl(0,0%,0%)] font-mono text-sm leading-relaxed whitespace-pre-wrap">
      <div className="mb-4 relative w-fit group p-[1rem]">
        <Image
          src="/atheenadev.jpg"
          alt="Atheena"
          width={240}
          height={240}
          // Added transition for a subtle effect when hovering the container
          className="w-[240px] h-[240px] object-cover rounded-xl shadow-sm transition-transform group-hover:scale-[1.02]"
          priority
        />

        <div className="absolute bottom-2 left-2 flex items-center gap-2 p-1.5 px-3 rounded-full shadow-sm border border-white/20 dark:border-black/20">
          {/* The "Active Icon" (Pulsing Green Dot made with CSS) */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>

          {/* The Text */}
          <span className="text-[10px] font-bold tracking-wide text-gray-700 dark:text-gray-200 whitespace-nowrap">
            Committed full time
          </span>
        </div>
      </div>

      {/* Main Bio Text */}
      <div className="pb-[1rem] px-[1rem]">
        Hi! I am a{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          Full Stack Developer
        </span>{" "}
        based in the Philippines.
        {"\n\n"}I possess a unique mix of modern web skills —{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          MERN (MongoDB, Express.js, React/Next.js, Node.js)
        </span>{" "}
        — and enterprise-grade backend knowledge{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          (C#/.NET)
        </span>
        , bridging the gap between "startup-style" development and corporate
        software engineering.
        {"\n\n"}I utilize{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          AI-augmented workflows
        </span>
        , leveraging tools like Cursor and Windsurf to accelerate development.
        From implementing responsive interfaces with Tailwind and Framer Motion
        to managing secure authentication with Firebase, I operate where
        engineering meets innovation, utilizing a modern approach to transform
        raw concepts into{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          solutions that make a real difference.
        </span>
      </div>
    </div>
  );
}
