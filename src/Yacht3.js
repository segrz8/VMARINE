import React from 'react'
import './Yacht.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/jachty/m44 regata/m44 2017 (11).jpg'
import img2 from './img/jachty/m44 regata/m44 2017 (12).jpg'
import img3 from './img/jachty/m44 regata/m44 2017 (13).jpg'
import img4 from './img/jachty/m44 regata/m44 2017 (14).jpg'
import img5 from './img/jachty/m44 regata/m442017(1).jpg'
import img6 from './img/jachty/m44 regata/m44 2017 (17).jpg'
import img7 from './img/jachty/m44 regata/m44 2017 (24).jpeg'
import img8 from './img/jachty/m44 regata/m44 2017 (25).jpeg'
import img9 from './img/jachty/m44 regata/m44 2017 (1).jpeg'
import img10 from './img/jachty/m44 regata/m44 2017 (2).jpeg'
import img11 from './img/jachty/m44 regata/m44 2017 (3).jpeg'
import img12 from './img/jachty/m44 regata/m44 2017 (4).jpeg'
import img13 from './img/jachty/m44 regata/m44 2017 (5).jpeg'
import img14 from './img/jachty/m44 regata/m44 2017 (6).jpeg'
import img15 from './img/jachty/m44 regata/m44 2017 (7).jpeg'
import img16 from './img/jachty/m44 regata/m44 2017 (8).jpeg'
import img17 from './img/jachty/m44 regata/m44 2017 (9).jpeg'
import img18 from './img/jachty/m44 regata/m44 2017 (10).jpeg'
import img19 from './img/jachty/m44 regata/m44 2017 (11).jpeg'
import img20 from './img/jachty/m44 regata/m44 2017 (12).jpeg'
import img21 from './img/jachty/m44 regata/m44 2017 (13).jpeg'
import img22 from './img/jachty/m44 regata/m44 2017 (14).jpeg'
import img23 from './img/jachty/m44 regata/m44 2017 (15).jpeg'
import img24 from './img/jachty/m44 regata/m44 2017 (15).jpg'
import img25 from './img/jachty/m44 regata/m44 2017 (16).jpeg'
import img26 from './img/jachty/m44 regata/m44 2017 (16).jpg'
import img27 from './img/jachty/m44 regata/m44 2017 (17).jpeg'
import img28 from './img/jachty/m44 regata/m44 2017 (18).jpeg'
import img29 from './img/jachty/m44 regata/m44 2017 (19).jpeg'
import img30 from './img/jachty/m44 regata/m44 2017 (20).jpeg'
import img31 from './img/jachty/m44 regata/m44 2017 (21).jpeg'
import img32 from './img/jachty/m44 regata/m44 2017 (22).jpeg'
import img33 from './img/jachty/m44 regata/m44 2017 (23).jpeg'

const Yacht3 = () => {

    const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33]

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
                    <h1>Cranchi M44 HT</h1>
                    <p><span className="bold">Długość:</span> 13,82 m</p>
                    <p><span className="bold">Szerokość:</span> 4,06 m</p>
                    <p><span className="bold">Napęd:</span> 2 x Volvo Penta D6 diesel (2 x 330 KM) , EVC, EC, przekładnie DP</p>
                    <p><span className="bold">Rok produkcji:</span> 2017</p>
                    <p><span className="bold">Przebieg:</span> 470 motogodzin</p>
                </div>
                <p>Do sprzedania włoski jacht motorowy Cranchi M44 HT z prestiżowej, włoskiej stoczni Cranchi. Jacht zakupiony od polskiego dealera, regularnie serwisowany i konserwowany. Jednostka zlokalizowania w Chorwacji, zarejestrowana w Polsce, CESJA LEASINGU.
Jest to bardzo funkcjonalna jacht o bardzo dobrych właściwościach nautycznych i nowoczesnym designie. Obszerny kokpit z dużym materacem do opalania na rufie, materace do opalania na dziobie, bardzo bogate wyposażenie opcjonalne, wygodna kabina zapewniająca miejsce do spania dla 7 osób oraz dwie łazienki to największe atuty tej jednostki. Zapraszam do zakupu!</p>
                <p className="price">Cena: 269 000 Euro netto + 23% VAT (cesja leasingu)</p>
                <p><span className="bold">Wyposażenie jachtu m.in.:</span></p>
                <ul>
                    <li>dwa silniki diesla z zamkniętym obiegiem chłodzenia Volvo Penta D6 o łącznej mocy 660 KM połączone z przekładniami DP</li>
                    <li>klimatyzacja z ogrzewaniem</li>
                    <li>generator prądu 230V</li>
                    <li>dziobowy ster strumieniowy</li>
                    <li>drewno teakowe na platformie rufowej</li>
                    <li>ploter GPS Raymarine a125 (12", dotykowy)</li>
                    <li>radio VHF z DSC</li>
                    <li>elektroniczna manetka</li>
                    <li>hydrauliczne wspomaganie</li>
                    <li>stolik w kokpicie z drewna teakowego konwertowany w materac do opalania</li>
                    <li>tylna plandeka kokpitu</li>
                    <li>system audio Fusion</li>
                    <li>garaż na ponton na rufie</li>
                    <li>ponton robiony na zamówienie z silnikiem Yamaha</li>
                    <li>materace do opalania na dziobie</li>
                    <li>piekarnik</li>
                    <li>płyta elektryczna</li>
                    <li>lodówka</li>
                    <li>system wodny z pompą ciśnieniową</li>
                    <li>system ściekowy ze zbiornikiem i maceratorem</li>
                </ul>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Yacht3
