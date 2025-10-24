'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiCode } from 'react-icons/fi';
import Terminal from './Terminal';

const TerminalButton = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-40"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Main Button */}
        <motion.button
          onClick={() => setIsTerminalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
          aria-label="Open Terminal"
        >
          {/* Gradient background on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
          
          {/* Icon with animation */}
          <motion.div
            animate={{ rotate: isHovered ? 0 : 0 }}
            className="relative z-10"
          >
            <FiTerminal 
              size={24} 
              className="text-white/80 group-hover:text-white transition-colors group-hover:scale-110 transform transition-transform" 
            />
          </motion.div>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-blue-500/50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 10, x: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl whitespace-nowrap"
            >
              <div className="flex items-center gap-2">
                <FiCode className="text-blue-400" size={14} />
                <span className="text-sm font-medium text-white">Try CLI Mode</span>
              </div>
              {/* Arrow */}
              <div className="absolute -bottom-1 right-6 w-2 h-2 bg-black/90 border-r border-b border-white/20 transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
};

export default TerminalButton;
