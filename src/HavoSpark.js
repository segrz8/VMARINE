import React from 'react'
import './HavoSpark.scss';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/aquajet foto/Logo/Havospark logo(1).jpg';

import img1 from './img/aquajet foto/H2 Bali image/H2-1.jpg';
import img2 from './img/aquajet foto/H2 Bali image/H2-2.jpg';
import img3 from './img/aquajet foto/H2 Bali image/H2-4.jpg';
import img4 from './img/aquajet foto/H2 Bali image/H2-5.jpg';
import img5 from './img/aquajet foto/H2 Bali image/H2-7.jpg';

import img6 from './img/aquajet foto/White Photos/6ioujkjkhgrt.jpg';
import img7 from './img/aquajet foto/White Photos/7fasfjkkgiui.jpg';

import img8 from './img/aquajet foto/White Photos/002white 1 (new logo).215.png';
import img9 from './img/aquajet foto/White Photos/002white(new logo).213.png';
import img10 from './img/aquajet foto/White Photos/004bule(new logo).217.png';

// import img11 from './img/aquajet foto/Photos - Average Quality/';

const HavoSpark = () => {
    return (
        <div className="havospark">
            <h1>VMARINE – All About Yachts</h1>
            <p>Wyłączny dealer skuterów Havospark Aquajet w Polsce</p>
            <div className="logo">
                <img src={logo} alt="havospark logo" />
            </div>
            <p>AquaJet Dive H2 to zdobywający niebywałą popularność na całym świecie skuter podwodny przeznaczony do rekreacji, nurkowania i aktywnego spędzenia czasu na i pod wodą.
Skuter łączy w sobie nowoczesną technologię i inteligentny design gwarantujące wspaniałą i bezpieczną zabawę. Hydrodynamiczny kształt skrzydeł zapewnia doskonała sterowność i maksymalną prędkość pod wodą przekraczająca 12 km/h.</p>
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
                    <Carousel.Item>
                        <img src={img5} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <p>Havo Spark AquaJet Dive H2 przeznaczony jest dla wszystkich osób chcących aktywnie spędzać czas w wodzie. Dla nurków, pływaków, freediverów jak i wszystkich amatorów wodnych zabaw. Obsługa urządzenia odbywa się wyłącznie za pomocą dwóch przycisków. Jeden uruchamia urządzenie, a drugi pozwala na regulację prędkości pomiędzy trzema biegami. Sterowanie na boki, do góry i w dół odbywa się dzięki ruchom ciała przez co obsługa urządzenia jest bardzo prosta i intuicyjna. Dzięki dużej wyporności urządzenie samo utrzymuje się na wodzie i pozwala bardzo szybko wynurzyć się na powierzchnię. </p>
            <div className="havo">
                <img src={img6} alt="" />
            </div>
            <div className="havo">
                <img src={img7} alt="" />
            </div>
            <div className="carousel">
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img src={img8} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img9} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img10} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <p>Projekt skutera AquaJet Dive H2  powstał na bazie projektów samolotów i dzięki opatentowanym skrzydłom skuter ma bardzo dobry balans, stabilność i jest bardzo sterowny.</p>
        </div>
    )
}

export default HavoSpark
