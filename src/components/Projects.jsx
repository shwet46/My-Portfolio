import React from 'react';
import ProjectCard from './ProjectCard';

const works = [
  {
    title: 'Invoice application',
    desc: 'This application enables you to extract data from your invoices in various forms (pdf, excel, images, etc.) into tabular format.',
    githubLink: 'https://github.com/shwet46/Data-extraction',
    liveLink: 'https://data-extraction-app.vercel.app/',
    techStack: ['React', 'Gemini', 'Redux Toolkit', 'TailwindCSS']
  },
  {
    title: 'Personal Portfolio',
    desc: 'This is my portfolio which I created using React, I used my favourite theme and the things I like which makes it more special. Currently improving this every other day.',
    githubLink: 'https://github.com/shwet46/My-Portfolio',
    liveLink: 'https://shwetabehera.vercel.app/',
    techStack: ['React', 'Tailwind CSS', 'JavaScript']
  },
  {
    title: 'Endoscope enquiry management system',
    desc: 'Developed an enquiry management system to keep records of the data of customers and their purchases in relational databases.',
    githubLink: 'https://github.com/shwet46/endoscope-enquiry-management',
    liveLink: '',
    techStack: ['PostgreSQL', 'Node.js', 'JavaScript']
  },
  {
    title: 'Cplusplus',
    desc: 'This is a revamped version of the cplusplus.com website. It is a C++ reference website that provides information about the C++ programming language.',
    githubLink: 'https://github.com/shwet46/cplusplus-clone',
    liveLink: 'https://cplusplus-delta.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS']
  },
  {
    title: 'Handwriting analysis for personality detection',
    desc: 'A deep learning-powered web application that analyzes handwriting samples to predict personality traits based on the Big Five (OCEAN) model.',
    githubLink: 'https://github.com/shwet46/Handwriting-analysis.git',
    liveLink: 'https://handwriting-analysis-by-sb.streamlit.app/',
    techStack: ['TensorFlow', 'Streamlit', 'Keras']
  },
];

const Projects = () => {
  return (
    <section id="project" className="pt-16 pb-4 section">
      <div className="flex font-secFont reveal-up left-0 items-start md:py-4 py-1 md:px-4 px-2 md:mx-2 mx-0 text-zinc-400 md:text-3xl text-2xl tracking-wide">
        {"<Projects/>"}
      </div>
      <div className="container-1 font-vsFont mb-2">
        <h3 className="md:text-2xl text-left md:text-center md:pb-4 reveal-up">
          These are some of my Projects I did.
        </h3>
        <div className="grid gap-x-4 mt-2 gap-y-6 auto-cols-fr reveal-up grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ title, desc, githubLink, liveLink, techStack }, key) => (
            <ProjectCard
              key={key}
              title={title}
              desc={desc}
              githubLink={githubLink}
              liveLink={liveLink}
              techStack={techStack}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;