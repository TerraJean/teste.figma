import { useState } from 'react'
import './App.css'
import Header from './componentes/Home/Header/Header'
import Home from './componentes/Home/Home'
import TwoPage from './componentes/TwoPage'

function App() {
  return (
    <>
      <div className='back'>        
      <Home/>     
      <TwoPage/>        
      </div>     
    </>
  )
}

export default App
