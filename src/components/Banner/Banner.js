import React from 'react';
import Header from '../Header/Header';
import './Banner.css'

import bannerRight from '../../images/banner.png'

const Banner = () => {
    return (
        <>
            <section className='banner-container'>
                <Header></Header>
                <main className='banner-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner-text">
                                    <h1>ProgrammingChamp</h1>
                                    <h4>learn | code | career</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque assumenda, quos commodi harum rem molestias error tenetur atque ipsum ad?</p>
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