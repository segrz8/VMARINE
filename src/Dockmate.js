import React from 'react'
import './Dockmate.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/dockmate foto/Dockmate-Logo-H.png';
import logos from './img/dockmate foto/Dockmate-Logo-Hs.png';
import logo2 from './img/dockmate foto/logo2.png';
import logo2s from './img/dockmate foto/logo2s.png';
import img1 from './img/dockmate foto/3together.png';
import img1s from './img/dockmate foto/3togethers.png';

import img2 from './img/dockmate foto/JM3.jpg';
import img2s from './img/dockmate foto/JM3s.jpg';
import img3 from './img/dockmate foto/JM4.png';
import img4 from './img/dockmate foto/JM5.png';

import img5 from './img/dockmate foto/Dockmate hand.jpg';
import img5s from './img/dockmate foto/Dockmate hands.jpg';
import img6 from './img/dockmate foto/hand_arrows_twin.png';
import img6s from './img/dockmate foto/hand_arrows_twins.png';
import img7 from './img/dockmate foto/JM1.png';
import img7s from './img/dockmate foto/JM1s.png';

import img8 from './img/dockmate foto/033.JPG';
import img8s from './img/dockmate foto/033s.JPG';
import img9 from './img/dockmate foto/BIG_TWIST_ANGLE.jpg';
import img9s from './img/dockmate foto/BIG_TWIST_ANGLEs.jpg';
import img10 from './img/dockmate foto/charger.png';
import img10s from './img/dockmate foto/chargers.png';
import img11 from './img/dockmate foto/JM2.png';
import img11s from './img/dockmate foto/JM2s.png';

import img12 from './img/dockmate foto/dockmate strona nowe 2020/i1.png';
import img12s from './img/dockmate foto/dockmate strona nowe 2020/i1s.png';
import img13 from './img/dockmate foto/dockmate strona nowe 2020/i2.png';
import img13s from './img/dockmate foto/dockmate strona nowe 2020/i2s.png';
import img14 from './img/dockmate foto/dockmate strona nowe 2020/i3.png';
import img14s from './img/dockmate foto/dockmate strona nowe 2020/i3s.png';
import img15 from './img/dockmate foto/dockmate strona nowe 2020/i4.png';
import img15s from './img/dockmate foto/dockmate strona nowe 2020/i4s.png';

