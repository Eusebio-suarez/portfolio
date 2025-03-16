import React from 'react'
import { Section } from '../../Atomics/Section/Section'
import { TechCard } from '../TechCard/TechCard'
export const TechnicalSkills = () => {
  return (
    <div className=' flex flex-col items-start p-4 min-h-[50vh] mt-4'>
    <Section></Section>
      <div className='flex flex-wrap mt-4 justify-center'>
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
