import React from 'react';
import PropTypes from 'prop-types';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ imgSrc, title, desc, githubLink, liveLink, classes }) => {
  return (
    <div className={"relative p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
      <figure className="img-box rounded-lg mb-6">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover rounded-lg" />
      </figure>

      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <p className="my-2 font-vsFont md:text-md mb-4 text-gray-400 text-start">
            {desc}
          </p>

          <div className="flex gap-4 items-center mt-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
              >
                <Github size={18} />
                GitHub
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;