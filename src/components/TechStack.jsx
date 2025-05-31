import React from 'react';
import TechCard from './TechCard';

const TechStack = () => {
  const skillItem = [
    { imgSrc: '/photos/flutter.png', label: 'Flutter', desc: 'Cross-platform UI Framework' },
    { imgSrc: '/photos/next.png', label: 'Next.js', desc: 'React Fullstack Framework' },
    { imgSrc: '/photos/express.png', label: 'Express.js', desc: 'Minimal Node.js Backend' },
    { imgSrc: '/photos/react.png', label: 'React', desc: 'Frontend Library' },
    { imgSrc: '/photos/node.png', label: 'Node.js', desc: 'JavaScript Runtime' },
    { imgSrc: '/photos/post.png', label: 'PostgreSQL', desc: 'Relational Database' },
    { imgSrc: '/photos/mongodb.png', label: 'MongoDB', desc: 'NoSQL Database' },
    { imgSrc: '/photos/docker.png', label: 'Docker', desc: 'Containerization Platform' },
    { imgSrc: '/photos/firebase.png', label: 'Firebase', desc: 'Backend-as-a-Service' }, 
    { imgSrc: '/photos/git.png', label: 'Git', desc: 'Version Control System' },
    { imgSrc: '/photos/tailwind.png', label: 'Tailwind CSS', desc: 'Utility-first CSS Framework' },
  ];

  const lang = [
    { imgSrc: '/photos/java.png', label: 'Java', desc: 'Used for DSA' },
    { imgSrc: '/photos/javascript.png', label: 'JavaScript', desc: 'Used for Development' },
    { imgSrc: '/photos/typescript.png', label: 'TypeScript', desc: 'Used for Development' },
    { imgSrc: '/photos/cpp.png', label: 'C++', desc: 'Used for DSA' },
    { imgSrc: '/photos/python.png', label: 'Python', desc: 'Used for Machine Learning' },
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
        <span className="text-white">TechStack</span>
        <span className="text-emerald-400">{"/>"}</span>
      </div>

      <div className="container-1">
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