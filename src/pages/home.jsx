import React from 'react'
/*Components*/
import Hero from '../components/hero'
import Sobre from '../components/sobre'
import SobreInv from '../components/sobreinv'
import Borda from '../components/borda'
import Footer from '../components/footer'
import Materia from '../components/materia'
import Faixa from '../components/faixa'
import Sobrelist from '../components/sobrelist'
import Clipping from '../components/clipping'
/* Images */
import imagevakinha from '../assets/Link-Vakinha.jpg'
import imagewhatsapp from '../assets/Link-Whats.jpg'


const Home = () => {
  return (
    <div>
      <Hero />
      <Borda />
      <Faixa alt={"imagem do financie"} link={"https://profpaulaaparecida.financie.de"} src={imagevakinha} />
      <Materia title={"Matérias"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, quam vel bibendum aliquatortor neque consequat nibh, vitae convallis justo nisi fermentum arcu. Aliquam posuere molestie facilisis. Duis porttitor lectus non ullamcorper sodales. Donec ornare posuere lectus a venenatis. Aliquam pellentesque efficitur consequat. Donec mauris metus, eleifend quis elit et, iaculis scelerisque magna. Etiam euismod elementum fermentum. Vivamus ac mi dolor. Nulla in consectetur nibh. Pellentesque mollis erat at lectus dictum, id tincidunt libero porta!"}/>
      <Borda />
      <Faixa alt={"imagem do whatsapp"} link={"https://wa.me/5511970434031"} src={imagewhatsapp} />
      
      <Clipping title={"Clipping"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, quam vel bibendum aliquatortor neque consequat nibh, vitae convallis justo nisi fermentum arcu. Aliquam posuere molestie facilisis. Duis porttitor lectus non ullamcorper sodales. Donec ornare posuere lectus a venenatis. Aliquam pellentesque efficitur consequat. Donec mauris metus, eleifend quis elit et, iaculis scelerisque magna. Etiam euismod elementum fermentum. Vivamus ac mi dolor. Nulla in consectetur nibh. Pellentesque mollis erat at lectus dictum, id tincidunt libero porta!"}/>
      <Borda texto={""} />
      <Sobre />
      <Borda texto={""} />
      <SobreInv />
      <Borda texto={""} />
      <Sobrelist />
      <Footer />
    </div>
  )
}

export default Home