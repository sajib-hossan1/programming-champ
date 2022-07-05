import React, { useState } from 'react';
import './Header.css'

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    return (
        <header>
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        <span>{`< ProgrammingChamp />`}</span>
                    </a>
                    <button onClick={() => setHeaderActive(!headerActive)} className="navbar-toggler-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='navbar-icon'>
                        {
                            headerActive ? <i className="fa-solid fa-xmark x"></i> : <i className="fa-solid fa-bars-staggered"></i>
                        }
                    </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href='#home'>Home</a>
                        <a className="nav-link" href="#features">Features</a>
                        <a className="nav-link" href="#courses">Courses</a>
                        <a className="nav-link" href="#contact">Contact</a>
                        <a className="nav-link me-3" href="#faq">Faq</a>
                        <button className="custom-btn login-btn">Log In</button>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;