import React from 'react';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';

const works = [
  {
    title: 'AlgoGrit',
    desc: 'A project made for the programmers by a programmer, basically a website to make you more focused with DSA and improve yourself.',
    githubLink: 'https://github.com/shwet46/algogrit-dsa',
    liveLink: 'https://algogrit-dsa.vercel.app/',
    techStack: ['Next.js', 'Firebase', 'TypeScript', 'Monaco', 'Gemini'],
    featured: false
  },
  {
    title: 'Shwik AI',
    desc: 'An intelligent document assistant powered by AI that streamlines document workflows. Features include automated document generation, intelligent summarization, and support for multiple formats (DOCX/PDF).',
    githubLink: 'https://github.com/shwet46/Shwik-AI',
    liveLink: 'https://shwik.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Hugging Face', 'Gemini', 'TailwindCSS'],
    featured: false
  },
  {
    title: 'Handwriting Analyzer',
    desc: 'Takes input of your handwriting image and analyzes your personality trait from the Big Five personality traits.',
    githubLink: 'https://github.com/shwet46/Handwriting-analysis',
    liveLink: 'https://handwriting-analysis-by-sb.streamlit.app/',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="project" className="pt-24 lg:pt-28 px-4 md:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex font-secFont items-start py-6 text-zinc-300 md:text-4xl text-3xl tracking-wide reveal-up">
          <span className="text-orange-400">{"<"}</span>
          <span className="text-white">Projects</span>
          <span className="text-orange-400">{"/>"}</span>
        </div>
      </div>

      {/* Normal Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {works.map((project, key) => (
            <div key={key} className="reveal-up">
              <ProjectCard {...project} variant={project.featured ? 'featured' : 'standard'} />
            </div>
          ))}

          {/* Explore More Card */}
          <div className="reveal-up">
            <a
              href="https://github.com/shwet46"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group"
            >
              <div className="h-full bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-400/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-orange-400/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-vsFont text-white mb-3 group-hover:text-orange-100">
                  Explore More Projects
                </h3>
                <p className="text-stone-300 text-base leading-relaxed group-hover:text-orange-200 mb-4">
                  Discover more on GitHub — personal projects, experiments, and playgrounds.
                </p>
                <div className="inline-flex items-center gap-2 text-orange-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  <span>View All Projects</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;