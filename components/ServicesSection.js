import React from 'react';
import ServiceCard from './ServiceCard.js';
import { CodeIcon } from './icons/CodeIcon.js';
import { LightbulbIcon } from './icons/LightbulbIcon.js';
import { ToolsIcon } from './icons/ToolsIcon.js';
import { DomainIcon } from './icons/DomainIcon.js';
import { Service } from '../types.js';
import { View } from '../App.js';

const services: { service: Service; page: View['page'] }[] = [
  {
    service: {
      icon: LightbulbIcon,
      title: "AI Prompts",
      description: "Unlock creativity with our curated marketplace of advanced AI prompts for any use case.",
    },
    page: 'prompts'
  },
  {
    service: {
      icon: ToolsIcon,
      title: "Ready-Made Online Tools",
      description: "Gain instant access to our suite of powerful, ready-to-deploy online tools.",
    },
    page: 'tools'
  },
  {
    service: {
      icon: DomainIcon,
      title: "Premium Domains",
      description: "Secure the perfect online identity with a handpicked, brandable domain name.",
    },
    page: 'domains'
  },
];

const ServicesSection: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Other Offerings</h2>
          <p className="text-lg text-gray-400 mt-4">Everything you need to succeed online.</p>
          <div className="mt-4 mx-auto w-24 h-1 bg-cyan-400 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <ServiceCard 
              key={index} 
              service={item.service} 
              setView={setView}
              page={item.page} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;