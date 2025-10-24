'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    { Icon: FiGithub, href: 'https://github.com/alok-devforge', label: 'GitHub' },
    { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/alok-kumar-34874a28a/', label: 'LinkedIn' },
    { Icon: FiTwitter, href: 'https://x.com/alok_devforge', label: 'Twitter' },
    { Icon: FiMail, href: 'mailto:alok.csit@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto py-32">
        <div className="space-y-6">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="text-blue-500 text-sm font-medium tracking-wide uppercase"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            Alok Kumar<span className="accent-text">.</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/40"
          >
            Software Engineer & AI Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg text-white/60 max-w-2xl leading-relaxed pt-4"
          >
            Building innovative solutions with cutting-edge technology. Specializing in{' '}
            <span className="text-white/90">AI/ML</span>,{' '}
            <span className="text-white/90">Full-Stack Development</span>, and{' '}
            <span className="text-white/90">Problem Solving</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-all inline-flex items-center gap-2"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex items-center gap-6 pt-8"
          >
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/50 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
