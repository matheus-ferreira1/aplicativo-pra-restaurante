import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bebidas from '../../views/Bebidas'
import Comidas from '../../views/Comidas'
import Home from '../../views/Home'
import NotFound from '../../views/NotFound'
import Sobremesas from '../../views/Sobremesas'

const Content = () => {
   return (
      <div className='content'>
         <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/comidas" element={<Comidas />} />
            <Route path="/bebidas" element={<Bebidas />} />
            <Route path="/sobremesas" element={<Sobremesas />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   )
}

export default Content