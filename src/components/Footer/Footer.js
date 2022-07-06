import React from 'react';
import './Footer.css'

import app from '../../images/play-sotre.png'
import ssl from '../../images/ssl.png'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="container">
                <div className="row g-4 mx-auto">
                    <div className="col-lg-4 col-md-6 mx-auto">
                        <div className="footer-one">
                            <h2>ProgrammingChamp</h2>
                            <p>A online based modern technology learning platform.</p>
                            <div className="footer-links">
                                <a href="#about">About</a>
                                <a href="#policy">Refund Policy</a>
                                <a href="#faq">FAQ</a>
                                <a href="#career">Career</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mx-auto">
                        <div className="ms-md-5">
                            <h3 className='mb-3'>Get Our App</h3>
                            <a href="#app"><img src={app} alt="googleApp" className='img-fluid' /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mx-auto">
                        <h3 className='mb-3'>Our Payment Method</h3>
                        <a href="#app"><img src={ssl} alt="googleApp" className='img-fluid' /></a>
                    </div>
                </div>
                <p className='copyright-text'>&copy; All Rights Reserved By ProgrammingChamp | 2022</p>
            </div>
        </footer>
    );
};

export default Footer;