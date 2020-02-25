import React from 'react'
import './HavoSpark.scss';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/aquajet foto/Logo/Havospark logo(1).jpg';
import logo2 from './img/aquajet foto/Logo/logo_white.jpg';

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

import img11 from './img/aquajet foto/Photos - Average Quality/1 (1).jpg';
import img12 from './img/aquajet foto/Photos - Average Quality/1 (2).jpg';
import img13 from './img/aquajet foto/Photos - Average Quality/1 (3).jpg';
import img14 from './img/aquajet foto/Photos - Average Quality/1 (13).jpg';
import img15 from './img/aquajet foto/Photos - Average Quality/1 (42).jpg';
import img16 from './img/aquajet foto/Photos - Average Quality/1 (45).jpg';
import img17 from './img/aquajet foto/Photos - Average Quality/1 (62).jpg';

import img18 from './img/aquajet foto/ulotka1.jpg';
import img19 from './img/aquajet foto/ulotka2.jpg';

const HavoSpark = () => {
    return (
        <div className="havospark">
            <div className="heading">
                <h1>VMARINE – All About Yachts</h1>
                <p>Wyłączny dealer skuterów Havospark Aquajet w Polsce</p>
            </div>
            <div className="flex1">
                <div className="logo">
                    <img src={logo} alt="havospark logo" />
                </div>
                <div className="text1">
                    <p>AquaJet Dive H2 to zdobywający niebywałą popularność na całym świecie skuter podwodny przeznaczony do rekreacji, nurkowania i aktywnego spędzenia czasu na i pod wodą.
Skuter łączy w sobie nowoczesną technologię i inteligentny design gwarantujące wspaniałą i bezpieczną zabawę. Hydrodynamiczny kształt skrzydeł zapewnia doskonała sterowność i maksymalną prędkość pod wodą przekraczająca 12 km/h.</p>
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
                        <Carousel.Item>
                            <img src={img4} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img5} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="text1">
                    <p>Havo Spark AquaJet Dive H2 przeznaczony jest dla wszystkich osób chcących aktywnie spędzać czas w wodzie. Dla nurków, pływaków, freediverów jak i wszystkich amatorów wodnych zabaw. Obsługa urządzenia odbywa się wyłącznie za pomocą dwóch przycisków. Jeden uruchamia urządzenie, a drugi pozwala na regulację prędkości pomiędzy trzema biegami. Sterowanie na boki, do góry i w dół odbywa się dzięki ruchom ciała przez co obsługa urządzenia jest bardzo prosta i intuicyjna. Dzięki dużej wyporności urządzenie samo utrzymuje się na wodzie i pozwala bardzo szybko wynurzyć się na powierzchnię.</p>
                </div>
            </div>
            <div className="two">
                <div className="havo">
                    <img src={img6} alt="" />
                </div>
                <div className="havo">
                    <img src={img7} alt="" />
                </div>
            </div>
            <div className="flex1">
                <div className="carousel contain">
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
                <div className="text1">
                    <p>Projekt skutera AquaJet Dive H2  powstał na bazie projektów samolotów i dzięki opatentowanym skrzydłom skuter ma bardzo dobry balans, stabilność i jest bardzo sterowny.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel orderCarousel">
                    <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                            <img src={img11} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img12} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img13} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img14} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img15} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img16} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img17} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="text1">
                    <p>Dzięki zamontowanemu uchwytowi na aparat, nagrywanie filmów i robienie zdjęć pod wodą jeszcze nigdy nie było tak łatwe i wygodne.</p>
                </div>
            </div>
            <div className="flyers">
                <div className="flyer">
                    <img src={img18} alt="flyer" />
                </div>
                <div className="flyer">
                    <img src={img19} alt="flyer" />
                </div>
            </div>
            <div className="flex1">
                <div className="text1">
                    <h2>A tu można obejrzeć jak system działa w praktyce:</h2>
                    <div className="links">
                        <div className="link1">
                            <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=uKmcPXm7Lqs">Film 1</a></p>
                        </div>
                        <div className="link2">
                            <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=CXQnYJYFR5Q">Film 2</a></p>
                        </div>
                    </div>
                </div>
                <div className="logo hoverstar">
                    <img src={logo2} alt="hoverstar logo" />
                </div>
            </div>
            <div className="contact">
                <h2>Kontakt:</h2>
                <p>+48 692 780 074</p>
                <p>info@vmarine.pl</p>
                <p class="facebook"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/PremiumYachts"><i class="fab fa-facebook-square"></i> Facebook</a></p>
            </div>
        </div>
    )
}

export default HavoSpark
