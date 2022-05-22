import React from 'react'

const PhoneNavbar:React.FC = () => {
    return (
        <div>  {/* Offcanvas Start */}
            <div className="offcanvas offcanvas-start" id="offcanvasMenu">
                <div className="offcanvas-header">
                    {/* Offcanvas Logo Start */}
                    <div className="offcanvas-logo">
                        <a href="index.html"><img src="assets/images/logo.png" /></a>
                    </div>
                    {/* Offcanvas Logo End */}
                    <button className="btn-close" data-bs-dismiss="offcanvas" />
                </div>
                <div className="offcanvas-body">
                    <div className="offcanvas-menu">
                        <ul className="main-menu">
                            <li>
                                <a className="active" href="index-2.html#">Home</a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Home 01</a></li>
                                    <li><a className="active" href="index-2.html">Home 02</a></li>
                                    <li><a href="index-3.html">Home 03</a></li>
                                    <li><a href="index-4.html">Home 04</a></li>
                                    <li><a href="index-5.html">Home 05</a></li>
                                    <li><a href="index-6.html">Home 06</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="index-2.html#">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About 01</a></li>
                                    <li><a href="about-2.html">About 02</a></li>
                                    <li><a href="instructor.html">Instructor</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="login-register.html">Login &amp; Register</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="index-2.html#">Courses</a>
                                <ul className="sub-menu">
                                    <li><a href="course-list.html">Course List</a></li>
                                    <li><a href="course-grid.html">Course Grid</a></li>
                                    <li><a href="course-details.html">Course Details</a></li>
                                </ul>
                            </li>
                            <li><a href="index-2.html#">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                    <li><a href="blog-list.html">Blog List</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Offcanvas End */}</div>
    )
}

export default PhoneNavbar;