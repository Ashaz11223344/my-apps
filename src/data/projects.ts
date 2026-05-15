export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 'project-invoice',
    number: '01',
    title: 'Invoice Generator',
    description: 'Create professional invoices in minutes with a sleek, modern interface.',
    tags: ['Web App', 'Tool'],
    link: 'https://invoice-generator-omega-five.vercel.app/',
    color: '#8b5cf6' // Violet
  },
  {
    id: 'project-attendance',
    number: '02',
    title: 'Attendify',
    description: 'Easy student attendance tracking powered by facial recognition technology.',
    tags: ['AI', 'Education'],
    link: 'https://attendify-attendance-identity.vercel.app/',
    color: '#3b82f6' // Blue
  },
  {
    id: 'project-encoder',
    number: '03',
    title: 'Image Encoder Decoder',
    description: 'Encrypt your images with our secure steganography-based encoding tool.',
    tags: ['Security', 'Tool'],
    link: 'https://image-encoder-decoder-sigma.vercel.app/',
    color: '#10b981' // Emerald
  },
  {
    id: 'project-birthday',
    number: '04',
    title: 'Bestfriend\'s Birthday',
    description: 'An authentic, handcrafted birthday celebration website for my bestfriend.',
    tags: ['Creative', 'Personal'],
    link: 'https://ashazapps.qzz.io/auth/auth.html',
    color: '#f43f5e' // Rose
  },
  {
    id: 'project-bg-remover',
    number: '05',
    title: 'Remove Background',
    description: 'Remove backgrounds from your images effortlessly with AI-powered precision.',
    tags: ['AI', 'Image'],
    link: 'https://bg-remover-etms.onrender.com/',
    color: '#ec4899' // Pink
  },
  {
    id: 'project-movieq',
    number: '06',
    title: 'MovieQ',
    description: 'Discover movies that perfectly match your mood and preferences.',
    tags: ['Entertainment', 'Discovery'],
    link: 'https://movie-q-pi.vercel.app/index.html',
    color: '#f59e0b' // Amber
  },
  {
    id: 'project-aqi',
    number: '07',
    title: 'AQI PRO',
    description: 'Real-time air quality monitoring and health recommendations.',
    tags: ['AI', 'Education'],
    link: 'https://aqi-weather.vercel.app/',
    color: '#14b8a6' // Teal
  },
  {
    id: 'project-lumina',
    number: '08',
    title: 'Lumina Spaces',
    description: 'Get personalized architectural designs for your spaces.',
    tags: ['Architect', 'Design'],
    link: 'https://luminaspaces.qzz.io/',
    color: '#21732c' // Green
  }
];
