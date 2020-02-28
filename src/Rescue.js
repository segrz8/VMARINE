import React from 'react'
import './Rescue.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/Rescue ARK H3/h3(10).jpg'
import img1s from './img/Rescue ARK H3/h3(10)s.jpg'
import img2 from './img/Rescue ARK H3/h3(9).jpg'
import img2s from './img/Rescue ARK H3/h3(9)s.jpg'
import img3 from './img/Rescue ARK H3/h3(3).PNG'
import img3s from './img/Rescue ARK H3/h3(3)s.PNG'

import img4 from './img/Rescue ARK H3/h3(1).png'
import img4s from './img/Rescue ARK H3/h3(1)s.png'
import img5 from './img/Rescue ARK H3/h3(2).jpg'
import img5s from './img/Rescue ARK H3/h3(2)s.jpg'
import img6 from './img/Rescue ARK H3/h3(2).png'
import img6s from './img/Rescue ARK H3/h3(2)s.png'

import img7 from './img/Rescue ARK H3/h3(6).JPG'
import img7s from './img/Rescue ARK H3/h3(6)s.JPG'
import img8 from './img/Rescue ARK H3/h3(13).jpg'
import img8s from './img/Rescue ARK H3/h3(13)s.jpg'

import img9 from './img/Rescue ARK H3/h3(3).JPG'
import img9s from './img/Rescue ARK H3/h3(3)s.JPG'
import img10 from './img/Rescue ARK H3/h3(12).jpg'
import img10s from './img/Rescue ARK H3/h3(12)s.jpg'

import img11 from './img/Rescue ARK H3/h3(7).JPG'
import img11s from './img/Rescue ARK H3/h3(7)s.JPG'
import img12 from './img/Rescue ARK H3/h3(11).jpg'
import img12s from './img/Rescue ARK H3/h3(11)s.jpg'

import img13 from './img/Rescue ARK H3/h3(4).JPG'
import img13s from './img/Rescue ARK H3/h3(4)s.JPG'
import img14 from './img/Rescue ARK H3/h3(8).jpg'
import img14s from './img/Rescue ARK H3/h3(8)s.jpg'

