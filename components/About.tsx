'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-sm font-medium text-blue-500 uppercase tracking-wide mb-4">
            About Me
          </h2>
          <div className="accent-border w-full mb-8"></div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-[300px_1fr] gap-16 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group mx-auto md:mx-0"
          >
            <div className="relative w-64 h-64 md:w-full md:h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <Image
                  src="/profile.jpg"
                  alt="Alok Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-white/60 leading-relaxed">
                I&apos;m a Software Engineer specializing in <span className="text-white">Artificial Intelligence</span>, <span className="text-white">Machine Learning</span>,
                and <span className="text-white">Full-Stack Development</span>.
              </p>

              <p className="text-lg text-white/60 leading-relaxed">
                With expertise in building scalable applications and implementing AI solutions, 
                I focus on creating innovative products that solve real-world problems using 
                cutting-edge technology.
              </p>

              <p className="text-lg text-white/60 leading-relaxed">
                When I&apos;m not coding, you can find me solving competitive programming challenges 
                on LeetCode, contributing to open-source projects, or exploring the latest 
                advancements in AI/ML and system design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-8"
            >
              {[
                { label: 'Based In', value: 'Kolkata, India' },
                { label: 'Education', value: 'B.Tech Computer Science' },
                { label: 'Focus', value: 'MLOps & System Design' },
                { label: 'Problems Solved', value: '200+ on LeetCode' },
              ].map((item, index) => (
                <div key={item.label} className="group">
                  <p className="text-sm text-white/40 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-xl font-medium group-hover:text-blue-500 transition-colors">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
