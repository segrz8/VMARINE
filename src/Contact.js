import React from 'react'
import './Contact.scss';

import img1 from './img/glowna/main (2).jpg';

const Contact = () => {
    return (
        <div className="contactPage">
            <div className="contact">
                <h1>Kontakt:</h1>
                <h2>VMARINE</h2>
                <p>+48 692 780 074</p>
                <p>info@vmarine.pl</p>
                <p>Marina Sopot, Sopot, Polska</p>
                <h2>Dane firmy:</h2>
                <p>VMP Tomasz Kumor</p>
                <p>Literacka 38, 05 – 220 Zielonka</p>
                <p>NIP: 125-125-70-91</p>
            </div>
            <img src={img1} alt="" />
        </div>
    )
}

export default Contact
