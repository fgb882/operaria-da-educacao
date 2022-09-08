import React from 'react'
import {Link} from 'react-router-dom'

const HubRedirecionador = () => {
  return (
    <section id="redirecionador">
        <div className="redirecionador container">
            <LinkRedirecionadorPage text="Conheça minhas propostas!" link="/"/>
            <LinkRedirecionador text="Fortaleça minha pré-candidatura independente." link="http://www.profpaulaaparecida.financie.de"/>
            <LinkRedirecionador text="Acesse meu canal no YouTube!" link="www.youtube.com/c/profpaulaaparecida"/>
            <LinkRedirecionador text="Me adiciona no Facebook!" link="www.facebook.com/profpaulaaparecida" />
            <LinkRedirecionador text="Vem me acompanhar no Twitter" link="https://twitter.com/profpaulaaparec" />
            <LinkRedirecionador text="Vem me acompanhar no Telegram!" link="https://t.me/ProfessoraPaulaAparecida" />
            <LinkRedirecionador text="Veja o Diário de Codeputada!" link="https://link.medium.com/crCQ419x4lb" />


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