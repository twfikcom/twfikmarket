import React from 'react';
import { View } from '../../App.js';

interface BreadcrumbLink {
  label: string;
  view: View;
}

interface BreadcrumbProps {
  links: BreadcrumbLink[];
  currentPage: string;
  setView: (view: View) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ links, currentPage, setView }) => {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-900/50">
      <div className="container mx-auto px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          {links.map((link, index) => (
            <li key={index} className="flex items-center">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); setView(link.view); }}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
              <svg className="w-4 h-4 text-gray-600 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </li>
          ))}
          <li aria-current="page">
            <span className="font-medium text-white">{currentPage}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;