const Dockmate = () => {

    const imgSet1 = [
        { id: 1, path: img2, pathS: img2s, },
        { id: 2, path: img3, pathS: img3, },
        { id: 3, path: img4, pathS: img4, },
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
        { id: 1, path: img5, pathS: img5s, },
        { id: 2, path: img6, pathS: img6s, },
        { id: 3, path: img7, pathS: img7s, },
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
        { id: 1, path: img8, pathS: img8s, },
        { id: 2, path: img9, pathS: img9s, },
        { id: 3, path: img10, pathS: img10s, },
        { id: 4, path: img11, pathS: img11s, },
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

    const imgSet4 = [
        { id: 1, path: img12, pathS: img12s, },
        { id: 2, path: img13, pathS: img13s, },
        { id: 3, path: img14, pathS: img14s, },
        { id: 4, path: img15, pathS: img15s, },
    ]

    const carouselItems4 = imgSet4.map(item => {
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
        <div className="dockmate">
            <div className="heading">
                <h1>VMARINE</h1>
                <p>Wyłączny importer i dystrybutor systemów bezprzewodowego sterowania łodziami i jachtami <span className="bold">dockmate</span></p>
            </div>
            <div className="flex1">
                <div className="logo">
                    <picture>
                        <source media="(min-width: 461px)" srcSet={logo} />
                        <img src={logos} className="d-block w-100" alt="..." />
                    </picture>
                </div>
                <div className="text1">
                    <p>System dockmate pozwala na bezprzewodowe sterowanie silnikami (biegi lub biegi plus przepustnica), sterami strumieniowymi, klaksonem oraz wciągarkami kotwicy dzięki czemu operowanie jachtem staje się dużo łatwiejsze i wygodniejsze. Dzięki systemowi dockmate jesteś w stanie manewrować jachtem za pomocą pilota z każdego miejsca na pokładzie co znacząco ułatwia manewry w porcie i pozwala na samodzielne, bezpieczne cumowanie nawet większych jednostek. Jest to też niebywałe ułatwienie dla osób które pływają same lub też z mało doświadczonymi pasażerami.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="remote orderCarousel">
                    <picture>
                        <source media="(min-width: 461px)" srcSet={img1} />
                        <img src={img1s} className="d-block w-100" alt="..." />
                    </picture>
                </div>
                <div className="text1">
                    <p>Każdy system jest indywidualnie konfigurowany i programowany pod dany jacht w zależności od zamontowanego układu napędowego i jego sterowania (silniki, przekładnie, manetka), wersji oprzyrządowania silników, typu i rodzaju sterów strumieniowych (1 lub 2, proporcjonalne lub dwubiegowe) oraz wciągarki kotwicy. System obsługuje zarówno instalacje jednosilnikowe jak i dwusilnikowe. Jedynym wymaganiem jest elektroniczna manetka (elektroniczne sterowanie przekładniami).</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel contain">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems1}
                    </Carousel>
                </div>
                <div className="text1">
                    <p>System dockmate jest w 100% bezpieczny, działa równolegle do układu sterowania zamontowanego na jachcie co za tym idzie, nie wymaga jego modyfikacji. System dockmate jako jedyny system zdalnego sterowania uzyskał akceptację Volvo Penta oraz szereg nagród za najbezpieczniejszy system do bezprzewodowej obsługi jachtów.</p>
                </div>
            </div>
            <h2 className="h2overUl">Aktualnie system dockmate obsługuje następujące manetki:</h2>
            <ul>
                <li>Volvo Penta EVC - B , EVC - C , EVC - D , EVC - E</li>
                <li>Volvo Penta IPS Joystick (stara i nowa wersja joysticka)</li>
                <li>Volvo Penta Aquamatic Joystick</li>
                <li>Volvo Penta EDC</li>
                <li>Mercury / MerCruise DTS</li>
                <li>Rexroth, Rexroth Aventics</li>
                <li>Aventics ECS</li>
                <li>MAN, MTU, CATERPILLAR</li>
                <li>Ultraflex Mk II</li>
                <li>Ultraflex KE4</li>
                <li>NHK MEC</li>
                <li>Teleflex</li>
                <li>ZF Microcommander, ZF Clear Command, ZF Smart Command</li>
                <li>Twin Disc EC-200 , EC-300, Joystick</li>
                <li>Glendinning oraz Glendinning Pro Pilot</li>
                <li>Cummins</li>
                <li>Morse KE+, KE4, KE4+, KE5+, KEx+</li>
                <li>Yanmar Analogue , Yanmar CAN bus</li>
                <li>Kobelt</li>
                <li>Hydronautica</li>
                <li>Flexball Vetus</li>
                <li>Bellmarine Bell-control</li>
                <li>Yamaha z manetkami Volvo Penta</li>
            </ul>
            <div className="carousel">
                <Carousel controls={false} indicators={false}>
                    {carouselItems3}
                </Carousel>
            </div>
            <h2 className="h2overUl">Aktualnie obsługiwane systemy sterowania sterami strumieniowymi:</h2>
            <ul>
                <li>Uniwersalne</li>
                <li>Side Power (włącz/wyłącz)</li>
                <li>Side Power (proporcjonalne S-link)</li>
                <li>Vetus</li>
                <li>Vetus (dwustopniowe i hydrauliczne)</li>
                <li>Vetus (V-CAN proporcjonalne) </li>
                <li>ABT (włącz/wyłącz, proporcjonalne i CAN)</li>
                <li>CMC (proporcjonalne)</li>
                <li>Quick włącz/wyłącz</li>
                <li>Westmar (propoconalne hydrauliczne)</li>
                <li>Naiad (proporcjonalne hydrauliczne)</li>
                <li>BCS</li>
                <li>Lewmar</li>
                <li>Max Power elektryczne (włącz/wyłącz)</li>
                <li>Kobelt / Keypower</li>
            </ul>
            <p className="margins">Lista obsługiwanych systemów ciągle się powiększa. W razie wątpliwości dzwoń i pytaj!
Cały system jest produkcji belgijskiej, wykonany w UE, sprzedawany z 24 miesięczną gwarancją.</p>
            <div className="flex1">
                <div className="carousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems2}
                    </Carousel>
                </div>
                <div className="text1">
                    <h2>A tu można obejrzeć jak system działa w praktyce:</h2>
                    <div className="links">
                        <div className="link1">
                            <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=7aPtkFAu9mM">Film 1</a></p>
                        </div>
                        <div className="link2">
                            <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=NifLksythQQ">Film 2</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carouselBottom">
                <Carousel controls={false} indicators={false}>
                    {carouselItems4}
                </Carousel>
            </div>
            <div className="logo dockmateLogoBelow">
                <picture>
                    <source media="(min-width: 461px)" srcSet={logo2} />
                    <img src={logo2s} className="d-block w-100" alt="..." />
                </picture>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Dockmate
