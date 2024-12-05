import React, { useState } from 'react';
import Navbar from './Navbar'; // Adjusted to ensure consistency with Navbar import

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-zinc-900">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,9fr,1fr]">
        {/* Logo */}
        <h1>
          <a href="/" aria-label="Site logo">
            <img
              src="photos/logo.png"
              width={90}
              height={70}
              alt="SB Logo"
              className="logo"
            />
          </a>
        </h1>

        {/* Navbar and Menu Button */}
        <div className="relative md:justify-self-start">
          <Navbar navOpen={navOpen} />
        </div>

       <div>

       </div>
      </div>
    </header>
  );
};

export default Header;
