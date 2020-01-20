import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = ({ className, ...props }) => (
    <div className={`header ${className}`}>
        <div className="contenedor">
            <div className="logo">
                <Link to="/">
                    <span className="enlace">{props.marca}</span>
                </Link>
            </div>
            <div className="iconos">
                <Link to="/about">About</Link>
            </div>
        </div>
    </div>
)

export default Header;