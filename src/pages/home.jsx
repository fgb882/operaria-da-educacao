import React from 'react'
/*Components*/
import Hero from '../components/hero'
import Mote from '../components/mote'
import Sobre from '../components/sobre'
import SobreInv from '../components/sobreinv'
import Borda from '../components/borda'
import Footer from '../components/footer'
import Faixa from '../components/faixa'
import Sobrelist from '../components/sobrelist'
import Navbar from '../components/navbar'
import Clipping from '../components/clipping'
/* Images */
import imagevakinha from '../assets/Link-Vakinha.jpg'
import imagewhatsapp from '../assets/Link-Whats.jpg'


const Home = () => {
 
  
  return (
    <div>
      <Hero />
      <Navbar />
      <Faixa alt={"imagem do financie"} link={"https://profpaulaaparecida.financie.de"} src={imagevakinha} />
      <Mote />
      <Borda />
      <Clipping title={"Clipping"} text={"Estamos na rua e na luta há muito tempo! Dentro da sala de aula ou nas periferias do Brasil, lutando pela educação, pela natureza e contra a burguesia."}/>
      <Borda />
      <Faixa alt={"imagem do whatsapp"} link={"https://wa.me/5511970434031"} src={imagewhatsapp} />
      <Sobre />
      <Borda />
      <SobreInv />
      <Borda texto={""} />
     <Sobrelist />
      <Footer />
    </div>
  )
}

export default Home