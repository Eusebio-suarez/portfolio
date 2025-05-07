import React from 'react';

export const Section = ({
  title = "Habilidades Técnicas",
  svg = null
}) => {
  return (
    <div className='titleSkill flex items-center text-white gap-0.5'>
      {svg}
      <h2>{title}</h2>
    </div>
  );
};
