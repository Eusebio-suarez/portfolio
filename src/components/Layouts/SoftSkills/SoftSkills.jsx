import React from 'react'
import { Section } from '../../Atomics/Section/Section'
export const SoftSkills = () => {
  return (
    <div className='flex flex-col items-start p-4 min-h-[50vh] mb-10'>
      <Section title ="Habilidades Sociales" srcImg="https://cdn-icons-png.flaticon.com/128/7119/7119421.png"></Section>
          <ul className="text-white space-y-2.5 pt-4 pl-16 ml-3">
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