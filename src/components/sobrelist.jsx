import React from 'react'
import image from '../assets/img-trajetoria.jpg'


const Sobrelist = () => {
    return (
        <section id="sobre">
            <div className="sobre container" id="sobrelist">
                <div className='sobre-texto bulletpoint'>
                    <h1>Minha Trajetória</h1>
                    <p>Voluntária aos nove anos na campanha eleitoral do PT na Brasilândia</p>
                    <p>Fui do grêmio escolar e diretora do Centro Acadêmico de Letras da USP (Universidade de São Paulo)</p>
                    <p>Construí greves e mobilizações em defesa da educação durante e depois gestão Centro Acadêmico de Letras</p>
                    <p>Apoiei a luta dos estudantes durante as ocupações nas escolas em 2015</p>
                    <p>Escolhida para ser conselheira estadual da APEOESP (Sindicato dos Professores do Ensino Oficial do Estado de São Paulo) realizando oposição de esquerda ao PT</p>
                    <p>Estive no PT e PSTU antes de chegar ao PSOL</p>
                    <p>Atuei nos movimentos MTL (Movimento Terra Trabalho e Liberdade), MRT (Movimento Revolucionário dos Trabalhadores), Pão e Rosas, Professores Pela Base e Feminivegan</p>
                    <p>Eleita codeputada estadual em 2018 em defesa da Escola Pública e da Causa Animal</p>              
                </div>
                <div className='sobre-img'>
                    <img src={image} alt="imagem da paula aparecida" />
                </div>


            </div>
        </section>
    )
}

export default Sobrelist