
import React from 'react';

const text = 'New Arrivals Are Out!';
// We repeat the text to ensure the banner is full and loops smoothly
const items = Array(15).fill(text);

export const MarqueeBanner = () => {
  const content = items.map((item, index) => (
    <span key={index} className="mx-4 text-sm font-semibold uppercase tracking-wider">{item}</span>
  ));

  return (
    <div className="bg-white text-black relative flex overflow-x-hidden">
      <div className="py-3 animate-marquee whitespace-nowrap flex">
        {content}
      </div>

      <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap flex" aria-hidden="true">
        {content}
      </div>
    </div>
  );
};
