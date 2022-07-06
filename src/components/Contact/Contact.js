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
                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quaerat.</span>
                            <div className='mb-2'>
                                <i class="fa-solid fa-phone"></i>
                                <span>Phone : +21 123456789</span>
                            </div>
                            <div className='mb-2'>
                                <i class="fa-solid fa-location-dot"></i>
                                <span>Location : San Francisco, USA</span>
                            </div>
                            <div className='mb-2'>
                                <i class="fa-solid fa-clock"></i>
                                <span>Business Hours : 9:00 - 5:00 (Sun to Thu)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="contact-from-container">
                            <form className='container-from shadow'>
                                <div class="form-group mb-3">
                                    <label className='mb-2' for="exampleFormControlTextarea3">Your Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea3" rows="5"></textarea>
                                </div>
                                <div class="form-group mb-3">
                                    <label className='mb-2' for="exampleInputText">Your Name</label>
                                    <input type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp"/>
                                </div>
                                <div class="form-group mb-3">
                                    <label className='mb-2' for="exampleInputEmail1">Email Address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <button type="submit" class="custom-btn2 contact-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;