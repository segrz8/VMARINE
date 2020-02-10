import React from 'react'
import './Header.scss';

import logoVmarine from './img/logo-vmarine.jpg'

const Header = () => {
    return (
        <img className='vmarine-logo' src={logoVmarine} alt="VMARINE logo" />
    )
}

export default Header
