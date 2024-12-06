import React, { useState, useEffect } from 'react';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);  // Keeps track of the current string
  const textArray = ['Shweta!', 'a Student', 'a Programmer', 'a Developer'];
  const typingSpeed = 150; // Speed of typing in ms
  const deletingSpeed = 75; // Speed of deleting in ms
  const delayBeforeDelete = 2000; // Delay before starting to delete the text
  const [isTyping, setIsTyping] = useState(true); // State to handle typing vs deleting

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText !== textArray[index]) {
      // Typing effect
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + textArray[index].charAt(displayedText.length));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, deletingSpeed);
    } else if (displayedText === textArray[index] && !isDeleting) {
      // Wait before starting to delete the text
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBeforeDelete);
    } else if (displayedText === '' && isDeleting) {
      // After deleting the string, move to the next string or loop back
      setIsDeleting(false);
      setIndex((prevIndex) => {
        if (prevIndex === textArray.length - 1) {
          return 0; // Loop back to the first string
        } else {
          return prevIndex + 1; // Move to the next string
        }
      });
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, textArray]);

  useEffect(() => {
    // Toggle between typing and not typing
    if (displayedText === textArray[index]) {
      setIsTyping(false); // Stop typing once the text is fully displayed
    } else {
      setIsTyping(true); // Keep typing when text is incomplete
    }
  }, [displayedText, index, textArray]);

  return (
    <section id="home" className="pt-28 lg:pt-32">
      <div className="container-h h-[600px] flex items-center lg:gap-2 flex-col md:mb-6">
        <figure className="w-full max-w-[310px]">
          <img
            src="photos/batman.png" // Ensure this path is correct
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
          <h2 className="font-vsFont md:text-xl text-amber-200 text-md">
            Sometimes I write code, do Competitive Programming or do something creative. 
            If I feel very optimistic, I even do development and write blogs about technology 
            and DSA concepts. To know more about me, scroll down ↓
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;