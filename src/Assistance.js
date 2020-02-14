import React from 'react'
import './Assistance.scss';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/serwis/20150514_152710.jpg';
import img2 from './img/serwis/20150517_105100.jpg';
import img3 from './img/serwis/20150519_095059.jpg';
import img4 from './img/serwis/20150519_102212.jpg';
import img5 from './img/serwis/20150604_095533.jpg';
import img6 from './img/serwis/20150817_143710.jpg';
import img7 from './img/serwis/20170710_181235.jpg';

import img8 from './img/serwis/20170713_152855.jpg';
import img9 from './img/serwis/20171115_123054.jpg';
import img10 from './img/serwis/20171123_131750.jpg';
import img11 from './img/serwis/20190329_122146.jpg';
import img12 from './img/serwis/20190403_165826.jpg';
import img13 from './img/serwis/20190904_090542.jpg';
import img14 from './img/serwis/20191211_153657.jpg';

const Assistance = () => {
    return (
        <div>
            <h1>VMARINE – All About Yachts</h1>
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
                    <Carousel.Item>
                        <img src={img6} class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img7} class="d-block w-100" alt="..." />
                    </Carousel.Item>
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
