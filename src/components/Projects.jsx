import React from 'react';
import ProjectCard from './ProjectCard';

const works = [
  {
    title: 'Personal Portfolio',
    desc: 'A modern, responsive portfolio website showcasing my technical skills, projects, and professional journey. Built with performance optimization and clean design principles to create an engaging user experience.',
    githubLink: 'https://github.com/shwet46/My-Portfolio',
    liveLink: 'https://shwetabehera.vercel.app/',
    techStack: ['React', 'Tailwind CSS', 'JavaScript']
  },
  {
    title: 'Shwik AI',
    desc: 'An intelligent document assistant powered by AI that streamlines document workflows. Features include automated document generation, intelligent summarization, and support for multiple formats (DOCX/PDF) with a sleek, intuitive interface.',
    githubLink: 'https://github.com/shwet46/Shwik-AI',
    liveLink: 'https://shwik.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Hugging face', 'Gemini', 'TailwindCSS']
  },
  {
    title: 'C++ Learning Platform',
    desc: 'A modernized version of the classic C++ reference platform, featuring an enhanced user interface and additional practice problems section. Designed to provide comprehensive learning resources for C++ developers at all skill levels.',
    githubLink: 'https://github.com/shwet46/cplusplus-clone',
    liveLink: 'https://cplusplus-delta.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS']
  },
];

const Projects = () => {
  return (
    <section id="project" className="pt-24 lg:pt-28 px-4 md:px-8">
      {/* Section Header */}
      <div className="flex font-secFont items-start py-6 text-zinc-300 md:text-4xl text-3xl tracking-wide reveal-up">
        <span className="text-orange-400">{"<"}</span>
        <span className="text-white">Projects</span>
        <span className="text-orange-400">{"/>"}</span>
      </div>

      {/* Projects Content */}
      <div className="max-w-7xl mx-auto">
        {/* Description */}
        <div className="mb-12 reveal-up">
          <p className="text-stone-300 font-vsFont text-lg md:text-xl leading-relaxed max-w-3xl text-center mx-auto">
            Here are some of the 
            <span className="text-orange-400 font-medium"> projects I've built </span>
            and 
            <span className="text-orange-500 font-medium"> solutions I've created</span>. 
            Each project represents a unique challenge and learning experience in my development journey.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {works.map(({ title, desc, githubLink, liveLink, techStack }, key) => (
            <ProjectCard
              key={key}
              title={title}
              desc={desc}
              githubLink={githubLink}
              liveLink={liveLink}
              techStack={techStack}
              classes="reveal-up"
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center reveal-up">
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold font-vsFont text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-stone-300 font-vsFont text-base md:text-lg leading-relaxed mb-6">
              I'm constantly working on new projects and experimenting with different technologies. 
              Check out my GitHub for more repositories and ongoing work.
            </p>
            <a 
              href="https://github.com/shwet46" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium font-vsFont shadow-lg transition-all duration-200">
                View All Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;