import React from 'react'
import { Section } from '../../Atomics/Section/Section'
import { TechCard } from '../TechCard/TechCard'
export const TechnicalSkills = () => {
  return (
    <div className=' flex flex-col items-center p-8 min-h-[50vh] w-full'>
    <Section
    svg={<svg  xmlns="http://www.w3.org/2000/svg" width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="#0084ff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>}>
    </Section>
      <div className='flex flex-wrap justify-center mt-4 gap-3 w-full'>
        <TechCard level='Bases'></TechCard>
        <TechCard SrcImg='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' Name='HTML'></TechCard>
        <TechCard SrcImg='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' Name='CSS'></TechCard>
        <TechCard SrcImg='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' Name='Tailwind' level='Bases'></TechCard>
        <TechCard SrcImg='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' Name='JavaScript'></TechCard>
        <TechCard SrcImg='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' Name='Java'></TechCard>
        <TechCard SrcImg='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' Name='MySql'></TechCard>
      </div>
    </div>
  )
}
