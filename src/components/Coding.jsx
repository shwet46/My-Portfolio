import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const profiles = [
  {
    name: 'LeetCode',
    profilename: 'bunny46',
    highlights: ['Contest Rating: 1604', 'Acceptance: 80%'],
    link: 'https://leetcode.com/u/bunny46/',
    color: '#FFA116',
    data: [
      { month: 'Dec', rating: 1604 },
    ]
  },
  {
    name: 'CodeChef',
    profilename: 'shwet46',
    highlights: ['Contest Rating: 1400+', '2★ coder'],
    link: 'https://www.codechef.com/users/shwet46',
    color: '#9C7A2E',
    data: [
      { month: 'Nov', rating: 1072 },
      { month: 'Dec', rating: 1060 },
      { month: 'Dec', rating: 1160 },
      { month: 'Dec', rating: 1242 },
      { month: 'Jan', rating: 1307 },
      { month: 'Feb', rating: 1383 },
      { month: 'Mar', rating: 1437 },
    ]
  },
  {
    name: 'Codeforces',
    profilename: 'shwet46',
    highlights: ['Contest Rating: 1000+', 'Newbie'],
    link: 'https://codeforces.com/profile/shwet46',
    color: '#318CE7',
    data: [
      { month: 'Jan', rating: 900 },
      { month: 'Feb', rating: 950 },
      { month: 'Mar', rating: 970 },
      { month: 'Apr', rating: 980 },
      { month: 'May', rating: 1000 },
      { month: 'May', rating: 1090 }
    ]
  }
];

const renderChart = (data, color) => (
  <ResponsiveContainer width="100%" height={140}>
    <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
      <XAxis dataKey="month" stroke="#666" tick={{ fontSize: 10 }} />
      <YAxis stroke="#666" tick={{ fontSize: 10 }} />
      <Tooltip
        contentStyle={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #333',
          borderRadius: '8px',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
        }}
        labelStyle={{ color: 'white' }}
      />
      <Line
        type="monotone"
        dataKey="rating"
        stroke={color}
        strokeWidth={3}
        dot={{ r: 3, fill: color, strokeWidth: 2, stroke: "#ffffff" }}
        activeDot={{ r: 5, fill: color, stroke: 'white', strokeWidth: 2 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

const Coding = () => {
  return (
    <section id="coding" className="pt-24 lg:pt-28 px-4 md:px-8">
      {/* Section Header */}
      <div className="flex font-secFont items-start py-6 text-zinc-300 md:text-4xl text-3xl tracking-wide reveal-up">
        <span className="text-purple-400">{"<"}</span>
        <span className="text-white">Coding Profiles</span>
        <span className="text-purple-400">{"/>"}</span>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 max-w-7xl mx-auto">
        
        {/* Introduction Card */}
        <div className="lg:col-span-12 bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800 reveal-up">
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-bold font-vsFont text-white mb-4">
              Competitive Programming Journey
            </h3>
            <p className="text-stone-300 font-vsFont text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              I'm passionate about competitive programming and algorithmic problem-solving. 
              Here's my journey across different platforms, showcasing my progress and achievements 
              in <span className="text-purple-400 font-medium">algorithmic challenges</span> and 
              <span className="text-violet-400 font-medium"> competitive contests</span>.
            </p>
          </div>
        </div>

        {/* Profile Cards */}
        {profiles.map((platform, idx) => (
          <div
            key={idx}
            className="lg:col-span-4 bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-purple-400/50 transition-all duration-300 reveal-up"
          >
            {/* Platform Header */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xl md:text-2xl font-bold font-vsFont text-white">
                  {platform.name}
                </h4>
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: platform.color }}
                ></div>
              </div>
              
              <div className="flex items-center gap-2 text-stone-400 font-vsFont">
                <span className="text-base">@{platform.profilename}</span>
              </div>
            </div>

            {/* Chart */}
            <div className="mb-6 bg-zinc-800 rounded-xl p-4 border border-zinc-700">
              <div className="h-[140px]">
                {renderChart(platform.data, platform.color)}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {platform.highlights.map((highlight, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-3 bg-zinc-800 rounded-xl border border-zinc-700"
                >
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: platform.color }}
                  ></div>
                  <span className={`font-vsFont text-sm md:text-base font-medium ${
                    highlight.includes('★') ? 'text-green-400' : 'text-white'
                  }`}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Profile Link Button */}
            <div className="pt-2">
              <a 
                href={platform.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full reveal-up"
              >
                <button 
                  className="w-full text-white px-4 py-3 rounded-xl font-medium font-vsFont border-2 transition-all duration-200 hover:scale-105"
                  style={{ 
                    borderColor: platform.color,
                    backgroundColor: `${platform.color}20`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = platform.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = `${platform.color}20`;
                  }}
                >
                  View Profile
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coding;