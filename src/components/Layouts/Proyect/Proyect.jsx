import React from 'react'
import ProyectImg1 from "../../../assets/img/proyect1.png"

export const Proyect = ({
  desc = "Una breve descripción",
  name = "Nombre del Proyecto",
  linkRep = "https://github.com/tu-repositorio",
  linkDesp = "https://vercel.com",
  img = ProyectImg1
}) => {
  return (
    <div className=" flex items-center flex-col max-w-sm rounded-t-lg overflow-hidden shadow-lg transition-transform transform hover:translate-y-2 w-full sm:w-72 md:w-80 lg:w-96">
      <img className="w-[80%] h-40 object-cover hover:scale-[102%] transition duration-500 rounded-lg" src={img} alt="Project Image"/>
      <div className="w-[80%] p-6 bg-white rounded-b-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 ">{desc}</p>
        <div className="flex gap-5 flex-wrap text-center">
          <a href={linkRep}className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto">Ver en GitHub</a>
          <a href={linkDesp} className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto">Ver sitio Web</a>
        </div>
      </div>
    </div>
  )
}
