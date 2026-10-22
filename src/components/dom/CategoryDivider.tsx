import { motion } from 'framer-motion';

interface CategoryDividerProps {
  number: string;
  title: string;
  align?: 'left' | 'right';
  id?: string;
}

export default function CategoryDivider({
  number,
  title,
  align = 'right',
  id
}: CategoryDividerProps) {
  const isRight = align === 'right';

  return (
    <section
      id={id}
      className="relative w-full py-28 sm:py-32 overflow-hidden select-none border-y border-[#1E1E1E]/15"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(248, 163, 72, 0.20) 0%, rgba(228, 226, 221, 0) 70%)',
      }}
    >
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col ${isRight ? 'items-end text-right' : 'items-start text-left'}`}
        >
          <span className="text-xs sm:text-sm font-satoshi font-bold tracking-[0.2em] text-[#DB4A2B] uppercase mb-2">
            SECTION / {number}
          </span>
          <h2
            className="font-clash uppercase font-bold text-[#1E1E1E] leading-[0.8] tracking-[-0.05em]"
            style={{
              fontSize: 'clamp(3rem, 12vw, 11rem)',
              opacity: 0.9,
            }}
          >
            {title}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
