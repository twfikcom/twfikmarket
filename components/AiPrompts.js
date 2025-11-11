import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon.js';

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center py-16 md:py-24 bg-black">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white animate-fadeIn">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
        {title}
      </span>
    </h1>
    <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
      {subtitle}
    </p>
  </div>
);

const CtaButtons: React.FC<{ navigateToContact: (subject: string) => void; subject: string }> = ({ navigateToContact, subject }) => (
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

const PromptDemoCard = ({ title, prompt, output, isImage = false }: { title: string; prompt: string; output: string; isImage?: boolean }) => (
  <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800/50">
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <div className="mb-6">
      <label className="block text-cyan-400 font-semibold mb-2">Prompt:</label>
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <p className="text-gray-300 font-mono text-sm">{prompt}</p>
      </div>
    </div>
    <div>
      <label className="block text-cyan-400 font-semibold mb-2">Generated Output:</label>
      <div className="bg-gray-800/50 p-4 rounded-lg">
        {isImage ? (
          <img src={output} alt="Generated output" className="w-full h-auto object-cover rounded-md" />
        ) : (
          <p className="text-gray-300">{output}</p>
        )}
      </div>
    </div>
  </div>
);

const AiPrompts: React.FC<{ navigateToContact: (subject: string) => void }> = ({ navigateToContact }) => {
  return (
    <div className="animate-fadeIn">
      <PageHeader title="AI Prompts Marketplace" subtitle="Unlock limitless creativity with our expertly engineered prompts." />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Service Demos</h2>
            <p className="text-lg text-gray-400 mt-4">See our prompts in action.</p>
            <div className="mt-4 mx-auto w-24 h-1 bg-cyan-400 rounded"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PromptDemoCard
              title="Marketing Copy Generator"
              prompt="Write a catchy tagline for a new brand of coffee that is organic and ethically sourced."
              output="Sip with a conscience. Taste the difference."
            />
            <PromptDemoCard
              title="Sci-Fi Character Concept"
              prompt="A grizzled cyborg space-pirate with a robotic parrot on his shoulder, standing on the bridge of his rusty starship, looking out at a nebula."
              output="https://images.unsplash.com/photo-1582490339794-358046ab6d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              isImage={true}
            />
          </div>
           <div className="max-w-2xl mx-auto mt-16">
            <CtaButtons navigateToContact={navigateToContact} subject="AI Prompts" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiPrompts;