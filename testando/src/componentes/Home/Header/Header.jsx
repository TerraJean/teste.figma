import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='container-header'>
        <span>ARTJUNKS</span>
        <div >
            <ul className='listMenu'>
                <li>Home</li>
                <li>About</li>
                <li>Artist</li>
                <li>Careers</li>
                <li>News</li>
                <li>Company</li>
                <li>Get started</li>
            </ul>
        </div>
    </div>
  )
}

export default Header