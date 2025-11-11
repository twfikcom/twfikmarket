import React from 'react';
import { View } from '../App.js';

interface AboutUsPreviewProps {
  setView: (view: View) => void;
}

const AboutUsPreview: React.FC<AboutUsPreviewProps> = ({ setView }) => {
  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Driven by Innovation, Defined by Quality
        </h2>
        <div className="mt-4 mx-auto w-24 h-1 bg-cyan-400 rounded mb-8"></div>
        <p className="text-lg text-gray-400">
          At TWFIK, our mission is to empower businesses and creators with exceptional digital tools and services. We are committed to innovation, quality, and client success, building not just websites, but lasting partnerships. Our values of integrity and excellence guide everything we do.
        </p>
        <button
          onClick={() => setView({ page: 'about' })}
          className="mt-10 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400 hover:text-black shadow-lg shadow-cyan-500/20"
        >
          Learn More About Us
        </button>
      </div>
    </section>
  );
};

export default AboutUsPreview;