import React from 'react';
import PageHeader from './ui/PageHeader.tsx';
import { AiPrompt } from '../types.ts';
import { View } from '../App.tsx';
import { promptsData } from '../data/prompts.ts';

const PromptCard: React.FC<{ prompt: AiPrompt; onView: (id: string) => void; }> = ({ prompt, onView }) => (
  <div 
    onClick={() => onView(prompt.id)}
    className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 cursor-pointer h-full flex flex-col"
  >
    <div className="relative z-10 flex-grow flex flex-col">
      <div className="mb-4">
        <span className="text-sm font-semibold bg-cyan-500/20 text-cyan-300 py-1 px-3 rounded-full">{prompt.category}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{prompt.name}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow">{prompt.shortDescription}</p>
      <div className="mt-6 text-cyan-400 font-semibold group-hover:text-cyan-300">
        View Prompt &rarr;
      </div>
    </div>
  </div>
);


const AiPromptsPage: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  
  const handleViewPrompt = (id: string) => {
    setView({ page: 'promptDetail', id });
  };
  
  return (
    <div className="animate-fadeIn">
      <PageHeader title="AI Prompts Marketplace" subtitle="Unlock limitless creativity with our expertly engineered prompts." />

      <section id="prompts" className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Explore Our Prompt Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {promptsData.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} onView={handleViewPrompt} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-4">Need a Custom Prompt Solution?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Our experts can design prompts for any task. Contact us to discuss your project.
          </p>
           <a href="#" onClick={(e) => { e.preventDefault(); setView({ page: 'contact' }); }} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30">
            Request Custom Prompts
          </a>
        </div>
      </section>

    </div>
  );
};

export default AiPromptsPage;