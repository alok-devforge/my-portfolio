'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiArrowUpRight, FiMaximize2 } from 'react-icons/fi';
import Image from 'next/image';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const projects = [
    {
      title: 'MediScan',
      subtitle: 'AI Medical Imaging Platform',
      description: 'Deep learning application for automated medical diagnostics with explainable AI (Grad-CAM) and real-time processing capabilities.',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'Computer Vision'],
      github: 'https://github.com/alok-devforge/MediScan',
      demo: 'https://alok-devforge.github.io/MediScan/',
      image: '/projects/mediscan.png',
    },
    {
      title: 'MAITRI',
      subtitle: 'Wildlife Safety & Tracking System',
      description: 'AI-powered wildlife monitoring platform featuring real-time proximity alerts for GPS-collared animals',
      tech: ['React', 'FastAPI', 'TensorFlow', 'YOLO', 'GPS', 'ML'],
      github: 'https://github.com/TechFreak2003/MAITRI',
      demo: 'https://github.com/TechFreak2003/MAITRI',
      image: '/projects/maitri.png',
    },
    {
      title: 'Location Tracker',
      subtitle: 'Real-Time GPS System',
      description: 'Real-time GPS tracking platform with customizable alerts, geofencing, and scalable architecture.',
      tech: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/alok-devforge/realtime-time-location-tracking-and-alert-system',
      demo: 'https://github.com/alok-devforge/realtime-time-location-tracking-and-alert-system',
      image: '/projects/tracker.png',
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
              <div className="minimal-card rounded-lg overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Project Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
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
                    <p className="text-white/60 leading-relaxed mb-6">
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

                  {/* Project Image Preview */}
                  <div className={`relative h-64 sm:h-80 lg:h-full overflow-hidden bg-white/[0.02] ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain sm:object-cover object-center sm:object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r" />
                    
                    {/* Preview Button */}
                    <motion.button
                      onClick={() => setPreviewImage(project.image)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-colors"
                    >
                      <FiMaximize2 size={18} className="text-white/80" />
                    </motion.button>
                  </div>
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

        {/* Image Preview Modal */}
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={previewImage}
                alt="Project Preview"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 transition-colors text-white"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
