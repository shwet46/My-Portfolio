import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // X (Twitter) icon

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 pt-8 pb-6 bg-zinc-900 mt-12 reveal-up">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 text-zinc-400 text-xl">
          <a
            href="https://github.com/shwetabehera" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shweta-behera" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/shwetabehera" // Replace with your X username
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="mailto:shwetabehera444@gmail.com"
            className="hover:text-green-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Text */}
        <span className="block text-zinc-400 font-mono text-sm">
          Made with 🩷 by <span className="text-rose-400 font-semibold">Shweta Behera</span> © {currentYear}
        </span>
      </div>
    </footer>
  );
};

export default Footer;