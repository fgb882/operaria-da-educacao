import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {


    return (


        <nav id="navbar">
            <div className="navbarLogo">
                <b> <a href="#hero">Prof Paula Aparecida</a></b>
            </div>
            <div className="navbarLinks">
                <Link to="/materias">Matéria</Link>
                <a href="#clipping">Clipping</a>
                <a href="#sobre">Minha Origem</a>
                <Link to="/links">Links</Link>

            </div>
        </nav>
    )
}

export default Navbar