import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aegis Crypto ? AI-Powered Analysis & Trading Assistant',
  description: 'AI-driven insights, comprehensive crypto data, and interactive tools to help you trade smarter.',
  metadataBase: new URL('https://agentic-1a99a0a1.vercel.app'),
  openGraph: {
    title: 'Aegis Crypto ? AI-Powered Analysis & Trading Assistant',
    description: 'AI-driven insights, comprehensive crypto data, and interactive tools to help you trade smarter.',
    url: 'https://agentic-1a99a0a1.vercel.app',
    siteName: 'Aegis Crypto',
    type: 'website'
  },
  themeColor: '#0b0e14'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-bg text-white`}>        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
