import React from 'react';
import './Features.css'
import onlineImg from '../../images/featuresImg/online.png'
import supportImg from '../../images/featuresImg/support.png'
import interviewImg from '../../images/featuresImg/interview.png'
import videoImg from '../../images/featuresImg/video.png'

const Features = () => {
    return (
        <main id='features'>
            <h1 className='section-title'>Our Features</h1>
            <div className="container mt-4">
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 col-md-6 mx-auto">
                        <div className="feature-card">
                            <div className='f-img'>
                                <img src={onlineImg} alt="features" />
                            </div>
                            <div className="f-details">
                                <h5>Online Based Learning</h5>
                                <span>Our learning is full online based. You can learn from us in all over the world.No matter where your are live in just enroll our any development course.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mx-auto">
                        <div className="feature-card">
                            <div className='f-img'>
                                <img src={supportImg} alt="features" />
                            </div>
                            <div className="f-details">
                                <h5>Unlimited Support</h5>
                                <span>When you are coding you will definitely got stuck, there for we givig you unlimited support. If you can't solving your problem we give you 1 to 1 live session support.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mx-auto">
                        <div className="feature-card">
                            <div className='f-img'>
                                <img src={interviewImg} alt="features" />
                            </div>
                            <div className="f-details">
                                <h5>Special Interview Preparation</h5>
                                <span>You are not only learn from us coding but also we will prepare you for the coding interview and we will try to getting you a job in current job market.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mx-auto">
                        <div className="feature-card">
                            <div className='f-img'>
                                <img src={videoImg} alt="features" />
                            </div>
                            <div className="f-details">
                                <h5>Wtach Video When Offline</h5>
                                <span>If you are trouble for your wifi you can easily download our video and watch those video more and more time and practice even more.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Features;