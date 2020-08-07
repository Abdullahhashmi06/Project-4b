import React from 'react';
import logo from './logo.svg';

// import {styles} from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <a className="navbar-brand" href='#' >
                    <img style={{height: '50px'}} src={logo} alt="logo" />
                    <span id="zapare">Zapare Technologies</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="refresh">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="refresh">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="refresh">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="refresh">Career</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="refresh">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
