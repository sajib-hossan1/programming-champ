import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <main id='contact'>
            <h1 className="section-title">Contact With Us</h1>
            <div className="container">
                <div className="row g-4 mx-auto">
                    <div className="col-md-12 col-lg-6">
                        <div className="contact-card-left">
                            <h3>Get In Touch</h3>
                            <span>If you have any query about us, feel free to message us.</span>
                            <div className='mb-2'>
                                <i className="fa-solid fa-phone"></i>
                                <span>Phone : +21 123456789</span>
                            </div>
                            <div className='mb-2'>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Location : San Francisco, USA</span>
                            </div>
                            <div className='mb-2'>
                                <i className="fa-solid fa-clock"></i>
                                <span>Business Hours : 9am - 5pm (Sun to Thu)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="contact-from-container">
                            <form className='container-from shadow'>
                                <div className="form-group mb-3">
                                    <label className='mb-2' htmlFor="exampleFormControlTextarea3">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea3" rows="5"></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label className='mb-2' htmlFor="exampleInputText">Your Name</label>
                                    <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label className='mb-2' htmlFor="exampleInputEmail1">Email Address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <button type="submit" className="custom-btn2 contact-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;