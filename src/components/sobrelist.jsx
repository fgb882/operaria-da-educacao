import React from 'react'
import image from '../assets/img-sobre.jpg'


const Sobrelist = () => {
    return (
        <section id="sobre">
            <div className="sobre container">
                
                <div className='sobre-img'>
                    <img src={image} alt="imagem da paula aparecida criança" />
                </div>
                <div className='sobre-texto'>
                    <h1>Minha Trajetória</h1>
                    <ul>
                        <li>Voluntária aos 9 anos na campanha eleitoral do PT no bairro.</li>
                        <li>Fui do grêmio escolar e diretora do Centro Acadêmico de Letras da USP.</li>
                        <li>Construi greves e mobilizações em defesa da educação e com estudantes nas ocupações de 2015.</li>
                        <li>Eleita conselheira estadual da APEOESP pela oposição de esquerda ao PT.</li>
                        <li>Fui parte do PT, PSTU e PSOL e também MTL, MRT, Pão e Rosas, Professores Pela Base e Feminivegan.
                        </li>
                        <li>Codeputada estadual eleita em 2018 em defesa da Escola Pública e da Causa Animal.
                            Pronto</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Sobrelist