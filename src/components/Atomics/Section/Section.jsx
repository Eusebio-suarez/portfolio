import React from 'react'

export const Section = ({title ="Habilidades Técnicas" ,srcImg="https://cdn-icons-png.flaticon.com/128/1835/1835942.png"}) => {
  return (
    <div className='flex items-center text-white "'>
        <img className='mr-3.5 w-[60px] h-[60px] rounded-full bg-blue-400 p-2 shadow-md border-2 border-[#39546e]' src={srcImg} alt="tecnicasImg" />
        <div className='flex items-center'>
            <h2>{title}</h2>
        </div>
    </div>
  )
}
