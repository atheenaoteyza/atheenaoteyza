import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Eye } from "lucide-react"; // Make sure to install lucide-react if you haven't

// Mock Data (Import this or keep it here for testing)
const CERTIFICATIONS = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    image: "https://placehold.co/600x400/2563eb/white?text=AWS+Cert", // Placeholder
    issuer: "Amazon Web Services",
    date: "Aug 2025",
    skills: [
      "Cloud Computing",
      "Security",
      "AWS Global Infrastructure",
      "Billing",
    ],
  },
  {
    id: 2,
    title: "Meta Front-End Developer",
    image: "https://placehold.co/600x400/16a34a/white?text=Meta+Cert",
    issuer: "Coursera / Meta",
    date: "Dec 2025",
    skills: ["React", "Version Control", "UX/UI", "JavaScript"],
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      {/* GRID VIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert) => (
          <motion.div
            key={cert.id}
            layoutId={`cert-card-${cert.id}`}
            onClick={() => setSelectedCert(cert)}
            className="group relative aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden cursor-pointer border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image Layer */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
            />

            {/* Hover Overlay Layer */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white">
                <Eye size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`cert-card-${selectedCert.id}`}
              className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>

              {/* Large Image Header */}
              <div className="w-full h-64 sm:h-80 bg-zinc-100 dark:bg-black relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                      {selectedCert.title}
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Issued by {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>

                {/* Skills/Tags List */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
                    Skills Validated
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
