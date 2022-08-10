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
          <h1>Quem sou eu</h1>
          <h5>Professora, ou como prefiro dizer, OPERÁRIA da educação.</h5>
          <p>
            Atuo na Rede Pública Estadual, periferia da Zona Norte de SP (Jaçanã/Tremembé), há mais de 10 anos. Fui eleita conselheira estadual da APEOESP (Sindicato dos Professores do Ensino Oficial) e atualmente estou Codeputada Estadual na ALESP, pelo mandato coletivo da Mandata Ativista. Sou ecossocialista, feminista, antiespecista (libertação animal) e espiritualista ancestral. Minha militância é pelas lutas populares, estudantis e operárias. Sempre com as mulheres e a periferia.
          </p>
        </div>

        
        
      </div>
    </section>
  )
}

export default sobreinv