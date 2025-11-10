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

// FIX: Defined a dedicated interface for PricingCard props and typed the component
// with React.FC to resolve type errors with special React props like 'key'.
interface PricingCardProps {
  plan: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, popular = false }) => (
  <div className={`relative p-8 rounded-xl border flex flex-col transition-all duration-300 ${popular ? 'bg-gray-900/50 border-cyan-400/50' : 'bg-gray-900/30 border-gray-800/50 hover:border-cyan-400/50'}`}>
    {popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cyan-500 text-gray-900 font-bold text-sm px-4 py-1 rounded-full">MOST POPULAR</div>}
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-white text-center">{plan}</h3>
      <p className="text-5xl font-extrabold text-white text-center my-4">
        ${price}
      </p>
      <ul className="space-y-4 my-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <button className={`w-full font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 ${popular ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-xl shadow-cyan-500/30' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
      Choose Plan
    </button>
  </div>
);


const WebsiteDevelopment: React.FC<{ navigateToContact: (subject: string) => void }> = ({ navigateToContact }) => {
  const pricingTiers = [
    {
      plan: 'Basic',
      price: 100,
      features: ['3-Page Static Site', 'Responsive Design', 'Contact Form', 'Basic SEO Setup'],
    },
    {
      plan: 'Pro',
      price: 200,
      features: ['5-Page Site', 'Basic CMS Integration', 'Advanced SEO Setup', '1 Month Support', 'Social Media Integration'],
      popular: true,
    },
    {
      plan: 'Enterprise',
      price: 300,
      features: ['E-commerce Functionality', 'Custom CMS', 'Dedicated Support', 'API Integration', 'Advanced Analytics'],
    },
  ];

  return (
    <div className="animate-fadeIn">
      <PageHeader title="Website Development" subtitle="Scalable, secure, and high-performance websites tailored for you." />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map(tier => (
              <PricingCard key={tier.plan} {...tier} />
            ))}
          </div>
          <div className="max-w-2xl mx-auto mt-16">
            <CtaButtons navigateToContact={navigateToContact} subject="Website Development" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;