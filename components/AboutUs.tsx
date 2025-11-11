import React from 'react';

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

const AboutUs: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <PageHeader title="About TWFIK" subtitle="Innovating the digital landscape, one project at a time." />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission & Values</h2>
              <p className="text-gray-400 mb-6">
                Our mission is to empower businesses and creators by providing them with exceptional digital tools and services. We are driven by a commitment to innovation, quality, and unparalleled customer success. We believe in building not just websites, but lasting partnerships.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300"><span className="text-cyan-400 mr-2">✓</span> Integrity & Transparency</p>
                <p className="flex items-center text-gray-300"><span className="text-cyan-400 mr-2">✓</span> Unrelenting Pursuit of Excellence</p>
                <p className="flex items-center text-gray-300"><span className="text-cyan-400 mr-2">✓</span> Collaboration and Teamwork</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-gray-400">
                Founded in a small garage with a big idea, TWFIK started as a passion project to explore the intersection of code and creativity. It has since grown into a dynamic agency serving clients worldwide. Our journey is a testament to the power of dedication and the endless possibilities of the web.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;