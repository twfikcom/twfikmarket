import React, { useState } from 'react';
import { Page, View } from '../App';

const AnimatedLogo: React.FC<{setView: (view: View) => void}> = ({ setView }) => {
  return (
    <a 
      href="#" 
      onClick={(e) => { e.preventDefault(); setView({ page: 'home' }); }} 
      className="flex items-center gap-3 text-xl md:text-2xl font-bold tracking-wider cursor-pointer group" 
      aria-label="TWFIK Home"
    >
      <svg className="w-8 h-8 transition-transform duration-300 group-hover:rotate-90" viewBox="0 0 80 80" aria-hidden="true">
        <rect 
          className="stroke-cyan-400 animate-icon-glow"
          x="10" y="10" width="60" height="60" 
          strokeWidth="4" fill="none"
        />
        <text 
          className="fill-white font-bold"
          x="50%" y="50%" 
          dominantBaseline="middle" textAnchor="middle" 
          fontSize="40"
        >
          T
        </text>
      </svg>
       <div className="flex items-baseline">
        <span>
          TWFIK<span className="text-cyan-400">.</span>
        </span>
        <sup 
          className="ml-1 text-xs font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded animate-beta-shimmer"
        >
          Beta
        </sup>
      </div>
    </a>
  );
};

interface HeaderProps {
  currentPage: Page;
  setView: (view: View) => void;
}

const navLinks: { name: string; page: Page }[] = [
  { name: 'Index', page: 'home' },
  { name: 'Websites development', page: 'websites' },
  { name: 'AI prompts', page: 'prompts' },
  { name: 'Online Tools', page: 'tools' },
  { name: 'Premium Domains', page: 'domains' },
  { name: 'About us', page: 'about' },
  { name: 'Blog', page: 'blog' },
];

const Header: React.FC<HeaderProps> = ({ currentPage, setView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (page: Page) => {
    setView({ page });
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <AnimatedLogo setView={setView} />
        
        <nav className="hidden lg:flex items-center space-x-6 text-gray-300">
          {navLinks.map(link => (
             <a 
              key={link.page}
              href="#" 
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.page); }} 
              className={`transition-colors duration-300 ${currentPage === link.page ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button 
          onClick={() => handleLinkClick('contact')}
          className="hidden lg:block bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
        >
          Contact Us
        </button>
        
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none z-50 relative">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </div>
      
      <div 
        className={`
          lg:hidden absolute left-0 top-full w-full bg-black/95 backdrop-blur-lg shadow-lg 
          transition-all duration-300 ease-in-out transform
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col items-center space-y-2 p-6">
            {navLinks.map(link => (
            <a 
                key={link.page}
                href="#" 
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.page); }}
                className={`w-full py-2 text-lg text-center transition-colors duration-300 ${currentPage === link.page ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-cyan-400'}`}
            >
                {link.name}
            </a>
            ))}
            <button 
                onClick={() => handleLinkClick('contact')}
                className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 text-lg text-center"
            >
                Contact Us
            </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;