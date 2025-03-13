import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Container } from './components/Container/Container'
import {Home} from "./components/Pages/Home/Home"
import {Technical_Skils } from './components/Pages/Technical_Skils/Technical_Skils'
import {Social_Skils } from './components/Pages/Social_Skils/Social_Skils'
import {Studies} from "./components/Pages/Studies/Studies"
import {Projects} from "./components/Pages/Projects/Projects"
import {Contact} from "./components/Pages/Contact/Contact"
import {Notfound } from './components/Pages/Notfound/Notfound'
import { Header } from './components/Layouts/Header/Header'
export const App = () => {
  return (
    <>
    <Header></Header>
    <Container>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/technical_skils' element={<Technical_Skils/>}></Route>
            <Route path='/social_skils' element={<Social_Skils/>}></Route>
            <Route path='/studies' element={<Studies/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>  
            <Route path='*' element={<Notfound/>}></Route> 
        </Routes>
    </Container>
    </>
  )
}



