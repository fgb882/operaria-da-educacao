import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLinks = () => {


  const hamburguer = document.querySelector(".hamburguer");
  const navbarLinks = document.querySelector(".navbarLinks");

  document.querySelectorAll("navbarLinks").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navbarLinks.classList.remove("active");

  }
  ))

  return (
    <nav id="navbar">
      <div className="navbarLogo">
        <Link to="/">Prof Paula Aparecida</Link>
      </div>
      <div className="navbarLinks">
        <Link to="/acoes">Ações</Link>
        <Link to="/manifesto">Manifesto</Link>
        <Link to="/">Home</Link>
      </div>
      <div className="hamburguer" onClick={hamburguerClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

    </nav>
  )
}

function hamburguerClick() {

  const hamburguer = document.querySelector(".hamburguer");
  const navbarLinks = document.querySelector(".navbarLinks");

  hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navbarLinks.classList.toggle("active");

  })

}

export default NavbarLinks