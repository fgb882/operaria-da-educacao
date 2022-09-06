import Image1 from "../assets/img-materia1.jpg"
import Image2 from "../assets/img-materia2.jpg"
import Image3 from "../assets/img-materia3.jpg"



const Materias = () => {
    return (
        <section id="materia">
            <div className="materia container">
                <div className="materia-title">
                    <h1>Matérias</h1>
                    <p>Lead!</p>
                </div>
                <div className="materia-all">
                    <ItemMateria title="Aprovação do fim das vitrines na CPI de Venda de Animais" text="
Escrevemos um relatório paralelo da CPI de Venda de Animais e com a mobilização de ativistas, garantimos que a versão final do relatório aprovado deixasse público a crueldade na venda de animais e que fosse encaminhada o fim das gaiolas, vitrines e a existência de microchips para acompanhar seu desenvolvimento e localização.
" alt="example" image={Image1} />

                    <ItemMateriaInv title="Mobilização contra Privatização do ZOO" text=" União entre ativistas e funcionários
Criamos um movimento a favor dos animais explorados pela indústria do entretenimento, com audiências públicas, mobilização online e atos na ALESP em unidade com ativistas da causa animal e trabalhadores da Fundação Parque Zoológico (algo que nunca havia acontecido antes) contra a privatização e extinção da Fundação Parque Zoológico em São Paulo.

" alt="example" image={Image2} />
                    <ItemMateria title="622 mil reais emendas parlamentares para saúde animal em São Paulo." text="322 mil reais para a castração gratuita de 4000 animais - com foco em moradores de baixa renda da Zona Norte de São Paulo. Em 3 anos, estarão a menos nas ruas, 432.000 felinos e 49.000 cães.
" text2="300 mil reais para ambulância para transporte e controle populacional de animais residentes na periferia." alt="example" image={Image3} />
                </div>
            </div>
        </section>
    )
}

const ItemMateria = ({ image, alt, text, text2, title }) => {
    return (
        <div className="materia-item">
            <div className="materia-text">
                <h2>{title}</h2>
                <p>{text}</p>
                <br></br>
                <p>{text2}</p>
            </div>
            <div className="materia-img">
                <img src={image} alt={alt} />
            </div>
        </div>
    )
}

const ItemMateriaInv = ({ image, alt, text, title }) => {
    return (
        <div className="materia-item materia-inv">

            <div className="materia-img">
                <img src={image} alt={alt} />
            </div>
            <div className="materia-text">
                <h2>{title}</h2>
                <p>{text}</p>
                <br></br>

            </div>
        </div>
    )
}

export default Materias