import React from 'react'
import './Yacht.scss';

import img1 from './img/jachty/Azimut 45 Fly/20190329_160813-1080x675.jpg'
import img2 from './img/jachty/Azimut 45 Fly/IMG_7739.JPG'
import img3 from './img/jachty/Azimut 45 Fly/IMG_7740.JPG'
import img4 from './img/jachty/Azimut 45 Fly/20190329_160824.jpeg'
import img5 from './img/jachty/Azimut 45 Fly/IMG_7732.JPG'
import img6 from './img/jachty/Azimut 45 Fly/20190329_161053.jpeg'
import img7 from './img/jachty/Azimut 45 Fly/IMG_7728.JPG'
import img8 from './img/jachty/Azimut 45 Fly/IMG_7729.JPG'
import img9 from './img/jachty/Azimut 45 Fly/IMG_7730.JPG'
import img10 from './img/jachty/Azimut 45 Fly/IMG_7731.JPG'
import img11 from './img/jachty/Azimut 45 Fly/IMG_7733.JPG'
import img12 from './img/jachty/Azimut 45 Fly/IMG_7734.JPG'
import img13 from './img/jachty/Azimut 45 Fly/IMG_7735.JPG'
import img14 from './img/jachty/Azimut 45 Fly/IMG_7736.JPG'
import img15 from './img/jachty/Azimut 45 Fly/IMG_7738.JPG'
import img16 from './img/jachty/Azimut 45 Fly/20190329_154834.jpeg'
import img17 from './img/jachty/Azimut 45 Fly/20190329_154850.jpeg'
import img18 from './img/jachty/Azimut 45 Fly/20190329_161112.jpeg'
import img19 from './img/jachty/Azimut 45 Fly/IMG_7709.JPG'
import img20 from './img/jachty/Azimut 45 Fly/IMG_7710.JPG'
import img21 from './img/jachty/Azimut 45 Fly/IMG_7711.JPG'
import img22 from './img/jachty/Azimut 45 Fly/IMG_7712.JPG'
import img23 from './img/jachty/Azimut 45 Fly/IMG_7713.JPG'
import img24 from './img/jachty/Azimut 45 Fly/IMG_7714.JPG'
import img25 from './img/jachty/Azimut 45 Fly/IMG_7715.JPG'
import img26 from './img/jachty/Azimut 45 Fly/IMG_7716.JPG'
import img27 from './img/jachty/Azimut 45 Fly/IMG_7717.JPG'
import img28 from './img/jachty/Azimut 45 Fly/IMG_7718.JPG'
import img29 from './img/jachty/Azimut 45 Fly/IMG_7719.JPG'
import img30 from './img/jachty/Azimut 45 Fly/20190329_154839.jpeg'
import img31 from './img/jachty/Azimut 45 Fly/IMG_7720.JPG'
import img32 from './img/jachty/Azimut 45 Fly/IMG_7721.JPG'
import img33 from './img/jachty/Azimut 45 Fly/IMG_7722.JPG'
import img34 from './img/jachty/Azimut 45 Fly/IMG_7723.JPG'
import img35 from './img/jachty/Azimut 45 Fly/IMG_7724.JPG'
import img36 from './img/jachty/Azimut 45 Fly/IMG_7725.JPG'
import img37 from './img/jachty/Azimut 45 Fly/IMG_7726.JPG'
import img38 from './img/jachty/Azimut 45 Fly/IMG_7727.JPG'
import img39 from './img/jachty/Azimut 45 Fly/IMG_7737.JPG'

const Yacht1 = () => {

    const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39]

    const list = photos.map(photo =>
        <div className="photo">
            <img src={photo} alt="yacht" />
        </div>
    )

    return (
        <div className="yacht">
            <div className="gallery">
                {list}
            </div>
            <div className="yacht-text">
                <div className="specification">
                    <h1>Azimut 45 FLY</h1>
                    <p><span className="bold">Długość:</span> 13,78 m</p>
                    <p><span className="bold">Szerokość:</span> 4,31 m</p>
                    <p><span className="bold">Napęd:</span> 2 x Cummins QSB 5.9 , 2 x 480 KM</p>
                    <p><span className="bold">Rok produkcji:</span> 2011</p>
                    <p><span className="bold">Przebieg:</span> 375 motogodzin</p>
                    <p><span className="bold">Miejsce postoju:</span> Chorwacja</p>
                </div>
                <p>Do sprzedania włoski jacht motorowy Azimut 45 Fly. Jacht w posiadaniu pierwszego właściciela i ciągle ulepszany. Hydraulicznie opuszczana platforma rufowa oraz funkcjonalny mostek to największe atuty tego jachtu. Jacht zadbany, trzymany w bardzo dobrym stanie, na bieżąco obsługiwany i serwisowany. </p>
                <p className="price">Cena: 375 000 Euro brutto, VAT zapłacony (umowa kupna / sprzedaży)</p>
                <p><span className="bold">Wyposażenie jachtu m.in.:</span></p>
                <ul>
                    <li>Autopilot</li>
                    <li>2 plotery GPS</li>
                    <li>Licznik wysunięcia łańcucha</li>
                    <li>Kompas</li>
                    <li>Głębokościomierz</li>
                    <li>Radio VHF z DSC</li>
                    <li>Joystick do manewrów w porcie (dwa silniki + dwa stery)</li>
                    <li>Kotwica ze stali nierdzewnej</li>
                    <li>Ładowarka akumulatora</li>
                    <li>Elektryczna wciągarka kotwicy</li>
                    <li>Klimatyzacja</li>
                    <li>Generator</li>
                    <li>Hydrauliczny trap na rufie</li>
                    <li>Hydraulicznie podnoszona i opuszczana platforma rufowa (2016)</li>
                    <li>3 x TV LED Samsug</li>
                    <li>DVD</li>
                    <li>Radio z CD</li>
                    <li>Dekoder TV SAT</li>
                    <li>Antena satelitarna</li>
                    <li>Lodówka z zamrażarką</li>
                    <li>Lodówka w kokpicie</li>
                    <li>Zmywarka do naczyń</li>
                    <li>Daszek Bimini Top na mostku</li>
                    <li>Plandeka kokpitu i mostka</li>
                    <li>Plandeki na siedzenia</li>
                    <li>Zasłony przeciwsłoneczne do okien w kokpicie</li>
                    <li>Ponton Lomax 270 XL z silnikiem 8 KM</li>
                </ul>
            </div>
        </div>
    )
}

export default Yacht1
