import React from 'react'
import './Croatia.scss';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/premiumYachts.jpg'

import img1 from './img/CHORWACJA/20170814_130815.jpg'
import img2 from './img/CHORWACJA/20170814_145820.jpg'
import img3 from './img/CHORWACJA/20190625_121948.jpg'
import img4 from './img/CHORWACJA/DSC01900.JPG'

import img5 from './img/CHORWACJA/m44 2017 (1).jpg'
import img6 from './img/CHORWACJA/68a21c214a0999bdb56353221db2.jpg'
import img7 from './img/CHORWACJA/20150708_190838.jpg'
import img8 from './img/CHORWACJA/20180422_132249.jpg'

const Croatia = () => {
    return (
        <div className="croatia">
            <h1>INDYWIDUALNE REJSY W CHORWACJI</h1>
            <div className="flex1">
                <div className="logo">
                    <img src={logo} alt="premium yachts logo" />
                </div>
                <div className="text1">
                    <p>Serdecznie zapraszamy do skorzystania z oferty indywidualnych rejsów na jachtach motorowych w Chorwacji. Wszystkie rejsy są „szyte na miarę” pod wymagania Wynajmującego. Rejsy odbywają się na jachtach o długości od 44 do 53 stóp (13,8- 15,20 m) naszych zaprzyjaźnionych Armatorów. Jachty są świeże, bardzo dobrze wyposażone i posiadają szereg udogodnień które gwarantujących udany urlop na jachcie. Jachty wynajmowane są z polskim kapitanem, który zna lokalne wody i atrakcje okolicznych miast i wysp dzięki czemu pobyt można wykorzystać nie tylko na relaks ale także przy okazji zobaczyć coś ciekawego.</p>
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
                    </Carousel>
                </div>
                <div className="text1">
                    <p>Naszymi bazami są marina w Punacie (Północ Chorwacji, wyspa Krk) oraz mariny w okolicach Sibenika i Zadaru w Dalmacji. Dzięki nowym połączeniom lotniczym, transfer do Chorwacji jest szybki i wygodny, a bezpośrednie loty z Warszawy pozwalają dostać się na jacht w 2,5 godziny od wylotu z Okęcia. Na miejscu organizujemy transfer z lotniska do marin, noclegi w hotelach (jeżeli ktoś nie chce spać na jachcie) oraz rezerwacje w najlepszych, lokalnych restauracjach.</p>
                </div>
            </div>
            <div className="flex1">
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
                </div>
                <div className="text1">
                    <p>Oferujemy Państwu wynajem na dni oraz tygodnie, dowolny wybór trasy oraz przebiegu rejsu tak aby jak najlepiej sprostać stawianym wymaganiom. Ceny jak i przebieg rejsów ustalane są indywidualnie i uwarunkowane są wyborem jachtu i okresu wynajmu.
Jeżeli planujesz wakacje na jachcie motorowym, chcesz poznać Chorwację i jej urokliwe wyspy i zatoki oraz spędzić czas pełen słońca i relaksu to zapraszamy do kontaktu! Dopasujemy rejs do Waszych marzeń!</p>
                </div>
            </div>
            <div className="contact">
                <h2>Kontakt:</h2>
                <p>+48 692 780 074</p>
                <p>info@vmarine.pl</p>
                <p class="facebook"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/PremiumYachts"><i class="fab fa-facebook-square"></i> Facebook</a></p>
            </div>
        </div >
    )
}

export default Croatia
