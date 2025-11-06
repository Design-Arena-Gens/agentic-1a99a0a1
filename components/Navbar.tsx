"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header aria-label="Primary" className={`sticky top-0 z-50 transition ${isScrolled ? 'bg-bg/70 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="container-max flex items-center justify-between h-16" role="navigation">
        <Link href="#hero" className="font-extrabold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md" aria-label="Aegis Crypto Home">
          <span className="gradient-text">Aegis</span> Crypto
        </Link>
        <ul className="hidden md:flex gap-6 text-sm text-white/80">
          <li><Link href="#insights" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1 py-0.5">Insights</Link></li>
          <li><Link href="#market" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1 py-0.5">Market</Link></li>
          <li><Link href="#testimonials" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1 py-0.5">Stories</Link></li>
          <li><Link href="#pricing" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1 py-0.5">Pricing</Link></li>
        </ul>
        <div className="flex items-center gap-2">
          <Link href="#cta" className="btn-secondary text-sm" aria-label="Get Started">Get Started</Link>
        </div>
      </nav>
    </header>
  );
}
