import React from 'react'
import image from '../assets/img-sobre.jpg'

const sobre = () => {
  return (
    <section id="sobre">
      <div className="sobre container">
        <div className='sobre-texto'>
          <h1>Quem sou eu</h1>
          <h5>Professora/operária da educação</h5>
          <p>
          Sou cria da Brasilândia, periferia de São Paulo, e neta de Dona Diva, doméstica, retirante nordestina e liderança comunitária do PT. Trabalho como operária da educação realizando aulas de português em escolas da quebrada. Adotei o veganismo na vida e na luta. Tenho Nossa Senhora Aparecida como padroeira.
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