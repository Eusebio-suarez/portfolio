import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <header>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/technical_skils">Habilidades Tecnicas</NavLink></li>
        <li><NavLink to="/social_skils">Habilidades Sociales</NavLink></li>
        <li><NavLink to="/studies">Estudios</NavLink></li>
        <li><NavLink to="/projects">Proyectos</NavLink></li>
        <li><NavLink to="/contact">Contacto</NavLink></li>
    </header>
  )
}


