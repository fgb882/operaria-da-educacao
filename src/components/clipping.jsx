import React from 'react'

const Clipping = ({title, text}) => {
    return (
        <section id="materia">
            <div className="materias container">
                <div className="materia-top">
                    <h1 className="materia-title">{title}</h1>
                    <p>{text}</p>
                </div>
                <div className="materia-bottom">
                    <Clippingitem materia="https://politica.estadao.com.br/blogs/fausto-macedo/justica-condena-doria-por-mandar-pintar-escolas-estaduais-de-sao-paulo-com-o-azul-e-amarelo-do-psdb/" title="Clipping 1" text="Justiça condena Doria por mandar pintar escolas estaduais de São Paulo com o azul e amarelo do PSDB" />
                    <Clippingitem materia="https://www.cartacapital.com.br/opiniao/reforma-do-ensino-medio-o-que-ha-por-tras-da-autonomia-dada-aos-estudantes/" title="Clipping 2" text="" />
                    <Clippingitem materia="https://olharanimal.org/bancada-ativista-promove-encontro-para-debate-na-alesp-sobre-a-causa-animal/" title="Clipping 3" text="" />
                    <Clippingitem materia="https://www1.folha.uol.com.br/educacao/2021/03/relatorio-aponta-falta-de-estrutura-e-contaminacoes-por-covid-19-nas-escolas-estaduais-de-sp.shtml" title="Clipping 4" text="" />
                    <Clippingitem materia="https://www.cartacapital.com.br/opiniao/escolas-serao-um-celeiro-de-novas-variantes-do-coronavirus/" title="Clipping 5" text="" />
                    <Clippingitem materia="https://oglobo.globo.com/epoca/guilherme-amado/deputada-propoe-licenca-remunerada-para-pais-cuidarem-dos-filhos-na-pandemia-24633205" title="Clipping 6" text="" />
                    <Clippingitem materia="https://www.cartacapital.com.br/educacao/deputada-propoe-o-cancelamento-do-ano-escolar-em-sp/" title="Clipping 7" text=""/>

                </div>
            </div>
        </section>
    )
}

const Clippingitem = ({ text, title, materia }) => {

    return (
        
        
        <div className="materia-item" id="materia">
            <a href={materia}><h2>{title}</h2></a>
           
            <p>{text}</p>
        </div>
        
        
    )
}

export default Clipping