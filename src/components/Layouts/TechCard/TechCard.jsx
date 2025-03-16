import React from 'react'

export const TechCard = ({SrcImg = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", Name = "React", level = "Intermedio"}) => {
  return (
    <div className="bg-[#222d43] w-[160px] h-[130px] p-4 rounded-lg shadow-md text-white flex flex-col items-center justify-center m-2">  
        <img src={SrcImg} alt="logo" className="w-[50px] h-[50px] mx-auto"/>
        <p className='pt-3'>{Name}</p>
        <p className='text-blue-500'>{level}</p>
    </div>
  )
}
