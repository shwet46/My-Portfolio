import React, { useState } from 'react';
import Navbar from './Navbar';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-auto z-40 bg-transparent">
      <div className="max-w-screen-2xl w-full mx-auto px-2 md:px-6">
        {/* Logo and Menu Button */}
        <div className="flex justify-between items-center h-20">
          <h1>
            <a href="/" className="logo">
              <img src="photos/logo.png" width={90} height={70} alt="SB" />
            </a>
          </h1>

          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Navbar */}
        <Navbar navOpen={navOpen} />
      </div>
    </header>
  );
};

export default Header;
