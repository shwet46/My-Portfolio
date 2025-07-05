import React from 'react';
import Button from './Button';

const About = () => {
  const techs = [
    'Competitive programming',
    'Web development',
    'App development',
  ];

  return (
    <section id="about" className="pt-24 lg:pt-28 px-4 md:px-8">
      {/* Section Header */}
      <div className="flex font-secFont items-start py-6 text-zinc-300 md:text-4xl text-3xl tracking-wide reveal-up">
        <span className="text-pink-400">{"<"}</span>
        <span className="text-white">AboutMe</span>
        <span className="text-pink-400">{"/>"}</span>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 max-w-7xl mx-auto">
        
        {/* Main Introduction Card */}
        <div className="lg:col-span-8 bg-gradient-to-br from-zinc-900 to-zinc-900/80 rounded-2xl p-6 md:p-8 border border-zinc-800 hover:border-pink-400/30 transition-all duration-300 reveal-up">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-vsFont text-white">
                I'm <span className="text-pink-400">Shweta</span>
              </h2>
              <div className="flex items-center gap-2 text-stone-400 font-vsFont">
                <span className="material-symbols-rounded text-pink-400 text-xl">location_on</span>
                <span className="text-lg">India</span>
              </div>
            </div>
            
            <div className="space-y-4 text-left">
              <p className="text-stone-300 font-vsFont text-base md:text-lg leading-relaxed">
                I am an enthusiastic engineering student with a passion for 
                <span className="text-pink-400 font-medium"> building innovative solutions </span>
                and 
                <span className="text-rose-400 font-medium"> solving complex problems</span>. 
              </p>
              <p className="text-stone-300 font-vsFont text-base md:text-lg leading-relaxed">
                My journey has led me to explore various technologies and frameworks, especially in web development and competitive programming. I love learning new concepts, sharing knowledge, and taking on challenges that help me grow.
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                <div className="text-pink-400 text-lg font-bold">Engineering</div>
                <div className="text-stone-400 text-sm">Student</div>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                <div className="text-rose-400 text-lg font-bold">Problem</div>
                <div className="text-stone-400 text-sm">Solver</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Card */}
        <div className="lg:col-span-4 bg-gradient-to-br from-zinc-900 to-zinc-900/80 rounded-2xl p-4 border border-zinc-800 hover:border-pink-400/30 transition-all duration-300 reveal-up">
          <div className="h-full flex items-center justify-center">
            <div className="relative">
              <img 
                src="photos/sb13.jpg" 
                alt="Shweta - Software Developer" 
                width={280} 
                height={380} 
                className="w-full h-auto max-w-[300px] rounded-xl object-cover shadow-2xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-400/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-900/80 rounded-2xl p-6 border border-zinc-800 hover:border-pink-400/30 transition-all duration-300 reveal-up">
          <h3 className="text-xl md:text-2xl font-bold font-vsFont text-pink-400 mb-6 flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
            Things I do
          </h3>
          <div className="space-y-3">
            {techs.map((tech, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-4 p-4 bg-zinc-800/70 rounded-xl border border-zinc-700 hover:border-pink-400/50 hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                <span className="text-white font-vsFont text-base md:text-lg font-medium group-hover:text-pink-100 transition-colors duration-200">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Collaboration Card */}
        <div className="lg:col-span-7 bg-gradient-to-br from-zinc-900 to-zinc-900/80 rounded-2xl p-6 md:p-8 border border-zinc-800 hover:border-pink-400/30 transition-all duration-300 reveal-up">
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-vsFont text-white mb-2">
                Let's Collaborate!
              </h3>
            </div>
            
            <p className="text-stone-300 font-vsFont text-base md:text-lg leading-relaxed">
              I'm always excited to work on interesting projects and connect with fellow developers. 
              Whether you have an idea to discuss, a project to collaborate on, or just want to chat about tech, 
              feel free to reach out!
            </p>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="mailto:shwetabehera444@gmail.com" className="inline-block reveal-up">
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-xl font-medium font-vsFont shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                  <span className="material-symbols-rounded text-lg">mail</span>
                  Mail me for collaboration
                </button>
              </a>
            </div>

            {/* Additional info */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-zinc-800/50 text-pink-400 rounded-full text-sm border border-zinc-700">
                Open to opportunities
              </span>
              <span className="px-3 py-1 bg-zinc-800/50 text-rose-400 rounded-full text-sm border border-zinc-700">
                Quick responder
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;