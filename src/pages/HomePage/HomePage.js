import React from 'react';

export default function HomePage(props) {

    return (
        <section className="showHomePage">
            <div className="showHomePage__bg">
                <video playsInline="playsinline" autoPlay="autoplay" loop="loop">
                    <source src="./img/homepage/background.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="showHomePage__title">
                <h1>XB Pham</h1>
                <div className="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <p className="text-center fs-5">I'm a frontend developer</p>
                        </div>
                        <div className="carousel-item">
                            <p className="text-center fs-5">I'm a candidate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
