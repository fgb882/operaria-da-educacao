import React from 'react'
import '../App.css'
import image from '../assets/img-hero.png'


const Hero = () => {
    return (
        <section id="hero">
            <div className="hero container">

                <div className="hero-info">
                    <h2><span>Salve!</span> Bora causar nessas eleições?</h2>
                    <h1>Prof Paula Aparecida</h1>
                    <h3>Sou Prof Paula Aparecida, candidata a deputada federal pelo PSOL/SP. Fui eleita codeputada estadual em 2018 pela Bancada Ativista. Professora de escola estadual, defendo que filho de político estude obrigatoriamente na escola pública.
                        Também luto pelo fim da guerra contra animais e natureza.</h3>
                </div>
                <div className="hero-image">
                <img src={image} alt="imagem da professora" /> 
                </div>


            </div>
        </section>
    )
}



export default Hero