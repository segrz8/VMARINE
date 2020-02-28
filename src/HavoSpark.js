import React from 'react'
import './HavoSpark.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/aquajet foto/Logo/Havospark logo(1).jpg';
import logos from './img/aquajet foto/Logo/Havospark logo(1)s.jpg';
import logo2 from './img/aquajet foto/Logo/logo_white.jpg';
import logo2s from './img/aquajet foto/Logo/logo_whites.jpg';

import img1 from './img/aquajet foto/H2 Bali image/H2-1.jpg';
import img1s from './img/aquajet foto/H2 Bali image/H2-1s.jpg';
import img2 from './img/aquajet foto/H2 Bali image/H2-2.jpg';
import img2s from './img/aquajet foto/H2 Bali image/H2-2s.jpg';
import img3 from './img/aquajet foto/H2 Bali image/H2-4.jpg';
import img3s from './img/aquajet foto/H2 Bali image/H2-4s.jpg';
import img4 from './img/aquajet foto/H2 Bali image/H2-5.jpg';
import img4s from './img/aquajet foto/H2 Bali image/H2-5s.jpg';
import img5 from './img/aquajet foto/H2 Bali image/H2-7.jpg';
import img5s from './img/aquajet foto/H2 Bali image/H2-7s.jpg';

import img6 from './img/aquajet foto/White Photos/6ioujkjkhgrt.jpg';
import img7 from './img/aquajet foto/White Photos/7fasfjkkgiui.jpg';

import img8 from './img/aquajet foto/White Photos/002white.215.png';
import img8s from './img/aquajet foto/White Photos/002white.215s.png';
import img9 from './img/aquajet foto/White Photos/002white(newlogo).213.png';
import img9s from './img/aquajet foto/White Photos/002white(newlogo).213s.png';
import img10 from './img/aquajet foto/White Photos/004bule(newlogo).217.png';
import img10s from './img/aquajet foto/White Photos/004bule(newlogo).217s.png';

import img11 from './img/aquajet foto/Photos - Average Quality/1(1).jpg';
import img11s from './img/aquajet foto/Photos - Average Quality/1(1)s.jpg';
import img12 from './img/aquajet foto/Photos - Average Quality/1(2).jpg';
import img12s from './img/aquajet foto/Photos - Average Quality/1(2)s.jpg';
import img13 from './img/aquajet foto/Photos - Average Quality/1(3).jpg';
import img13s from './img/aquajet foto/Photos - Average Quality/1(3)s.jpg';
import img14 from './img/aquajet foto/Photos - Average Quality/1(13).jpg';
import img14s from './img/aquajet foto/Photos - Average Quality/1(13)s.jpg';
import img15 from './img/aquajet foto/Photos - Average Quality/1(42).jpg';
import img15s from './img/aquajet foto/Photos - Average Quality/1(42)s.jpg';
import img16 from './img/aquajet foto/Photos - Average Quality/1(45).jpg';
import img16s from './img/aquajet foto/Photos - Average Quality/1(45)s.jpg';
import img17 from './img/aquajet foto/Photos - Average Quality/1(62).jpg';
import img17s from './img/aquajet foto/Photos - Average Quality/1(62)s.jpg';

import img18 from './img/aquajet foto/ulotka1.jpg';
import img19 from './img/aquajet foto/ulotka2.jpg';

const HavoSpark = () => {

    const imgSet1 = [
        { id: 1, path: img1, pathS: img1s, },
        { id: 2, path: img2, pathS: img2s, },
        { id: 3, path: img3, pathS: img3s, },
        { id: 4, path: img4, pathS: img4s, },
        { id: 5, path: img5, pathS: img5s, },
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
        { id: 1, path: img8, pathS: img8s, },
        { id: 2, path: img9, pathS: img9s, },
        { id: 3, path: img10, pathS: img10s, },
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
        { id: 1, path: img11, pathS: img11s, },
        { id: 2, path: img12, pathS: img12s, },
        { id: 3, path: img13, pathS: img13s, },
        { id: 4, path: img14, pathS: img14s, },
        { id: 5, path: img15, pathS: img15s, },
        { id: 6, path: img16, pathS: img16s, },
        { id: 7, path: img17, pathS: img17s, },
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
        <div className="havospark">
            <div className="heading">
                <h1>VMARINE – All About Yachts</h1>
                <p>Wyłączny dealer skuterów Havospark Aquajet w Polsce</p>
            </div>
            <div className="flex1">
                <div className="logo">
                    <picture>
                        <source media="(min-width: 461px)" srcSet={logo} />
                        <img src={logos} className="d-block w-100" alt="..." />
                    </picture>
                </div>
                <div className="text1">
                    <p>AquaJet Dive H2 to zdobywający niebywałą popularność na całym świecie skuter podwodny przeznaczony do rekreacji, nurkowania i aktywnego spędzenia czasu na i pod wodą.
Skuter łączy w sobie nowoczesną technologię i inteligentny design gwarantujące wspaniałą i bezpieczną zabawę. Hydrodynamiczny kształt skrzydeł zapewnia doskonała sterowność i maksymalną prędkość pod wodą przekraczająca 12 km/h.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel orderCarousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems1}
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
                        {carouselItems2}
                    </Carousel>
                </div>
                <div className="text1">
                    <p>Projekt skutera AquaJet Dive H2  powstał na bazie projektów samolotów i dzięki opatentowanym skrzydłom skuter ma bardzo dobry balans, stabilność i jest bardzo sterowny.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel orderCarousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems3}
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
            {/* <div className="flex1"> */}
            {/* <div className="text1"> */}
            <h2>Obejrzyj prezentację skuterów:</h2>
            <div className="links">
                <div className="link1">
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=uKmcPXm7Lqs">Film 1</a></p>
                </div>
                <div className="link2">
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=CXQnYJYFR5Q">Film 2</a></p>
                </div>
            </div>
            {/* </div> */}
            <div className="logo star">
                <picture>
                    <source media="(min-width: 461px)" srcSet={logo2} />
                    <img src={logo2s} className="d-block w-100" alt="..." />
                </picture>
            </div>
            {/* </div> */}
            <ContactBottom />
        </div>
    )
}

export default HavoSpark
