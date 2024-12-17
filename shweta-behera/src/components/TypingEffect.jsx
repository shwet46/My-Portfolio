// src/components/TypingEffect.jsx
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

    // Make sure the typing stops after the specified duration
    const timeout = setTimeout(() => {
      if (!isDone) {
        clearInterval(interval);
        setDisplayedText(text);
        setIsDone(true);
      }
    }, duration);

    // Trigger onFinish callback after typing completes
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
        <span className="animate-blink border-r-4 border-black"></span> // Blinking cursor after typing
      ) : (
        <span className="border-r-4 border-black animate-pulse"></span> // Cursor animates during typing
      )}
    </div>
  );
};

export default TypingEffect;