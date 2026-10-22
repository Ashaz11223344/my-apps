import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import CategoryDivider from './CategoryDivider';

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  highlights: string[];
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'What is Ashaz Apps and who is Ashaz Pathan?',
    answer: 'Ashaz Pathan is a Computer Science and Engineering student at G H Raisoni College of Engineering and Management in Nagpur, India (2026–2029) and an alumnus of MET Bhujbal Knowledge City (2023–2026), working as a Full-Stack AI Developer. "Ashaz Apps" represents his personal ecosystem of high-performance web applications, 3D interactive interfaces (Three.js), and intelligent software tools.',
    highlights: [
      'Ashaz Pathan — Computer Engineer & Full-Stack AI Developer in Maharashtra, India',
      'Creator of Ashaz Apps and official Ashaz Pathan Portfolio website',
      '1st Place Winner at MAHA-VEER 2026 National Level Project Competition',
      'Completed 3-Month Full-Stack App Development (AI/ML) Training at NPIT Solutions'
    ]
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Is Ashaz Pathan based in Nashik, India?',
    answer: 'Yes, Ashaz Pathan is located in Nashik & Nagpur, Maharashtra, India. He builds software solutions locally and collaborates remotely with startups, businesses, and development teams globally.',
    highlights: [
      'Location: Nashik & Nagpur, Maharashtra, India',
      'Education: G H Raisoni College of Engineering and Management, Nagpur (CSE, 2026–2029) • Ex-MET BKC',
      'Remote Collaboration: Web App Development, AI/ML APIs, UI/UX Design'
    ]
  },
  {
    id: 'faq-3',
    number: '03',
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
    number: '04',
    question: 'What key software projects are included in Ashaz Apps and Portfolio?',
    answer: 'The Ashaz Pathan portfolio features over 10 live software applications spanning utility tools, AI systems, and interactive platforms.',
    highlights: [
      'Convo AI — Autonomous voice intelligence and biometric desktop OS',
      'Filex (https://file-x.app) — File management & processing suite',
      'Focus (https://www.getfocus.online) — Growth & motivation companion',
      'Lumina Spaces — MAHA-VEER 2026 1st Place National Award Winning project',
      'Invoice Generator — Professional document creation platform',
      'Attendify — Facial recognition student attendance tracking system'
    ]
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'How to contact Ashaz Pathan or access the official Ashaz website?',
    answer: 'You can contact Ashaz directly at ashazpathan8@gmail.com, connect via LinkedIn, review source code repositories on GitHub, or submit an inquiry through this website.',
    highlights: [
      'Official Website: https://ashazapps.qzz.io/',
      'Direct Email: ashazpathan8@gmail.com',
      'LinkedIn: https://www.linkedin.com/in/ashaz-pathan-751317336',
      'GitHub: https://github.com/Ashaz11223344'
    ]
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <CategoryDivider
        number="04"
        title="KNOWLEDGE & FAQS"
        align="left"
        id="faq-divider"
      />

      <section
        id="faq"
        className="py-20 sm:py-28 px-4 sm:px-8 md:px-16 lg:px-24 relative select-none border-b border-[#1E1E1E]/20"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#DB4A2B]" />
              <span className="font-satoshi text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DB4A2B] uppercase">
                Frequently Asked Inquiries
              </span>
            </div>
            <h2 className="font-clash text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.05em] text-[#1E1E1E]">
              QUESTIONS & ANSWERS
            </h2>
          </div>

          {/* Brutalist Accordion Stack */}
          <div className="divide-y divide-[#1E1E1E] border-y border-[#1E1E1E]">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="transition-colors">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full py-6 sm:py-8 flex items-start justify-between gap-4 text-left cursor-pointer group"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="font-mono text-xs font-bold text-[#DB4A2B] pt-1">
                        [{faq.number}]
                      </span>
                      <h3 className="font-clash text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#1E1E1E] group-hover:text-[#DB4A2B] transition-colors">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="w-8 h-8 border border-[#1E1E1E] flex items-center justify-center shrink-0 group-hover:bg-[#1E1E1E] group-hover:text-white transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Persistent DOM Answer Container for AEO / Search Engine Crawlers */}
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-8 sm:pl-12 pr-4 sm:pr-8 text-[#444444] font-satoshi">
                        <p className="text-sm sm:text-base leading-relaxed mb-4">
                          {faq.answer}
                        </p>

                        <div className="p-4 bg-[#D9D6D0] border border-[#1E1E1E] space-y-2 mt-4">
                          <span className="font-mono text-[11px] font-bold text-[#1E1E1E] uppercase tracking-wider block">
                            KEY TAKEAWAYS //
                          </span>
                          <ul className="space-y-1.5 font-mono text-xs text-[#1E1E1E]">
                            {faq.highlights.map((h, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#DB4A2B] font-bold">&bull;</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Prompt - Non-Question Statement */}
          <div className="mt-12 p-6 sm:p-8 bg-[#D9D6D0] border border-[#1E1E1E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="font-clash text-lg sm:text-xl font-bold uppercase text-[#1E1E1E] mb-1">
                TECHNICAL CONSULTATION & DIRECT INQUIRIES
              </h4>
              <p className="font-satoshi text-xs sm:text-sm text-[#444444]">
                Reach out directly for custom AI architecture, full-stack development, or collaboration.
              </p>
            </div>
            <a href="#contact" className="btn-raw shrink-0">
              <span>Contact Ashaz</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
