import React from 'react';
import { WebsiteService } from '../../types';
import { View } from '../../App';
import Breadcrumb from '../ui/Breadcrumb';
import CtaButtons from '../ui/CtaButtons';
import FaqAccordion from '../ui/FaqAccordion';
import { servicesData } from '../../data/services';

interface WebsiteServiceDetailPageProps {
  service: WebsiteService;
  navigateToContact: (subject: string) => void;
  setView: (view: View) => void;
}

const WebsiteServiceDetailPage: React.FC<WebsiteServiceDetailPageProps> = ({ service, navigateToContact, setView }) => {
  const otherServices = servicesData.filter(s => s.id !== service.id);

  return (
    <div className="animate-fadeIn">
      <Breadcrumb 
        links={[{ label: 'Home', view: { page: 'home' } }, { label: 'Websites', view: { page: 'websites' } }]}
        currentPage={service.name}
        setView={setView}
      />
      <main>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{service.name}</h1>
              <p className="text-2xl text-cyan-400 font-bold mb-6">{service.price}</p>
              <p className="text-lg text-gray-400 mb-8">{service.description}</p>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <CtaButtons navigateToContact={navigateToContact} subject={service.name} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {service.portfolio.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className="rounded-lg shadow-lg w-full h-full object-cover"/>
              ))}
            </div>
          </div>
        </section>

        <section id="other-plans" className="py-20 md:py-28 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Explore Other Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherServices.map(otherService => (
                <div 
                  key={otherService.id}
                  onClick={() => setView({ page: 'websiteDetail', id: otherService.id })}
                  className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-2xl font-bold text-white mb-2">{otherService.name}</h3>
                      <p className="text-lg text-cyan-400 font-bold">{otherService.price}</p>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 h-16">{otherService.shortDescription}</p>
                    <span className="text-cyan-400 font-semibold group-hover:text-cyan-300">
                      View Plan &rarr;
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
            <FaqAccordion items={service.faq} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default WebsiteServiceDetailPage;