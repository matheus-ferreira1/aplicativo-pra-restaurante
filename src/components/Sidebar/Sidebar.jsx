import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
   return (
      <nav className='sidebar'>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/comidas">Comidas</Link>
            </li>
            <li>
               <Link to="/bebidas">Bebidas</Link>
            </li>
            <li>
               <Link to="/sobremesas">Sobremesas</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Sidebar