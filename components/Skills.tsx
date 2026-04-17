"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL", "HTML/CSS", "Stata"],
  },
  {
    category: "Frontend Technologies",
    skills: ["React.js", "Redux.js", "React Router"],
  },
  {
    category: "Backend & Frameworks",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "SpringBoot"],
  },
  {
    category: "Databases & Storage",
    skills: ["MySQL", "Postgres", "MongoDB", "Mongoose", "Redis", "Google Firestore", "Cloud Storage"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "EC2", "S3", "Google Cloud Platform", "Firebase", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    category: "AI/ML & LLMs",
    skills: ["OpenAI API", "GPT-4 Turbo", "GPT-3.5", "Anthropic Claude", "LangChain", "Transformers", "Hugging Face", "Pytorch", "RAG", "Vector Embeddings", "FAISS", "ChromaDB", "Model Fine-tuning", "Embeddings"],
  },
  {
    category: "Architecture & APIs",
    skills: ["Microservices", "REST APIs", "RESTful API Design", "GraphQL API", "WebSocket", "Event-driven architecture", "OAuth 2.0", "JWT", "Circuit Breaker"],
  },
  {
    category: "Development Tools",
    skills: ["Git", "Maven", "Pandas", "NumPy", "Postman", "VS Code", "IntelliJ", "PyCharm", "LangSmith", "Prometheus", "JUnit"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


