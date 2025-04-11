import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed = 100, duration = 5000, onFinish }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    const timeout = setTimeout(() => {
      if (!isDone) {
        clearInterval(interval);
        setDisplayedText(text);
        setIsDone(true);
      }
    }, duration);

    if (isDone && onFinish) {
      onFinish();
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, speed, duration, isDone, onFinish]);

  return (
    <div className="text-5xl font-bold whitespace-nowrap inline-block">
      {displayedText}
      {isDone ? (
        <span className="animate-blink border-r-4 border-black"></span> 
      ) : (
        <span className="border-r-4 border-black animate-pulse"></span> 
      )}
    </div>
  );
};

export default TypingEffect;