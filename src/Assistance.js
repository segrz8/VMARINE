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
import img9 from './img/serwis/20171115_123054.jpg';
import img10 from './img/serwis/20171123_131750.jpg';
import img11 from './img/serwis/20190329_122146.jpg';
import img12 from './img/serwis/20190403_165826.jpg';
import img13 from './img/serwis/20190904_090542.jpg';
import img14 from './img/serwis/20191211_153657.jpg';

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

    return (
        <div>
            <h1>VMARINE – All About Yachts</h1>
            <div className="carousel">
                <Carousel controls={false} indicators={false}>
                    {carouselItems1}
                </Carousel>
            </div>
            <p>Firma VMARINE świadczy pełen pakiet usług związanych z eksploatacją, serwisowaniem, transportem, ubezpieczeniem i bieżąco obsługą Waszego jachtu. Dzięki bardzo dużemu doświadczeniu i rozbudowanej sieci kontaktów jesteśmy w stanie zająć się Waszą łódką zarówno w Polsce jak i na terenie całej Europy. Oferujemy profesjonalny SERWIS łodzi i jachtów motorowych, układów napędowych, naprawy pogwarancyjne, zimowanie łodzi i jachtów w hali oraz na otwartym terenie oraz TRANSPORT jednostek pływających po Polsce jaki na po całej Europie. Rozważasz instalacje nowego wyposażanie w swoim jachcie? Doradzimy i zamontujemy na Twojej jednostce sprzęt multimedialny taki jak TV, marynistyczne systemy audio, anteny satelitarne itp., klimatyzację, generator, oświetlenie podwodne, lodówki, grille i pozostałe elementy wyposażenia. W ostatnich miesiącach rozszerzyliśmy nasza ofertę o naprawy tapicerskie i szycie plandek oraz o profesjonalne oklejanie kadłuba folią w celu zabezpieczenia żelkotu lub też zmiany koloru. Od stycznia 2020 roku jako pierwsi w Polsce oferujemy oklejanie dna jachtu specjalną folią przeciwporostową, która zabezpiecza dna na okres do 5 lat bez konieczności odnawiania. </p>
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
                </Carousel>
            </div>
            <div className="contact">
                <h2>Zapraszamy do kontaktu: </h2>
                <p>+48 692 780 074</p>
                <p>info@vmarine.pl</p>
            </div>
        </div>
    )
}

export default Assistance
