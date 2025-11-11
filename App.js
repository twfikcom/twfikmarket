import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import AboutUs from './components/AboutUs.js';
import Blog from './components/Blog.js';
import ContactUs from './components/ContactUs.js';
import WebsiteDevelopmentPage from './components/WebsiteDevelopmentPage.js';
import AiPromptsPage from './components/AiPromptsPage.js';
import OnlineToolsPage from './components/OnlineToolsPage.js';
import PremiumDomainsPage from './components/PremiumDomainsPage.js';
import WebsiteServiceDetailPage from './components/detail-pages/WebsiteServiceDetailPage.js';
import AiPromptDetailPage from './components/detail-pages/AiPromptDetailPage.js';
import ToolDetailPage from './components/detail-pages/ToolDetailPage.js';
import BlogPostPage from './components/BlogPostPage.js';
import Loader from './components/Loader.js';

import { servicesData } from './data/services.js';
import { promptsData } from './data/prompts.js';
import { toolsData } from './data/tools.js';
import { blogPostsData } from './data/blogPosts.js';

const App = () => {
  const [view, setView] = useState({ page: 'home' });
  const [contactSubject, setContactSubject] = useState('');

  const navigateToContact = (subject) => {
    setContactSubject(subject);
    setView({ page: 'contact' });
  };

  // SEO and Schema Management
  useEffect(() => {
    const setSeoData = (title, description, schema) => {
      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }

      const existingSchema = document.getElementById('json-ld-schema');
      if (existingSchema) existingSchema.remove();

      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    };
    
    let item;

    switch (view.page) {
      case 'websites':
        setSeoData('Website Development Services | TWFIK', 'Professional website development services. We build high-performance, responsive, and SEO-friendly websites tailored to your business needs.', {'@context': 'https://schema.org', '@type': 'Service', 'name': 'Website Development Services', 'description': 'Custom website development services.', 'provider': {'@type': 'Organization', 'name': 'TWFIK'}});
        break;
      case 'websiteDetail':
        item = servicesData.find(s => s.id === view.id);
        if (item) setSeoData(`${item.name} | TWFIK`, item.shortDescription, {'@context': 'https://schema.org', '@type': 'Product', 'name': item.name, 'description': item.description, 'image': item.portfolio[0]?.src, 'brand': {'@type': 'Brand', 'name': 'TWFIK'}, 'offers': {'@type': 'Offer', 'priceCurrency': 'USD', 'price': item.price.replace(/[^0-9.-]+/g,"") }});
        break;
      case 'prompts':
        setSeoData('AI Prompts Marketplace | TWFIK', 'Explore our marketplace for expertly engineered AI prompts. Unlock creativity for marketing, content creation, and more.', {'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Prompts Marketplace', 'description': 'A marketplace for high-quality, ready-to-use AI prompts.', 'provider': {'@type': 'Organization', 'name': 'TWFIK'}});
        break;
      case 'promptDetail':
        item = promptsData.find(p => p.id === view.id);
        if (item) setSeoData(`${item.name} | TWFIK AI Prompts`, item.shortDescription, {'@context': 'https://schema.org', '@type': 'Product', 'name': item.name, 'description': item.description, 'brand': {'@type': 'Brand', 'name': 'TWFIK'}, 'offers': {'@type': 'Offer', 'priceCurrency': 'USD', 'price': item.price.replace(/[^0-9.-]+/g,"") }});
        break;
      case 'tools':
        setSeoData('Ready-Made Online Tools | TWFIK', 'Boost productivity with our suite of ready-made online tools for SEO, image compression, and more.', {'@context': 'https://schema.org', '@type': 'Service', 'name': 'Ready-Made Online Tools', 'description': 'A suite of powerful, ready-to-deploy online tools.', 'provider': {'@type': 'Organization', 'name': 'TWFIK'}});
        break;
      case 'toolDetail':
        item = toolsData.find(t => t.id === view.id);
        if (item) setSeoData(`${item.name} | TWFIK Online Tools`, item.shortDescription, {'@context': 'https://schema.org', '@type': 'Product', 'name': item.name, 'description': item.description, 'image': item.previewImage, 'brand': {'@type': 'Brand', 'name': 'TWFIK'}, 'offers': {'@type': 'Offer', 'priceCurrency': 'USD', 'price': item.price.replace(/[^0-9.-]+/g,"") }});
        break;
      case 'blogPost':
        item = blogPostsData.find(b => b.id === view.id);
        if (item) setSeoData(`${item.title} | TWFIK Blog`, item.excerpt, {'@context': 'https://schema.org', '@type': 'BlogPosting', 'headline': item.title, 'author': {'@type': 'Person', 'name': item.author}, 'datePublished': item.date, 'image': item.imageUrl });
        break;
      case 'domains':
        setSeoData('Premium Domain Marketplace | TWFIK', 'Find and secure the perfect premium domain name for your brand. Browse our curated selection of memorable domains.', {'@context': 'https://schema.org', '@type': 'Service', 'name': 'Premium Domain Marketplace', 'description': 'A marketplace for premium, brandable domain names.', 'provider': {'@type': 'Organization', 'name': 'TWFIK'}});
        break;
      default:
        setSeoData('TWFIK - Web Solutions', 'TWFIK offers cutting-edge web development, AI prompts, digital tools, and premium domains to elevate your online presence.', {'@context': 'https://schema.org', '@type': 'Organization', 'name': 'TWFIK', 'url': 'https://twfikcom.github.io/twfikmarket', 'logo': 'https://twfikcom.github.io/twfikmarket/logo.png'});
    }
    window.scrollTo(0, 0);
  }, [view]);

  const renderPage = () => {
    switch (view.page) {
      case 'home':
        return <HomePage setView={setView} />;
      case 'websites':
        return <WebsiteDevelopmentPage setView={setView} />;
      case 'websiteDetail':
        const service = servicesData.find(s => s.id === view.id);
        return service ? <WebsiteServiceDetailPage service={service} navigateToContact={navigateToContact} setView={setView} /> : <WebsiteDevelopmentPage setView={setView} />;
      case 'prompts':
        return <AiPromptsPage setView={setView} />;
      case 'promptDetail':
        const prompt = promptsData.find(p => p.id === view.id);
        return prompt ? <AiPromptDetailPage prompt={prompt} navigateToContact={navigateToContact} setView={setView} /> : <AiPromptsPage setView={setView} />;
      case 'tools':
        return <OnlineToolsPage setView={setView} />;
       case 'toolDetail':
        const tool = toolsData.find(t => t.id === view.id);
        return tool ? <ToolDetailPage tool={tool} navigateToContact={navigateToContact} setView={setView} /> : <OnlineToolsPage setView={setView} />;
      case 'domains':
        return <PremiumDomainsPage navigateToContact={navigateToContact} />;
      case 'about':
        return <AboutUs />;
      case 'blog':
        return <Blog setView={setView} />;
      case 'blogPost':
        const post = blogPostsData.find(b => b.id === view.id);
        return post ? <BlogPostPage post={post} setView={setView} /> : <Blog setView={setView} />;
      case 'contact':
        return <ContactUs subject={contactSubject} />;
      default:
        return <HomePage setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] z-0"></div>
      <div className="relative z-10">
        <Header currentPage={view.page} setView={setView} />
        <main>
          {renderPage()}
        </main>
        <Footer setView={setView} />
      </div>
    </div>
  );
};

const BackgroundGrid = () => (
  <style>{`
    .bg-grid-gray-700\\/\\[0\\.2\\] {
      background-image: linear-gradient(to right, rgba(107, 114, 128, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(107, 114, 128, 0.1) 1px, transparent 1px);
      background-size: 40px 40px;
    }
  `}</style>
);

const AppWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Loader will be visible for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <BackgroundGrid />
      <Loader isLoading={isLoading} />
      <div 
        className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden={isLoading}
      >
        <App />
      </div>
    </>
  );
};

export default AppWrapper;
