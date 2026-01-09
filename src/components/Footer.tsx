import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl text-white mb-3">
              <span className="text-amber-500">P</span>AWAN{' '}
              <span className="text-amber-500">R</span>AJ S
            </h3>
            <p className="text-gray-500 text-sm">
              Journalism & Mass Communication Student | Editor and Director
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-3 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <div className="space-y-2 text-gray-500 text-sm">
              <p>pawanrajsrinivas@gmail.com</p>
              <p>+91-9606337682</p>
              <p>Yelahanka, Bengaluru</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-3 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Works', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-500 hover:text-amber-500 text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Designed & built with{' '}
              <Heart className="text-red-500" size={14} fill="currentColor" /> by Pawan
              Raj S
            </p>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
