import React from 'react'
import './Yacht.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (28).JPG'
import img2 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (43).JPG'
import img3 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman60ht(22).JPG'
import img4 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (23).JPG'
import img5 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (26).JPG'
import img6 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (27).JPG'
import img7 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (1).JPG'
import img8 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (20).JPG'
import img9 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (21).JPG'
import img10 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (29).JPG'
import img11 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (30).JPG'
import img12 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (31).JPG'
import img13 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (32).JPG'
import img14 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (33).JPG'
import img15 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (34).JPG'
import img16 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (35).JPG'
import img17 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (36).JPG'
import img18 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (37).JPG'
import img19 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (38).JPG'
import img20 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (39).JPG'
import img21 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (40).JPG'
import img22 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (41).JPG'
import img23 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (42).JPG'
import img24 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (44).jpg'
import img25 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (45).jpg'
import img26 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (46).jpg'
import img27 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (47).JPG'
import img28 from './img/jachty/Cayman 60 HT 2011 - 460 000 Euro brutto/cayman 60 ht (48).JPG'

const Yacht5 = () => {

    const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28]

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
                    <h1>Cayman 60 HT</h1>
                    <p><span className="bold">Długość:</span> 19,50 m</p>
                    <p><span className="bold">Szerokość:</span> 5,05 m</p>
                    <p><span className="bold">Napęd:</span> 2 x MAN V10 (2 x 1000 KM)</p>
                    <p><span className="bold">Rok produkcji:</span> 2011</p>
                    <p><span className="bold">Przebieg:</span> 1115</p>
                    <p><span className="bold">Miejsce postoju:</span> Chorwacja</p>
                </div>
                <p>Jacht od pierwszego właściciela w kolorze na specjalne zamówienie (biały krem). Jacht przygotowany do sezonu. W 2019 roku jednostka przeszła kompletne odświeżenie i serwisy. Nowy antyfouling, polerka,  serwis silników, wałów, klimatyzacji, generatora oraz odsalarki. Całe wyposażenie sprawne i bez śladów zniszczeń. Jacht godny polecenia!</p>
                <p className="price">Cena: 460 000 Euro brutto (umowa kupna / sprzedaży)</p>
                <p><span className="bold">Wyposażenie jachtu m.in.:</span></p>
                <ul>
                    <li>Autopilot Raymarine</li>
                    <li>Licznik wysunięcia łańcucha</li>
                    <li>Ploter GPS Raymarine E120</li>
                    <li>Kompas</li>
                    <li>Radio VHF z DSC</li>
                    <li>Elektroniczne manetki</li>
                    <li>Wskaźnik położenia steru</li>
                    <li>Klimatyzacja z ogrzewaniem</li>
                    <li>Generator</li>
                    <li>Odsalarka do wody</li>
                    <li>Hydrauliczny trap na rufie</li>
                    <li>Ładowarka do akumulatora x2</li>
                    <li>Dwa kabestany na rufie</li>
                    <li>Kotwica 30kg ze stali nierdzewnej + 80 m łańcucha</li>
                    <li>Komplet 19 nowych akumulatorów (2019)</li>
                    <li>Dziobowy ster strumieniowy</li>
                    <li>Rufowy ster strumieniowy</li>
                    <li>Kabestany dziobowe</li>
                    <li>Hydrauliczne trym klapy</li>
                    <li>Elektrycznie otwierany HardTop</li>
                    <li>Elektrycznie opuszczana i podnoszona platforma</li>
                    <li>Inwerter napięcia 12V – 230V</li>
                    <li>Ponton 300 cm z silnikiem 15 KM</li>
                    <li>Ekspres do kawy</li>
                    <li>Lodówka z zamrażarką w kabinie</li>
                    <li>Lodówka w kokpicie</li>
                    <li>Kuchenka</li>
                    <li>Zmywarka do naczyń</li>
                    <li>Pralka</li>
                    <li>Grill</li>
                    <li>Elektrycznie rozkładana markiza w kokpicie</li>
                    <li>Materace do opalania na dziobie I na rufie</li>
                    <li>Prysznic na rufie</li>
                    <li>Drewno teakowe na podłodze w kokpicie i na platformie rufowej (2017)</li>
                </ul>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Yacht5
