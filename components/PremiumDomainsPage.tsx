import React from 'react';
import PageHeader from './ui/PageHeader';
import CtaButtons from './ui/CtaButtons';
import FaqAccordion from './ui/FaqAccordion';

// FIX: Defined a dedicated interface for DomainRow props and typed the component
// with React.FC to resolve type errors with special React props like 'key'.
interface DomainRowProps {
  domain: string;
  price: string;
  navigateToContact: (subject: string) => void;
}

const DomainRow: React.FC<DomainRowProps> = ({ domain, price, navigateToContact }) => (
  <div className="grid grid-cols-3 items-center gap-4 p-4 border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors duration-200">
    <p className="font-bold text-lg text-white col-span-1">{domain}</p>
    <p className="text-cyan-400 font-semibold text-lg text-center col-span-1">{price}</p>
    <div className="col-span-1 text-right">
      <button 
        onClick={() => navigateToContact(`Domain Inquiry: ${domain}`)}
        className="bg-gray-800 hover:bg-cyan-500 hover:text-gray-900 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
      >
        Inquire
      </button>
    </div>
  </div>
);


const PremiumDomainsPage: React.FC<{ navigateToContact: (subject: string) => void }> = ({ navigateToContact }) => {
  const domains = [
    { name: 'innovate.ai', price: '$5,000' },
    { name: 'cybersolutions.io', price: '$4,200' },
    { name: 'weblink.co', price: '$3,500' },
    { name: 'prompthub.net', price: '$2,800' },
    { name: 'digitalverse.com', price: '$6,000' },
  ];
  
   const faqs = [
    { question: 'How does the domain purchase process work?', answer: 'Once you inquire about a domain, we will contact you to discuss the price and terms. The transfer is handled securely through a trusted domain registrar like Escrow.com to ensure both buyer and seller are protected.' },
    { question: 'Are the prices negotiable?', answer: 'In some cases, prices for premium domains may be negotiable. Please contact us to discuss the specific domain you are interested in.' },
    { question: 'How long does the domain transfer take?', answer: 'A domain transfer typically takes 5-7 business days to complete after the payment has been secured and the transfer process has been initiated by both parties.' },
    { question: 'Can you help me find a domain that is not listed?', answer: 'Yes, we offer a domain brokerage service to help you acquire a domain that is already registered by someone else. Contact us for more details on this service.' },
  ];

  return (
    <div className="animate-fadeIn">
      <PageHeader title="Premium Domain Marketplace" subtitle="Secure the perfect online identity for your brand." />
      
      <section id="details" className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-4xl font-bold text-center text-white mb-4">Your Brand Starts Here</h2>
           <p className="text-lg text-gray-400 text-center mb-12">
            A premium domain name is a powerful asset. It's memorable, credible, and sets the foundation for your brand's online presence. Our marketplace features a curated selection of high-value domains that can give your business an instant competitive edge.
           </p>
        </div>
      </section>

      <section id="marketplace" className="py-20 md:py-28 bg-black">
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
                <DomainRow key={domain.name} domain={domain.name} price={domain.price} navigateToContact={navigateToContact} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
           <FaqAccordion items={faqs} />
        </div>
      </section>
      
       <section id="contact" className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-4">Have a Domain in Mind?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Contact us for brokerage services or to make an offer on any of our listed domains.
          </p>
          <CtaButtons navigateToContact={navigateToContact} subject="Premium Domains Inquiry" />
        </div>
      </section>
    </div>
  );
};

export default PremiumDomainsPage;