import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className='logo'> <Link to="/">MUSAFIR.COM</Link></span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
