import React from 'react'
import './Yacht.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers390(9).jpg'
import img2 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (7).jpg'
import img3 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (8).jpg'
import img4 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (1).jpg'
import img5 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (2).jpg'
import img6 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (3).jpg'
import img7 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (4).jpg'
import img8 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (5).jpg'
import img9 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (6).jpg'
import img10 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (21).jpg'
import img11 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (22).jpg'
import img12 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (23).jpg'
import img13 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (24).jpg'
import img14 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (10).jpg'
import img15 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (11).jpg'
import img16 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (12).jpg'
import img17 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (13).jpg'
import img18 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (14).jpg'
import img19 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (15).jpg'
import img20 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (16).jpg'
import img21 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (17).jpg'
import img22 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (18).jpg'
import img23 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (19).jpg'
import img24 from './img/jachty/Cruisers Yachts 390 Sport Coupe 2008 - 169 000 Euro brutto/Cruisers 390 (20).jpg'

const Yacht6 = () => {

    const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24]

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
                    <h1>Cruiers Yachts 390 Sport Coupe</h1>
                    <p><span className="bold">Długość:</span> 12,20 m</p>
                    <p><span className="bold">Szerokość:</span> 4,00 m</p>
                    <p><span className="bold">Napęd:</span> 2 x Volvo Penta IPS 500 (2 x 370 KM), IPS</p>
                    <p><span className="bold">Rok produkcji:</span> 2008</p>
                    <p><span className="bold">Przebieg:</span> 560</p>
                    <p><span className="bold">Miejsce postoju:</span> Chorwacja</p>
                </div>
                <p>Jacht zadbany i na bieżąco serwisowany. Duża platforma rufowa i obszerny kokpit pozwalają idealnie wykorzystywać czas na wodzie. Bogate wyposażenie i niski przebieg gwarantują długotrwałe i bezproblemowe użytkowanie.</p>
                <p className="price">Cena: 169 000 Euro brutto (umowa kupna / sprzedaży)</p>
                <p><span className="bold">Wyposażenie jachtu m.in.:</span></p>
                <ul>
                    <li>Autopilot</li>
                    <li>Głębokościomierz</li>
                    <li>Radio DSC z VHF</li>
                    <li>Joystick do manewrów Volvo Penta IPS</li>
                    <li>Radar</li>
                    <li>Elektryczna wciągarka kotwicy z kotwicą </li>
                    <li>Nowy komplet akumulatorów</li>
                    <li>Automatyczny system gaśniczy</li>
                    <li>Klimatyzacja z ogrzewaniem</li>
                    <li>Centralny system odkurzania</li>
                    <li>TV z anteną naziemną</li>
                    <li>DVD</li>
                    <li>Zestaw audio z subwooferem</li>
                    <li>Lodówka</li>
                    <li>Zamrażarka</li>
                    <li>Kuchenka mikrofalowa</li>
                    <li>Kostkarka w kokpicie</li>
                    <li>Plandeka kokpitu</li>
                    <li>Materace do opalania na dziobie</li>
                    <li>Prysznic na pokładzie</li>
                    <li>Stolik w kokpicie</li>
                    <li>Drewno teakowe na podłodze w kokpicie i platformie rufowej</li>
                </ul>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Yacht6
