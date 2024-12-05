import React from 'react';
import Button from './Button';

const Hero = () => {

  const techs = [
    'OOPs',
    'React.js',
    'Node.js',
    'Database Management',
    'Javascript',
    'Python',
    'Java',
    'C++',
  ];

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-start lg:gap-8">
        <div>
          <div className="flex items-start">
            <figure className="">
              {/* <img src="" alt="atv" width={40} height={40} className="img-cover"/>*/}
            </figure>
            <div className="flex font-secFont left-0 items-start gap-1.5 text-zinc-400 md:text-3xl text-xl tracking-wide">
              {"<About me/>"}
            </div>
          </div>
          <h2 className="headline-1 mt-5 font-secFont">
            I'm Shweta
          </h2>
          <h3 className="headline-2 mt-3 font-secFont text-cyan-600">
              currently an engineering student pursuing Bachelor in Technology.
          </h3>
          <h3 className="headline-2 mt-4 mb-4 font-secFont text-yellow-600">
              Technical skills:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg mb-8 font-secFont">
          {techs.map((tech, index) => (
            <li key={index} className="flex items-center text-stone-400 gap-3">
              <span className="text-xl">◆</span>
              {tech}
            </li>
          ))}
        </ul>
          <div className="flex items-center gap-3">
            <Button label="Mail me" icon="mail" />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[380px] ml-auto shadow-md hover:shadow-lg">
            <img src="photos/sb5.jpg" alt="" width={356} height={500} className="w-full" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
