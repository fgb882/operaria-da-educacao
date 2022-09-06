import React from 'react'
import { Link } from "react-router-dom";


const NavbarM = () => {

        
    return (
        
      
        <nav id="navbar">
            <div className="navbarLogo">
          <Link to="/"> <b> <a href="#hero">Prof Paula Aparecida</a></b></Link>
            </div>
            <div className="navbarLinks">
            <Link to="/links">Links</Link>

            </div>
        </nav>
    )
}

export default NavbarM