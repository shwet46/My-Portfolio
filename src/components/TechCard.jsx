import React from 'react';
import PropTypes from 'prop-types';

const TechCard = ({ imgSrc, label, desc, classes = '' }) => {
  return (
    <div
      className={`
        group relative flex flex-col items-center justify-center text-center
        bg-gradient-to-br from-zinc-900 to-zinc-900/80 border border-zinc-800 rounded-2xl 
        px-4 py-6 hover:border-green-400/50 hover:bg-zinc-800/50
        transition-all duration-300 ease-in-out transform hover:scale-105
        shadow-lg hover:shadow-xl hover:shadow-green-500/10
        ${classes}`}
    >
      {/* Tech Icon Container */}
      <figure className="w-14 h-14 mb-3 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl 
                        flex items-center justify-center transition-all duration-300 
                        group-hover:from-green-500/20 group-hover:to-green-500/20 
                        group-hover:scale-110 group-hover:rotate-3">
        <img
          src={imgSrc}
          width={32}
          height={32}
          alt={label}
          className="object-contain transition-all duration-300 group-hover:scale-110"
        />
      </figure>

      {/* Tech Label */}
      <h3 className="text-sm font-semibold font-vsFont text-white 
                     group-hover:text-green-400 transition-colors duration-300 
                     leading-none mb-1">
        {label}
      </h3>

      {/* Tech Description */}
      {desc && (
        <div className="overflow-hidden">
          <p className="text-xs text-stone-400 font-vsFont leading-relaxed 
                        opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20
                        transition-all duration-500 ease-in-out group-hover:mt-2">
            {desc}
          </p>
        </div>
      )}

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/0 to-green-400/0 
                      group-hover:from-green-400/5 group-hover:to-green-400/5 
                      transition-all duration-300 pointer-events-none"></div>
      
      {/* Subtle Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-transparent 
                      group-hover:border-green-400/20 transition-all duration-300 
                      pointer-events-none"></div>
    </div>
  );
};

TechCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string,
  classes: PropTypes.string,
};

export default TechCard;