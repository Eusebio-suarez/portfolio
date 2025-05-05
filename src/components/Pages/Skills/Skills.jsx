import React from 'react'
import { TechnicalSkills } from '../../Layouts/TechnicalSkills/TechnicalSkills'
import { SoftSkills } from '../../Layouts/SoftSkills/SoftSkills'
 export const Skills = () => {
  return (
    <div className='flex-1 border p-4 flex flex-col w-full min-h-screen'>
      <TechnicalSkills></TechnicalSkills>
      <SoftSkills></SoftSkills>
    </div>
  )
}