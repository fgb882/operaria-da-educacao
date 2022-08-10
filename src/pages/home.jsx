import React from 'react'
import Hero from '../components/hero'
import Sobre from '../components/sobre'
import SobreInv from '../components/sobreinv'
import Borda from '../components/borda'

const Home = () => {
  return (
    <div>
        <Hero />
        <Sobre />
        <Borda />
        <SobreInv />
    </div>
  )
}

export default Home