import React from 'react'

// Components
import NavbarLinks from '../components/navbarLinks'
import HubRedirecionador from '../components/redirecionador'
import Footer from '../components/footer'

const Links = () => {
  return (
    <div className='linksbg'>
        <NavbarLinks />
        <HubRedirecionador />
        <Footer />
    </div>
  )
}

export default Links