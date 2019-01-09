import React from 'react';
import { Link } from 'react-router-dom';


export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/"><h1>Smart Switch</h1></Link>
                <button className="button button--link" >Logout</button>
            </div>
        </div>
    </header>
);

export default Header;