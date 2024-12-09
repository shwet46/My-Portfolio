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
      imgSrc: '/photos/react.png',
      label: 'React',
      desc: 'Framework'
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
      imgSrc: '/photos/node.png',
      label: 'Node.js',
      desc: 'Web Server'
    },
    {
      imgSrc: '/photos/express.png',
      label: 'Express.js',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/photos/post.png',
      label: 'PostgreSQL',
      desc: 'Database'
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
      <section id="tech" className="section">
        <div className="flex font-secFont left-0 items-start py-4 px-4 mx-2 text-zinc-400 md:text-3xl text-2xl tracking-wide">
      {"<Tech stack/>"}
        </div>
        <div className="container-1">
          <h3 className=" font-vsFont mb-6 items-center text-purple-600 md:text-2xl text-center">
            These are some Tools and Technologies I have worked with.
          </h3>
          <div className="grid gap-3 font-vsFont text-start grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
              {
                skillItem.map(({imgSrc, label, desc}, key) => (
                  <TechCard 
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  />
                ))
              }
          </div>
        </div>

        <div className="container-1">
          <h3 className=" font-vsFont mb-6 items-center text-sky-600 md:text-2xl text-center">
            Languages I'm proficient with.
          </h3>
          <div className="grid gap-3 font-vsFont text-start grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
              {
                lang.map(({imgSrc, label}, key) => (
                  <TechCard 
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  />
                ))
              }
          </div>
        </div>
      </section>
  )
}

export default TechStack