import React from 'react';
import { OnlineTool } from '../../types.js';
import { View } from '../../App.js';
import Breadcrumb from '../ui/Breadcrumb.js';
import CtaButtons from '../ui/CtaButtons.js';
import FaqAccordion from '../ui/FaqAccordion.js';
import { toolsData } from '../../data/tools.js';

interface ToolDetailPageProps {
  tool: OnlineTool;
  navigateToContact: (subject: string) => void;
  setView: (view: View) => void;
}

const ToolDetailPage: React.FC<ToolDetailPageProps> = ({ tool, navigateToContact, setView }) => {
  const Icon = tool.icon;
  const otherTools = toolsData.filter(t => t.id !== tool.id);
  
  return (
    <div className="animate-fadeIn">
      <Breadcrumb 
        links={[{ label: 'Home', view: { page: 'home' } }, { label: 'Online Tools', view: { page: 'tools' } }]}
        currentPage={tool.name}
        setView={setView}
      />
      <main>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 bg-gray-800/50 p-4 rounded-lg inline-block">
                <Icon className="w-10 h-10 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{tool.name}</h1>
              <p className="text-2xl text-cyan-400 font-bold mb-6">{tool.price}</p>
              <p className="text-lg text-gray-400 mb-8">{tool.description}</p>
              <ul className="space-y-4 mb-8">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <CtaButtons navigateToContact={navigateToContact} subject={`Purchase Tool: ${tool.name}`} />
            </div>
            <div>
                <img src={tool.previewImage} alt={`${tool.name} preview`} className="rounded-lg shadow-2xl shadow-cyan-500/10 w-full h-auto object-cover border-2 border-gray-800"/>
            </div>
          </div>
        </section>

        <section id="other-tools" className="py-20 md:py-28 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Discover Other Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherTools.map(otherTool => {
                const OtherIcon = otherTool.icon;
                return (
                  <div 
                    key={otherTool.id}
                    onClick={() => setView({ page: 'toolDetail', id: otherTool.id })}
                    className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 bg-gray-800/50 p-3 rounded-lg inline-block group-hover:bg-cyan-500/20 transition-colors duration-300">
                        <OtherIcon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{otherTool.name}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 h-16">{otherTool.shortDescription}</p>
                      <span className="text-cyan-400 font-semibold group-hover:text-cyan-300">
                        See Details &rarr;
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 md:py-28 bg-gray-900/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <FaqAccordion items={tool.faq} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ToolDetailPage;