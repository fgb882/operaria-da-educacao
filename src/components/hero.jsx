import React from 'react'
import '../App.css'
import IndexButton from './indexbutton'
import image from '../assets/img-hero.png'


const Hero = () => {
    return (
        <section id="hero">
            <div className="hero container">
                <div className="hero-image">

                </div>
                <img src={image} alt="imagem da professora" />
                <div className="hero-info">
                    <h2><span>Salve!</span> Bora causar nessas eleições?</h2>
                    <h1>Prof Paula Aparecida</h1>
                    <h3>Sou uma prof vegana e radical da rede pública na Zona Norte, SP.
                        Atualmente estou como Codeputada Estadual e candidata a Deputada Federal PSOL-SP! <br></br>
                        Não deixe de me acompanhar nessas eleições e participe da campanha!
                        Em luta pelo Ecofeminismo, rebeliao popular e libertação animal!
                        Natureza livre e povo no poder!</h3>
                    <IndexButton />
                </div>
            </div>
        </section>
    )
}

export default Hero