import React from 'react'
import './Cruises.scss';

import { Link } from 'react-router-dom';

const Cruises = () => {
    return (
        <div className="cruises">
            <Link to='/poland'>
                <div className="poland">
                    <h1>POLSKA</h1>
                </div>
            </Link>
            <Link to='/croatia'>
                <div className="croatia">
                    <h1>CHORWACJA</h1>
                </div>
            </Link>
        </div >
    )
}

export default Cruises
