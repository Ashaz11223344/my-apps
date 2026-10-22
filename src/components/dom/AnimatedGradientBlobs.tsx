import { motion } from 'framer-motion';

export default function AnimatedGradientBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Red-Orange Blob #DB4A2B */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.12, 0.96, 1],
          opacity: [0.65, 0.9, 0.7, 0.65],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[15vw] -left-[10vw] w-[60vw] h-[60vw] rounded-full"
        style={{
          backgroundColor: '#DB4A2B',
          filter: 'blur(140px)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Warm Orange Blob #F8A348 */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -50, 0],
          scale: [1.05, 0.92, 1.15, 1.05],
          opacity: [0.85, 0.6, 0.88, 0.85],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[20vh] -right-[15vw] w-[60vw] h-[60vw] rounded-full"
        style={{
          backgroundColor: '#F8A348',
          filter: 'blur(140px)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Soft Pink Accent Blob #FF89A9 for atmospheric richness */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 30, 0],
          scale: [0.95, 1.08, 0.92, 0.95],
          opacity: [0.55, 0.8, 0.6, 0.55],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-10vh] left-[20vw] w-[50vw] h-[50vw] rounded-full"
        style={{
          backgroundColor: '#FF89A9',
          filter: 'blur(140px)',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
}
