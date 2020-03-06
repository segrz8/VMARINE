import React from 'react'
import './Contact.scss';

import img1 from './img/contact/main(2).jpg';
import img1s from './img/contact/main(2)s.jpg';

const Contact = () => {
    return (
        <div className="contactPage">
            <div className="contact">
                <h1>Kontakt:</h1>
                <h2>VMARINE</h2>
                <p>+48 692 780 074</p>
                <a href="mailto: info@vmarine.pl">info@vmarine.pl</a>
                <p>Marina Sopot, Sopot, Polska</p>
                <h2>Dane firmy:</h2>
                <p>VMP</p>
                <p>Literacka 38, 05 – 220 Zielonka</p>
                <p>NIP: 125-125-70-91</p>
            </div>
            <div className="image">
                <picture>
                    <source media="(min-width: 461px)" srcSet={img1} />
                    <img src={img1s} className="d-block w-100" alt="..." />
                </picture>
            </div>
        </div>
    )
}

export default Contact
