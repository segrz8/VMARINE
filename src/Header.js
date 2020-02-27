import React from 'react'
import './Header.scss';

import logoVmarine from './img/logo-vmarine.jpg'
import long from './img/main (13).jpg'

const Header = () => {
    return (
        <div className="header">
            {/* <div className="vmarine-logo"> */}
            <img className="vmarine-logo" src={logoVmarine} alt="VMARINE logo" />
            {/* </div> */}
            <img className='boats' src={long} alt="boats" />
            {/* <div className="rect"></div>
            <div className="rect2"></div> */}
        </div>
    )
}

export default Header
