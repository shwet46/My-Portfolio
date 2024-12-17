import React, { useState, useEffect } from 'react';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);  
  const textArray = ['Shweta!', 'a Student', 'a Programmer', 'a Developer'];
  const typingSpeed = 150; 
  const deletingSpeed = 75;
  const delayBeforeDelete = 2000;
  const [isTyping, setIsTyping] = useState(true); 
  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText !== textArray[index]) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + textArray[index].charAt(displayedText.length));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, deletingSpeed);
    } else if (displayedText === textArray[index] && !isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBeforeDelete);
    } else if (displayedText === '' && isDeleting) {
      setIsDeleting(false);
      setIndex((prevIndex) => {
        if (prevIndex === textArray.length - 1) {
          return 0; 
        } else {
          return prevIndex + 1; 
        }
      });
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, textArray]);

  useEffect(() => {
    if (displayedText === textArray[index]) {
      setIsTyping(false); 
    } else {
      setIsTyping(true); 
    }
  }, [displayedText, index, textArray]);

  return (
    <section id="home" className="pt-28 lg:pt-32">
      <div className="container-h h-[600px] flex items-center lg:gap-2 flex-col md:mb-6">
        <figure className="w-full max-w-[310px]">
          <img
            src="photos/batman.png" 
            alt="Profile"
            width={300}
            height={300}
            className="w-full"
          />
        </figure>
        <h1 className="md:text-[55px] text-[40px] font-vsFont text-white">
          Hi, I'm <span className="text-amber-300">{displayedText}{isTyping ? '_' : ''}</span>
        </h1>
        <div className="w-full max-w-[800px] text-center">
  <h2 className="font-vsFont md:text-xl text-amber-200 text-md reveal-up">
    Sometimes I write code, do Competitive Programming or do something creative. 
    If I feel very optimistic, I even do development and write blogs about technology 
    and DSA concepts. To know more about me, scroll down
    <span
      className="material-symbols-rounded text-amber-200 text-3xl animate-bounce ml-2 relative top-4"
      aria-hidden="true"
    >
      arrow_downward
    </span>
  </h2>
</div>

      </div>
    </section>
  );
};

export default Home;