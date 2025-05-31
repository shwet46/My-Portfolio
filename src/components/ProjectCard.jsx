import React from 'react';

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.403c1.018.005 2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.628-5.475 5.922.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    viewBox="0 0 24 24"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ProjectCard = ({
  title,
  desc,
  githubLink,
  liveLink,
  techStack,
  imgSrc,
  classes = '',
}) => {
  return (
    <article
      className={`
        flex flex-col rounded-2xl
        bg-zinc-900 border-2 border-zinc-800
        p-6 md:p-8 max-w-[380px] min-w-[320px]
        shadow-lg
        transition-all duration-200 ease-out
        hover:border-orange-400/50
        focus:outline-none focus:ring-2 focus:ring-orange-400/50
        reveal-up
        ${classes}
      `}
      tabIndex={0}
      aria-label={`Project titled ${title}`}
    >
      {/* Image Section */}
      {imgSrc && (
        <div className="overflow-hidden rounded-xl aspect-[16/9] mb-6">
          <img
            src={imgSrc}
            alt={`Screenshot of ${title}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="space-y-6">
        
        {/* Header */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-bold font-vsFont text-white">
            {title}
          </h3>
          <p className="text-base font-vsFont text-stone-300 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium font-vsFont text-orange-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            Tech Stack
          </h4>
          
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1.5 rounded-lg 
                         bg-zinc-800 border border-zinc-700 text-stone-300 
                         hover:border-orange-400/50 transition-all duration-200 cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-6 pt-2 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium font-vsFont text-sm transition-colors duration-200"
              aria-label={`GitHub repo for ${title}`}
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
          {liveLink && liveLink.trim() !== '' && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium font-vsFont text-sm transition-colors duration-200"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          )}
        </div>
      </div>


    </article>
  );
};

export default ProjectCard;