import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/photos/p1.png',
    title: 'Invoice application',
    desc: 'This application enables you to extract data from your invoices in various forms(pdf, excel, images, etc.) into tabular format.',
    projectLink: ''
  },
  {
    imgSrc: '/photos/p1.png',
    title: 'Personal Portfolio',
    desc: 'This is my portfolio which I created using react, I used my favourite theme and the things I like for the portfolio which makes it more special.',
    projectLink: ''
  },
  {
    imgSrc: '/photos/p1.png',
    title: 'Endoscope enquiry management system',
    desc: 'Developed a enquiry management system to keep records of the data of customers and their purchases in relational databases.',
    projectLink: ''
  },
];

const Projects = () => {
  return (
    <section id="project" className="pt-16 pb-4 section">
            <div className="flex font-secFont reveal-up left-0 items-start py-4 px-4 mx-2 text-zinc-400 md:text-3xl text-2xl tracking-wide">
              {"<Projects/>"}
            </div>
            <div className="container-1 font-vsFont mb-2">
              <h3 className="md:text-2xl md:pb-4 reveal-up">
                  These are some of my Projects I did.
              </h3>
              <div className="grid gap-x-4 mt-2 gap-y-5 auto-cols-fr reveal-up grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                  {
                    works.map(({imgSrc, title, desc, projectLink}, key) => (
                        <ProjectCard
                          key={key}
                          imgSrc={imgSrc}
                          title={title}
                          desc={desc}
                          projectLink={projectLink}
                          classes="reveal-up"
                        />
                    ))
                  }
              </div>
            </div>
    </section>
  )
}

export default Projects