import React from 'react'
import './Poland.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/premiumYachts.jpg'

import img1 from './img/POLSKA/rejsypolska(1).jpg'
import img1s from './img/POLSKA/rejsypolska(1)s.jpg'
import img2 from './img/POLSKA/rejsypolska(2).jpeg'
import img2s from './img/POLSKA/rejsypolska(2)s.jpeg'
import img3 from './img/POLSKA/rejsypolska(13).jpg'
import img3s from './img/POLSKA/rejsypolska(13)s.jpg'

import img4 from './img/POLSKA/rejsypolska(2).jpg'
import img4s from './img/POLSKA/rejsypolska(2)s.jpg'
import img5 from './img/POLSKA/rejsypolska(3).jpg'
import img5s from './img/POLSKA/rejsypolska(3)s.jpg'
import img6 from './img/POLSKA/rejsypolska(8).jpg'
import img6s from './img/POLSKA/rejsypolska(8)s.jpg'

import img7 from './img/POLSKA/rejsypolska(5).jpg'
import img7s from './img/POLSKA/rejsypolska(5)s.jpg'
import img8 from './img/POLSKA/rejsypolska(6).jpg'
import img8s from './img/POLSKA/rejsypolska(6)s.jpg'
import img9 from './img/POLSKA/rejsypolska(7).jpg'
import img9s from './img/POLSKA/rejsypolska(7)s.jpg'

const Poland = () => {

    const imgSet1 = [
        { id: 1, path: img1, pathS: img1s, },
        { id: 2, path: img2, pathS: img2s, },
        { id: 3, path: img3, pathS: img3s, },
    ]

    const carouselItems1 = imgSet1.map(item => {
        return (
            <Carousel.Item key={item.id}>
                <picture>
                    <source media="(min-width: 461px)" srcSet={item.path} />
                    <img src={item.pathS} className="d-block w-100" alt="..." />
                </picture>
            </Carousel.Item>
        )
    })

    const imgSet2 = [
        { id: 1, path: img4, pathS: img4s, },
        { id: 2, path: img5, pathS: img5s, },
        { id: 3, path: img6, pathS: img6s, },
    ]

    const carouselItems2 = imgSet2.map(item => {
        return (
            <Carousel.Item key={item.id}>
                <picture>
                    <source media="(min-width: 461px)" srcSet={item.path} />
                    <img src={item.pathS} className="d-block w-100" alt="..." />
                </picture>
            </Carousel.Item>
        )
    })

    const imgSet3 = [
        { id: 1, path: img7, pathS: img7s, },
        { id: 2, path: img8, pathS: img8s, },
        { id: 3, path: img9, pathS: img9s, },
    ]

    const carouselItems3 = imgSet3.map(item => {
        return (
            <Carousel.Item key={item.id}>
                <picture>
                    <source media="(min-width: 461px)" srcSet={item.path} />
                    <img src={item.pathS} className="d-block w-100" alt="..." />
                </picture>
            </Carousel.Item>
        )
    })

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
                        {carouselItems1}
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
                        {carouselItems2}
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
                        {carouselItems3}
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
