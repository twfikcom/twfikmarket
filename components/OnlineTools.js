import React from 'react';
import ServiceCard from './ServiceCard.js';
import { LightbulbIcon } from './icons/LightbulbIcon.js';
import { ToolsIcon } from './icons/ToolsIcon.js';
import { CodeIcon } from './icons/CodeIcon.js';
import { WhatsappIcon } from './icons/WhatsappIcon.js';


const PageHeader = ({ title, subtitle }) => (
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

const CtaButtons = ({ navigateToContact, subject }) => (
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


const tools = [
  {
    icon: LightbulbIcon,
    title: "SEO Keyword Analyzer",
    description: "Analyze keyword density and get suggestions to improve your content's search engine ranking. A must-have for content creators.",
  },
  {
    icon: ToolsIcon,
    title: "Image Compressor",
    description: "Drastically reduce the file size of your images without sacrificing quality. Speed up your website and save bandwidth.",
  },
  {
    icon: CodeIcon,
    title: "Code Formatter",
    description: "Automatically format your code in various languages for better readability and consistency across your projects.",
  },
];

const OnlineTools = ({ navigateToContact }) => {
  return (
    <div className="animate-fadeIn">
      <PageHeader title="Ready-Made Online Tools" subtitle="Powerful, easy-to-use tools to streamline your workflow." />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <ServiceCard key={index} service={tool} />
            ))}
          </div>
           <div className="max-w-2xl mx-auto mt-16">
            <CtaButtons navigateToContact={navigateToContact} subject="Online Tools" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineTools;
