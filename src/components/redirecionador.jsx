import React from 'react'
import {Link} from 'react-router-dom'

const HubRedirecionador = () => {
  return (
    <section id="redirecionador">
        <div className="redirecionador container">
            <LinkRedirecionadorPage text="Conheça minhas propostas!" link="/"/>
            <LinkRedirecionador text="Quero apoiar financeiramente!" link="http://www.profpaulaaparecida.financie.de"/>
            <LinkRedirecionador text="Acesse meu canal do youtube!" link="www.youtube.com/c/profpaulaaparecida"/>
            <LinkRedirecionador text="Acesse meu facebook!" link="www.facebook.com/profpaulaaparecida" />
            <LinkRedirecionador text="Acesse meu twitter!" link="https://twitter.com/profpaulaaparec" />


        </div>
    </section>
  )
}

const LinkRedirecionador = ({text, link}) => {
    return(
        <div className="LinkRedirecionador">
            <div className="link-text">
                <a href={link}>{text}</a>
            </div>
        </div>
    )
}

const LinkRedirecionadorPage = ({text, link}) => {
    return(
        <div className="LinkRedirecionador">
            <div className="link-text">
                <Link to={link}>{text}</Link>
            </div>
        </div>
    )
}

export default HubRedirecionador