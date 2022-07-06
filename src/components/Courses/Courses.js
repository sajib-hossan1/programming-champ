import React from 'react';
import './Courses.css'
import web from '../../images/coursesImg/web.jpg'
import app from '../../images/coursesImg/app.jpg'
import arti from '../../images/coursesImg/arti.jpg'
import cc from '../../images/coursesImg/c++.jpg'
import data from '../../images/coursesImg/data.png'
import python from '../../images/coursesImg/python.jpg'

const Courses = () => {
    return (
        <main id='courses'>
            <h1 className="section-title">Our Courses</h1>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 mx-auto">
                        <div className="course-card">
                            <div className="course-img">
                                <img src={web} alt="courseImage" className='img-fluid' />
                            </div>
                            <div className="course-details">
                                <h5>Web Design and Development</h5>
                                <h6>Mentor : Sajib Hossan</h6>
                                <h6 className='price'>Price : $45</h6>
                                <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet(a private network)...</p>
                            </div>
                            <button className="custom-btn2 course-btn">See More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mx-auto">
                        <div className="course-card">
                            <div className="course-img">
                                <img src={app} alt="courseImage" className='img-fluid' />
                            </div>
                            <div className="course-details">
                                <h5>App Development</h5>
                                <h6>Mentor : Armor Lio</h6>
                                <h6 className='price'>Price : $55</h6>
                                <p>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise...</p>
                            </div>
                            <button className="custom-btn2 course-btn">See More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mx-auto">
                        <div className="course-card">
                            <div className="course-img">
                                <img src={arti} alt="courseImage" className='img-fluid' />
                            </div>
                            <div className="course-details">
                                <h5>Artificial Intelligence</h5>
                                <h6>Mentor : John Abraham</h6>
                                <h6 className='price'>Price : $49</h6>
                                <p>Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans...</p>
                            </div>
                            <button className="custom-btn2 course-btn">See More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mx-auto">
                        <div className="course-card">
                            <div className="course-img">
                                <img src={cc} alt="courseImage" className='img-fluid' />
                            </div>
                            <div className="course-details">
                                <h5>C++</h5>
                                <h6>Mentor : Dewyan Lus</h6>
                                <h6 className='price'>Price : $65</h6>
                                <p>C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on...</p>
                            </div>
                            <button className="custom-btn2 course-btn">See More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mx-auto">
                        <div className="course-card">
                            <div className="course-img">
                                <img src={data} alt="courseImage" className='img-fluid' />
                            </div>
                            <div className="course-details">
                                <h5>Data Structure</h5>
                                <h6>Mentor : Kettle Lin</h6>
                                <h6 className='price'>Price : $60</h6>
                                <p>Data structures serve as the basis for abstract data types (ADT). The ADT defines the logical form of the data type. Data structure implements the physical form...</p>
                            </div>
                            <button className="custom-btn2 course-btn">See More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mx-auto">
                        <div className="course-card">
                            <div className="course-img">
                                <img src={python} alt="courseImage" className='img-fluid' />
                            </div>
                            <div className="course-details">
                                <h5>Jhankar Mahbub</h5>
                                <h6>Mentor : Jhankar Mahbub</h6>
                                <h6 className='price'>Price : $55</h6>
                                <p>Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant...</p>
                            </div>
                            <button className="custom-btn2 course-btn">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Courses;