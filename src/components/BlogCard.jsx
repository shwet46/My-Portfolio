import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const BlogCard = ({ title, summary, link, tags = [] }) => {
  return (
    <article
      className="relative group flex flex-col justify-between h-[420px] p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-400/50 hover:scale-[1.01] backdrop-blur-sm"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.12),transparent_70%)]" />
      </div>

      {/* Header */}
      <div className="z-10 flex justify-between items-start mb-4">
        <h3 className="text-lg md:text-xl font-bold text-white font-vsFont">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-900 text-blue-400 hover:text-blue-300 rounded-lg transition-colors"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      {/* Summary */}
      <p className="text-sm md:text-base text-blue-100 leading-relaxed font-vsFont z-10 line-clamp-4 mb-4">
        {summary}
      </p>

      {/* Tags */}
      <div className="mt-auto z-10">
        <h4 className="text-sm font-medium text-blue-400 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-3 py-1.5 bg-blue-900 border border-blue-600 text-blue-100 rounded-lg hover:border-blue-400/50 hover:text-blue-200 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;