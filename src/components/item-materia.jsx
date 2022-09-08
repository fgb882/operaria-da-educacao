import Image1 from "../assets/img-materia1.jpg"
import Image2 from "../assets/img-materia2.jpg"
import Image3 from "../assets/img-materia3.jpg"

import Image4 from "../assets/img-materia-pl1.jpg"
import Image5 from "../assets/img-materia-d1.jpg"
import Image6 from "../assets/img-materia-eda1.jpg"



const Materias = () => {
    return (
        <section id="materia">
            <div className="materia container">
                <div className="materia-title">
                    <h1>Ações na Codeputância</h1>
                    <p></p>
                </div>
                <h2>Causa Animal</h2>
                <div className="materia-all">
                    <ItemMateria title="Aprovação do fim das vitrines na CPI de Venda de Animais" text="
Escrevemos um relatório paralelo da CPI de Venda de Animais e com a mobilização de ativistas, garantimos que a versão final do relatório aprovado deixasse público a crueldade na venda de animais e que fosse encaminhada o fim das gaiolas, vitrines e a existência de microchips para acompanhar seu desenvolvimento e localização.
" alt="example" image={Image1} type="causaanimal" />

                    <ItemMateriaInv title="Mobilização contra Privatização do ZOO" text=" União entre ativistas e funcionários
Criamos um movimento a favor dos animais explorados pela indústria do entretenimento, com audiências públicas, mobilização online e atos na ALESP em unidade com ativistas da causa animal e trabalhadores da Fundação Parque Zoológico (algo que nunca havia acontecido antes) contra a privatização e extinção da Fundação Parque Zoológico em São Paulo.

" alt="example" image={Image2} type="causaanimal" />
                    <ItemMateria title="622 mil reais emendas parlamentares para saúde animal em São Paulo." text="322 mil reais para a castração gratuita de 4000 animais - com foco em moradores de baixa renda da Zona Norte de São Paulo. Em 3 anos, estarão a menos nas ruas, 432.000 felinos e 49.000 cães.
" text2="300 mil reais para ambulância para transporte e controle populacional de animais residentes na periferia." alt="example" image={Image3} type="causaanimal" />

                    <h2>Educação</h2>

                    <ItemMateriaInv text="O Projeto de Lei propõe ações concretas contra violência na escola, melhora da qualidade e  liberdade de pensamento na comunidade. A Cultura de Paz para entender os conflitos e democracia participativa entre professores, estudantes e comunidade para tomar decisões escolares. Além disso, estabelece cursos e oficinas para empoderar a comunidade escolar de conhecimento necessário. O Projeto foi protocolado em 2021 junto a demais parlamentares do PSOL na ALESP e na Câmara Municipal de São Paulo." title="PL Escola de Paz e Liberdade" image={Image4} alt="imagem pl escola paz e liberdade" type="educacao" />

                    <ItemMateria text="O governador usou dinheiro público sem licitação (escolhendo empresas aliadas ao governador) para pintar escolas estaduais das cores de seu partido, o PSDB. Foram 24 milhões de dano ao patrimônio público. Entrei com uma ação popular em 2019 exigindo o fim do projeto e a devolução do dinheiro. No mesmo ano o projeto foi extinto, e em 2022 o governador e o secretário da Educação Rossieli foram condenados em primeira instância." title="Vitória na justiça contra Dória pelo uso ilegal de dinheiro público e dano à educação" image={Image5} alt="imagem projeto escola mais bonita" type="educacao" />

                    <ItemMateriaInv text="800 mil reais de emendas parlamentares para projetos agroecológicos em 4 escolas públicas estaduais da Zona Norte de São Paulo. Educação ambiental por meio de permacultura, construção de hortas comunitárias e implementação de sistemas de compostagem e coleta de água da chuva." title="Dinheiro para meio ambiente e escola pública" image={Image6} alt="imagem materia dinheiro para meio ambiente e escola pública" type="educacao" />
                </div>
            </div>
        </section>
    )
}

const ItemMateria = ({ image, alt, text, text2, title, type }) => {
    return (
        <div className="materia-item" id={type}>
            <div className="materia-text">
                <h3>{title}</h3>
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

const ItemMateriaInv = ({ image, alt, text, title, type }) => {
    return (
        <div className="materia-item materia-inv" id={type}>

            <div className="materia-img">
                <img src={image} alt={alt} />
            </div>
            <div className="materia-text">
                <h3>{title}</h3>
                <p>{text}</p>
                <br></br>

            </div>
        </div>
    )
}

export default Materias