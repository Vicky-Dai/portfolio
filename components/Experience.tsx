"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

// Replace this with your actual experience data
const experiences: ExperienceItem[] = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Month Year - Present",
    description: [
      "Achievement or responsibility description 1",
      "Achievement or responsibility description 2",
      "Achievement or responsibility description 3",
    ],
  },
  {
    title: "Previous Job Title",
    company: "Previous Company",
    period: "Month Year - Month Year",
    description: [
      "Achievement or responsibility description 1",
      "Achievement or responsibility description 2",
      "Achievement or responsibility description 3",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {exp.period}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



