import React from 'react';
import logoImg from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-3">
            <img src={logoImg} alt="Dev Stack Logo" className="h-6 w-auto object-contain" />
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Curated tools, technologies, and resources to develop modern full-stack software.
            </p>
            <div className="flex space-x-3 text-xs text-gray-500 pt-1">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-black">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black">LinkedIn</a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">Product</h4>
            <ul className="space-y-1.5 text-xs text-gray-500">
              <li><a href="#home" className="hover:text-black">Home</a></li>
              <li><a href="#technologies" className="hover:text-black">Technologies</a></li>
              <li><a href="#projects" className="hover:text-black">Projects</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">Company</h4>
            <ul className="space-y-1.5 text-xs text-gray-500">
              <li><a href="#about" className="hover:text-black">About</a></li>
              <li><a href="#contact" className="hover:text-black">Contact</a></li>
              <li><a href="#careers" className="hover:text-black">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">Legal</h4>
            <ul className="space-y-1.5 text-xs text-gray-500">
              <li><a href="#privacy" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-black">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-2">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-black">Privacy</a>
            <a href="#terms" className="hover:text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;