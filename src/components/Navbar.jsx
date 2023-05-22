import React from "react";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg nav ">
                <div class="container">
                    <img src="../public/image/fender-logo.png" alt="" className="imagen" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-lg-5">
                            <li class="nav-item me-lg-3">
                                <a class="nav-link active text-light fs-5 ms-lg-4" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light fs-5 me-lg-4" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light fs-5 me-lg-4" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light fs-5">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};
export default Navbar;
