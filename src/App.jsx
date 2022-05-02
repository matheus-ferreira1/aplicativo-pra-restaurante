import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './global.css'

const App = () => {
   return (
      <BrowserRouter>
         <Header />
         <div className="App">
            <Sidebar />
            <Content />
         </div>
      </BrowserRouter>
   )
}

export default App