import React from 'react'
import './Home.css'
import Header from './Header/Header'

const Home = () => {
  return (
    <div className='container-home'>  
      <div className="box">              
      <Header/>
        <div className="text-home">
            <span className='retangulo'></span>
            <h1>Art pieces made easy <br /> accessible for everyone</h1>
            <p>Learn, buy and trade art pieces of your favorite artist around <br /> the world by using crypto currencies.</p>
            <span className='learn'>Learn more</span>
        </div>
        
      </div>
    </div>
  )
}

export default Home