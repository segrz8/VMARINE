import React from 'react'
import './Yachts.scss';

import { Link } from 'react-router-dom';

const Yachts = () => {
    return (
        <div className="yachts">
            <div className="yachts-flex">
                <Link to='/yacht1'>
                    <div className="yacht1">
                        <h1>Azimut 45 FLY 2011</h1>
                        <h1>375 000 Euro brutto</h1>
                    </div>
                </Link>
                <Link to='/yacht2'>
                    <div className="yacht2">
                        <h1>Cranchi Endurance 33 2010</h1>
                        <h1>454 500 PLN netto</h1>
                    </div>
                </Link>
                <Link to='/yacht3'>
                    <div className="yacht3">
                        <h1>Cranchi M44 HT 2017</h1>
                        <h1>269 000 Euro netto</h1>
                    </div>
                </Link>
            </div>
            <div className="yachts-flex">
                <Link to='/yacht4'>
                    <div className="yacht4">
                        <h1>Bayliner 2655 Ciera 2002</h1>
                        <h1>23 000 Euro brutto</h1>
                    </div>
                </Link>
                <Link to='/yacht5'>
                    <div className="yacht5">
                        <h1>Cayman 60 HT 2011</h1>
                        <h1>460 000 Euro brutto</h1>
                    </div>
                </Link>
                <Link to='/yacht6'>
                    <div className="yacht6">
                        <h1>Cruisers Yachts 390 Sport Coupe 2008</h1>
                        <h1>169 000 Euro brutto</h1>
                    </div>
                </Link>
            </div>
            <div className="yachts-flex">
                <Link to='/yacht7'>
                    <div className="yacht7">
                        <h1>Jeanneau Prestige 38 S 2008</h1>
                        <h1>155 000 Euro brutto</h1>
                    </div>
                </Link>
                <Link to='/yacht8'>
                    <div className="yacht8">
                        <h1>Jeanneau Prestige 390S 2011</h1>
                        <h1>205 000 Euro brutto</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Yachts
