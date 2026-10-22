export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  color: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'project-convo',
    number: '01',
    title: 'Convo AI',
    description: 'An autonomous desktop OS featuring hands-free voice intelligence, biometric presence sensing, and native Windows & cloud automation.',
    tags: ['AI OS', 'Voice Intelligence', 'Biometrics', 'Python'],
    link: 'https://github.com/Ashaz11223344/convo-ai',
    color: '#7c7c7cff', // Electric Indigo
    image: '/convo_animated.svg'
  },
  {
    id: 'project-filex',
    number: '02',
    title: 'Filex',
    description: 'Streamline your file management with an intuitive suite of powerful online tools for conversion, compression, and more.',
    tags: ['Tool', 'Productivity'],
    link: 'https://file-x.app',
    color: '#1C6E60' // Teal Green
  },
  {
    id: 'project-focus',
    number: '03',
    title: 'Focus',
    description: 'A high-fidelity growth and motivation companion',
    tags: ['App', 'Self-improvement'],
    link: 'https://www.getfocus.online/',
    color: '#fc6e20' // Orange
  },
  {
    id: 'project-lumina',
    number: '04',
    title: 'Lumina Spaces',
    description: 'Get personalized architectural designs for your spaces.',
    tags: ['Architect', 'Design'],
    link: 'https://luminaspaces.qzz.io/',
    color: '#21732c' // Green
  },
  {
    id: 'project-movieq',
    number: '05',
    title: 'MovieQ',
    description: 'Discover movies that perfectly match your mood and preferences.',
    tags: ['Entertainment', 'Discovery'],
    link: 'https://movie-q-pi.vercel.app/index.html',
    color: '#D81339' // Amber
  },
  {
    id: 'project-vidpull',
    number: '06',
    title: 'VidPull',
    description: 'A free, fast, ad-free downloader for 4K videos and 320kbps MP3s.',
    tags: ['Tool', 'Productivity'],
    link: 'https://vidpull-5jjb.onrender.com/',
    color: '#6e1c1c' // Crimson
  },
  {
    id: 'project-facet',
    number: '07',
    title: 'Facet - Minimal Clock',
    description: 'A customizable minimalist clock application with dynamic background effects.',
    tags: ['Web App', 'Tool'],
    link: 'https://facet-minimal-clock-app.vercel.app/',
    color: '#d9381e' // Deep Coral
  },
  {
    id: 'project-invoice',
    number: '08',
    title: 'Invoice Generator',
    description: 'Create professional invoices in minutes with a sleek, modern interface.',
    tags: ['Web App', 'Tool'],
    link: 'https://invoice-generator-omega-five.vercel.app/',
    color: '#8b5cf6' // Violet
  },
  {
    id: 'project-encoder',
    number: '09',
    title: 'Image Encoder Decoder',
    description: 'Encrypt your images with our secure steganography-based encoding tool.',
    tags: ['Security', 'Tool'],
    link: 'https://image-encoder-decoder-sigma.vercel.app/',
    color: '#10b981' // Emerald
  },
  {
    id: 'project-birthday',
    number: '10',
    title: 'Bestfriend\'s Birthday',
    description: 'An authentic, handcrafted birthday celebration website for my bestfriend.',
    tags: ['Creative', 'Personal'],
    link: 'https://ashazapps.qzz.io/auth/auth.html',
    color: '#f43f5e' // Rose
  },
  {
    id: 'project-bg-remover',
    number: '11',
    title: 'Remove Background',
    description: 'Remove backgrounds from your images effortlessly with AI-powered precision.',
    tags: ['AI', 'Image'],
    link: 'https://bg-remove-bj82.onrender.com/',
    color: '#d4493f' // Red
  },
  {
    id: 'project-attendance',
    number: '12',
    title: 'Attendify',
    description: 'Easy student attendance tracking powered by facial recognition technology.',
    tags: ['AI', 'Education'],
    link: 'https://attendify-attendance-identity.vercel.app/',
    color: '#3b82f6' // Blue
  },
  {
    id: 'project-aqi',
    number: '13',
    title: 'AQI PRO',
    description: 'Real-time air quality monitoring and health recommendations.',
    tags: ['AI', 'Education'],
    link: 'https://aqi-weather.vercel.app/',
    color: '#14b8a6' // Teal
  }
];
