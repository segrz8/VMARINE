import React from 'react'
import './ContactBottom.scss';

import facebookLogo from './img/facebookLogo.png'
import allegroLogo from './img/allegroLogo.jpg'

const ContactBottom = () => {
    return (
        <div className="contact">
            <h2>Kontakt:</h2>
            <p>+48 692 780 074</p>
            <a href="mailto: info@vmarine.pl">info@vmarine.pl</a>
            <div className="logoContact">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/PremiumYachts">
                    <img src={facebookLogo} alt="facebook Logo" />
                </a>
            </div>
            <div className="logoContact">
                <a target="_blank" rel="noopener noreferrer" href="https://www.allegro.pl/uzytkownik/vmarine">
                    <img src={allegroLogo} alt="facebook Logo" />
                </a>
            </div>
        </div>
    )
}

export default ContactBottom
