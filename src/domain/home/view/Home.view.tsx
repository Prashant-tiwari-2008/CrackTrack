import React from 'react'

const Home = () => {
    return (
        <div>
            {/* Slider Start */}
            <div className="slider-section section bg-color-2">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            {/* Slider Start */}
                            <div className="slider-content">
                                <h5 className="sub-title">developed by top teachers</h5>
                                <h2 className="title">Experience a learning platform that take you next level</h2>
                                <p>World-class training and development programs developed by top teachers</p>
                                <a href="index-2.html#" className="btn btn-primary btn-hover-heading-color">Explore All Courses</a>
                            </div>
                            {/* Slider End */}
                        </div>
                        <div className="col-md-6 col-sm-8">
                            {/* Slider Images Start */}
                            <div className="slider-images-02">
                                <div className="image-shape-01 parallaxed">
                                    <img src="assets/images/shape/shape-11.svg" alt="Shape" />
                                </div>
                                <div className="image-shape-02 parallaxed" />
                                <div className="image-shape-03 parallaxed" />
                                <div className="image">
                                    <img src="assets/images/hero-2.png" alt="Hero" />
                                </div>
                            </div>
                            {/* Slider Images End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider End */}
            {/* Feature Start */}
            <div className="section counter-section feature-section">
                <div className="container">
                    {/* Feature Wrapper Start */}
                    <div className="feature-wrapper">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                            <div className="col">
                                {/* Feature Counter Start */}
                                <div className="single-feature">
                                    <div className="feature-icon">
                                        <img src="assets/images/icon-8.png" alt="Icon" />
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="title">Over 155,000</h4>
                                        <p>Video courses on career skills</p>
                                    </div>
                                </div>
                                {/* Feature Counter End */}
                            </div>
                            <div className="col">
                                {/* Feature Counter Start */}
                                <div className="single-feature">
                                    <div className="feature-icon">
                                        <img src="assets/images/icon-9.png" alt="Icon" />
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="title">Choose from</h4>
                                        <p>Top industry instructors </p>
                                    </div>
                                </div>
                                {/* Feature Counter End */}
                            </div>
                            <div className="col">
                                {/* Feature Counter Start */}
                                <div className="single-feature">
                                    <div className="feature-icon">
                                        <img src="assets/images/icon-10.png" alt="Icon" />
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="title">Lifetime access</h4>
                                        <p>On mobile and desktop</p>
                                    </div>
                                </div>
                                {/* Feature Counter End */}
                            </div>
                        </div>
                    </div>
                    {/* Feature Wrapper End */}
                </div>
            </div>
            {/* Feature End */}
        </div>

    )
}

export default Home