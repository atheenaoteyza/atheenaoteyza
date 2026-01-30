import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectGrid from "./ProjectGrid";
import Certifications from "./Certifications";
import ContactSection from "./ContactSection";
const tabs = [
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function RightSection() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <main className="flex-1 flex flex-col space-y-2 overflow-hidden pb-4 shadow-lg">
      {/* // <main className="flex-1 min-w-0 w-full h-full flex flex-col rounded-xl space-y-2 pb-4 overflow-hidden border"> */}
      {/* Tab Switcher with Sliding Indicator */}
      <div className="w-full bg-white dark:bg-black rounded-xl">
        <div className="flex bg-white dark:bg-black p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 w-fit">
          <div className="flex gap-1 relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-4 py-2 text-sm font-bold cursor-pointer z-10 transition-colors duration-300"
              >
                {/* This motion.div is the sliding background */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gray-300 dark:bg-[#161b22] rounded-lg shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span
                  className={`relative z-20 ${activeTab === tab.id ? "text-zinc-900 dark:text-white" : "text-zinc-500"}`}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 rounded-xl overflow-hidden overflow-y-auto bg-white dark:bg-black border border-zinc-300 dark:border-zinc-800 shadow-lg relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full p-6"
          >
            {activeTab === "projects" && (
              <div className="flex flex-col gap-6">
                {MOCK_PROJECTS.map((project) => (
                  <ProjectGrid key={project.id} project={project} />
                ))}
              </div>
            )}
            {activeTab === "certifications" && (
              <div className="dark:text-white">
                <Certifications />
              </div>
            )}

            {activeTab === "contact" && (
              <div className="max-w-4xl mx-auto">
                <ContactSection />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
