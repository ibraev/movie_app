import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css"


const Header = () => {
    return (
        <div className="container">
            <nav className="navigate">
                <ul>
                    <NavLink activeClassName="active-link" className="navigate-link" to="/">
                        Home
                    </NavLink>
                    <NavLink activeClassName="active-link" className="navigate-link" to="/favorites">
                        Favorites
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;