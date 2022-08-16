import React from 'react'

const Materia = () => {
  return (
    <section id="materia">
        <div className="materias container">
            <div className="materia-top">
                <h1 className="materia-title">Matérias</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, quam vel bibendum aliquam,
                    tortor neque consequat nibh, vitae convallis justo nisi fermentum arcu. Aliquam posuere molestie
                    facilisis. Duis porttitor lectus non ullamcorper sodales. Donec ornare posuere lectus a venenatis.
                    Aliquam pellentesque efficitur consequat. Donec mauris metus, eleifend quis elit et, iaculis
                    scelerisque magna. Etiam euismod elementum fermentum. Vivamus ac mi dolor. Nulla in consectetur
                    nibh. Pellentesque mollis erat at lectus dictum, id tincidunt libero porta!</p>
            </div>
            <div className="materia-bottom">
                <Materiaitem />
                <Materiaitem />
                <Materiaitem />
                <Materiaitem />
            </div>
        </div>
    </section>
  )
}

const Materiaitem = () => {

    return(
    <div className="materia-item">

            <h2>Matérias</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas, quam vel bibendum
                aliquam,
                tortor neque consequat nibh, vitae convallis justo nisi fermentum arcu.</p>
    </div>
    )}

export default Materia