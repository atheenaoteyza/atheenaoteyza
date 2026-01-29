import { motion } from "motion/react";
import Link from "next/link";

export default function ProjectGrid({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* LEFT: Image Placeholder */}
      <div className="w-full md:w-2/3 aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-700 overflow-hidden">
        <span className="text-zinc-400 text-xs font-mono">
          Image Placeholder
        </span>
      </div>

      {/* RIGHT: Content Container */}
      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
            {project?.title || "Project Title"}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
            {project?.description ||
              "High-level description of your technical contribution."}
          </p>
        </div>

        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-2">
          {project?.TechStack?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#3c6f9a] dark:text-blue-400 border border-blue-100 dark:border-blue-800"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {/* External link to Repository */}
          <Link
            href={project?.repoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="w-full py-2 text-sm font-bold rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity cursor-pointer">
              See Repository
            </button>
          </Link>

          {/* Link to Live Demo / Code View */}
          <Link
            href={project?.demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="w-full py-2 text-sm font-bold rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
              View Demo
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
