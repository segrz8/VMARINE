import React from 'react'
import './Fendertex.scss';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/fendertex/fendertexLogo2.jpg'

import img1 from './img/fendertex/73387330_143843420180435_3154112044718803727_n.jpg'
import img2 from './img/fendertex/75388160_108402873967238_6908105057644838912_o.jpg'
import img3 from './img/fendertex/78061741_108448963962629_1501454681883279360_n.jpg'
import img4 from './img/fendertex/78700405_118735696265759_3113567439506374656_o.jpg'
import img5 from './img/fendertex/79978744_122120562593939_5359801783029858304_o.jpg'
import img6 from './img/fendertex/xca309866dcc6f99e9d0aefd47137ff73ff996427_slider-textile-fenders-fendertex.jpg.pagespeed.ic.PM_JYoJ14M.jpg'
import img7 from './img/fendertex/xf1c21f5d7793b00c2a353fc4f73a917d7bba02fe_pare-battages-cylindrique-gris-fendertex-slider.jpg.pagespeed.ic.mqjCHqfQeL.jpg'

import img8 from './img/fendertex/custom-colors-001.png'
import img9 from './img/fendertex/fendertex-cylindrical-fender-001.jpg'
import img10 from './img/fendertex/fendertex-spherical-fender-001.jpg'
import img11 from './img/fendertex/fendertex-tubular-fender-001.jpg'

import img12 from './img/fendertex/fendertex-fenders-002.jpg'
import img13 from './img/fendertex/81292482_128832878589374_7541409328448667648_o.jpg'

const Fendertex = () => {

    // const imgSet1 = [
    //     { id: 1, path: img1, pathS: img1s, },
    //     { id: 2, path: img2, pathS: img2s, },
    //     { id: 3, path: img3, pathS: img3s, },
    //     { id: 4, path: img4, pathS: img4s, },
    //     { id: 5, path: img5, pathS: img5s, },
    //     { id: 6, path: img6, pathS: img6s, },
    //     { id: 7, path: img7, pathS: img7s, },
    // ]

    // const carouselItems1 = imgSet1.map(item => {
    //     return (
    //         <Carousel.Item key={item.id}>
    //             <picture>
    //                 <source media="(min-width: 461px)" srcSet={item.path} />
    //                 <img src={item.pathS} className="d-block w-100" alt="..." />
    //             </picture>
    //         </Carousel.Item>
    //     )
    // })

    return (
        <div className="fendertex">
            <div className="logo">
                <img src={logo} alt="fendertex logo" />
            </div>
            <div className="flex1">
                <div className="text1">
                    <p>Fendertex to jedyne na rynku ultralekkie odbijacze, o podwyższone wytrzymałości, które mogą być indywidualnie dopasowane do twojego jachtu. Dzięki zaawansowanym badaniom firmie Fendertex udało się opatentować specjalny materiał dzięki któremu odbijacze Fendertex są 10 razy bardziej wytrzymałe na nacisk w porównaniu do standardowych odbijaczy, a ich waga jest 95% niższa od standardowych odbijaczy z PCV. Nowoczesna konstrukcja pozwala na bardzo łatwe pompowanie i spuszczenia powietrza z odbijaczy dzięki czemu można oszczędzić dużo miejsca dedykowanego na składowanie standardowych odbijaczy. Dzięki możliwości pełnej personalizacji odbijaczy i ich ochraniaczy, możesz dopasować kolor jak i grafikę idealnie pod swój jacht.</p>
                </div>
                {/* <div className="carousel">
                <Carousel controls={false} indicators={false}>
                    {carouselItems1}
                </Carousel>
            </div> */}
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
                        <Carousel.Item>
                            <img src={img12} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img13} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="flex1">
                <div className="text1 orderText">
                    <h2>Zalety odbijaczy Fendertex:</h2>
                    <ul>
                        <li>najlżejsze odbijacze na świecie</li>
                        <li>zewnętrzna warstwa zrobiona z jednego kawałka opatentowanego materiału</li>
                        <li>łatwość pompowania i spuszczania powietrza co oszczędza miejsca podczas składowania</li>
                        <li>bardzo wysoka wytrzymałość na naprężenia</li>
                        <li>zachowanie właściwości i kształtu w szerokiej skali temperatury</li>
                        <li>dostępne w trzech kształtach i dziewięciu standardowych kolorach</li>
                        <li>specjalne kolory, rozmiary i grafiki dostępne na zamówienie</li>
                        <li>szeroka paleta akcesoriów jak ochraniacze, osłony metalowych uchwytów, liny, pompki i grafiki</li>
                        <li>wydajne pompki do łatwego pompowania i wypuszczania powietrza</li>
                        <li>możliwość wyszycia logo lub nazwy jachty na ochraniaczach</li>
                    </ul>
                </div>
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
                        <Carousel.Item>
                            <img src={img11} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="links">
                <h2>A tu można obejrzeć jak system działa w praktyce:</h2>
                <div className="link1">
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=8LFl0wi6q6w">Film 1</a></p>
                </div>
            </div>
            <div className="contact">
                <h2>Kontakt:</h2>
                <p>+48 692 780 074</p>
                <p>info@vmarine.pl</p>
                <p class="facebook"><a href="www.facebook.com/PremiumYachts"><i class="fab fa-facebook-square"></i> Facebook</a></p>
            </div>
        </div>
    )
}

export default Fendertex
