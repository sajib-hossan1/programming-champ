import React from 'react';
import Header from '../Header/Header';
import './Banner.css'

import bannerRight from '../../images/banner.png'

const Banner = () => {
    return (
        <>
            <section id='home' className='banner-container'>
                <Header></Header>
                <main className='banner-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner-text">
                                    <h1>ProgrammingChamp</h1>
                                    <h4>learn | code | career</h4>
                                    <p className='m-0'>Effectively learn coding from our awesome experienced Developers.</p>
                                    <p>Let's build up your career easier!</p>
                                    <button className='custom-btn banner-btn'>View Courses</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="banner-img">
                                    <img src={bannerRight} className="img-fluid p-3" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
            
    );
};

export default Banner;