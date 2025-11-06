import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-max py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="text-lg font-bold"><span className="gradient-text">Aegis</span> Crypto</div>
          <p className="subtext mt-2">AI-powered crypto analysis for smarter trading.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-white/70">
            <li><Link href="#about" className="hover:text-white">About Us</Link></li>
            <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-white/70">
            <li><Link href="#terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="#privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Follow</h3>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 hover:bg-white/10">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="container-max py-6 text-xs text-white/50 border-t border-white/10">? {new Date().getFullYear()} Aegis Crypto. All rights reserved.</div>
    </footer>
  );
}
