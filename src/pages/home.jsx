import React from 'react'
import Hero from '../components/hero'
import Sobre from '../components/sobre'
import SobreInv from '../components/sobreinv'
import Borda from '../components/borda'
import Footer from '../components/footer'
import Materia from '../components/materia'
import Faixa from '../components/faixa'

const Home = () => {
  return (
    <div>
        <Hero />
        <Faixa />
        <Materia />
        <Borda />
        <SobreInv />
        <Borda />
        <Sobre />


        <Footer />
    </div>
  )
}

export default Home