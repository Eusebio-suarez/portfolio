import React from 'react'
import { Section } from '../../Atomics/Section/Section'
export const SoftSkills = () => {
  return (
    <div className='flex flex-col items-center p-8 min-h-[50vh] w-full'>
      <Section title ="Habilidades Sociales" 
      svg={<svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="#0482fa"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-list-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>}
      ></Section>
          <ul className="text-white space-y-2.5 py-5">
            <li>✅ Trabajo en equipo 🤝</li>
            <li>🚀 Liderazgo </li>
            <li>⚖️ Resolución de conflictos</li>
            <li>❤️ Inteligencia emocional </li>
            <li>🔍 Resolución de problemas </li>
            <li>🔄 Adaptabilidad</li>
          </ul>
    </div>    
  )
}