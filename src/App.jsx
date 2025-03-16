import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Container } from './components/Container/Container'
import {Home} from "./components/Pages/Home/Home"
import {Skills} from './components/Pages/Skills/Skills'
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
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/studies' element={<Studies/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>  
            <Route path='*' element={<Notfound/>}></Route> 
        </Routes>
    </Container>
    </>
  )
}



