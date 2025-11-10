import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';

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

// FIX: Defined a dedicated interface for DomainRow props and typed the component
// with React.FC to resolve type errors with special React props like 'key'.
interface DomainRowProps {
  domain: string;
  price: string;
}

const DomainRow: React.FC<DomainRowProps> = ({ domain, price }) => (
  <div className="grid grid-cols-3 items-center gap-4 p-4 border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors duration-200">
    <p className="font-bold text-lg text-white col-span-1">{domain}</p>
    <p className="text-cyan-400 font-semibold text-lg text-center col-span-1">{price}</p>
    <div className="col-span-1 text-right">
      <button className="bg-gray-800 hover:bg-cyan-500 hover:text-gray-900 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
        Inquire
      </button>
    </div>
  </div>
);


const PremiumDomains: React.FC<{ navigateToContact: (subject: string) => void }> = ({ navigateToContact }) => {
  const domains = [
    { name: 'innovate.ai', price: '$5,000' },
    { name: 'cybersolutions.io', price: '$4,200' },
    { name: 'weblink.co', price: '$3,500' },
    { name: 'prompthub.net', price: '$2,800' },
    { name: 'digitalverse.com', price: '$6,000' },
  ];

  return (
    <div className="animate-fadeIn">
      <PageHeader title="Premium Domain Marketplace" subtitle="Secure the perfect online identity for your brand." />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12">
              <input
                type="text"
                placeholder="Search for your perfect domain..."
                className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg py-4 px-6 text-white text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-6 rounded-lg transition-all duration-300">
                Search
              </button>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-gray-800/50 overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800/50">
                <h3 className="font-semibold text-white col-span-1">Domain Name</h3>
                <h3 className="font-semibold text-white text-center col-span-1">Price</h3>
                <h3 className="font-semibold text-white text-right col-span-1">Action</h3>
              </div>
              {domains.map(domain => (
                <DomainRow key={domain.name} domain={domain.name} price={domain.price} />
              ))}
            </div>

             <div className="max-w-2xl mx-auto mt-16">
              <CtaButtons navigateToContact={navigateToContact} subject="Premium Domains" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumDomains;