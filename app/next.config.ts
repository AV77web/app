import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ['andreavillari.it'],    // con questa autorizzo tutte 
    remotePatterns: [                 // le immagine provenienti da quel 
      {                               // dominio
        protocol: 'https',            // 
        hostname: '**.cloudinary.com', 
        port: '',
        pathname: '/images/**',
      },
    ],
    deviceSizes: [ 640, 750, 828, 1080, 1280], // breackpoint responsive
  }
};

export default nextConfig;
