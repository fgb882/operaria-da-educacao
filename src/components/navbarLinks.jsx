import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLinks = () => {
  return (
    <nav id="navbar">
        <div className="navbarLogo">
         <Link to="/">Prof Paula Aparecida</Link>
         </div>
         <div className="navbarLinks">
                <Link to="/materias">Matérias</Link>
                <Link to="/">Home</Link>
            </div>

    </nav> 
  )
}

export default NavbarLinks