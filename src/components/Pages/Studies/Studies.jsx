import React from 'react'
import { SytudiueCard } from '../../Atomics/SytudiueCard/SytudiueCard'
import Certificate1  from "../../../assets/img/certificado1.jpg"
import Certificate2 from  "../../../assets/img/certificado2.jpg"
 export const Studies = () => {
  return (
<div className="flex flex-col items-center justify-center gap-10 mt-16 mb-20 xl:mt-28 2xl:mt-56">
  <h2 className="text-white text-3xl font-semibold">Certificaciones</h2>

  <div className="flex flex-wrap justify-center gap-6">
    <img
      className="w-80 h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
      src={Certificate2}
      alt="Certificado 2"
    />
    <img
      className="w-80 h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
      src={Certificate1}
      alt="Certificado 1"
    />
  </div>
  <h2 className="text-white text-3xl font-semibold">Titulaciones</h2>
    <SytudiueCard
      title="Técnico en Análisis y Desarrollo de Software"
      school="Centro de Comercio y Turismo - SENA Regional Quindío"
      description="Terminado:"
      date="01/01/2022 - 05/12/2023"
    />
    <SytudiueCard
      title="Tecnólogo en Análisis y Desarrollo de Software"
      school="Centro de Comercio y Turismo - SENA Regional Quindío"
      color="text-amber-200 italic"
      description="Cursando:"
      date="20/01/2025 - 20/08/2026"
    />
</div>
  )
}


