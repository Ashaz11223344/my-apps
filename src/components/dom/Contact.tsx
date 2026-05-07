import { motion } from 'framer-motion';
import { Mail, Code } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-24 relative z-10 pointer-events-auto min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.2em] text-[#a078ff] font-space uppercase mb-6"
        >
          Get In Touch
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-space font-bold mb-8"
        >
          Let's <span className="gradient-text italic">Connect</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 font-inter mb-16 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate on something futuristic? I'm always open to discussing new opportunities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="mailto:ashazpathan8@gmail.com"
            className="group relative flex items-center gap-3 px-8 py-4 glass rounded-full overflow-hidden w-full sm:w-auto justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#a078ff]/0 via-[#a078ff]/20 to-[#a078ff]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email Me</span>
          </a>

          <a 
            href="https://github.com/Ashaz11223344"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 glass rounded-full overflow-hidden w-full sm:w-auto justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Code className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full text-center text-gray-600 text-sm font-space tracking-wider">
        <p>© {new Date().getFullYear()} Ashaz Pathan. Designed with Code.</p>
      </div>
    </section>
  );
}
