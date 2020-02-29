import React from 'react'
import './Croatia.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/premiumYachts.jpg'

import img1 from './img/CHORWACJA/20170814_130815.jpg'
import img1s from './img/CHORWACJA/20170814_130815s.jpg'
import img2 from './img/CHORWACJA/20170814_145820.jpg'
import img2s from './img/CHORWACJA/20170814_145820s.jpg'
import img3 from './img/CHORWACJA/20190625_121948.jpg'
import img3s from './img/CHORWACJA/20190625_121948s.jpg'
import img4 from './img/CHORWACJA/DSC01900.JPG'
import img4s from './img/CHORWACJA/DSC01900s.JPG'

import img5 from './img/CHORWACJA/m442017(1).jpg'
import img5s from './img/CHORWACJA/m442017(1)s.jpg'
import img6 from './img/CHORWACJA/68a21c214a0999bdb56353221db2.jpg'
import img6s from './img/CHORWACJA/68a21c214a0999bdb56353221db2s.jpg'
import img7 from './img/CHORWACJA/20150708_190838.jpg'
import img7s from './img/CHORWACJA/20150708_190838s.jpg'
import img8 from './img/CHORWACJA/20180422_132249.jpg'
import img8s from './img/CHORWACJA/20180422_132249s.jpg'

const Croatia = () => {

    const imgSet1 = [
        { id: 1, path: img1, pathS: img1s, },
        { id: 2, path: img2, pathS: img2s, },
        { id: 3, path: img3, pathS: img3s, },
        { id: 4, path: img4, pathS: img4s, },
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
        { id: 4, path: img8, pathS: img8s, },
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
                    <div className="carousel">
                        <Carousel controls={false} indicators={false}>
                            {carouselItems1}
                        </Carousel>
                    </div>
                </div>
                <div className="text1">
                    <p>Naszymi bazami są marina w Punacie (Północ Chorwacji, wyspa Krk) oraz mariny w okolicach Sibenika i Zadaru w Dalmacji. Dzięki nowym połączeniom lotniczym, transfer do Chorwacji jest szybki i wygodny, a bezpośrednie loty z Warszawy pozwalają dostać się na jacht w 2,5 godziny od wylotu z Okęcia. Na miejscu organizujemy transfer z lotniska do marin, noclegi w hotelach (jeżeli ktoś nie chce spać na jachcie) oraz rezerwacje w najlepszych, lokalnych restauracjach.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems2}
                    </Carousel>
                </div>
                <div className="text1">
                    <p>Oferujemy Państwu wynajem na dni oraz tygodnie, dowolny wybór trasy oraz przebiegu rejsu tak aby jak najlepiej sprostać stawianym wymaganiom. Ceny jak i przebieg rejsów ustalane są indywidualnie i uwarunkowane są wyborem jachtu i okresu wynajmu.
Jeżeli planujesz wakacje na jachcie motorowym, chcesz poznać Chorwację i jej urokliwe wyspy i zatoki oraz spędzić czas pełen słońca i relaksu to zapraszamy do kontaktu! Dopasujemy rejs do Waszych marzeń!</p>
                </div>
            </div>
            <ContactBottom />
        </div >
    )
}

export default Croatia
