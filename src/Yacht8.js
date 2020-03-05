import React from 'react'
import './Yacht.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S(3).jpg'
import img2 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (1).jpg'
import img3 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (2).jpg'
import img4 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (4).jpg'
import img5 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (5).jpg'
import img6 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (6).jpg'
import img7 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (7).jpg'
import img8 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (8).jpg'
import img9 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (9).jpg'
import img10 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (10).jpg'
import img11 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (11).jpg'
import img12 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (12).jpg'
import img13 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (13).jpg'
import img14 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (14).jpg'
import img15 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (15).jpg'
import img16 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (16).jpg'
import img17 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (17).jpg'
import img18 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (18).jpg'
import img19 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (19).jpg'
import img20 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (20).jpg'
import img21 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (21).jpg'
import img22 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (22).jpg'
import img23 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (23).jpg'
import img24 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (24).jpg'
import img25 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (25).jpg'
import img26 from './img/jachty/Jeanneau Prestige 390S 2011 - 205 000 Euro brutto/390S (26).jpg'

const Yacht8 = () => {

    const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26]

    // const list = photos.map(photo =>
    //     <div className="photo" key={photo}>
    //         <img src={photo} alt="yacht" />
    //     </div>
    // )

    const list = photos.map(photo =>
        <Carousel.Item key={photo}>
            <img src={photo} className="d-block w-100" alt="..." />
        </Carousel.Item>
    )

    return (
        <div className="yacht">
            <div className="gallery">
                <Carousel controls={true} indicators={false}>
                    {list}
                </Carousel>
            </div>
            <div className="yacht-text">
                <div className="specification">
                    <h1>Jeanneau Prestige 390 S </h1>
                    <p><span className="bold">Długość:</span> 11,92 m</p>
                    <p><span className="bold">Szerokość:</span> 3,89 m</p>
                    <p><span className="bold">Napęd:</span> 2 x Cummins QSD 4.2 (2 x 320 KM), Bravo 3</p>
                    <p><span className="bold">Rok produkcji:</span> 2010 / model 2011</p>
                    <p><span className="bold">Przebieg:</span> 430</p>
                    <p><span className="bold">Miejsce postoju:</span> Chorwacja</p>
                </div>
                <p>Pierwszy właściciel, serwisowany i zadbany. Jacht w bardzo dobrym stanie z niskim przebiegiem i udokumentowaną historią.</p>
                <p className="price">Cena: 205 000 Euro brutto (umowa kupna / sprzedaży)</p>
                <p><span className="bold">Wyposażenie jachtu m.in.:</span></p>
                <ul>
                    <li>Klimatyzacja z ogrzewaniem</li>
                    <li>Ploter GPS Raymarine C120W</li>
                    <li>Kompas</li>
                    <li>Głębokościomierz</li>
                    <li>Komputer pokładowy Vessel View</li>
                    <li>Elektroniczne manetki</li>
                    <li>Joystick do manewrów w porcie</li>
                    <li>Wciągarka kotwicy</li>
                    <li>Garaż na ponton</li>
                    <li>TV</li>
                    <li>Szperach halogenowy</li>
                    <li>Automatyczne pompy zęzowe</li>
                    <li>Ładowarka akumulatorów</li>
                    <li>Elektryczne trym klapy ze wskaźnikiem położenia</li>
                    <li>Radio z CD</li>
                    <li>Głośniki w kabinie i w kokpicie</li>
                    <li>Kuchenka gazowa</li>
                    <li>Lodówka z zamrażarką</li>
                    <li>Lodówka w kokpicie</li>
                    <li>Materace do opalania na dziobie</li>
                    <li>HardTop</li>
                    <li>Prysznic na rufie</li>
                    <li>Stolik w kokpicie</li>
                    <li>Drewno teakowe w kokpicie i na platformie rufowej</li>
                </ul>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Yacht8
