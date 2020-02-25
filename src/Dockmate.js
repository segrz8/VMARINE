import React from 'react'
import './Dockmate.scss';
import Carousel from 'react-bootstrap/Carousel';

import logo from './img/dockmate foto/Dockmate-Logo-H.png';
import logo2 from './img/dockmate foto/logo2.png';
import img1 from './img/dockmate foto/3 together.png';

import img2 from './img/dockmate foto/JM3.jpg';
import img3 from './img/dockmate foto/JM4.png';
import img4 from './img/dockmate foto/JM5.png';

import img5 from './img/dockmate foto/Dockmate hand.jpg';
import img6 from './img/dockmate foto/hand_arrows_twin.png';
import img7 from './img/dockmate foto/JM1.png';

import img8 from './img/dockmate foto/033.JPG';
import img9 from './img/dockmate foto/BIG_TWIST_ANGLE.jpg';
import img10 from './img/dockmate foto/charger.png';
import img11 from './img/dockmate foto/JM2.png';

const Dockmate = () => {
    return (
        <div className="dockmate">
            <h1>VMARINE</h1>
            <p>Wyłączny importer i dystrybutor systemów bezprzewodowego sterowania łodziami i jachtami <span className="bold">dockmate</span></p>
            <div className="flex1">
                <div className="logo">
                    <img src={logo} alt="dockmate logo" />
                </div>
                <div className="text1">
                    <p>System dockmate pozwala na bezprzewodowe sterowanie silnikami (biegi lub biegi plus przepustnica), sterami strumieniowymi, klaksonem oraz wciągarkami kotwicy dzięki czemu operowanie jachtem staje się dużo łatwiejsze i wygodniejsze. Dzięki systemowi dockmate jesteś w stanie manewrować jachtem za pomocą pilota z każdego miejsca na pokładzie co znacząco ułatwia manewry w porcie i pozwala na samodzielne, bezpieczne cumowanie nawet większych jednostek. Jest to też niebywałe ułatwienie dla osób które pływają same lub też z mało doświadczonymi pasażerami.</p>
                </div>
            </div>
            <div className="flex1">
                <div className="remote orderCarousel">
                    <img src={img1} alt="dockmate" />
                </div>
                <div className="text1">
                    <p>Każdy system jest indywidualnie konfigurowany i programowany pod dany jacht w zależności od zamontowanego układu napędowego i jego sterowania (silniki, przekładnie, manetka), wersji oprzyrządowania silników, typu i rodzaju sterów strumieniowych (1 lub 2, proporcjonalne lub dwubiegowe) oraz wciągarki kotwicy. System obsługuje zarówno instalacje jednosilnikowe jak i dwusilnikowe. Jedynym wymaganiem jest elektroniczna manetka (elektroniczne sterowanie przekładniami).</p>
                </div>
            </div>
            <div className="flex1">
                <div className="carousel contain">
                    <Carousel controls={false} indicators={false}>
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
                <div className="text1">
                    <h2>System dockmate dostępny jest w trzech wersjach:</h2>
                    <ol>
                        <li>SINGLE – pilot z przyciskami dla systemów z jednym silnikiem od <span className="bold">2 850 Euro netto + 23% VAT</span></li>
                        <li>TWIN – pilot z przyciskami dla systemów z dwoma silnikami od <span className="bold">3 500 Euro netto + 23% VAT</span></li>
                        <li>TWIST – pilot z joystickiem dla systemów z jednym lub dwoma silnikami od <span className="bold">4 950 Euro netto + 23% VAT</span></li>
                    </ol>
                </div>
            </div>
            <div className="margins">
                <h2>Cena systemu wyliczana jest indywidualnie dla danego jachtu po zapoznaniu się z dokładną specyfikacją!</h2>
                <p>Cena podstawowa pokazana powyżej zawiera standardowy zestaw składający się z bezprzewodowego pilota wraz ze smyczą, bezprzewodowej ładowarki (TWIST) lub pilota zasilanego bateriami (SINGLE I TWIN) jednostki centralnej z odbiornikiem, modułu radiowego z anteną, modułu silnikowego (1 lub 2) w zależności od specyfikacji, modułu klaksonu oraz standardowego okablowania. Do ceny doliczyć trzeba koszt interfejsu CAN (np. IPS lub Aquamatic) lub modułów automatycznej kontroli obrotów (Mercury, Mercuiser, Cummins), dodatkowych modułów do sterów strumieniowych (standard, proporcjonalne lub dwubiegowe), modułu wciągarki kotwicy oraz okablowania dla danej instalacji które dobierane są <span className="bold">indywidualnie po zapoznaniu się ze specyfikacją i wyposażeniem jachtu.</span></p>
                <p>Cena nie zawiera montażu systemu w twojej łodzi. Dokładna wycena kompletacji systemu dobranego indywidualnie dla Twojego jachtu wymaga szczegółowej konsultacji!</p>
            </div>
            <div className="flex1">
                <div className="logo">
                    <img src={logo2} alt="dockmate logo" />
                </div>
                <div className="text1">
                    <p>A tu można obejrzeć jak system działa w praktyce:</p>
                    <div className="links">
                        <div className="link1">
                            <p><a href="https://www.youtube.com/watch?v=7aPtkFAu9mM">Film 1</a></p>
                        </div>
                        <div className="link2">
                            <p><a href="https://www.youtube.com/watch?v=NifLksythQQ">Film 2</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact">
                <h2>Zapraszam do kontaktu:</h2>
                <p>Tomasz KUMOR</p>
                <p>+48 692 780 074</p>
            </div>
        </div>
    )
}

export default Dockmate
