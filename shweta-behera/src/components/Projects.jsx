import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/photos/image.png',
    title: 'Project 1',
    desc: 'this is the description for project-1',
    projectLink: ''
  },
  {
    imgSrc: '/photos/image.png',
    title: 'Project 2',
    desc: 'this is the description for project-2',
    projectLink: ''
  },
  {
    imgSrc: '/photos/image.png',
    title: 'Project 3',
    desc: 'this is the description for project-3',
    projectLink: ''
  },
];

const Projects = () => {
  return (
    <section id="project" className="pt-16 pb-4 section">
            <div className="flex font-secFont left-0 items-start py-4 px-4 mx-2 text-zinc-400 md:text-3xl text-2xl tracking-wide">
              {"<Projects/>"}
            </div>
            <div className="container-1 font-vsFont mb-2">
              <h3 className="md:text-2xl md:pb-4">
                  These are some of my Projects I did.
              </h3>
              <div className="grid gap-x-4 mt-2 gap-y-5 auto-cols-fr grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                  {
                    works.map(({imgSrc, title, desc, projectLink}, key) => (
                        <ProjectCard
                          key={key}
                          imgSrc={imgSrc}
                          title={title}
                          desc={desc}
                          projectLink={projectLink}
                        />
                    ))
                  }
              </div>
            </div>
    </section>
  )
}

export default Projects