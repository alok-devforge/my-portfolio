'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const portfolioData = {
    name: 'Alok Kumar',
    title: 'Software Engineer & AI Developer',
    email: 'alok.csit@gmail.com',
    github: 'https://github.com/alok-devforge',
    linkedin: 'https://linkedin.com/in/alok-kumar-34874a28a',
    twitter: 'https://x.com/alok_devforge',
    location: 'Kolkata, India',
    skills: {
      'AI & ML': ['TensorFlow', 'PyTorch', 'Computer Vision', 'OpenCV'],
      'Backend': ['Python', 'FastAPI', 'Node.js', 'Express'],
      'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      'Database': ['MongoDB', 'PostgreSQL', 'SQL'],
      'Tools': ['Git', 'Docker', 'Linux']
    },
    projects: [
      {
        name: 'AI Chat Application',
        description: 'Advanced AI-powered chat with context awareness',
        tech: ['Next.js', 'OpenAI', 'TypeScript']
      },
      {
        name: 'Portfolio Website',
        description: 'Modern portfolio with terminal CLI',
        tech: ['Next.js', 'Framer Motion', 'Tailwind CSS']
      }
    ],
    achievements: [
      'Finalist – IIT Madras Shaastra Coding Contest',
      '1st Runner Up – Technologia 10.0 Hackathon',
      'Finalist – Status Code 2.0 Hackathon'
    ]
  };

  const getHelp = () => (
    <div className="space-y-3">
      <div className="text-white font-semibold text-lg mb-4">Available Commands</div>
      <div className="space-y-1.5 text-sm">
        <div className="flex items-start gap-3">
          <span className="text-white/40 font-mono min-w-[100px]">about</span>
          <span className="text-white/60">Learn about me</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white/40 font-mono min-w-[100px]">skills</span>
          <span className="text-white/60">View my technical skills</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white/40 font-mono min-w-[100px]">projects</span>
          <span className="text-white/60">See my projects</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white/40 font-mono min-w-[100px]">achievements</span>
          <span className="text-white/60">View my achievements</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white/40 font-mono min-w-[100px]">contact</span>
          <span className="text-white/60">Get my contact info</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white/40 font-mono min-w-[100px]">clear</span>
          <span className="text-white/60">Clear the terminal</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white/40 font-mono min-w-[100px]">exit</span>
          <span className="text-white/60">Close the terminal</span>
        </div>
      </div>
    </div>
  );

  const getAbout = () => (
    <div className="space-y-3">
      <div className="text-white font-bold text-xl">{portfolioData.name}</div>
      <div className="text-white/70">{portfolioData.title}</div>
      <div className="mt-3 text-white/60 leading-relaxed">
        Passionate software engineer specializing in building innovative solutions with cutting-edge technology. 
        Expert in AI/ML, full-stack development, and problem-solving.
      </div>
      <div className="pt-2 text-white/40">{portfolioData.location}</div>
    </div>
  );

  const getSkills = () => (
    <div className="space-y-4">
      <div className="text-white font-semibold text-lg mb-4">Technical Skills</div>
      {Object.entries(portfolioData.skills).map(([category, skills]) => (
        <div key={category} className="space-y-1.5">
          <div className="text-white/80 font-medium">
            {category}
          </div>
          <div className="pl-4 text-white/50">{skills.join(', ')}</div>
        </div>
      ))}
    </div>
  );

  const getProjects = () => (
    <div className="space-y-4">
      <div className="text-white font-semibold text-lg mb-4">Featured Projects</div>
      {portfolioData.projects.map((project, idx) => (
        <div key={idx} className="space-y-1.5 pb-3 border-b border-white/5 last:border-0">
          <div className="text-white/90 font-medium">
            {idx + 1}. {project.name}
          </div>
          <div className="text-white/60 text-sm">{project.description}</div>
          <div className="text-white/40 text-sm">
            {project.tech.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );

  const getAchievements = () => (
    <div className="space-y-3">
      <div className="text-white font-semibold text-lg mb-4">Achievements</div>
      <div className="space-y-2">
        {portfolioData.achievements.map((achievement, idx) => (
          <div key={idx} className="flex items-start gap-2 text-white/60">
            <span className="text-white/30">•</span>
            <span>{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const getContact = () => (
    <div className="space-y-3">
      <div className="text-white font-semibold text-lg mb-4">Contact Information</div>
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-white/60">
          <span className="text-white/40 font-mono min-w-[80px]">Email:</span>
          <span className="text-white/80">{portfolioData.email}</span>
        </div>
        <div className="flex items-center gap-3 text-white/60">
          <span className="text-white/40 font-mono min-w-[80px]">GitHub:</span>
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors underline decoration-white/20">{portfolioData.github}</a>
        </div>
        <div className="flex items-center gap-3 text-white/60">
          <span className="text-white/40 font-mono min-w-[80px]">LinkedIn:</span>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors underline decoration-white/20">{portfolioData.linkedin}</a>
        </div>
        <div className="flex items-center gap-3 text-white/60">
          <span className="text-white/40 font-mono min-w-[80px]">Twitter:</span>
          <a href={portfolioData.twitter} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors underline decoration-white/20">{portfolioData.twitter}</a>
        </div>
      </div>
    </div>
  );

  const processCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    
    if (!command) return;

    let output: React.ReactNode;

    switch (command) {
      case 'help':
        output = getHelp();
        break;
      case 'about':
        output = getAbout();
        break;
      case 'skills':
        output = getSkills();
        break;
      case 'projects':
        output = getProjects();
        break;
      case 'achievements':
        output = getAchievements();
        break;
      case 'contact':
        output = getContact();
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        onClose();
        return;
      default:
        output = (
          <div className="text-white/50">
            Command not found: <span className="text-white/80">{command}</span>. Type <span className="text-white/70">help</span> for available commands.
          </div>
        );
    }

    setHistory([...history, { command: cmd, output }]);
    setCommandHistory([...commandHistory, cmd]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      processCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="terminal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            key="terminal-content"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl h-[600px] bg-black/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl border border-white/10 relative"
          >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          {/* Terminal Header */}
          <div className="relative bg-black/60 backdrop-blur-sm px-6 py-3 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              {/* Traffic Light Buttons */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors" />
              </div>
              <span className="text-white/60 text-sm font-mono ml-2">terminal</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="relative h-[calc(100%-68px)] flex flex-col">
            {/* Output */}
            <div ref={outputRef} className="flex-1 overflow-y-auto p-6 font-mono text-sm custom-scrollbar">
              {/* Welcome Message */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 space-y-2"
              >
                <div className="text-white font-semibold">
                  Welcome to Alok's Portfolio Terminal
                </div>
                <div className="text-white/50">
                  Type <span className="text-white/70">help</span> to see available commands.
                </div>
                <div className="text-white/30 text-xs mt-2">
                  Use ↑/↓ arrow keys to navigate command history
                </div>
              </motion.div>

              {/* Command History */}
              {history.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="mb-4"
                >
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="text-white/40">$</span>
                    <span className="text-white/90">{item.command}</span>
                  </div>
                  <div className="mt-2 pl-5 text-white/80">{item.output}</div>
                </motion.div>
              ))}
            </div>
            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-white/10 p-4 bg-black/60">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-white/40">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-white/90 placeholder-white/30"
                  placeholder="Type a command..."
                  autoFocus
                  spellCheck={false}
                />
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="w-1.5 h-4 bg-white/60"
                />
              </div>
            </form>
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;