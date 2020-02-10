import React from 'react'
import './Main.scss';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/glowna/main (9).JPG';
import img2 from './img/glowna/main (11).jpg';
import img3 from './img/glowna/main (8).jpg';
import img4 from './img/glowna/main (12).jpg';

import img5 from './img/glowna/main (1).jpeg';
import img6 from './img/glowna/main (2).jpg';
import img7 from './img/glowna/main (4).jpg';
import img8 from './img/glowna/main (6).jpg';

import img9 from './img/glowna/main (3).jpg';
import img10 from './img/glowna/main (5).jpg';
import img11 from './img/glowna/main (7).jpg';
import img12 from './img/glowna/main (10).JPG';

const Main = () => {
    return (
        <div className="main">
            <div className="carousel">
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
                    <Carousel.Item>
                        <img src={img4} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1>VMARINE – All About Yachts</h1>
            <p>Firma VMARINE zajmuje się kompleksową obsługą łodzi i jachtów motorowych na terenie Polski oraz Europy. Sprzedaż,  obsługa, serwis, transport, czarter i przeprowadzanie jachtów nie mają dla Nas tajemnic. Poza pełną obsługą jednostek pływających, jesteśmy wyłącznym dystrybutorem na terenie Polski uznanych na całym świecie bezprzewodowych systemów sterowania jachtami dockmate oraz najnowocześniejszych skuterów podwodnych Havospark Aquajet H2 przeznaczonych zarówno dla amatorów zabaw na i pod wodą jak i dla profesjonalnych nurków czy też ratowników.</p>
            <div className="carousel">
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img src={img9} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img10} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img11} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img12} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <p>Wszystkie używane jachty w naszej ofercie znamy „od podszewki” co jest gwarancją zadowolenia i satysfakcji ich nowych nabywców, których przybywa  z roku na rok. </p>
            <p>Pod marką PremiumYachts promujemy indywidualne rejsy na luksusowych jachtach motorowych na wodach Zatoki Gdańskiej oraz w Chorwacji. Jeżeli chcesz spędzić niezapomniane chwile na wodzie, wakacje na jachcie, poznać nowe miejsca i miło spędzić czas na luksusowym jachcie motorowym to zapraszamy do kontaktu. Do każdego zapytania podchodzimy indywidualnie aby jak najlepiej sprostać postawionym nam wymaganiom. </p>
            <div className="carousel">
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img src={img5} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img6} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img7} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img8} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
                <div className="contact">
                    <h2>Serdecznie zapraszamy do kontaktu!</h2>
                    <p>+48 692 780 074</p>
                    <p>info@vmarine.pl</p>
                </div>
            </div>
        </div>
    )
}

export default Main
