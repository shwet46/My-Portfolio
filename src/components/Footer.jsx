import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="section py-8 md:mt-8 mt-2 border-t-2 border-zinc-800 reveal-up">
      <span className="text-center text-zinc-300 font-monoFont font-normal text-md">
        Made by Shweta Behera © {currentYear}
      </span>
    </section>
  );
};

export default Footer;