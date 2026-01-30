import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-8"
      id="contact"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">
          Let's Work Together
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          I am currently **open to work** and ready to join your engineering
          team.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* LEFT COLUMN: Clean Checklist */}
          <div className="lg:col-span-2 p-8 bg-zinc-50 dark:bg-zinc-950/50 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-6">
                Why hire me?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    <strong>Full-Stack Capable:</strong> Proficient in both MERN
                    (React/Node) and Enterprise (.NET/C#) ecosystems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    <strong>Systems Mindset:</strong> I don't just write code; I
                    build scalable, optimized workflows.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    <strong>Immediate Impact:</strong> Ready to deploy and
                    contribute from Day 1.
                  </span>
                </li>
              </ul>
            </div>

            {/* Location Pill */}
            <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm font-medium bg-zinc-200/50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full">
                <MapPin size={14} />
                <span>Philippines</span>
              </div>
              <ArrowUpRight
                className="text-zinc-400 dark:text-zinc-600"
                size={20}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Clean Form */}
          <div className="lg:col-span-3 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Hi Atheena, I'd like to discuss a role at..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={16} />}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
