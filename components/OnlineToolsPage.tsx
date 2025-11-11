import React from 'react';
import PageHeader from './ui/PageHeader.tsx';
import { OnlineTool } from '../types.ts';
import { View } from '../App.tsx';
import { toolsData } from '../data/tools.ts';

const ToolCard: React.FC<{ tool: OnlineTool; onView: (id: string) => void; }> = ({ tool, onView }) => {
  const Icon = tool.icon;
  return (
    <div 
      onClick={() => onView(tool.id)}
      className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 cursor-pointer h-full flex flex-col"
    >
      <div className="relative z-10">
        <div className="mb-4 bg-gray-800/50 p-4 rounded-lg inline-block group-hover:bg-cyan-500/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{tool.name}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{tool.shortDescription}</p>
         <div className="mt-6 text-cyan-400 font-semibold group-hover:text-cyan-300">
          See Details &rarr;
        </div>
      </div>
    </div>
  );
};


const OnlineToolsPage: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  const handleViewTool = (id: string) => {
    setView({ page: 'toolDetail', id });
  };
  
  return (
    <div className="animate-fadeIn">
      <PageHeader title="Ready-Made Online Tools" subtitle="Powerful, easy-to-use tools to streamline your workflow." />
      
      <section id="tools" className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our Suite of Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsData.map((tool) => (
              <ToolCard key={tool.id} tool={tool} onView={handleViewTool} />
            ))}
          </div>
        </div>
      </section>
      
       <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-4">Looking for a Custom Tool?</h2>
          <p className="text-lg text-gray-400 mb-8">
            We can design and build a bespoke online tool to meet your exact business requirements. Let's talk about your project.
          </p>
          <a href="#" onClick={(e) => { e.preventDefault(); setView({ page: 'contact' }); }} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30">
            Request a Custom Tool
          </a>
        </div>
      </section>

    </div>
  );
};

export default OnlineToolsPage;