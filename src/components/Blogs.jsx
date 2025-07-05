import React from 'react';
import { BookOpen } from 'lucide-react';

const blogs = [
  {
    title: 'Segment Trees',
    summary:
      '“Segment Trees are the architects of efficient range queries, dividing and conquering to bring order to chaos in logarithmic time.”',
    date: 'Nov 29, 2024',
    link: 'https://medium.com/@shwetabehera/segment-trees-aea6b2bcac35',
    tags: ['Data Structures', 'Algorithms', 'Tree'],
  },
  {
    title: 'PriorityQueue & Heap',
    summary:
      '“Where elements stand in line, but the most important always gets served first.”',
    date: 'Nov 14, 2024',
    link: 'https://medium.com/@shwetabehera/priorityqueue-heap-a8ef1bfa8b02',
    tags: ['Heap', 'Queue', 'DSA'],
  },
  {
    title: 'Some common ways to SORT: a quick guide to sorting algorithms',
    summary:
      '“Sorting is the silent art of bringing order to chaos, a dance of elements finding their rightful place to reveal clarity in the mess.”',
    date: 'Oct 29, 2024',
    link: 'https://medium.com/@shwetabehera/some-common-ways-to-sort-a-quick-guide-to-sorting-algorithms-17085f9b090a',
    tags: ['Sorting', 'Algorithms', 'CS Fundamentals'],
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="pt-24 lg:pt-28 px-4 md:px-8">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="flex items-center gap-2 text-blue-300 md:text-4xl text-3xl font-secFont tracking-wide">
          <span className="text-blue-400">{"<"}</span>
          <span className="text-white">Blogs</span>
          <span className="text-blue-400">{"/>"}</span>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-5xl mx-auto space-y-10">
        {blogs.map((blog, idx) => (
          <a
            key={idx}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 rounded-xl p-6 
              bg-blue-900/10 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 text-left"
          >
            <div className="flex items-center gap-3 text-blue-400 mb-2">
              <BookOpen size={20} />
              <span className="uppercase text-sm tracking-widest font-medium">Blog</span>
            </div>
            <h3 className="text-white font-vsFont font-bold text-xl md:text-2xl group-hover:text-blue-100 transition-colors mb-3">
              {blog.title}
            </h3>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-4">
              {blog.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 bg-blue-900/30 border border-blue-600/40 text-blue-200 rounded-full hover:border-blue-400/50 hover:text-blue-100 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;