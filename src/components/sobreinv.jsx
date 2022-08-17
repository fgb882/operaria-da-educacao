import React from 'react'
import image from '../assets/img-sobre.jpg'

const sobreinv = () => {
  return (
    <section id="sobre">
      <div className="sobre container">
      <div className='sobre-img'>
          <img src={image} alt="imagem da paula aparecida criança"/>
        </div>
      <div className='sobre-texto'>
          <h1>Como eu penso</h1>
          <p>
          Nós, humanos, precisamos desenvolver nossa consciência animal, somos bichos e parte da natureza. O capitalismo é guerra permanente contra animais e (nossa) natureza. A humanidade corre risco de extinção, é urgente a tarefa de construir outro sistema que seja focado na defesa da vida e não do lucro.
          </p>
        </div>

        
        
      </div>
    </section>
  )
}

export default sobreinv