/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react'
    ]
  },
  reactStrictMode: true
};

export default nextConfig;
