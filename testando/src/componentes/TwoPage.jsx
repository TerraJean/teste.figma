import React from 'react'
import NewestReads from './Home/Newest/NewestReads'
import './TwoPage.css'
import ImgNoticia1 from '../img/noticia1.png'
import ImgNoticia2 from '../img/noticia2.png'
import ImgNoticia3 from '../img/noticia3.png'

const TwoPage = () => {
  return (
    <div className='container'>
        <section>
        <h2>Newest reads</h2>            
        <div className="noticias">            
          <NewestReads url={ImgNoticia1} text={"France seeks to protect Russia's Morozov collection from seizure as masterpieces return home"}/>
          <NewestReads url={ImgNoticia2} text={"Picasso’s muse as sea creature—will it break $100m at Sotheby's New York sale?"}/>
          <NewestReads url={ImgNoticia3} text={"Venice Biennale 2022: all the national pavilions, artists and curators"}/>
          
        </div>
        </section>
    </div>
  )
}

export default TwoPage