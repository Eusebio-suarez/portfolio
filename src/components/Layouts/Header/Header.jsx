import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="relative w-full flex flex-col items-start">
      <div className="group inline-block mx-5">
        <div className=" text-white hover:bg-green-700 rounded my-5 transition duration-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg"width="30"height="30"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"className="icon icon-tabler icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>
        </div>
        <ul className="transition duration-1000 hidden group-hover:flex flex-col absolute bg-[#1e293b] text-white mt-2 p-4 rounded-md shadow-lg space-y-2 z-10 w-48">
          <li className="hover:bg-green-600 duration-500 p-2 rounded"><NavLink to="/">Inicio</NavLink></li>
          <li className="hover:bg-green-600 duration-500 p-2 rounded"><NavLink to="/skills">Habilidades</NavLink></li>
          <li className="hover:bg-green-600 duration-500 p-2 rounded"><NavLink to="/studies">Estudios</NavLink></li>
          <li className="hover:bg-green-600 duration-500 p-2 rounded"><NavLink to="/projects">Proyectos</NavLink></li>
          <li className="hover:bg-green-600 duration-500 p-2 rounded"><NavLink to="/contact">Contacto</NavLink></li>
        </ul>
      </div>
    </header>
  );
};