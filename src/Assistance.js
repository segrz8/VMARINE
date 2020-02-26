import React from 'react'
import './Assistance.scss';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/serwis/20150514_152710.jpg';
import img1s from './img/serwis/20150514_152710s.jpg';
import img2 from './img/serwis/20150517_105100.jpg';
import img2s from './img/serwis/20150517_105100s.jpg';
import img3 from './img/serwis/20150519_095059.jpg';
import img3s from './img/serwis/20150519_095059s.jpg';
import img4 from './img/serwis/20150519_102212.jpg';
import img4s from './img/serwis/20150519_102212s.jpg';
import img5 from './img/serwis/20150604_095533.jpg';
import img5s from './img/serwis/20150604_095533s.jpg';
import img6 from './img/serwis/20150817_143710.jpg';
import img6s from './img/serwis/20150817_143710s.jpg';
import img7 from './img/serwis/20170710_181235.jpg';
import img7s from './img/serwis/20170710_181235s.jpg';

import img8 from './img/serwis/20170713_152855.jpg';
import img8s from './img/serwis/20170713_152855s.jpg';
import img9 from './img/serwis/20171115_123054.jpg';
import img9s from './img/serwis/20171115_123054s.jpg';
import img10 from './img/serwis/20171123_131750.jpg';
import img10s from './img/serwis/20171123_131750s.jpg';
import img11 from './img/serwis/20190329_122146.jpg';
import img11s from './img/serwis/20190329_122146s.jpg';
import img12 from './img/serwis/20190403_165826.jpg';
import img12s from './img/serwis/20190403_165826s.jpg';
import img13 from './img/serwis/20190904_090542.jpg';
import img13s from './img/serwis/20190904_090542s.jpg';
import img14 from './img/serwis/20191211_153657.jpg';
import img14s from './img/serwis/20191211_153657s.jpg';

const Assistance = () => {

    const imgSet1 = [
        { id: 1, path: img1, pathS: img1s, },
        { id: 2, path: img2, pathS: img2s, },
        { id: 3, path: img3, pathS: img3s, },
        { id: 4, path: img4, pathS: img4s, },
        { id: 5, path: img5, pathS: img5s, },
        { id: 6, path: img6, pathS: img6s, },
        { id: 7, path: img7, pathS: img7s, },
    ]

    const imgSet2 = [
        { id: 1, path: img8, pathS: img8s, },
        { id: 2, path: img9, pathS: img9s, },
        { id: 3, path: img10, pathS: img10s, },
        { id: 4, path: img11, pathS: img11s, },
        { id: 5, path: img12, pathS: img12s, },
        { id: 6, path: img13, pathS: img13s, },
        { id: 7, path: img14, pathS: img14s, },
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
        <div className="assistance">
            <div className="flex1">
                <div className="carousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems1}
                    </Carousel>
                </div>
                <div className="text1">
                    <h1>VMARINE – All About Yachts</h1>
                    <p>Firma VMARINE świadczy pełen pakiet usług związanych z eksploatacją, serwisowaniem, transportem, ubezpieczeniem i bieżącą obsługą Waszego jachtu. Dzięki bardzo dużemu doświadczeniu i rozbudowanej sieci kontaktów jesteśmy w stanie zająć się Waszą łódką zarówno w Polsce jak i na terenie całej Europy. Oferujemy profesjonalny SERWIS łodzi i jachtów motorowych, układów napędowych, naprawy pogwarancyjne, zimowanie łodzi i jachtów w hali oraz na otwartym terenie oraz TRANSPORT jednostek pływających po Polsce jaki na po całej Europie.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="text1">
                    <p>Rozważasz instalację nowego wyposażanie w swoim jachcie? Doradzimy i zamontujemy na Twojej jednostce sprzęt multimedialny taki jak TV, marynistyczne systemy audio, anteny satelitarne oraz inne urządzenia elektroniczne. Chcesz podnieść funkcjonalność i komfort na pokładzie swojej jednostki? Możemy zamontować w twojej łodzi klimatyzację, generator, oświetlenie podwodne, lodówki, grille i pozostałe elementy wyposażenia, które znacznie poprawią i umilą czas spędzony na jachcie. W ostatnich miesiącach rozszerzyliśmy nasza ofertę o naprawy tapicerskie i szycie plandek oraz o profesjonalne oklejanie kadłuba folią w celu zabezpieczenia żelkotu lub też zmiany koloru. Od stycznia 2020 roku jako pierwsi w Polsce oferujemy oklejanie dna jachtu specjalną folią przeciwporostową, która zabezpiecza dno twojej jednostki na okres do 5 lat.</p>
                </div>
                <div className="carousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems2}
                    </Carousel>
                </div>
            </div>
            <div className="contact">
                <h2>Kontakt:</h2>
                <p>+48 692 780 074</p>
                <p>info@vmarine.pl</p>
                <p class="facebook"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/PremiumYachts"><i class="fab fa-facebook-square"></i></a></p>
            </div>
        </div>
    )
}

export default Assistance
