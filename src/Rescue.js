import React from 'react'
import './Rescue.scss';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/Rescue ARK H3/h3 (10).jpg'
import img2 from './img/Rescue ARK H3/h3 (9).jpg'
import img3 from './img/Rescue ARK H3/h3 (3).PNG'

import img4 from './img/Rescue ARK H3/h3 (1).png'
import img5 from './img/Rescue ARK H3/h3 (2).jpg'
import img6 from './img/Rescue ARK H3/h3 (2).png'

import img7 from './img/Rescue ARK H3/h3 (6).JPG'
import img8 from './img/Rescue ARK H3/h3 (13).jpg'

import img9 from './img/Rescue ARK H3/h3 (3).JPG'
import img10 from './img/Rescue ARK H3/h3 (12).jpg'

import img11 from './img/Rescue ARK H3/h3 (7).JPG'
import img12 from './img/Rescue ARK H3/h3 (11).jpg'

import img13 from './img/Rescue ARK H3/h3 (4).JPG'
import img14 from './img/Rescue ARK H3/h3 (8).jpg'

const Rescue = () => {
    return (
        <div className="rescue">
            <h1>RESCUE ARK H3 – ZDALNIE STEROWANE URZĄDZENIE RATUNKOWE </h1>
            <div className="flex1">
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
                        <Carousel.Item>
                            <img src={img4} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img5} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img6} class="d-block w-100" alt="..." />
                        </Carousel.Item>
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
                        <Carousel.Item>
                            <img src={img7} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img8} class="d-block w-100" alt="..." />
                        </Carousel.Item>
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
                        <Carousel.Item>
                            <img src={img9} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img10} class="d-block w-100" alt="..." />
                        </Carousel.Item>
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
                        <Carousel.Item>
                            <img src={img11} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img12} class="d-block w-100" alt="..." />
                        </Carousel.Item>
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
                        <Carousel.Item>
                            <img src={img13} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img14} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="text1">
                    <h2>AUTOMATYCZNY POWRÓT</h2>
                    <p>Dzięki systemowi GPS i przyciskowi automatycznego powrotu, Rescue Ark H3 wraca do punktu początkowego po podjęciu tonącego, od razu po naciśnięciu jednego przycisku „home”. W przypadku utraty zasięgu lub przekroczenia obszaru i zerwaniu kontaktu na więcej niż 15 sekund, urządzenie wraca automatycznie do punktu początkowego.</p>
                </div>
            </div>
            <div className="contact">
                <h2>Kontakt:</h2>
                <p>+48 692 780 074</p>
                <p>info@vmarine.pl</p>
            </div>
        </div>
    )
}

export default Rescue
