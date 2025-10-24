'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload, FiExternalLink, FiBriefcase, FiAward } from 'react-icons/fi';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experience = [
    {
      title: 'GFG Student Chapter Member',
      company: 'GeeksforGeeks Student Chapter, UEM Kolkata',
      period: '2024 - present',
      description: [
        'Collaborating with fellow students to organize coding events, workshops, and hackathons.',
        'Promoting programming culture and assisting peers in their coding journey.',
        'Learning and sharing knowledge in data structures, algorithms, and problem-solving.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University of Engineering & Management',
      period: '2023 - present',
      location: 'Kolkata, India'
    }
  ];

  return (
    <section id="resume" className="relative py-32 px-6 lg:px-8">
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
            Resume
          </h2>
          <div className="accent-border w-full mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <FiBriefcase className="text-blue-500" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-white/10 hover:border-blue-500/50 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <p className="text-sm text-blue-400 mb-1">{exp.period}</p>
                  <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                  <p className="text-white/60 mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <FiAward className="text-purple-500" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <p className="text-sm text-purple-400 mb-1">{edu.period}</p>
                  <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-white/60 mb-1">{edu.institution}</p>
                  <p className="text-sm text-white/50">{edu.location}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <div className="text-center space-y-6">
            <h3 className="text-xl font-semibold">Want the full details?</h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Download my complete resume for a detailed overview of my experience, education, and projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/resume.pdf"
                download="Alok_Kumar_Resume.pdf"
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-all inline-flex items-center gap-2"
              >
                <FiDownload className="group-hover:translate-y-0.5 transition-transform" size={18} />
                <span>Download PDF</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-all inline-flex items-center gap-2 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <FiExternalLink className="relative" size={18} />
                <span className="relative">View Online</span>
              </motion.a>
            </div>
            <p className="text-sm text-white/30 mt-6">
              Last updated: October 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
