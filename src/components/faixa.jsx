import React from 'react'

  const faixa = ({link, alt, src}) => {
  return (
    <section id="faixa">
      <a href={link}>
      <img src={src} alt={alt} />
      </a>
    </section>
  )
}

export default faixa

