'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { Icon: FiMail, label: 'Email', value: 'alok.csit@gmail.com', href: 'mailto:alok.csit@gmail.com', color: 'blue' },
    { Icon: FiMapPin, label: 'Location', value: 'Kolkata, India', href: null, color: 'purple' },
  ];

  const socialLinks = [
    { Icon: FiGithub, label: 'GitHub', href: 'https://github.com/alok-devforge' },
    { Icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/alok-kumar-34874a28a/' },
    { Icon: FiTwitter, label: 'Twitter', href: 'https://x.com/alok_devforge' },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-8">
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
            Get In Touch
          </h2>
          <div className="accent-border w-full mb-8"></div>
          <p className="text-2xl sm:text-3xl text-white/80 max-w-2xl">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map(({ Icon, label, value, href, color }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  {href ? (
                    <a href={href} className="block">
                      <div className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                        <div className={`p-3 bg-${color}-500/10 rounded-lg`}>
                          <Icon className={`text-${color}-500`} size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-white/40 mb-0.5">{label}</p>
                          <p className="text-white/80">{value}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-white/10">
                      <div className={`p-3 bg-${color}-500/10 rounded-lg`}>
                        <Icon className={`text-${color}-500`} size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-white/40 mb-0.5">{label}</p>
                        <p className="text-white/80">{value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-white/5"
            >
              <p className="text-sm text-white/40 mb-4">Find me on</p>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} className="text-white/60 hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg outline-none focus:border-blue-500 transition-colors text-white placeholder-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg outline-none focus:border-blue-500 transition-colors text-white placeholder-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg outline-none focus:border-blue-500 transition-colors resize-none text-white placeholder-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                >
                  <FiCheck className="text-green-500" size={18} />
                  <span className="text-green-500 text-sm">Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                >
                  <FiAlertCircle className="text-red-500" size={18} />
                  <span className="text-red-500 text-sm">Failed to send message. Please try again or email me directly.</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02, x: 2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="group px-8 py-4 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-all inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-white/40 text-sm">
            © 2025 Alok Kumar. Built with Next.js, TypeScript &amp; Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
