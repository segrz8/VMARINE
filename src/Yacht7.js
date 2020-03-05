import React from 'react'
import './Yacht.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau38S(7).JPG'
import img2 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (6).JPG'
import img3 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (9).JPG'
import img4 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (10).JPG'
import img5 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (2).JPG'
import img6 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (3).JPG'
import img7 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (4).JPG'
import img8 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (1).JPG'
import img9 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (5).JPG'
import img10 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (8).JPG'
import img11 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (11).JPG'
import img12 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (12).JPG'
import img13 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (13).JPG'
import img14 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (14).JPG'
import img15 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (15).JPG'
import img16 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (16).JPG'
import img17 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (17).JPG'
import img18 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (18).JPG'
import img19 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (19).JPG'
import img20 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (20).JPG'
import img21 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (21).JPG'
import img22 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (22).JPG'
import img23 from './img/jachty/Jeanneau Prestige 38 S 2008 - 155 000 Euro brutto/Jeanneau 38S (23).JPG'

const Yacht7 = () => {

    const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23]

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
                    <h1>Jeanneau Prestige 38 S</h1>
                    <p><span className="bold">Długość:</span> 11,92 m</p>
                    <p><span className="bold">Szerokość:</span> 3,89 m</p>
                    <p><span className="bold">Napęd:</span> 2 x Cummins QSD 4.2 (2 x 320 KM), Bravo 3</p>
                    <p><span className="bold">Rok produkcji:</span> 2008</p>
                    <p><span className="bold">Przebieg:</span> 672</p>
                    <p><span className="bold">Miejsce postoju:</span> Chorwacja</p>
                </div>
                <p>Bardzo dobrze przemyślany i zaprojektowany jacht. Niezawodne, mocne i ekonomiczne silniki, dwie oddzielne sypialnie i salon oraz funkcjonalny kokpit to największe atuty tej jednostki. </p>
                <p className="price">Cena: 155 000 Euro brutto (umowa kupna / sprzedaży)</p>
                <p><span className="bold">Wyposażenie jachtu m.in.:</span></p>
                <ul>
                    <li>Licznik wysunięcia łańcucha kotwicy</li>
                    <li>Ploter GPS Raymarine E120</li>
                    <li>Kompas</li>
                    <li>Radio VHF z DSC</li>
                    <li>Radar</li>
                    <li>Komplet akumulatorów </li>
                    <li>Automatyczne pompy zęzowe</li>
                    <li>Ładowarka akumulatorów</li>
                    <li>Dziobowy ster strumieniowy</li>
                    <li>Hydrauliczne trym klapy ze wskaźnikiem położenia</li>
                    <li>Trap</li>
                    <li>Oświetlenie platformy rufowej</li>
                    <li>System bezpośredniego podłączenia pod wodę w porcie</li>
                    <li>Szperach halogenowy</li>
                    <li>Radio z CD</li>
                    <li>TV z DVD</li>
                    <li>Dekoder TV SAT</li>
                    <li>Kuchenka gazowa</li>
                    <li>Kuchenka mikrofalowa</li>
                    <li>Lodówka w kokpicie</li>
                    <li>HardTop</li>
                    <li>Panele fotowoltaiczne</li>
                    <li>Plandeka kokpitu</li>
                    <li>Prysznic na rufie</li>
                    <li>Stolik w kokpicie</li>
                    <li>Drabinka kąpielowa</li>
                    <li>Garaż na ponton</li>
                    <li>Ponton</li>
                    <li>Tratwa ratunkowa</li>
                    <li>Kolor burty na zamówienie</li>
                </ul>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Yacht7
