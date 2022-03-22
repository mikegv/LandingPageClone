import React from 'react';
import './Navbar.css'
import JustwatchLogobig from '../../images/JustWatch-logo-large.png'

function Navbar() {
    return (
        <div className='navArea'>
                        <img src={JustwatchLogobig} alt='big logo' /> 

        <ul className='navbar'>
            <li><a href='#'>New</a></li>
            <li><a href='#'>Popular</a></li>
            <li><input placeholder='Search for movies or TV shows' /></li>
            <li><a href='#'>Sign In</a></li>
        </ul>
        </div>
    );
}

export default Navbar;