import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-green-500 font-mono text-2xl">
      <div className="flex space-x-2">
        <span className="letter animate-typing">&lt;S</span>
        <span className="letter animate-typing">B</span>
        <span className="letter animate-typing"> /&gt;</span>
      </div>
      <div className="flex space-x-2">
        <span className="animate-pulse">|</span> {/* Blinking cursor */}
      </div>
    </div>
  );
};

export default Loader;
