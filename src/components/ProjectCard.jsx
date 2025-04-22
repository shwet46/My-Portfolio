import React from 'react';
import PropTypes from 'prop-types';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, desc, githubLink, liveLink, techStack, classes }) => {
  return (
    <div className={`bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/80 transition-all ${classes}`}>
      <h3 className="text-xl font-bold mb-4 text-left">{title}</h3>
      <p className="text-zinc-400 mb-4 text-left">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4 text-left">
        {techStack.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-zinc-700 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-left">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
            title="View on GitHub"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 hover:text-green-300"
            title="View Live Demo"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;