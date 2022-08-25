import React from 'react';
import './index.scss';

const index = () => {
    return (
        <div className='footer'>
            <div className="footerCintainer">

                <div className="category">
                    <ul className="footerList">
                        <li className="footerListItem">Countries</li>
                        <li className="footerListItem">Regions</li>
                        <li className="footerListItem">Cities</li>
                        <li className="footerListItem">Districts</li>
                        <li className="footerListItem">Airports</li>
                        <li className="footerListItem">Hotels</li>
                    </ul>
                </div>
                <div className="category">
                    <ul className="footerList">
                        <li className="footerListItem">Homes</li>
                        <li className="footerListItem">Apartments</li>
                        <li className="footerListItem">Resorts</li>
                        <li className="footerListItem">Villas</li>
                        <li className="footerListItem">Hostels</li>
                        <li className="footerListItem">Guest houses</li>
                    </ul>
                </div>
                <div className="category">
                    <ul className="footerList">
                        <li className="footerListItem">Unique places to stay</li>
                        <li className="footerListItem">All destinations</li>
                        <li className="footerListItem">Discover</li>
                        <li className="footerListItem">Travel articles</li>
                        <li className="footerListItem">Reviews</li>
                        <li className="footerListItem">Travel Communities</li>
                    </ul>
                </div>
                <div className="category">
                    <ul className="footerList">
                        <li className="footerListItem">Coronavirus (COVID-19) FAQs</li>
                        <li className="footerListItem">About MUSAFIR.COM</li>
                        <li className="footerListItem">Customer Service help</li>
                        <li className="footerListItem">Partner help</li>
                        <li className="footerListItem">Sustainability</li>
                        <li className="footerListItem">Privacy & Cookie Statement</li>
                    </ul>
                </div>
            </div>
            <div className="developCradite">
                <p>Copyright © 1996–2022 mnin-nahid. All rights reserved.</p>
            </div>
        </div>
    )
}
export default index;