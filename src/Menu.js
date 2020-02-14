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
                <li><Link to='/dockmate'>Dockmate</Link></li>
                <li><Link to='/havospark'>HavoSpark</Link></li>
                <li><Link to='/fendertex'>Fendertex</Link></li>
                <li><Link to='/rescue'>Rescue</Link></li>
                <li><Link to='/yachts'>Jachty na sprzedaż</Link></li>
                <li><Link to='/cruises'>Indywidualne rejsy</Link></li>
                <li><Link to='/charter'>Wynajem jachtów</Link></li>
                <li><Link to='/assistance'>Serwis i obsługa jachtów</Link></li>
                <li><Link to='/contact'>Kontakt</Link></li>
            </ul>
        </div >
    )
}

export default Menu
