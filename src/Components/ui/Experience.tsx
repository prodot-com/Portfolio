import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ExperienceItem = {
  icon: string;
  company: string;
  sub?: string;
  startDate: string;
  endDate?: string;
  link?: string;
  description?: string;
};

const experiences: ExperienceItem[] = [
  {
    icon: "/zaalima.png",
    company: "Zaalima Development",
    sub: "Software Engineer",
    startDate: "August 2025",
    endDate: "October 2025",
    description:
      "Built and optimized full-stack web applications using the MERN stack. Implemented secure authentication, real-time features, and responsive UIs with smooth frontend–backend integration for high-performance user experiences.",
  },
];

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-2 md:px-8 md:pl-0 md:pt-3 pb-6 md:pb-5">
      <p className="text-[15px] md:text-xl font-bold heading-font mb-6 text-neutral-900 dark:text-white">
        Work Experience
      </p>

      <div className="space-y-7">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-2">
            {/* Top Row */}
            <div
              onClick={() => toggleDescription(index)}
              className="flex flex-row gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-3 cursor-pointer group"
            >
              {/* Left: Icon + Company Info */}
              <div className="flex items-center gap-4">
                <img
                  src={exp.icon}
                  alt={exp.company}
                  className="w-7 h-7 md:w-12 md:h-12 p-1 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
                />
                <div>
                  <div className="inline-flex items-center gap-1">
                    <p className="font-semibold heading-font text-[14px] md:text-[16px] text-neutral-800 dark:text-neutral-200">
                      {exp.company}
                    </p>
                    <ChevronRight
                      className={`w-4 text-neutral-800 dark:text-neutral-200 transition-transform duration-300 ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  <p className="hanken-grotesk-font text-sm text-neutral-500 dark:text-neutral-400">
                    {exp.sub}
                  </p>
                </div>
              </div>

              {/* Right: Start/End Date Stack */}
              <div className="flex flex-col sm:flex-row  items-end text-right text-neutral-600 dark:text-neutral-400 text-sm">
                <p className="font-medium inter-font">{exp.startDate}</p>
                <p className="px-1 md:inline hidden">-</p>
                <p className="font-medium inter-font">{exp.endDate || "Present"}</p>
              </div>
            </div>

            {/* Description (Animated Expand) */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm md:text-base hanken-grotesk-font font-normal text-neutral-700 dark:text-neutral-300 leading-relaxed pl-[3.5rem] sm:pl-[4.5rem] md:pr-4"
                >
                  {exp.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
