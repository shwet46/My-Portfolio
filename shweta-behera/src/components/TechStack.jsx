import React from 'react'
import TechCard from './TechCard';

const TechStack = () => {

  const skillItem = [
    {
      imgSrc: '/photos/redux.png',
      label: 'Redux',
      desc: 'Toolkit'
    },
    {
      imgSrc: '/photos/javascript.png',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/photos/tailwind.png',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/photos/post.png',
      label: 'PostgreSQL',
      desc: 'Database'
    },
    {
      imgSrc: '/photos/mongodb.png',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/photos/express.png',
      label: 'Express.js',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/photos/react.png',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/photos/node.png',
      label: 'Node.js',
      desc: 'Web Server'
    },
  ];

  const lang = [
    {
      imgSrc: '/photos/java.png',
      label: 'Java',
    },
    {
      imgSrc: '/photos/cpp.png',
      label: 'C++',
    },
    {
      imgSrc: '/photos/python.png',
      label: 'Python',
    },
    {
      imgSrc: '/photos/c.png',
      label: 'C',
    },
  ];

  return (
      <section id="tech" className="pt-16 pb-4 section">
        <div className="flex font-secFont left-0 reveal-up items-start py-2 md:py-4 md:px-4 px-2 md:mx-2 mx-0 text-zinc-400 md:text-3xl text-2xl tracking-wide">
      {"<Tech stack/>"}
        </div>
        <div className="container-1">
          <h3 className=" font-vsFont mb-6  items-center text-purple-600 md:text-2xl md:text-center text-left reveal-up">
            These are some Tools and Technologies I have worked with.
          </h3>
          <div className="grid gap-3 font-vsFont text-start grid-cols-[repeat(auto-fill,minmax(250px,1fr))] reveal-up">
              {
                skillItem.map(({imgSrc, label, desc}, key) => (
                  <TechCard 
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="reveal-up"
                  />
                ))
              }
          </div>
        </div>

        <div className="container-1">
          <h3 className=" font-vsFont mb-6 items-center reveal-up text-sky-600 md:text-2xl text-left md:text-center">
            Languages I'm proficient with.
          </h3>
          <div className="grid gap-3 reveal-up font-vsFont text-start grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
              {
                lang.map(({imgSrc, label}, key) => (
                  <TechCard 
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  classes="reveal-up"
                  />
                ))
              }
          </div>
        </div>
      </section>
  )
}

export default TechStack