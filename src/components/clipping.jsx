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
                    <Clippingitem materia="https://politica.estadao.com.br/blogs/fausto-macedo/justica-condena-doria-por-mandar-pintar-escolas-estaduais-de-sao-paulo-com-o-azul-e-amarelo-do-psdb/" title="Justiça condena Doria por mandar pintar escolas estaduais de São Paulo com o azul e amarelo do PSDB " text="" />
                    <Clippingitem materia="https://www.cartacapital.com.br/opiniao/reforma-do-ensino-medio-o-que-ha-por-tras-da-autonomia-dada-aos-estudantes/" title="Reforma do Ensino Médio: O que há por trás da autonomia dada aos estudantes" text="" />
                    <Clippingitem materia="https://olharanimal.org/bancada-ativista-promove-encontro-para-debate-na-alesp-sobre-a-causa-animal/" title="Bancada Ativista promove encontro para debate na ALESP sobre a causa animal" text="" />
                    <Clippingitem materia="https://www1.folha.uol.com.br/educacao/2021/03/relatorio-aponta-falta-de-estrutura-e-contaminacoes-por-covid-19-nas-escolas-estaduais-de-sp.shtml" title="Professores se queixam de falta de estrutura e contaminações por Covid em escolas estaduais de SP" text="" />
                    <Clippingitem materia="https://www.cartacapital.com.br/opiniao/escolas-serao-um-celeiro-de-novas-variantes-do-coronavirus/" title="Escolas serão um celeiro de novas variantes do coronavírus" text="" />
                    <Clippingitem materia="https://oglobo.globo.com/epoca/guilherme-amado/deputada-propoe-licenca-remunerada-para-pais-cuidarem-dos-filhos-na-pandemia-24633205" title="Deputada propõe licença remunerada para pais cuidarem dos filhos na pandemia" text="" />
                    <Clippingitem materia="https://www.cartacapital.com.br/educacao/deputada-propoe-o-cancelamento-do-ano-escolar-em-sp/" title="Deputada propõe o cancelamento do ano escolar em SP" text=""/>

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