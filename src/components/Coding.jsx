import React from 'react';

const Coding = () => {
  const profiles = [
    {
      imgSrc: '/photos/leetcode.png',
      profilename: "bunny46",
      highlights: ['Contest Rating : 1604', 'Acceptance : 80%'],
      link: "https://leetcode.com/u/bunny46/",
    },
    {
      imgSrc: '/photos/codechef.jpg',
      profilename: "shwet46",
      highlights: ['Contest Rating : 1400+', '2★ coder'],
      link: "https://www.codechef.com/users/shwet46",
    },
    {
      imgSrc: '/photos/codeforces.png',
      profilename: "shwet46",
      highlights: ['Contest Rating : 1000+', 'Newbie'],
      link: "https://codeforces.com/profile/shwet46",
    },
  ];

  return (
    <section id="coding" className="pt-16 pb-4">
      <div className="flex font-secFont left-0 items-start py-4 px-4 mx-2 reveal-up text-zinc-400 md:text-3xl text-2xl tracking-wide">
        {"<Coding Profiles/>"}
      </div>
      <div className="container-1">
        <h3 className="font-vsFont mb-6 items-center reveal-up text-green-400 md:text-2xl text-left md:text-center">
          Yes, I do competitive programming :) <br/>
          Right now I'm average but I'm improving and one day I will be the best Competitive programmer.
        </h3>
        <div className="flex flex-wrap justify-center gap-6 reveal-up font-vsFont text-start">
          {profiles.map(({ imgSrc, profilename, highlights, link }, key) => (
            <a
              key={key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-64"
            >
              <img
                src={imgSrc}
                alt={profilename}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="text-white text-center space-y-2">
                  <h4 className="text-lg font-semibold">{profilename}</h4>
                  {highlights.map((highlight, index) => (
                    <p
                      key={index}
                      className={`${
                        highlight.includes('★') ? 'text-green-200' : ''
                      }`}
                    >
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coding;