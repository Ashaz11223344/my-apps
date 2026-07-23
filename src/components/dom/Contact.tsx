import { motion } from 'framer-motion';
import { Mail, Code } from 'lucide-react';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-32 px-4 sm:px-6 md:px-24 relative z-10 pointer-events-auto min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm tracking-[0.2em] text-accent-primary font-space uppercase mb-4 sm:mb-6"
        >
          Get In Touch
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-space font-bold mb-6 sm:mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          Let's <span className="gradient-text italic">Connect</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl font-inter mb-10 sm:mb-16 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          Have a project in mind or want to collaborate on something futuristic? I'm always open to discussing new opportunities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <a 
            href="mailto:ashazpathan8@gmail.com"
            className="group relative flex items-center gap-3 px-8 py-4 glass rounded-full overflow-hidden w-full sm:w-auto justify-center transition-all duration-300 hover:scale-105"
            style={{ borderRadius: '9999px', color: 'var(--text-primary)' }}
          >
            <Mail className="w-5 h-5 text-accent-primary" />
            <span className="font-medium font-inter">Email Me</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/ashaz-pathan-751317336"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 glass rounded-full overflow-hidden w-full sm:w-auto justify-center transition-all duration-300 hover:scale-105"
            style={{ borderRadius: '9999px', color: 'var(--text-primary)' }}
          >
            <LinkedinIcon className="w-5 h-5 text-accent-primary" />
            <span className="font-medium font-inter">LinkedIn</span>
          </a>

          <a 
            href="https://github.com/Ashaz11223344"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 glass rounded-full overflow-hidden w-full sm:w-auto justify-center transition-all duration-300 hover:scale-105"
            style={{ borderRadius: '9999px', color: 'var(--text-primary)' }}
          >
            <Code className="w-5 h-5 text-accent-primary" />
            <span className="font-medium font-inter">GitHub</span>
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-0 w-full text-center text-xs sm:text-sm font-space tracking-wider px-4" style={{ color: 'var(--text-tertiary)' }}>
        <p>© {new Date().getFullYear()} Ashaz Pathan. Designed with Code.</p>
      </div>
    </section>
  );
}
