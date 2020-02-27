import React from 'react'
import './About.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/glowna/main(9).JPG';
import img1s from './img/glowna/main(9)s.JPG';
import img2 from './img/glowna/main(11).jpg';
import img2s from './img/glowna/main(11)s.jpg';
import img3 from './img/glowna/main(8).jpg';
import img3s from './img/glowna/main(8)s.jpg';
import img4 from './img/glowna/main(12).jpg';
import img4s from './img/glowna/main(12)s.jpg';

import img5 from './img/glowna/main(3).jpg';
import img5s from './img/glowna/main(3)s.jpg';
import img6 from './img/glowna/main(5).jpg';
import img6s from './img/glowna/main(5)s.jpg';
import img7 from './img/glowna/main(7).jpg';
import img7s from './img/glowna/main(7)s.jpg';
import img8 from './img/glowna/main(10).JPG';
import img8s from './img/glowna/main(10)s.JPG';

const Main = () => {

    const imgSet1 = [
        { id: 1, path: img1, pathS: img1s, },
        { id: 2, path: img2, pathS: img2s, },
        { id: 3, path: img3, pathS: img3s, },
        { id: 4, path: img4, pathS: img4s, },
    ]

    const imgSet2 = [
        { id: 1, path: img5, pathS: img5s, },
        { id: 2, path: img6, pathS: img6s, },
        { id: 3, path: img7, pathS: img7s, },
        { id: 4, path: img8, pathS: img8s, },
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

    return (
        <div className="main">
            <div className="flex1">
                <div className="carousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems1}
                    </Carousel>
                </div>
                <div className="text1">
                    <h1>VMARINE – All About Yachts</h1>
                    <p>Firma VMARINE zajmuje się kompleksową obsługą łodzi i jachtów motorowych na terenie Polski oraz Europy. Sprzedaż,  obsługa, serwis, transport, czarter i przeprowadzanie jachtów nie mają dla Nas tajemnic. Poza pełną obsługą jednostek pływających, jesteśmy wyłącznym dystrybutorem na terenie Polski uznanych na całym świecie bezprzewodowych systemów sterowania jachtami dockmate oraz najnowocześniejszych skuterów podwodnych Havospark Aquajet H2 przeznaczonych zarówno dla amatorów zabaw na i pod wodą jak i dla profesjonalnych nurków czy też ratowników.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel orderCarousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems2}
                    </Carousel>
                </div>
                <div className="text1 orderText">
                    <p>Wszystkie używane jachty w naszej ofercie znamy „od podszewki” co jest gwarancją zadowolenia i satysfakcji ich nowych nabywców, których przybywa  z roku na rok.</p>
                    <p>Pod marką PremiumYachts promujemy indywidualne rejsy na luksusowych jachtach motorowych na wodach Zatoki Gdańskiej oraz w Chorwacji. Jeżeli chcesz spędzić niezapomniane chwile na wodzie, wakacje na jachcie, poznać nowe miejsca i miło spędzić czas na luksusowym jachcie motorowym to zapraszamy do kontaktu. Do każdego zapytania podchodzimy indywidualnie aby jak najlepiej sprostać postawionym nam wymaganiom.</p>
                </div>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Main
