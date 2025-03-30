import React from 'react'
import { SytudiueCard } from '../../Atomics/SytudiueCard/SytudiueCard'

 export const Studies = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-10 mt-15 mb-20 xl:mt-25 2xl:mt-55'>
      <SytudiueCard title='Tecnico en Análisis y Desarrollo de Software'school='Centro de Comercio y Turismo - SENA Regional Quindío' description='Terminado : ' date=' 01/01/2022 - 05/12/2023'/>
      <SytudiueCard title='Tecnologo en Análisis y Desarrollo de Software'school='Centro de Comercio y Turismo - SENA Regional Quindío'color='text-base text-amber-200 italic' description=' Cursando : ' date='20/01/2025 - 20/08/20226'/>
    </div>
  )
}


