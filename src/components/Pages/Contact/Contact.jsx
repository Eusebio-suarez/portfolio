import React from 'react'
import { MyImg } from '../../Atomics/MyImg/MyImg'
import { ContactForm } from '../../Layouts/ContactForm/ContactForm'
import { SocialNetwork } from '../../Atomics/SocialNetwork/SocialNetwork'

export const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-14'>
      <MyImg/>
      <h1 className='text-white flex items-center gap-1'>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="33"  height="33"  viewBox="0 0 24 24"  fill="none"  stroke="#0084ff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>Contacto</h1>
      <div className="socialNetwork flex space-x-1.5 bg-blue-800 m-4 rounded-2xl">
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
        <div className='flex items-center m-2'>
          <p className="text-white">🏠 Colombia/Quindio</p>
        </div>
      </div>
      <div className='form flex flex-col items-center bg-[#222d43] rounded-2xl mt-5 mb-10'>
      <h1 className='text-white flex items-center justify-center gap-1'><svg  xmlns="http://www.w3.org/2000/svg"  width="33"  height="33"  viewBox="0 0 24 24"  fill="none"  stroke="#0084ff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>¡Hablemos!</h1>
      <ContactForm/>
      </div>
    </div>
  )
}



