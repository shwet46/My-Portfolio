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
        <div className="lg:col-span-8 bg-zinc-900 rounded-2xl p-6 md:p-8 border-2 border-zinc-800 reveal-up">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl text-left md:text-5xl font-bold font-vsFont text-white">
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
          </div>
        </div>

        {/* Image Card */}
        <div className="lg:col-span-4 bg-zinc-900 rounded-2xl p-4 border-2 border-zinc-800 reveal-up">
          <div className="h-full flex items-center justify-center">
            <img 
              src="photos/sb13.jpg" 
              alt="Shweta - Software Developer" 
              width={280} 
              height={380} 
              className="w-full h-auto max-w-[300px] rounded-xl object-cover" 
            />
          </div>
        </div>

        {/* Skills Card */}
        <div className="lg:col-span-5 bg-zinc-900 rounded-2xl p-6 border-2 border-zinc-800 reveal-up">
          <h3 className="text-xl md:text-2xl font-bold font-vsFont text-pink-400 mb-6 flex items-center gap-3">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            Things I do
          </h3>
          <div className="space-y-3">
            {techs.map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl border border-zinc-700 hover:border-pink-400/50 transition-all duration-200"
              >
                <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                <span className="text-white font-vsFont text-base md:text-lg font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Card */}
        <div className="lg:col-span-7 bg-zinc-900 rounded-2xl p-6 md:p-8 border-2 border-zinc-800 reveal-up">
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-vsFont text-white mb-2">
                Let's Collaborate!
              </h3>
              <p className="text-stone-300 font-vsFont text-base md:text-lg leading-relaxed">
                I'm always excited to work on interesting projects and connect with fellow developers. 
                Whether you have an idea to discuss, a project to collaborate on, or just want to chat about tech, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Button */}
            <div className="pt-4">
              <a href="mailto:shwetabehera444@gmail.com" className="inline-block reveal-up">
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-medium font-vsFont shadow-lg transition-all duration-200">
                  Mail me for collaboration
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Quote/Motto Card */}
        <div className="lg:col-span-12 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl p-6 md:p-8 border border-pink-500/20 reveal-up">
          <div className="text-center space-y-4">
            <div className="text-4xl md:text-6xl text-pink-400/20 font-bold">"</div>
            <p className="text-lg md:text-xl font-vsFont text-stone-200 italic max-w-4xl mx-auto leading-relaxed">
              Every problem is an opportunity to learn something new, and every line of code is a step towards building something amazing.
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;