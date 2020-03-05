import React from 'react'
import './Yacht.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/jachty/E33 2010/e 33 2010 (11).jpg'
import img2 from './img/jachty/E33 2010/e 33 2010 (12).jpg'
import img3 from './img/jachty/E33 2010/e 33 2010 (13).jpg'
import img4 from './img/jachty/E33 2010/e33 new.jpg'
import img5 from './img/jachty/E33 2010/e332010(10).jpg'
import img6 from './img/jachty/E33 2010/e 33 2010 (8).JPG'
import img7 from './img/jachty/E33 2010/e 33 2010 (7).JPG'
import img8 from './img/jachty/E33 2010/e 33 2010 (9).jpg'
import img9 from './img/jachty/E33 2010/e 33 2010 (6).JPG'
import img10 from './img/jachty/E33 2010/e 33 2010 (1).jpg'
import img11 from './img/jachty/E33 2010/e 33 2010 (2).jpg'
import img12 from './img/jachty/E33 2010/e 33 2010 (3).jpg'
import img13 from './img/jachty/E33 2010/e 33 2010 (4).JPG'
import img14 from './img/jachty/E33 2010/e 33 2010 (5).JPG'

const Yacht2 = () => {

    const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

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
                    <h1>Cranchi Endurance 33</h1>
                    <p><span className="bold">Długość:</span> 10,25 m</p>
                    <p><span className="bold">Szerokość:</span> 3,49 m</p>
                    <p><span className="bold">Napęd:</span> 2 x Volvo Penta D4 diesel (2 x 300 KM) , EVC, EC, przekładnie DP</p>
                    <p><span className="bold">Rok produkcji:</span> 2010</p>
                    <p><span className="bold">Przebieg:</span> 375 motogodzin</p>
                </div>
                <p>Do sprzedania włoski jacht motorowy Endurance 33 z prestiżowej, włoskiej stoczni Cranchi. Jacht zakupiony od polskiego dealera, regularnie serwisowany i konserwowany. Jednostka do obejrzenia w Trójmieście, zarejestrowana w Polsce, bez żadnych obciążeń finansowych, faktura VAT 23 %. Jest to bardzo funkcjonalna łódź sportowo - turystyczna o bardzo dobrych właściwościach nautycznych i nowoczesnym designie. Obszerny kokpit z dużym materacem do opalania i elektrycznie chowanym w podłodze stolikiem, wygodna kabina zapewniająca miejsce do spania dla 4/5 osób oraz łazienka z oddzielną kabiną prysznicową to największe atuty tej jednostki. Zapraszam do zakupu!</p>
                <p className="price">Cena: 454 500 PLN netto // 559 000 PLN brutto (FAKTURA VAT 23%)</p>
                <p><span className="bold">Wyposażenie jachtu m.in.:</span></p>
                <ul>
                    <li>dwa silniki diesla z zamkniętym obiegiem chłodzenia Volvo Penta D4 o łącznej mocy 600 KM połączone z przekładniami DP</li>
                    <li>webasto (ogrzewanie na diesla)</li>
                    <li>sportowy spojler z daszkiem bimini top</li>
                    <li>pakiet plandek do daszku bimini top</li>
                    <li>plandeka postojowa</li>
                    <li>materace do opalania na dziobie</li>
                    <li>materac do opalania na rufie</li>
                    <li>drewno teakowe na podłodze w kokpicie</li>
                    <li>drewno teakowe na platformie rufowej</li>
                    <li>system elektryczny 230V z ładowarką akumulatora</li>
                    <li>dziobowy ster strumieniowy</li>
                    <li>szerokie przejścia boczne</li>
                    <li>wciągarka kotwicy z łańcuchem i kotwicą ze stali nierdzewnej</li>
                    <li>elektrycznie chowany w podłodze stolik w kokpicie</li>
                    <li>gps raymarine</li>
                    <li>raymarine tridata (prędkość, temperatura wody, głębokość)</li>
                    <li>hydrauliczne wspomaganie kierownicy</li>
                    <li>elektroniczna manetka - EV</li>
                    <li>system elektronicznej kontroli pracy silników - EVC</li>
                    <li>lodówka w kokpicie</li>
                    <li>lodówka w kabinie</li>
                    <li>kuchenka gazowa</li>
                    <li>kuchenka mikrofalowa</li>
                    <li>łazienka z oddzielną kabiną prysznicową</li>
                    <li>toaleta ze zbiornikiem na fekalia i maceratorem</li>
                    <li>zbiornik na wodę 250 l wraz z pompą ciśnieniową</li>
                    <li>umywalka w kokpicie</li>
                    <li>drewniana podłoga w kabinie</li>
                    <li>plandeka zimowa</li>
                    <li>fabrycznie dedykowane łoże postojowe</li>
                </ul>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Yacht2
