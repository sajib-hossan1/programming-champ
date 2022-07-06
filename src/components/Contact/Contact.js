import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <main id='contact'>
            <h1 className="section-title">Contact With Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="contact-card-one">
                            <h3>Get In Touch</h3>
                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quaerat.</span>
                            <div>
                                <i class="fa-solid fa-phone"></i>
                                <span>Phone : +21 123456789</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-location-dot"></i>
                                <span>Location : San Francisco, USA</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-clock"></i>
                                <span>Business Hours : 9:00 - 5:00 (Sun to Thu)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7"></div>
                </div>
            </div>
        </main>
    );
};

export default Contact;