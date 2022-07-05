import React from 'react';
import Slider from 'react-slick';
import './Discount.css'

// react slick slider style css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// course images
import web from '../../images/coursesImg/web.jpg'
import app from '../../images/coursesImg/app.jpg'
import python from '../../images/coursesImg/python.jpg'

const Discount = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <main className='discount-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mx-auto">
                        <div className="discount-details">
                            <h1>Get Upto 40% Off For These Courses</h1>
                            <p>Get awesome discounts for particular courses and learn coding more sufficiently😉</p>
                            <button className="custom-btn2 discounts-btn">Get Discounts!</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mx-auto">
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className='single-slider'>
                                    <img className='img-fluid' src={web} alt="course-img" />
                                    <p>Web Design & Development</p>
                                </div>
                                <div className='single-slider'>
                                    <img className='img-fluid' src={app} alt="course-img" />
                                    <p>App Development</p>
                                </div>
                                <div className='single-slider'>
                                    <img className='img-fluid' src={python} alt="course-img" />
                                    <p>Python Course</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Discount;