import React from 'react';
import PageHeader from './ui/PageHeader.tsx';
import { WebsiteService } from '../types.ts';
import { View } from '../App.tsx';
import { servicesData } from '../data/services.ts';

const PricingCard: React.FC<{ service: WebsiteService; onSelect: (id: string) => void; }> = ({ service, onSelect }) => (
  <div className={`relative p-8 rounded-xl border flex flex-col transition-all duration-300 ${service.popular ? 'bg-gray-900/50 border-cyan-400/50' : 'bg-gray-900/30 border-gray-800/50 hover:border-cyan-400/50'}`}>
    {service.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cyan-500 text-gray-900 font-bold text-sm px-4 py-1 rounded-full">MOST POPULAR</div>}
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-white text-center">{service.name}</h3>
      <p className="text-5xl font-extrabold text-white text-center my-4">
        {service.price}
      </p>
      <p className="text-gray-400 text-center mb-8 h-16">{service.shortDescription}</p>
    </div>
    <button 
      onClick={() => onSelect(service.id)}
      className={`w-full font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 ${service.popular ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-xl shadow-cyan-500/30' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
      View Details
    </button>
  </div>
);

const WebsiteDevelopmentPage: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  const handleSelectPlan = (id: string) => {
    setView({ page: 'websiteDetail', id });
  };

  return (
    <div className="animate-fadeIn">
      <PageHeader title="Website Development Services" subtitle="Scalable, secure, and high-performance websites tailored for you." />
      
      <section id="pricing" className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {servicesData.map(service => (
              <PricingCard key={service.id} service={service} onSelect={handleSelectPlan} />
            ))}
          </div>
        </div>
      </section>

       <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-400 mb-8">
            The plans above are starting points. We can create a fully custom package tailored to your exact needs. Contact us for a detailed consultation and quote.
          </p>
           <a href="#" onClick={(e) => { e.preventDefault(); setView({ page: 'contact' }); }} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30">
            Get a Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopmentPage;