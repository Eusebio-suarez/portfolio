import React from 'react'
import { Proyect } from '../../Layouts/Proyect/Proyect'
import ProyectImg2 from "../../../assets/img/proyect2.png"
import ProyectImg3 from "../../../assets/img/proyect3.png"
import ProyectImg4 from "../../../assets/img/proyect4.png"

export const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 gap-12 mb-16'>
      <Proyect
      name='Ed-Travel' 
      desc='Ed-Travel es la maquetacion de una plataforma de planificación de viajes que permite a los usuarios seleccionar destinos, fechas y cantidad de personas, todo en un diseño atractivo y accesible, ofreciendo una experiencia fluida para planificar el viaje de manera sencilla.'
      linkRep='https://github.com/Eusebio-suarez/ed-travel.git'
      linkDesp='https://ed-travel-kohl.vercel.app/'
      ></Proyect>
      <Proyect 
      img={ProyectImg2}
      name='Proyecto Atlas'
      desc='El Proyecto Atlas es un ejemplo de maquetación web que utiliza tecnologías modernas de diseño web. Su objetivo es mostrar habilidades en la creación de interfaces visualmente atractivas y funcionales.'
      linkRep='https://github.com/Eusebio-suarez/Proyecto-Atlas.git'
      linkDesp='https://proyecto-atlas-omega.vercel.app/'
      ></Proyect>
      <Proyect 
      img={ProyectImg3}
      name='Cap Market'
      desc='El Proeyecto Cap Market simula un carrito de compras en línea, permitiendo agregar, eliminar y visualizar productos de manera dinámica, con una interfaz clara y funcional, ideal para futuras implementaciones de comercio electrónico.'
      linkRep='https://github.com/Eusebio-suarez/Market.git'
      linkDesp='https://market-iota-nine.vercel.app/'
      ></Proyect>
      <Proyect 
      img={ProyectImg4}
      name='Music Play'
      desc='Music Play es una aplicación web interactiva que ofrece funciones básicas de reproducción, pausa y avance, con un diseño visual atractivo que incluye detalles de álbum y canción, brindando una experiencia auditiva y visual única.'
      linkRep='https://github.com/Eusebio-suarez/Reproductor-JS.git'
      linkDesp='https://reproductorjs-wheat.vercel.app/'
      ></Proyect>
    </div>
  )
}



