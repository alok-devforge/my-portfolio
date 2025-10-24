'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { category: 'AI & ML', items: ['TensorFlow', 'PyTorch', 'Computer Vision', 'OpenCV'] },
    { category: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'Express'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'SQL'] },
    { category: 'Tools & DevOps', items: ['Git', 'Docker', 'Linux'] },
    { category: 'Languages', items: ['Python', 'C++', 'JavaScript', 'TypeScript'] },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 lg:px-8 bg-white/[0.01]">
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
            Skills & Technologies
          </h2>
          <div className="accent-border w-full mb-8"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <h3 className="text-xl font-semibold mb-6 group-hover:accent-text transition-all">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 4 }}
                    className="text-white/60 hover:text-white transition-colors cursor-default flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          {/* Achievements Section */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-2">
                <span className="accent-text">🏆 Achievements</span>
              </h3>
              <p className="text-white/50 text-sm">Recognition and awards from competitions</p>
            </motion.div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="minimal-card p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Finalist – IIT Madras Shaastra Coding Contest</h4>
                    <p className="text-white/50 text-sm">Issued by IIT Madras · Jan 2025</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="minimal-card p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🥈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">1st Runner Up – Technologia 1.0 Hackathon</h4>
                    <p className="text-white/50 text-sm">University of Engineering & Management, Kolkata</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="minimal-card p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Finalist – Status Code 2.0 Hackathon</h4>
                    <p className="text-white/50 text-sm">IIIT Kalyani</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
