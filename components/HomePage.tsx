import React from 'react';
import Hero from './Hero.tsx';
import ServicesSection from './ServicesSection.tsx';
import { View } from '../App.tsx';
import { servicesData } from '../data/services.ts';
import AboutUsPreview from './AboutUsPreview.tsx';

const WebsiteDevelopmentPreview: React.FC<{setView: (view: View) => void}> = ({ setView }) => {
  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Website Development Services</h2>
          <p className="text-lg text-gray-400 mt-4">Crafting digital experiences that captivate and convert.</p>
          <div className="mt-4 mx-auto w-24 h-1 bg-cyan-400 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map(plan => (
            <div key={plan.id} className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 flex flex-col">
               <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2 text-cyan-400">{plan.name} Plan</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">{plan.shortDescription}</p>
                <button onClick={() => setView({ page: 'websiteDetail', id: plan.id })} className="w-full mt-auto font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 bg-gray-800 hover:bg-gray-700 text-white">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const HomePage: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  return (
    <>
      <Hero />
      <WebsiteDevelopmentPreview setView={setView} />
      <AboutUsPreview setView={setView} />
      <ServicesSection setView={setView} />
    </>
  );
};

export default HomePage;