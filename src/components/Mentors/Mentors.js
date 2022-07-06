import React from 'react';
import './Mentors.css'

// mentors images
import mentor1 from '../../images/mentors/1.jpg'
import mentor2 from '../../images/mentors/2.jpg'
import mentor3 from '../../images/mentors/3.jpg'
import mentor4 from '../../images/mentors/4.jpg'

const Mentors = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <main className='mentors-container'>
            <h1 className="section-title">Your Mentors</h1>
            <div className="container">
                <div className="row g-4 mx-auto">
                    <div className="col-lg-3 col-md-6">
                        <div className="mentor-card">
                            <img src={mentor1} alt="mentorImage" />
                            <h3>Amelia Anderson</h3>
                            <h6>Product Manager</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mentor-card">
                            <img src={mentor2} alt="mentorImage" />
                            <h3>Armor Lio</h3>
                            <h6>Professional Developer</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mentor-card">
                            <img src={mentor3} alt="mentorImage" />
                            <h3>Dewyan Lus</h3>
                            <h6>Professional Developer</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mentor-card">
                            <img src={mentor4} alt="mentorImage" />
                            <h3>Kettle Lin</h3>
                            <h6>Professional Developer</h6>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Mentors;