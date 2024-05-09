import React from 'react'
import './NewestReads.css'

const NewestReads = (props) => {
  return (
    <div className='containe'>
        <div className="imagem">
            <img src={props.url} alt="" srcset="" />
        </div>
        <div className="text-box">
            <div className="container-text">
                <span className='dataNewest'>5 August, 2022</span>
                <h3>{props.text}</h3>
                <span className='readMore'>Read More &#10132; </span>
            </div>
        </div>
    </div>
  )
}

export default NewestReads