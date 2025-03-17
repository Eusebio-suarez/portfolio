import React from 'react'
import { MyImg } from '../../Atomics/MyImg/MyImg'
 export const Home = () => {
  return (
    <div className='flex flex-col items-center text-center'>
      <MyImg/>
      <h1 className='text-white'>¡Hola! Soy Eusebio Suarez</h1>
      <p className="text-white pt-5 pb-[50px] px-4 ">
      Desarrollador junior con conocimientos en backend y frontend, con un mayor enfoque en frontend.  
      Actualmente, cursando el tecnólogo en Análisis y Desarrollo de Software, adquiriendo habilidades en el diseño, 
      desarrollo e implementación de aplicaciones web y móviles.  
      Apasionado por la creación de interfaces intuitivas y dinámicas, con interés en mejorar la experiencia del usuario a través de 
      tecnologías modernas y buenas prácticas de desarrollo.
      </p>
    </div>
  )
}


