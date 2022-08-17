import React from 'react'
import Hero from '../components/hero'
import Sobre from '../components/sobre'
import SobreInv from '../components/sobreinv'
import Borda from '../components/borda'
import Footer from '../components/footer'
import Materia from '../components/materia'
import Faixa from '../components/faixa'
import Sobrelist from '../components/sobrelist'

const Home = () => {
  return (
    <div>
        <Hero />
        <Faixa />
        <Materia />
        <Borda texto={""}/>
        <SobreInv />
        <Borda texto={""}/>
        <Sobre />
        <Borda texto={""}/>
        <Sobrelist />
        <Footer />
    </div>
  )
}

export default Home