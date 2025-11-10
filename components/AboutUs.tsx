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

// FIX: Defined a dedicated interface for TeamMemberCard props and typed the component
// with React.FC to resolve type errors with special React props like 'key'.
interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, bio, imageUrl }) => (
  <div className="group bg-gray-900/50 rounded-xl border border-gray-800/50 p-6 text-center transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700 group-hover:border-cyan-400 transition-colors duration-300"/>
    <h3 className="text-2xl font-bold text-white">{name}</h3>
    <p className="text-cyan-400 mb-2">{role}</p>
    <p className="text-gray-400">{bio}</p>
  </div>
);


const AboutUs: React.FC = () => {
  const team = [
    { name: 'Alex Drake', role: 'Founder & CEO', bio: 'The visionary behind TWFIK, passionate about leveraging technology to solve real-world problems.', imageUrl: 'https://i.pravatar.cc/150?u=alex' },
    { name: 'Jasmine Kaur', role: 'Lead Developer', bio: 'A coding virtuoso with a knack for building scalable, high-performance web applications.', imageUrl: 'https://i.pravatar.cc/150?u=jasmine' },
    { name: 'Leo Martinez', role: 'Head of UX/UI', bio: 'Creative mind dedicated to crafting beautiful, intuitive, and user-centric digital experiences.', imageUrl: 'https://i.pravatar.cc/150?u=leo' },
  ];

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

      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Meet The Team</h2>
            <p className="text-lg text-gray-400 mt-4">The brilliant minds behind our success.</p>
            <div className="mt-4 mx-auto w-24 h-1 bg-cyan-400 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(member => <TeamMemberCard key={member.name} name={member.name} role={member.role} bio={member.bio} imageUrl={member.imageUrl} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
