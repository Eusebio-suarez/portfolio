import React from 'react'
import { MyImg } from '../../Atomics/MyImg/MyImg'
import { ContactForm } from '../../Layouts/ContactForm/ContactForm'
import { SocialNetwork } from '../../Atomics/SocialNetwork/SocialNetwork'

export const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-14'>
      <MyImg/>
      <h1 className='text-white'>Contacto</h1>
      <div className="flex space-x-4 bg-blue-800 m-4 rounded-2xl">
        <SocialNetwork 
          srcImg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
          name="LinkedIn" 
          link="https://www.linkedin.com/in/eusebio-suarez-martinez-999891273/"
        />
        <SocialNetwork 
        srcImg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
          name="GitHub" 
          link="https://github.com/Eusebio-suarez"
        />
        <div className='flex flex-col items-center m-2'>
          <p className='text-white'>eusebiosuaresmartines@gmail.com</p>
          <p className="text-white">🏠 Colombia/Quindio</p>
        </div>
      </div>
      <div className='flex flex-col items-center bg-[#222d43] rounded-2xl mt-10'>
      <h1 className='text-white'>¡Hablemos!</h1>
      <ContactForm/>
      </div>
    </div>
  )
}



