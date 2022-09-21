import React from 'react'

const Clipping = ({title, text}) => {
    return (
        <section id="clipping">
            <div className="clipping container">
                <div className="clipping-top">
                    <h1 className="clipping-title">{title}</h1>
                    <p>{text}</p>
                </div>
                <div className="clipping-bottom">
                    <Clippingitem clipping="https://politica.estadao.com.br/blogs/fausto-macedo/justica-condena-doria-por-mandar-pintar-escolas-estaduais-de-sao-paulo-com-o-azul-e-amarelo-do-psdb/" title="Justiça condena Doria por mandar pintar escolas estaduais de São Paulo com o azul e amarelo do PSDB " text="" />
                    <Clippingitem clipping="https://www.cartacapital.com.br/opiniao/reforma-do-ensino-medio-o-que-ha-por-tras-da-autonomia-dada-aos-estudantes/" title="Reforma do Ensino Médio: O que há por trás da autonomia dada aos estudantes" text="" />
                    <Clippingitem clipping="https://olharanimal.org/bancada-ativista-promove-encontro-para-debate-na-alesp-sobre-a-causa-animal/" title="Bancada Ativista promove encontro para debate na ALESP sobre a causa animal" text="" />
                    <Clippingitem clipping="https://www1.folha.uol.com.br/educacao/2021/03/relatorio-aponta-falta-de-estrutura-e-contaminacoes-por-covid-19-nas-escolas-estaduais-de-sp.shtml" title="Professores se queixam de falta de estrutura e contaminações por Covid em escolas estaduais de SP" text="" />
                    <Clippingitem clipping="https://www.cartacapital.com.br/opiniao/escolas-serao-um-celeiro-de-novas-variantes-do-coronavirus/" title="Escolas serão um celeiro de novas variantes do coronavírus" text="" />
                    <Clippingitem clipping="https://oglobo.globo.com/epoca/guilherme-amado/deputada-propoe-licenca-remunerada-para-pais-cuidarem-dos-filhos-na-pandemia-24633205" title="Deputada propõe licença remunerada para pais cuidarem dos filhos na pandemia" text="" />
                    <Clippingitem clipping="https://www.cartacapital.com.br/educacao/deputada-propoe-o-cancelamento-do-ano-escolar-em-sp/" title="Deputada propõe o cancelamento do ano escolar em SP" text=""/>
                    <Clippingitem clipping="https://alternativasocialista.com/majoritaria-do-psol-sp-se-apropria-do-fundo-partidario-para-garantir-a-eleicao-de-boulos-juliano-rillo-e-seus-apadrinhados/" title="Majoritária do PSOL SP se apropria do fundo partidário para garantir a Eleição de Boulos, Juliano, Rillo e seus apadrinhados!" />

                </div>
            </div>
        </section>
    )
}

const Clippingitem = ({ text, title, clipping }) => {

    return (
        
        
        <div className="clipping-item">
            <a href={clipping}><h2>{title}</h2></a>

        </div>
        
        
    )
}

export default Clipping