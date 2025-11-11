import React from 'react';
import { WhatsappIcon } from '../icons/WhatsappIcon.tsx';

interface CtaButtonsProps {
  navigateToContact: (subject: string) => void;
  subject: string;
}

const CtaButtons: React.FC<CtaButtonsProps> = ({ navigateToContact, subject }) => (
  <div className="flex flex-col sm:flex-row gap-4 mt-8">
    <button
      onClick={() => navigateToContact(`Inquiry: ${subject}`)}
      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30"
    >
      Get a Quote
    </button>
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/30"
    >
      <WhatsappIcon className="w-6 h-6" />
      Chat on WhatsApp
    </a>
  </div>
);

export default CtaButtons;