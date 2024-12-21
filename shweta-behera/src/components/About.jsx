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
            <div className="flex font-secFont left-0 items-start py-4 md:px-4  md:mx-2 mx-0 text-zinc-400 md:text-3xl text-2xl tracking-wide reveal-up">
              {"<About me/>"}
            </div>
      <div className="container lg:grid bg-zinc-800/50 lg:grid-cols-2 items-start lg:gap-8 reveal-up">
        <div>
          <div className="flex items-start">
            <figure className="">
              {/* <img src="" alt="atv" width={40} height={40} className="img-cover"/>*/}
            </figure>
           
          </div>
          <h2 className="headline-1 mt-2 font-vsFont reveal-up">
            I'm Shweta Behera
          </h2>
          <h3 className="md:text-[20px] text-[16px] mt-4 text-left text-stone-400 font-vsFont reveal-up">
            <span className="material-symbols-rounded text-yellow-300 text-[16px]">location_on</span> India
          </h3>
          <h3 className="headline-2 mt-3 font-vsFont text-cyan-600 reveal-up">
              currently an engineering student pursuing Bachelor in Technology.
              I have worked with various web development technologies.
          </h3>
          <h3 className="headline-2 mt-4 mb-4 font-vsFont text-emerald-500 reveal-up">
              Things I do:
          </h3>
          <ul className="grid grid-cols-1 gap-2 text-lg mb-8 font-vsFont">
          {techs.map((tech, index) => (
            <li key={index} className="flex items-center text-sm md:text-md text-emerald-500 gap-3 reveal-up">
              <span className="text-xl">≫</span>
              {tech}
            </li>
          ))}
        </ul>
          <div className="flex md:flex-row flex-col gap-3"> 
          <div className="flex items-center gap-3 reveal-up">
            <a href="mailto:shwetabehera444@gmail.com"><Button label="Mail me" icon="mail" /></a>
          </div>
          <div className="flex items-center gap-3 reveal-up">
            <a href="https://medium.com/@shwetabehera"><Button label="Check out my articles" icon="edit_note" /></a>
          </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[380px] ml-auto hover:shadow-lg">
            <img src="photos/sb5.jpg" alt="" width={356} height={500} className="w-full reveal-up rounded-lg" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;