import React from 'react'
import ProyectImg1 from "../../../assets/img/proyect1.png"
export const Proyect = ({desc = "Una breve descripción",name = "Nombre del Poyecto",linkRep="https://github.com/tu-repositorio",linkDesp ="https://vercel.com",img = ProyectImg1}) => {
  return (
    <div class="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:translate-y-2">
    <img class="w-full h-48 object-cover hover:scale-105 transition duration-500" src={img} alt="Project Image"/>
    <div class="p-6 bg-white"> 
        <h3 class="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p class="text-gray-600 text-base mb-4">{desc}</p>
        <div className='flex gap-5'>
          <a href={linkRep} class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Ver en GitHub</a>
          <a href={linkDesp} class="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">Ver sitio Web</a>
        </div>
    </div>
    </div>
  )
}
