import React from 'react'

export const Container = ({ children }) => {
  return (
    <div className='w-full h-screen overflow-y-auto scrollbar-custom'> 
      {
        children
      }
    </div>
  )
}


