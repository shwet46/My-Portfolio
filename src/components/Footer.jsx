import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 pt-8 pb-6 bg-zinc-900 mt-12"
            style={{ fontFamily: 'Fira Code, monospace' }}>

      <div className="max-w-5xl mx-auto px-6">
        {/* Main content container */}
        <div className="text-center space-y-8">

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { 
                icon: FaGithub, 
                href: "https://github.com/shwet46", 
                label: "GitHub",
                hoverColor: "hover:text-white"
              },
              { 
                icon: FaLinkedin, 
                href: "https://www.linkedin.com/in/shweta-behera", 
                label: "LinkedIn",
                hoverColor: "hover:text-white"
              },
              { 
                icon: FaXTwitter, 
                href: "https://x.com/shwet46", 
                label: "Twitter",
                hoverColor: "hover:text-white"
              },
              { 
                icon: FaEnvelope, 
                href: "mailto:shwetabehera444@gmail.com", 
                label: "Email",
                hoverColor: "hover:text-white"
              }
            ].map(({ icon: Icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className={`group relative p-3 rounded-xl bg-zinc-800/60 text-zinc-400 text-xl
                           transition-all duration-300 hover:scale-110 ${hoverColor} 
                           shadow-lg hover:shadow-xl border border-zinc-700/50 hover:border-zinc-600
                           backdrop-blur-sm hover:bg-zinc-800`}
                aria-label={label}
              >
                <Icon className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Tooltip */}
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 
                               bg-black/90 text-white text-sm rounded-lg opacity-0 
                               group-hover:opacity-100 transition-opacity duration-200 
                               whitespace-nowrap pointer-events-none border border-zinc-700 z-10">
                  {label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 
                                bg-black/90 border-r border-b border-zinc-700 rotate-45 -mt-1"></div>
                </span>
              </a>
            ))}
          </div>

          {/* Divider with Tulip Image */}
          <div className="flex items-center justify-center space-x-4 py-2">
            <div className="h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent flex-1 max-w-20"></div>
            <div className="relative group">
              <img 
                src="photos/sb.png" 
                alt="Tulip" 
                className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent flex-1 max-w-20"></div>
          </div>

          {/* Footer text */}
          <div className="space-y-2">
            <p className="text-zinc-400 text-sm">
              Made with <span className="text-rose-400 animate-pulse">🩷</span> and lots of{' '}
              <span className="text-green-400 font-medium">coffee</span>
            </p>
            <p className="text-zinc-500 text-xs">
              © {currentYear} Shweta Behera. All rights reserved.
            </p>
          </div>

          {/* Back to top hint */}
          <div className="pt-4">
            <div className="inline-flex items-center text-xs text-zinc-500 group cursor-pointer"
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="mr-2 group-hover:text-zinc-400 transition-colors">Back to top</span>
              <div className="w-4 h-4 border border-zinc-600 rounded-full flex items-center justify-center 
                            group-hover:border-zinc-400 transition-colors">
                <div className="w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-zinc-400 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;