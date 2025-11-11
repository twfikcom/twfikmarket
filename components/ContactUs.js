import React, { useState, useEffect } from 'react';
import { LocationIcon } from './icons/LocationIcon.js';
import { MailIcon } from './icons/MailIcon.js';
import { PhoneIcon } from './icons/PhoneIcon.js';

interface ContactUsProps {
  subject?: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ subject = '' }) => {
  const [formSubject, setFormSubject] = useState(subject);

  useEffect(() => {
    setFormSubject(subject);
  }, [subject]);

  return (
    <div className="animate-fadeIn">
      <div className="text-center py-16 md:py-24 bg-black">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Get In Touch
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
          Have a project in mind or just want to say hello? We'd love to hear from you.
        </p>
      </div>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 bg-gray-900/50 border border-gray-800/50 rounded-xl p-8 md:p-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                    <input type="text" id="name" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                    <input type="email" id="email" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"></textarea>
                </div>
                <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30">
                  Send Message
                </button>
              </form>
            </div>
            <div className="mt-8 md:mt-0">
               <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
               <p className="text-gray-400 mb-8">
                 Reach out to us directly through our contact channels. We're available Monday to Friday, 9 AM to 5 PM.
               </p>
               <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-800/50 p-3 rounded-lg mr-4"><LocationIcon className="w-6 h-6 text-cyan-400" /></div>
                    <div>
                      <h3 className="text-white font-semibold">Our Office</h3>
                      <p className="text-gray-400">123 Innovation Drive, Tech City, 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-800/50 p-3 rounded-lg mr-4"><MailIcon className="w-6 h-6 text-cyan-400" /></div>
                    <div>
                      <h3 className="text-white font-semibold">Email Us</h3>
                      <p className="text-gray-400">contact@twfik.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-800/50 p-3 rounded-lg mr-4"><PhoneIcon className="w-6 h-6 text-cyan-400" /></div>
                    <div>
                      <h3 className="text-white font-semibold">Call Us</h3>
                      <p className="text-gray-400">(123) 456-7890</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;