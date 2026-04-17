"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Replace this with your professional summary. Write about your
                background, what drives you, and what you're passionate about in
                your field.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Add more paragraphs here to expand on your experience, skills,
                and what makes you unique as a professional.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                You can also mention your career goals, values, or what you're
                looking for in your next role.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Location: United States
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Education: Master of Science in Computer Engineering, Northeastern University
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Available for: Full-time Internship
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Experience: 3 internships
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


