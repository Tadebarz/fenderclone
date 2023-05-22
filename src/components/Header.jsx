import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <header className="container-fluid">
                <div className="header">
                    <Navbar></Navbar>
                    <div id="carouselExampleCaptions" class="carousel slide w-100">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../public/image/guitar2.jpg" class="d-block w-100 image-carousel" alt="..." />
                              
                            </div>
                            <div class="carousel-item">
                                <img src="../public/image/guitar1.jpg" class="d-block w-100 image-carousel" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="../public/image/guitar2.jpg" class="d-block w-100 image-carousel" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header