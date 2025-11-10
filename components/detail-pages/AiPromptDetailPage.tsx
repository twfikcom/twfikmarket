import React from 'react';
import { AiPrompt } from '../../types';
import { View } from '../../App';
import Breadcrumb from '../ui/Breadcrumb';
import CtaButtons from '../ui/CtaButtons';
import FaqAccordion from '../ui/FaqAccordion';
import { promptsData } from '../../data/prompts';

interface AiPromptDetailPageProps {
  prompt: AiPrompt;
  navigateToContact: (subject: string) => void;
  setView: (view: View) => void;
}

const AiPromptDetailPage: React.FC<AiPromptDetailPageProps> = ({ prompt, navigateToContact, setView }) => {
  const otherPrompts = promptsData.filter(p => p.id !== prompt.id).slice(0, 2);

  return (
    <div className="animate-fadeIn">
       <Breadcrumb 
        links={[{ label: 'Home', view: { page: 'home' } }, { label: 'AI Prompts', view: { page: 'prompts' } }]}
        currentPage={prompt.name}
        setView={setView}
      />
      <main>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
               <span className="text-sm font-semibold bg-cyan-500/20 text-cyan-300 py-1 px-3 rounded-full mb-4 inline-block">{prompt.category}</span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{prompt.name}</h1>
              <p className="text-2xl text-cyan-400 font-bold mb-6">{prompt.price}</p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">{prompt.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900/50 border border-gray-800/50 rounded-xl p-8">
              <div>
                <h3 className="block text-cyan-400 font-semibold mb-2 text-xl">The Prompt</h3>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{prompt.promptText}</p>
                </div>
              </div>
               <div>
                <h3 className="block text-cyan-400 font-semibold mb-2 text-xl">Sample Output</h3>
                <div className="bg-gray-800/50 p-4 rounded-lg h-full">
                  {prompt.isImageSample ? (
                    <img src={prompt.sampleOutput} alt="Generated output" className="w-full h-auto object-cover rounded-md" />
                  ) : (
                    <p className="text-gray-300 whitespace-pre-wrap">{prompt.sampleOutput}</p>
                  )}
                </div>
              </div>
            </div>
             <div className="max-w-2xl mx-auto mt-12">
                <CtaButtons navigateToContact={navigateToContact} subject={`Purchase Prompt: ${prompt.name}`} />
             </div>
          </div>
        </section>

        <section id="other-prompts" className="py-20 md:py-28 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Discover Other Prompts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPrompts.map(otherPrompt => (
                <div 
                  key={otherPrompt.id}
                  onClick={() => setView({ page: 'promptDetail', id: otherPrompt.id })}
                  className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative z-10">
                     <span className="text-sm font-semibold bg-cyan-500/20 text-cyan-300 py-1 px-3 rounded-full mb-4 inline-block">{otherPrompt.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{otherPrompt.name}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 h-16">{otherPrompt.shortDescription}</p>
                    <span className="text-cyan-400 font-semibold group-hover:text-cyan-300">
                      View Prompt &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 md:py-28 bg-gray-900/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <FaqAccordion items={prompt.faq} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AiPromptDetailPage;