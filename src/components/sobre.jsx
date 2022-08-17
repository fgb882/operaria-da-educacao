import React from 'react'
import image from '../assets/img-sobre.jpg'

const sobre = () => {
  return (
    <section id="sobre">
      <div className="sobre container">
        <div className='sobre-texto'>
          <h1>Quem sou eu</h1>
          <h5>Professora, ou como prefiro dizer, OPERÁRIA da educação.</h5>
          <p>
            Cria da Brasilândia, periferia de São Paulo. Neta de Dona Diva, doméstica, retirante nordestina e liderança comunitária do PT na região. Tenho Nossa Senhora Aparecida como padroeira. Me tornou vegana após experiência espiritual no tantra. Professora de português, operária da educação na periferia da ZN.

          </p>
        </div>
        <div className='sobre-img'>
          <img src={image} alt="imagem da paula aparecida criança" />
        </div>


      </div>
    </section>
  )
}

export default sobre