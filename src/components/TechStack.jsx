import React from 'react';
import TechCard from './TechCard';

const TechStack = () => {
  const skillItem = [
    { imgSrc: '/photos/flutter.png', label: 'Flutter', desc: 'Cross-platform UI Framework' },
    { imgSrc: '/photos/redux.png', label: 'Redux', desc: 'State Management Toolkit' },
    { imgSrc: '/photos/next.png', label: 'Next.js', desc: 'React Fullstack Framework' },
    { imgSrc: '/photos/express.png', label: 'Express.js', desc: 'Minimal Node.js Backend' },
    { imgSrc: '/photos/react.png', label: 'React', desc: 'Frontend Library' },
    { imgSrc: '/photos/node.png', label: 'Node.js', desc: 'JavaScript Runtime' },
    { imgSrc: '/photos/post.png', label: 'PostgreSQL', desc: 'Relational Database' },
    { imgSrc: '/photos/mongodb.png', label: 'MongoDB', desc: 'NoSQL Database' },
  ];

  const lang = [
    { imgSrc: '/photos/java.png', label: 'Java' },
    { imgSrc: '/photos/javascript.png', label: 'JavaScript' },
    { imgSrc: '/photos/typescript.png', label: 'TypeScript' },
    { imgSrc: '/photos/cpp.png', label: 'C++' },
    { imgSrc: '/photos/python.png', label: 'Python' },
    { imgSrc: '/photos/c.png', label: 'C' },
    { imgSrc: '/photos/dart.png', label: 'Dart' },
  ];

  const combinedTech = [
    ...skillItem.map(item => ({ ...item, type: 'tech' })),
    ...lang.map(item => ({ ...item, type: 'lang' })),
  ];

  return (
    <section id="tech" className="pt-16 pb-4 section">
     {/* Section Header */}
      <div className="flex font-secFont items-start py-6 text-zinc-300 md:text-4xl text-3xl tracking-wide reveal-up">
        <span className="text-emerald-400">{"<"}</span>
        <span className="text-white">Tech Stack</span>
        <span className="text-emerald-400">{"/>"}</span>
      </div>

      <div className="container-1">
        <h3 className="font-vsFont mb-6 items-center text-green-500 md:text-2xl text-lg md:text-center text-left reveal-up">
          These are the technologies I have worked with. <br /> I use Java, C++ and Python for problem solving or DSA.
        </h3>
        <div className="grid gap-3 md:gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] font-vsFont text-start reveal-up">
          {combinedTech.map(({ imgSrc, label, desc = '' }, key) => (
            <TechCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;