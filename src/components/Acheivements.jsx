import React from 'react';
import { CheckCircle } from 'lucide-react';

const achievements = [
  'Secured 838 rank out of around 21,000 participants in Global LeetCode contest.',
  'Ranked 2⭐ on CodeChef.',
  'Problem statement winner at BBB Hackathon.',
  'Top finalist at levelup hackathon.',
];

const Achievements = () => {
  return (
    <section id="achievements" className="pt-24 lg:pt-28 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-red-300 md:text-4xl text-3xl font-secFont tracking-wide">
            <span className="text-red-400">{"<"}</span>
            <span className="text-white">Achievements</span>
            <span className="text-red-400">{"/>"}</span>
          </div>
        </div>

        {/* Bullet Points List */}
        <ul className="space-y-6 text-left text-red-100 text-base md:text-lg font-vsFont">
          {achievements.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="text-red-400 w-5 h-5 mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;