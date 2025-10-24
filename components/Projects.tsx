'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'MediScan',
      subtitle: 'AI Medical Imaging Platform',
      description: 'Deep learning application for automated medical diagnostics with explainable AI (Grad-CAM) and real-time processing capabilities.',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'Computer Vision'],
      github: 'https://github.com/alok-devforge/MediScan',
      demo: 'https://alok-devforge.github.io/MediScan/',
    },
    {
      title: 'MAITRI',
      subtitle: 'Wildlife Safety & Tracking System',
      description: 'AI-powered wildlife monitoring platform featuring real-time proximity alerts for GPS-collared animals, predictive heatmaps for high-risk zones, community sighting verification, analytics dashboard with movement replay, and intelligent safe route planning to avoid animal encounters.',
      tech: ['React', 'FastAPI', 'TensorFlow', 'YOLO', 'GPS', 'ML'],
      github: 'https://github.com/TechFreak2003/MAITRI',
      demo: 'https://github.com/TechFreak2003/MAITRI',
    },
    {
      title: 'Location Tracker',
      subtitle: 'Real-Time GPS System',
      description: 'Real-time GPS tracking platform with customizable alerts, geofencing, and scalable architecture.',
      tech: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/alok-devforge/realtime-time-location-tracking-and-alert-system',
      demo: 'https://github.com/alok-devforge/realtime-time-location-tracking-and-alert-system',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-sm font-medium text-blue-500 uppercase tracking-wide mb-4">
            Featured Projects
          </h2>
          <div className="accent-border w-full mb-8"></div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="minimal-card p-8 rounded-lg">
                {/* Project Number */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-sm text-white/30 font-mono">0{index + 1}</span>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Title */}
                <div className="mb-4">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2 group-hover:accent-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-lg">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-white/50 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="https://github.com/alok-devforge"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <span>View All Projects</span>
            <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
