import React from 'react'
import './Poland.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/premiumYachts.jpg'

import img1 from './img/POLSKA/rejsy polska (1).jpg'
import img2 from './img/POLSKA/rejsy polska (2).jpeg'
import img3 from './img/POLSKA/rejsy polska (13).jpg'

import img4 from './img/POLSKA/rejsy polska (2).jpg'
import img5 from './img/POLSKA/rejsy polska (3).jpg'
import img6 from './img/POLSKA/rejsy polska (8).jpg'

import img7 from './img/POLSKA/rejsy polska (5).jpg'
import img8 from './img/POLSKA/rejsy polska (6).jpg'
import img9 from './img/POLSKA/rejsy polska (7).jpg'

const Poland = () => {
    return (
        <div className="poland">
            <h1>INDYWIDUALNE REJSY NA LUKSUSOWYCH JACHTACH MOTOROWYCH</h1>
            <div className="flex1">
                <div className="logo">
                    <img src={logo} alt="premium yachts logo" />
                </div>
                <div className="text1">
                    <p>Marka Premium Yachts powstała w 2010 roku i od tego czasu cieszy się bardzo dużą popularności wśród klientów z całego świata. Sezonową bazą naszej działalności jest Marina w Sopocie zlokalizowany na końcu sopockiego molo. Jest to idealne miejsce na rozpoczęcie morskiej przygody oraz wspaniała baza służąca jako punkt wyjściowy do innych atrakcji. Rejsy na naszych luksusowych jachtach to niezapomniane przeżycie gwarantujące moc pozytywnych wrażeń . Do każdego zapytania podchodzimy indywidualnie, a dzięki współpracy z firmami eventowymi, hotelami, restauracjami i klubami jesteśmy w stanie zorganizować pobyt w Trójmieście szyty na miarę zgodnie z Państwa wymagania. Planujesz wizytę w Trójmieście i chcesz uatrakcyjnić swój pobyt? Nie ma lepszego pomysłu niż skontaktować się z nami i wyruszyć w rejs pełen zabawy i niezapomnianych emocji. Zapraszamy!</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel orderCarousel">
                    <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                            <img src={img1} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img2} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="text1">
                    <h2>Organizujemy:</h2>
                    <ul>
                        <li>rejsy rodzinne po Zatoce Gdańskiej</li>
                        <li>rejsy indywidualnie dopasowane do życzeń Wynajmującego</li>
                        <li>rejsy na romantyczne zachody słońca przy molo w Sopocie</li>
                        <li>imprezy okolicznościowe (urodziny, wieczory panieńskie, rocznice)</li>
                        <li>spotkania biznesowe w luksusowej, komfortowej i dyskretnej atmosferze</li>
                        <li>sesje zdjęciowe, reklamowe i marketingowe</li>
                        <li>eventy firmowe i imprezy integracyjne</li>
                        <li>akcje promocyjne</li>
                    </ul>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel">
                    <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                            <img src={img4} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img5} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img6} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="text1">
                    <p>Gwarantujemy indywidualne podejście do każdego zlecenia!
        Możliwość czarteru na godziny, dni, tygodnie!
Możliwość personalizacji jednostek w celach promocyjnych!</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel orderCarousel">
                    <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                            <img src={img7} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img8} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img9} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="text1">
                    <p>Gwarantujemy wspaniałą zabawę i niezapomniany klimat wspólnych rejsów pozostających w pamięci na całe życie. Zapraszamy na pokład podczas rodzinnych wycieczek po Zatoce, imprez okolicznościowych, wieczorów panieńskich, spotkań biznesowych, rejsów firmowych oraz eventów, których w tym sezonie nie będzie brakować w Trójmieście.</p>
                </div>
            </div>
            <ContactBottom />
        </div >
    )
}

export default Poland
