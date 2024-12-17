import React from 'react'
import PropTypes from 'prop-types';


const ProjectCard = ({imgSrc, title, desc, projectLink, classes}) => {
  return (
    <div className={"relative p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" + classes}>
        <figure className="img-box rounded-lg mb-6"> 
            <img src={imgSrc} alt={title} loading='lazy' className="img-cover rounded-lg" />
        </figure>

       <div className="flex items-center justify-between gap-2">
            <div>
                <h3 className="title-1 mb-3">{title}</h3>
                
                <p className="my-2 font-vsFont md:text-md mb-4 text-gray-400 text-start">
                    {desc}
                </p>
                <div className="flex flex-row gap-1">
                    <p className="mr-2">Link to project</p>
                <div className="w-6 h-6 rounded-lg grid place-items-center bg-sky-400/50 text-zinc-200 shrink-0">
                    <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
                </div>
                </div>
            </div>
       </div>

        <a href={projectLink} target='_blank' className="absolute inset-0"></a>

    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard;