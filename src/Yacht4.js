import React from 'react'
import './Yacht.scss';
import ContactBottom from './ContactBottom';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './img/jachty/Bayliner 2655 Ciera 2002 - 23 000 Euro brutto/IMG_20190131_133018.jpg'
import img2 from './img/jachty/Bayliner 2655 Ciera 2002 - 23 000 Euro brutto/IMG_20190131_133041.jpg'
import img3 from './img/jachty/Bayliner 2655 Ciera 2002 - 23 000 Euro brutto/IMG_20190131_133056.jpg'
import img4 from './img/jachty/Bayliner 2655 Ciera 2002 - 23 000 Euro brutto/IMG_20190131_133257.jpg'
import img5 from './img/jachty/Bayliner 2655 Ciera 2002 - 23 000 Euro brutto/IMG_20190131_133443.jpg'
import img6 from './img/jachty/Bayliner 2655 Ciera 2002 - 23 000 Euro brutto/IMG_20190131_133602.jpg'
import img7 from './img/jachty/Bayliner 2655 Ciera 2002 - 23 000 Euro brutto/IMG_20190131_133645.jpg'

const Yacht4 = () => {

    const photos = [img1, img2, img3, img4, img5, img6, img7]

    // const list = photos.map(photo =>
    //     <div className="photo" key={photo}>
    //         <img src={photo} alt="yacht" />
    //     </div>
    // )

    const list = photos.map(photo =>
        <Carousel.Item key={photo}>
            <img src={photo} className="d-block w-100" alt="..." />
        </Carousel.Item>
    )

    return (
        <div className="yacht">
            <div className="gallery">
                <Carousel controls={true} indicators={false}>
                    {list}
                </Carousel>
            </div>
            <div className="yacht-text">
                <div className="specification">
                    <h1>Bayliner 2655 Ciera</h1>
                    <p><span className="bold">Długość:</span> 8,00 m</p>
                    <p><span className="bold">Szerokość:</span> 2,59 m</p>
                    <p><span className="bold">Napęd:</span> 1 x MerCruiser 350 MAGNUM MPI – 295 KM</p>
                    <p><span className="bold">Rok produkcji:</span> 2002</p>
                    <p><span className="bold">Przebieg:</span> 100 motogodzin (remont silnika przed sezonem 2019)</p>
                    <p><span className="bold">Miejsce postoju:</span> Chorwacja</p>
                </div>
                <p>Łódź motorowa Bayliner 2655 Ciera z 2002 roku. Jednostka stacjonuje w Chorwacji. Jacht po kapitalnym remoncie silnika – nowy blok, rozrząd, uszczelnienia, przewody i pompy. Podczas remontu wymieniono wszystko co należało wymienić. Silnik chodzi jak nowy i w sezonie 2019 zrobił ok. 100 motogodzin. </p>
                <p className="price">Cena: 23 000 Euro brutto (umowa kupna / sprzedaży)</p>
                <p><span className="bold">Wyposażenie jachtu m.in.:</span></p>
                <ul>
                    <li>Ploter GPS</li>
                    <li>Kompas</li>
                    <li>Głębokościomierz</li>
                    <li>Radio VFF</li>
                    <li>Radio z CD</li>
                    <li>Kotwica</li>
                    <li>Automatyczne pompy zęzowe</li>
                    <li>Ładowarka akumulaora</li>
                    <li>Stolik w kokpicie</li>
                    <li>Prysznic na rufie</li>
                    <li>Elektryczne trym klapy</li>
                    <li>System gaśniczy</li>
                    <li>Drabinka kąpielowa</li>
                    <li>Lodówka</li>
                    <li>Kuchenka mikrofalowa</li>
                    <li>Łazienka z prysznicem i WC </li>
                </ul>
            </div>
            <ContactBottom />
        </div>
    )
}

export default Yacht4
