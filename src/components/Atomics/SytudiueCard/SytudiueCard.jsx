import React from 'react'
import  logoSena from "../../../assets/img/descarga.png"
export const SytudiueCard = ({title ="title",school = "school",description ="Terminado :", color="text-base text-green-500 italic",date ="date"}) => {
  return (
    <div className='flex items-center'>
        <div className='flex flex-col items-center gap-1  text-center'>
            <img src={logoSena} alt="sena" className='max-h-13 max-w-13 rounded-[50%]'/>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h3>
            <p className="text-lg font-bold text-white">{school}</p>
            <p className={color}>{description}<span className='text-green-300'>{date}</span></p>
        </div>
    </div>
  )
}
