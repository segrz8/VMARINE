import React from 'react'
import './Menu.scss';
import { Link } from 'react-router-dom';

const Menu = (props) => {

    return (
        <div
            onClick={props.handleMenu}
            className={props.menuActive ? 'menu menu--active' : 'menu'}
        >
            <ul>
                <li><Link to='/'>O nas</Link></li>
                <li><Link to='/dockmate'>Dockmate - bezprzewodowe systemy sterowania jachtami</Link></li>
                <li><Link to='/havospark'>SKUTERY PODWODNE HAVOSPARK AQUAJET H2</Link></li>
                <li><Link to='/fendertex'>Lekkie i wytrzymałe odbijacze Fendertex</Link></li>
                <li><Link to='/rescue'>Rescue Ark H3 - zdalne koło ratunkowe</Link></li>
                <li><Link to='/yachts'>Jachty na sprzedaż</Link></li>
                <li><Link to='/cruises'>Indywidualne rejsy i wynajem jachtów</Link></li>
                <li><Link to='/assistance'>Serwis i obsługa jachtów</Link></li>
                <li><Link to='/contact'>Kontakt</Link></li>
            </ul>
        </div >
    )
}

export default Menu
