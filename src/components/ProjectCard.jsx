import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({
  title,
  desc,
  githubLink,
  liveLink,
  techStack,
  imgSrc,
  featured = false,
}) => {
  return (
    <article
      className={`
        group relative flex flex-col justify-between
        rounded-2xl overflow-hidden
        bg-gradient-to-br from-zinc-900 to-zinc-800
        border border-zinc-700
        w-full h-[420px] md:h-[440px]
        p-6 md:p-7 shadow-lg hover:shadow-xl
        transition-all duration-500 ease-in-out
        hover:border-orange-500/50 hover:scale-[1.01]
        backdrop-blur-sm
      `}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="bg-gradient-to-br from-orange-400/10 to-orange-600/10 w-full h-full absolute" />
        <div className="bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.12),transparent_70%)] w-full h-full absolute" />
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg">
            Featured
          </span>
        </div>
      )}

      {/* Image Preview */}
      {imgSrc && (
        <div className="relative mb-4 rounded-lg overflow-hidden aspect-video">
          <img
            src={imgSrc}
            alt={`Screenshot of ${title}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Title + Icons (Top Only) */}
      <div className="z-10 flex items-start justify-between mb-3">
        <h3 className="font-vsFont text-lg md:text-xl font-semibold text-white">
          {title}
        </h3>
        <div className="flex gap-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-orange-400 hover:text-orange-300 rounded-lg transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-orange-400 hover:text-orange-300 rounded-lg transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-stone-300 font-vsFont leading-relaxed mb-4 ">
        {desc}
      </p>

      {/* Tech Stack */}
      <div>
        <h4 className="text-sm font-semibold text-orange-400 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-stone-300 hover:border-orange-400/50 hover:text-orange-100 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;