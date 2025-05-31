import React from 'react';
import PropTypes from 'prop-types';

const TechCard = ({ imgSrc, label, desc, classes = '' }) => {
  return (
    <div
      className={`
        group relative flex flex-col items-center justify-center text-center
        bg-zinc-900 border border-zinc-800 rounded-2xl px-3 py-4
        hover:border-green-400/40 transition-all duration-300 ease-in-out
        ${classes}`}
    >
      <figure className="w-12 h-12 mb-2 bg-zinc-800 rounded-xl flex items-center justify-center transition-all duration-300">
        <img
          src={imgSrc}
          width={28}
          height={28}
          alt={label}
          className="object-contain"
        />
      </figure>

      <h3 className="text-xs font-semibold font-vsFont text-white group-hover:text-green-400 transition-colors leading-none">
        {label}
      </h3>

      {desc && (
        <p className="text-[10px] text-stone-400 mt-1 font-vsFont leading-snug opacity-0 max-h-0 
          group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
          {desc}
        </p>
      )}
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