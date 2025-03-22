import React from 'react';

export const SocialNetwork = ({ srcImg = "", name = "", link = "#" }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={srcImg}
        alt={name}
        className="w-10 h-10 hover:scale-110 m-2.5 bg-amber-50 rounded-[28%]"
      />
    </a>
  );
};