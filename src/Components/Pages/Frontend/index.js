import React from 'react'
import NavHeader from 'Components/navHeader/navHeader'
import Home from './Home'
import Footer from '../../Footer'
import About from '../About'
import { Route, Routes } from 'react-router-dom'
// import Todos from './Todos'

const FrontendIndex = () => {
  return (
<>
      <NavHeader />
    <main>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/todos' element={<Todos/>}/> */}
     </Routes>
    </main>
      <Footer />
</>
  )
}

export default FrontendIndex