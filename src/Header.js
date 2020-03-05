import React from 'react'
import './Header.scss';

import logoVmarine from './img/logo-vmarine.jpg'
import long from './img/main (13).jpg'

const Header = () => {
    return (
        <div className="header">
            <img className="vmarine-logo" src={logoVmarine} alt="VMARINE logo" />
            <img className='boats' src={long} alt="boats" />
        </div>
    )
}

export default Header