const Rescue = () => {

    const imgSet1 = [
        { id: 1, path: img1, pathS: img1s, },
        { id: 2, path: img2, pathS: img2s, },
        { id: 3, path: img3, pathS: img3s, },
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
        { id: 1, path: img4, pathS: img4s, },
        { id: 2, path: img5, pathS: img5s, },
        { id: 3, path: img6, pathS: img6s, },
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
        { id: 1, path: img7, pathS: img7s, },
        { id: 2, path: img8, pathS: img8s, },
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
        { id: 1, path: img9, pathS: img9s, },
        { id: 2, path: img10, pathS: img10s, },
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

    const imgSet5 = [
        { id: 1, path: img11, pathS: img11s, },
        { id: 2, path: img12, pathS: img12s, },
    ]

    const carouselItems5 = imgSet5.map(item => {
        return (
            <Carousel.Item key={item.id}>
                <picture>
                    <source media="(min-width: 461px)" srcSet={item.path} />
                    <img src={item.pathS} className="d-block w-100" alt="..." />
                </picture>
            </Carousel.Item>
        )
    })

    const imgSet6 = [
        { id: 1, path: img13, pathS: img13s, },
        { id: 2, path: img14, pathS: img14s, },
    ]

    const carouselItems6 = imgSet6.map(item => {
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
        <div className="rescue">
            <h1>RESCUE ARK H3 – ZDALNIE STEROWANE URZĄDZENIE RATUNKOWE </h1>
            <div className="flex1">
                <div className="carousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems1}
                    </Carousel>
                </div>
                <div className="text1">
                    <h2>Nowość na rynku Europejskim! Najbardziej zaawansowane urządzenie do ratowania tonącego na Świecie!</h2>
                    <p>Rescue Ark H3 to zaawansowane urządzenie przeznaczone do ratunku osób  potrzebujących pomocy na wodzie. Urządzenie posiada dwa mocne silniki elektryczne zapewniające szybkie i pewne dotarcie do potrzebującego na wodzie. Dzięki zaawansowanemu systemowi zdalnego sterowania operator urządzenia jest w stanie wykonać precyzyjne podejście do tonącego z bardzo dużej odległości. Dzięki opatentowanej konstrukcji i mocnym silnikom urządzenie jest w stanie poruszać się nie tylko po spokojnych wodach ale także daje sobie bardzo dobrze rade w ciężkich warunkach pogodowych. Urządzenie zostało zaprojektowane tak, aby uratować jak najwięcej żyć!</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel contain orderCarousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems2}
                    </Carousel>
                </div>
                <div className="text1 orderText">
                    <h2>ZDALNE STEROWANIE</h2>
                    <p>Operator jest w stanie zdalnie sterować urządzeniem na odległość 800 metrów. Po przyciśnięciu jednego klawisze „powrót” urządzenie automatycznie powraca do punktu początkowego rozpoczętej drogi. Opcja ta jest bardzo doceniana przez ratowników, właścicieli jachtów oraz specjalne grupy ratownicze dbające o bezpieczeństwo na wodzie.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems3}
                    </Carousel>
                </div>
                <div className="text1">
                    <h2>PRĘDKOŚĆ</h2>
                    <p>Podczas akcji ratunkowej, szybkość reakcji i czas dotarcia do tonącego mają największe znaczenie. Rescue Ark H3 jest w stanie dotrzeć do potrzebującego pomocy szybciej niż jakikolwiek innych pojazd ratunkowy czy też ratownik. Bez obciążenia urządzenie porusza się z prędkością 7 m/s, po podjęciu tonącego w zależności od jego wagi urządzenie poruszą się co najmniej z prędkością 2 m/s. Jest to dwa razy szybciej niż w przypadku standardowej akcji ratunkowej przeprowadzanej przez ratownika i eliminuje też ryzyko, które podejmuje ratownik.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel orderCarousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems4}
                    </Carousel>
                </div>
                <div className="text1">
                    <h2>NA RATUNEK</h2>
                    <p>Rescue Ark H3 może udźwignąć do 240 kg dzięki czemu za jednym wypłynięciem może sprowadzić w bezpieczne miejsce 1,2,3, a nawet 4 osoby. Zasięg pilota wynosić 800 metrów, a pole działania jest określone przez wbudowany odbiornik GPS.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems5}
                    </Carousel>
                </div>
                <div className="text1">
                    <h2>WARUNKI POGODOWE</h2>
                    <p>Rescue Ark H3 to bardzo mocne i wytrzymałe urządzenie przeznaczone do pracy w bardzo trudnych warunkach pogodowych. Bardzo dobrze radzi sobie z dużymi falami, wiatrami i niespokojną wodą, co potwierdzają przeprowadzone próby i testy. W porównaniu do podobnych urządzeń Rescue Ark H3 działa także obrócony do góry nogami, w związku z czym, po ewentualnym przewróceniu przez falę, urządzenie dalej działa i może kontynuować akcję ratunkową.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel orderCarousel">
                    <Carousel controls={false} indicators={false}>
                        {carouselItems6}
                    </Carousel>
                </div>
                <div className="text1">
                    <h2>AUTOMATYCZNY POWRÓT</h2>
                    <p>Dzięki systemowi GPS i przyciskowi automatycznego powrotu, Rescue Ark H3 wraca do punktu początkowego po podjęciu tonącego, od razu po naciśnięciu jednego przycisku „home”. W przypadku utraty zasięgu lub przekroczenia obszaru i zerwaniu kontaktu na więcej niż 15 sekund, urządzenie wraca automatycznie do punktu początkowego.</p>
                </div>
            </div>
            <h2 className="h2AboveLinks">Obejrzyj prezentację urządzenia:</h2>
            <div className="links">
                <div className="link1">
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=WH6w_Pt46vQ">Film 1</a></p>
                </div>
                <div className="link1">
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=peTyL0XZ5fw">Film 2</a></p>
                </div>
                <div className="link1">
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=1KvMMw0-SyQ">Film 3</a></p>
                </div>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Rescue
