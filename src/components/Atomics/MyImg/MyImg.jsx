import React from 'react'
import foto from "../../../assets/img/foto.jpg"
 export const MyImg = () => {
  return (
    <img className={` mt-[50px] mb-[15px] w-[200px] h-[200px] rounded-[50%] sm:mt-[100px] md:mt-[70px] xl:mt-[70px] 2xl:mt-[200px]`} src={foto} alt="miFoto" />
  )
}
