import React from 'react';
import { faBed, faCar, faHotel, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import HeaderSearch from './HeaderSearch';
import './index.scss';

const Header = () => {

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <div className='headerTitle'>
                    <h1 className="headerText">Find your next stay</h1>
                    <p className="headerDesc">Search low prices on hotels, homes and much more...</p>
                </div>
                <div className="searchContainer">

                    < HeaderSearch />
                </div>
            </div>
        </div>
    )
}
export default Header;