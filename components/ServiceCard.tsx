import React from 'react';
import { Service } from '../types';
import { View } from '../App';

interface ServiceCardProps {
  service: Service;
  setView?: (view: View) => void;
  page?: View['page'];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, setView, page }) => {
  const Icon = service.icon;
  const isClickable = !!(setView && page);

  const handleClick = () => {
    if (isClickable) {
      setView({ page: page! });
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 ${isClickable ? 'cursor-pointer' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="mb-4 bg-gray-800/50 p-4 rounded-lg inline-block group-hover:bg-cyan-500/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
      </div>
      <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-md"></div>
    </div>
  );
};

export default ServiceCard;
