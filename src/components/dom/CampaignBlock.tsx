import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CampaignItem {
  id: string;
  number: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const campaignItems: CampaignItem[] = [
  {
    id: 'campaign-1',
    number: '01',
    title: 'MAHA-VEER 2026 1ST PLACE WINNER',
    description: 'Awarded 1st Place in the National Level Project Competition for Lumina Spaces — algorithmic space generation and intelligent architectural design.',
    linkText: 'Read More',
    href: '#projects',
  },
  {
    id: 'campaign-2',
    number: '02',
    title: 'AUTONOMOUS DESKTOP OS: CONVO AI',
    description: 'An AI-driven operating system orchestrating hands-free voice interaction, biometric presence verification, and low-latency computer control.',
    linkText: 'Read More',
    href: '#projects',
  },
  {
    id: 'campaign-3',
    number: '03',
    title: 'FULL-STACK ASHAZ APPS ECOSYSTEM',
    description: '13+ production web applications and tools engineered for high reliability, fluid 3D graphics (Three.js), and zero bloated dependencies.',
    linkText: 'Read More',
    href: '#projects',
  },
];

export default function CampaignBlock() {
  return (
    <section
      id="philosophy"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 select-none"
      style={{ backgroundColor: '#D9D6D0', color: '#1E1E1E' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 8 Columns: 'Clash Display' headline at 6vw, leading 0.9 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#DB4A2B]" />
                <span className="font-satoshi text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DB4A2B] uppercase">
                  Engineering Philosophy & Milestones
                </span>
              </div>

              <h2
                className="font-clash uppercase font-bold text-[#1E1E1E] tracking-[-0.05em] mb-8"
                style={{
                  fontSize: 'clamp(2.5rem, 5.8vw, 5.5rem)',
                  lineHeight: 0.9,
                }}
              >
                TACTILE INTERACTION. DISCIPLINED SYSTEMS. UNCOMPROMISING CODE.
              </h2>
            </div>

            <p className="font-satoshi text-base sm:text-xl text-[#444444] font-medium leading-relaxed max-w-2xl mt-4">
              I build software that rejects decorative fluff in favor of brutal typographic clarity, lightning response times, and deep atmospheric polish. From winning 1st Place at <strong>MAHA-VEER 2026</strong> to architecting biometric desktop automation, each application represents precision engineering crafted in <strong>Nashik, India</strong>.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a href="#projects" className="btn-raw">
                <span>View Full Work</span>
              </a>
              <a href="#about" className="raw-link">
                <span>About Ashaz →</span>
              </a>
            </div>
          </motion.div>

          {/* Right 4 Columns: Vertical stack featuring thin dividers (#1E1E1E/20%) and 'Read More' links with arrow-up-right icons inside circular borders */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col divide-y divide-[#1E1E1E]/20 border-t lg:border-t-0 border-[#1E1E1E]/20"
          >
            {campaignItems.map((item, idx) => (
              <div
                key={item.id}
                className={`py-8 ${idx === 0 ? 'lg:pt-0' : ''} flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#DB4A2B] tracking-widest">
                      // {item.number}
                    </span>
                    <span className="font-satoshi text-[11px] uppercase tracking-wider text-[#666666]">
                      Featured Milestone
                    </span>
                  </div>

                  <h3 className="font-clash text-lg sm:text-xl font-bold uppercase tracking-[-0.03em] text-[#1E1E1E] group-hover:text-[#DB4A2B] transition-colors duration-300 mb-3">
                    {item.title}
                  </h3>

                  <p className="font-satoshi text-xs sm:text-sm text-[#444444] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.href}
                  className="inline-flex items-center justify-between text-xs font-satoshi font-bold uppercase tracking-[0.12em] text-[#1E1E1E] group-hover:text-[#DB4A2B] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <div className="circle-icon-border group-hover:bg-[#DB4A2B] group-hover:border-[#DB4A2B] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
