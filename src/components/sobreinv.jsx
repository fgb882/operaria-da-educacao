import React from 'react'
import image from '../assets/img-comopenso.jpg'

const sobreinv = () => {
  return (
    <section id="sobre">
      <div className="sobre container" id="sobreinv">
      <div className='sobre-img'>
          <img src={image} alt="imagem da paula aparecida criança"/>
        </div>
      <div className='sobre-texto'>
          <h1>Como eu penso</h1>
          <p>
          A busca pelo lucro em detrimento do bem-estar proporcionada pelo capitalismo está levando o nosso planeta à extinção. É urgente que nós, humanos, tenhamos o entendimento de que somos animais pertencentes à natureza, portanto temos a tarefa de construir outro sistema econômico, social e político focado na defesa da vida de todos os seres vivos.
          </p>
        </div>

        
        
      </div>
    </section>
  )
}

export default sobreinv