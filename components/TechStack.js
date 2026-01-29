import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Grid2X2 } from "lucide-react";

const TECH_LOGOS = [
  { name: "HTML", slug: "html5", color: "E34F26" },
  { name: "CSS", slug: "css3", color: "1572B6", textOnly: true },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "000000", darkInvert: true },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "Framer", slug: "framer", color: "000000", darkInvert: true },
  { name: "Three.js", slug: "threedotjs", color: "000000", darkInvert: true },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "C#", slug: "csharp", color: "239120" },
  { name: ".NET", slug: "dotnet", color: "512BD4" },
  { name: "JSON Server", slug: "json", color: "000000", darkInvert: true },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  {
    name: "SQL Server",
    slug: "microsoftsqlserver",
    color: "CC2927",
    textOnly: true,
  },
  { name: "Firebase", slug: "firebase", color: "FFCA28" },
  { name: "AWS S3", slug: "amazons3", color: "569A31", textOnly: true },
  { name: "Clerk", slug: "clerk", color: "6C47FF" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "181717", darkInvert: true },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "DBeaver", slug: "dbeaver", color: "382923", darkInvert: true },
];

/* --- SUB-COMPONENT FOR HANDLING ERRORS ---
  This component tracks its own image state. 
  If the image fails to load, it hides the icon and shows just text.
*/
function TechBadge({ tech, isModal = false }) {
  const [imgError, setImgError] = useState(false);

  // LOGIC: Show icon only if:
  // 1. It is NOT forced text-only
  // 2. AND the image hasn't failed loading
  const showIcon = !tech.textOnly && !imgError;

  // STYLES: Switch between "Marquee" (smaller) and "Modal" (larger) styles
  const containerClass = isModal
    ? "flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors group shadow-sm"
    : "flex items-center gap-2 px-3 h-8 rounded-md bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 min-w-max";

  const iconSizeClass = isModal ? "w-5 h-5" : "w-4 h-4";
  const textSizeClass = isModal
    ? "text-sm font-medium"
    : "text-xs font-semibold";

  return (
    <div className={containerClass}>
      {showIcon && (
        <div
          className={`${iconSizeClass} flex items-center justify-center flex-shrink-0`}
        >
          <img
            src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
            alt={tech.name}
            loading="lazy"
            // ERROR HANDLER: If link fails, set error to true -> hides this div
            onError={() => setImgError(true)}
            className={`w-full h-full object-contain ${
              tech.darkInvert ? "dark:invert" : ""
            } ${isModal ? "transition-transform group-hover:scale-110" : ""}`}
          />
        </div>
      )}
      <span
        className={`${textSizeClass} text-zinc-700 dark:text-zinc-300 leading-none`}
      >
        {tech.name}
      </span>
    </div>
  );
}

// --- MAIN COMPONENT ---
export default function TechStack() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col p-6 bg-white dark:bg-black rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden relative group">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-zinc-900 dark:text-white">
            Tech Stack
          </h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Grid2X2 size={14} />
            View All
          </button>
        </div>

        {/* Carousel Container */}
        <div className="flex items-center flex-1 relative w-full overflow-hidden mask-linear-fade">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

          <motion.div
            className="flex gap-3 items-center w-max"
            animate={{ x: ["0%", "-25%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {/* Clean Map using the new Sub-Component */}
            {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map(
              (tech, index) => (
                <TechBadge key={index} tech={tech} isModal={false} />
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* --- MODAL OVERLAY --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="flex justify-between items-center p-6 border-b border-zinc-100 dark:border-zinc-800">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Complete Tech Stack
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 rounded-full transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 overflow-y-auto bg-zinc-50/50 dark:bg-black/20">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {TECH_LOGOS.map((tech, index) => (
                    <TechBadge key={index} tech={tech} isModal={true} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
