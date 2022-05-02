import React from 'react'
import './Home.css'

const Home = () => {
   return (
      <div className='home'>
         <div className='home-left'>
            <h2>Imper</h2>
            <h2>dível</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget quam consequat dui tincidunt pretium a non diam.</p>
            <div className="home-bottom">
               <h3>$ 30</h3>
               <button>Peça agora!</button>
            </div>
         </div>
         <div className="home-right">
            <img src="https://source.unsplash.com/E94j3rMcxlw" alt="Really tasty burger" />
         </div>
      </div>
   )
}

export default Home