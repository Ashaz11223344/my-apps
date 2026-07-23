import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlights: string[];
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Ashaz Apps and who is Ashaz Pathan?',
    answer: 'Ashaz Pathan is a Computer Engineering student at MET Bhujbal Knowledge City in Nashik, India (2023–2026) and a Full-Stack AI Developer. "Ashaz Apps" represents his personal ecosystem of high-performance web applications, 3D interactive interfaces (Three.js), and intelligent software tools.',
    highlights: [
      'Ashaz Pathan — Computer Engineer & Full-Stack AI Developer in Nashik, India',
      'Creator of Ashaz Apps and official Ashaz Pathan Portfolio website',
      '1st Place Winner at MAHA-VEER 2026 National Level Project Competition',
      'Completed 3-Month Full-Stack App Development (AI/ML) Training at NPIT Solutions'
    ]
  },
  {
    id: 'faq-2',
    question: 'Is Ashaz Pathan based in Nashik, India?',
    answer: 'Yes, Ashaz Pathan is located in Nashik, Maharashtra, India. He builds software solutions locally and collaborates remotely with startups, businesses, and development teams globally.',
    highlights: [
      'Location: Nashik, Maharashtra, India',
      'Education: MET Bhujbal Knowledge City (Computer Engineering)',
      'Remote Collaboration: Web App Development, AI/ML APIs, UI/UX Design'
    ]
  },
  {
    id: 'faq-3',
    question: 'What full-stack web development and AI services does Ashaz offer?',
    answer: 'Ashaz offers custom web app development, AI feature integrations (facial recognition, computer vision, automated processing), responsive 3D web graphics, and web utility tool engineering for startups, businesses, and engineering projects.',
    highlights: [
      'Interactive 3D Web UI & Custom Animations (Three.js / React Three Fiber / Framer Motion)',
      'Full-Stack Web App Development (React, Vite, Node.js, Python)',
      'AI & Machine Learning Model Integrations (Computer Vision, Facial Recognition)',
      'Web Utility Tool Development & API Design (Invoicing, Compression, File Converters)'
    ]
  },
  {
    id: 'faq-4',
    question: 'What key software projects are included in Ashaz Apps and Portfolio?',
    answer: 'The Ashaz Pathan portfolio features over 10 live software applications spanning utility tools, AI systems, and interactive platforms.',
    highlights: [
      'Filex (https://file-x.app) — File management & processing suite',
      'Focus (https://www.getfocus.online) — Growth & motivation companion',
      'Invoice Generator — Professional document creation platform',
      'Attendify — Facial recognition student attendance tracking system',
      'Lumina Spaces — MAHA-VEER 2026 1st Place National Award Winning project'
    ]
  },
  {
    id: 'faq-5',
    question: 'How to contact Ashaz Pathan or access the official Ashaz website?',
    answer: 'You can access the official Ashaz Pathan website at https://ashazapps.qzz.io/, get in touch via email at ashazpathan8@gmail.com, or connect on LinkedIn and GitHub.',
    highlights: [
      'Official Ashaz Website: https://ashazapps.qzz.io/',
      'Direct Email: ashazpathan8@gmail.com',
      'LinkedIn Profile: linkedin.com/in/ashaz-pathan-751317336',
      'GitHub Codebase: github.com/Ashaz11223344'
    ]
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 md:px-24 relative z-10 pointer-events-auto">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.2em] text-accent-primary font-space uppercase mb-2 sm:mb-4">
            Ashaz Apps & Developer FAQ
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-space font-bold" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked <span className="gradient-text italic">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg font-inter max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Quick, direct answers regarding Ashaz Pathan's developer profile, Ashaz Apps, location in Nashik, India, and engineering credentials.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass rounded-3xl overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? 'var(--accent-primary)' : 'transparent',
                }}
              >
                {/* Question Heading (H3 for proper heading hierarchy) */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-accent-primary flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-space font-bold" style={{ color: 'var(--text-primary)' }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-full glass transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                  </div>
                </button>

                {/* Direct Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-white/5">
                        <p className="text-base font-inter leading-relaxed mt-4 mb-4" style={{ color: 'var(--text-secondary)' }}>
                          {faq.answer}
                        </p>

                        <div className="bg-black/10 dark:bg-white/5 p-4 rounded-2xl">
                          <p className="text-xs font-space font-semibold uppercase text-accent-primary mb-2 tracking-wider">
                            Key Details & Summary
                          </p>
                          <ul className="space-y-1.5 text-xs sm:text-sm font-inter" style={{ color: 'var(--text-primary)' }}>
                            {faq.highlights.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-accent-primary font-bold">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional Internal Link Callout */}
        <div className="mt-10 p-6 glass rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-inter" style={{ color: 'var(--text-secondary)' }}>
            Looking for comprehensive academic background, skills list, and project awards?
          </p>
          <Link
            to="/myresume"
            className="inline-flex items-center gap-2 text-xs font-space font-bold uppercase tracking-wider text-accent-primary hover:underline whitespace-nowrap"
          >
            <span>View Ashaz Pathan Resume</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
