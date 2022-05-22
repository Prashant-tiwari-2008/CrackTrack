import React from 'react'
import RouteChangeDetector from '../RouteChangeDetector/RouteChangeDetector';

interface Props {
    text: string
}

const Breadcrumb = (props: Props) => {
    return (
        <div>

            <div className="section page-banner-section bg-color-1">
                <img className="shape-1" src="assets/images/shape/shape-5.png" alt="shape" />
                <img className="shape-2" src="assets/images/shape/shape-6.png" alt="shape" />
                <img className="shape-3" src="assets/images/shape/shape-7.png" alt="shape" />
                <img className="shape-4" src="assets/images/shape/shape-21.png" alt="shape" />
                <img className="shape-5" src="assets/images/shape/shape-21.png" alt="shape" />
                <div className="container">
                    {/* Page Banner Content Start */}
                    <div className="page-banner-content">
                        <h2 className="title">{props.text}</h2>
                        <ul className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">{props.text}</li>
                        </ul>
                    </div>
                    {/* Page Banner Content End */}
                </div>
            </div>
            {/* Page Banner End */}

        </div>
    )
}

export default Breadcrumb;