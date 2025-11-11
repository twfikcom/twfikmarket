import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 animate-fadeIn text-white tracking-tight">
                <span className="animate-lightning-strike">
                    Build. Innovate. Dominate.
                </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                Your One-Stop Solution for Cutting-Edge Web Development, AI Prompts, Digital Tools, and Premium Domains.
            </p>
            <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-black shadow-lg shadow-white/10">
                    Get Started
                </button>
            </div>
        </div>
    </section>
  );
};

export default Hero;