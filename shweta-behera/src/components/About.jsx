import React from 'react';
import Button from './Button';

const About = () => {

  const techs = [
    'Competitive programming',
    'Web development',
    'Database Management',
    'Tech blog writing',
  ];

  return (
    <section id="about" className="pt-24 lg:pt-28">
            <div className="flex font-secFont left-0 items-start py-4 px-4 mx-2 text-zinc-400 md:text-3xl text-2xl tracking-wide">
              {"<About me/>"}
            </div>
      <div className="container lg:grid bg-zinc-800/50 lg:grid-cols-2 items-start lg:gap-8">
        <div>
          <div className="flex items-start">
            <figure className="">
              {/* <img src="" alt="atv" width={40} height={40} className="img-cover"/>*/}
            </figure>
           
          </div>
          <h2 className="headline-1 mt-2 font-vsFont">
            I'm Shweta Behera
          </h2>
          <h3 className="text-[20px] mt-4 text-left text-stone-400 tracking-wide font-vsFont">
              <italic className="italic text-yellow-300">cd  </italic> India
          </h3>
          <h3 className="headline-2 mt-3 font-vsFont text-cyan-600">
              currently an engineering student pursuing Bachelor in Technology.
              I have worked with various web development technologies.
          </h3>
          <h3 className="headline-2 mt-4 mb-4 font-vsFont text-emerald-500">
              Things I do:
          </h3>
          <ul className="grid grid-cols-1 gap-2 text-lg mb-8 font-vsFont">
          {techs.map((tech, index) => (
            <li key={index} className="flex items-center text-emerald-500 gap-3">
              <span className="text-xl">≫</span>
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

export default About;