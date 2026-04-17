"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="mailto:vickydaiwork@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                vickydaiwork@gmail.com
              </span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/vicky-dai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                LinkedIn
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/Vicky-Dai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">GitHub</span>
            </motion.a>

            <motion.a
              href="tel:+12066881105"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                +1 (234) 567-890
              </span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-gray-500 dark:text-gray-400"
          >
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



