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
                    <Materiaitem text="Example text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum purus vehicula metus dapibus tristique. " title="Matéria Exemplo" materia="https://google.com" />
                    <Materiaitem text="Example text: Donec ornare nisi at efficitur vehicula. Morbi pharetra purus justo molestie." title="Examplo de Matéria" />
                    <Materiaitem text="Example text: Vestibulum at dui bibendum, rutrum tellus eget, feugiat quam. Nam ac porttitor velit." title="Título da Matéria" />
                    <Materiaitem text="Example text: Mauris eu orci ullamcorper, commodo dolor non, facilisis ligula. " title="Example title" />
                </div>
            </div>
        </section>
    )
}

const Materiaitem = ({ text, title, materia }) => {

    return (
        <div className="materia-item" id="materia">
            <a href={materia}><h2>{title}</h2></a>
            <p>{text}</p>
        </div>
    )
}

export default Materia