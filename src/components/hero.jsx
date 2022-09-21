import React from 'react'
import '../App.css'
import image from '../assets/img-hero.png'


const Hero = () => {
    return (
        <section id="hero">
            <div className="hero container">

                <div className="hero-info">
                    <h2><span>Salve!</span> Bora lutar contra o sistema?</h2>
                    <h1>Prof Paula Aparecida</h1>
                    <h3>Candidata a Deputada Federal pelo PSOL/SP.</h3>
                    <h3>Trabalho como operária da educação no ensino público estadual há 11 anos.</h3>
                    <h3>Em 2018 fui eleita codeputada estadual pela Bancada Ativista e defendi a educação pública e a causa animal.</h3>
                    <h3>Quero defender em Brasília que todo filho de político estude na Escola Pública.</h3>
                    <h3>Luto pela libertação animal e da natureza.</h3>

        
                </div>
                <div className="hero-image">
                <img src={image} alt="imagem da professora" /> 
                </div>


            </div>
        </section>
    )
}



export default Hero