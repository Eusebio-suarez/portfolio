import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = ({ colorText = "text-[#d6d7d8]",border = "border-2 border-[#39546e]",padMarg = "p-[6px] mt-3",rounded = "rounded-[11px]"}) => {
  return (
    <header>
      <ul className="flex flex-col items-center space-y-3 sm:flex-row sm:space-x-12 sm:items-baseline sm:space-y-0">
        <li className={`${colorText} ${border} ${padMarg} ${rounded} hover:bg-green-700 transition duration-300`}><NavLink to="/">Inicio</NavLink></li>
        <li className={`${colorText} ${border} ${padMarg} ${rounded} hover:bg-green-700 transition duration-300`}><NavLink to="/skills">Habilidades</NavLink></li>
        <li className={`${colorText} ${border} ${padMarg} ${rounded} hover:bg-green-700 transition duration-300`}><NavLink to="/studies">Estudios</NavLink></li>
        <li className={`${colorText} ${border} ${padMarg} ${rounded} hover:bg-green-700 transition duration-300`}><NavLink to="/projects">Proyectos</NavLink></li>
        <li className={`${colorText} ${border} ${padMarg} ${rounded} hover:bg-green-700 transition duration-300`}><NavLink to="/contact">Contacto</NavLink></li>
      </ul>
    </header>
  );
};


