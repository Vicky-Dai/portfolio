"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  videoUrl?: string; // For YouTube/Vimeo embeds or local video file path
  achievements?: string[]; // Key achievements/bullet points
}

const projects: Project[] = [
  {
    title: "Bank Statement Parser & GenAI Q&A System",
    description:
      "Full-stack GenAI application for accounting solutions that processes bank statements with 96% accuracy and provides intelligent Q&A capabilities. Built microservices architecture handling 500+ daily submissions with auto-scaling.",
    technologies: [
      "FastAPI",
      "Python",
      "Google Document AI",
      "LangChain",
      "GPT-4 Turbo",
      "ChromaDB",
      "Docker",
      "Kubernetes",
      "GCP",
      "REST APIs",
      "Prometheus",
    ],
    achievements: [
      "Improved accuracy to 96% across 20+ banking formats",
      "Reduced file processing time by 40%",
      "Achieved 99% accuracy processing 10K+ transactions",
      "Enabled context-aware Q&A reducing irrelevant responses",
    ],
    videoUrl: "/videos/bank-statement-demo.mp4", // Update this path to your video file
  },
  {
    title: "AI Travel Planning Chrome Extension (Intern Project)",
    description:
      "AI-powered Chrome extension that improves travel planning using LLM orchestration, real-time recommendations, and reliable booking workflows. Scaled to 2,500+ users with strong quality metrics and measurable conversion gains.",
    technologies: [
      "LangChain",
      "GPT-3.5",
      "SpringBoot",
      "Redis",
      "MySQL",
      "A/B testing",
      "Model retraining",
    ],
    achievements: [
      "Served 2,500+ users with 92% accuracy",
      "Prevented 500+ double-booking attempts via Redis Lua atomic ops + optimistic locking",
      "Reduced API response time by 60%, improving completion rate 45% → 78%",
      "Drove growth from 200 to 2,500+ users with A/B testing and iterative model retraining (4.7/5 rating, 400+ reviews)",
      "Helped secure $150K seed funding by demonstrating traction and booking metrics",
    ],
    githubUrl: "https://github.com/laurel-yyy/railwaydemo.git",
  },
  {
    title: "Project Name 3",
    description:
      "Describe your third project here. Include what makes it unique or impressive.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/project3",
  },
];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {project.achievements && project.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {project.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 flex-wrap">
                    {project.videoUrl && (
                      <button
                        onClick={() => openVideo(project.videoUrl!)}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Play className="w-5 h-5" />
                        <span>Demo</span>
                      </button>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeVideo}
        >
          <div
            className="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              {isYouTubeUrl(selectedVideo) ? (
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={selectedVideo}
                  controls
                  className="w-full h-full"
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



