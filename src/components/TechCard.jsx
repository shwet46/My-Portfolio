import React from 'react';
import PropTypes from 'prop-types';

const TechCard = ({ imgSrc, label, desc, classes = '' }) => {
  return (
    <div
      className={`flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-green-400/50 
      rounded-xl px-3 py-2 transition-all duration-300 group hover:py-4 hover:px-4 overflow-hidden relative ${classes}`}
    >
      <figure className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center transition-all duration-300 ">
        <img src={imgSrc} width={28} height={28} alt={label} className="object-contain" />
      </figure>
      <div className="flex-1">
        <h3 className="text-sm font-semibold font-vsFont text-white group-hover:text-green-400 transition-colors leading-none">
          {label}
        </h3>
        {desc && (
          <p className="text-stone-400 text-xs mt-1 font-vsFont leading-snug opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 ease-in-out">
            {desc}
          </p>
        )}
      </div>
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