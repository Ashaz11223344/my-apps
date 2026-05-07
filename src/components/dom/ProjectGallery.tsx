import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { projects } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" ref={containerRef} className="py-32 px-6 md:px-24 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <p className="text-sm tracking-[0.2em] text-[#a078ff] font-space uppercase mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-6xl font-space font-bold">Featured <span className="gradient-text italic">Projects</span></h2>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [30, -30]);
  const isEven = index % 2 === 0;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Generate a smooth radial gradient following the mouse
  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${project.color}40, transparent 80%)`;

  return (
    <motion.div 
      ref={cardRef} 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`project-card flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
    >
      {/* Visual Placeholder */}
      <motion.div 
        style={{ y }}
        className="w-full md:w-1/2 aspect-video glass rounded-3xl relative overflow-hidden group cursor-pointer"
        onClick={() => window.open(project.link, '_blank')}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 mix-blend-overlay pointer-events-none"></div>
        
        {/* Interactive Background Blob */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background }}
        />

        {/* Fallback Static Blob (visible when not hovering) */}
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-500 blur-3xl rounded-full scale-150 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }}
        ></div>

        <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-20">
          <h3 className="text-4xl md:text-6xl font-space font-bold text-white/20 group-hover:text-white/80 transition-colors duration-500 text-center drop-shadow-lg">
            {project.title}
          </h3>
        </div>
        
        {/* Hover overlay link */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 rounded-3xl relative z-20 backdrop-blur-2xl bg-[#0f0f13]/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <span className="text-6xl md:text-8xl font-space font-black text-white/10 mb-4">{project.number}</span>
        <h3 className="text-3xl md:text-4xl font-space font-bold mb-4 text-white drop-shadow-lg">{project.title}</h3>
        <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-gray-200">
              {tag}
            </span>
          ))}
        </div>

        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#a078ff] hover:text-white transition-colors font-medium group w-fit"
        >
          View Live Project
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
