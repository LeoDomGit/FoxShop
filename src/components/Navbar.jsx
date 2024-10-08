import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
      setIsCollapsed(!isCollapsed);
    };
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <nav className="navbar">
                            <Link className="navbar-brand" to="/index">
                                <img src="assets/logo.png" alt="Logo" width="60" height="60" />
                            </Link>
                        </nav>

                        <button
                            className="navbar-toggler button-menu"
                            type="button"
                            onClick={toggleNavbar}
                            aria-controls="navbarSupportedContent"
                            aria-expanded={!isCollapsed}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                    <Link className="nav-link nav-hover fz fw-medium" aria-current="page" to="/"><i className="fa-solid fa-envelope-open-text"></i> Trang chủ</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link nav-hover fz fw-medium" aria-current="page" to="/contact"><i className="fa-solid fa-envelope-open-text"></i> Contact</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link nav-hover fz fw-medium" aria-current="page" to="/faq"><i className="fa-solid fa-circle-question"></i> FAQ</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link nav-hover fz fw-medium" aria-current="page" to="/blog"><i className="fa-solid fa-book-open"></i> Blog</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link nav-hover fz fw-medium" aria-current="page" to="/shop"><i className="fa-solid fa-store"></i> Shop</Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                    <div className="search-icon">
                                        <a className="nav-link nav-hover" aria-current="page" href="#">
                                            <i className="fas fa-search"></i>
                                        </a>
                                        <input type="search" className="form-control search-input" placeholder="Search..." />
                                    </div>
                                </li>

                                <li className="nav-item px-2">
                                    <Link className="nav-link nav-hover" aria-current="page" to="/wishlist"><i className="fa-solid fa-heart"></i></Link>
                                </li>

                                <li className="nav-item px-2">
                                    <Link className="nav-link nav-hover" aria-current="page" to="/cart">
                                        <i className="fa-solid fa-cart-shopping position-relative cart-icon">
                                            <span className="position-absolute badge ms-auto badge_content">
                                                3
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </i>
                                    </Link>
                                </li>

                                <li className="nav-item px-2">
                                    <a
                                        className="nav-link nav-hover"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseWidthExample"
                                        aria-expanded="false"
                                        aria-controls="collapseWidthExample"
                                    >
                                        <i className="fa-solid fa-user"></i>
                                    </a>
                                    <div className="dropdown-menu login_box" id="collapseWidthExample">
                                        <Link className="dropdown-item login_box-item" to="/signin" id="signIn">Sign in</Link>
                                        <Link className="dropdown-item login_box-item" to="/login" id="logIn">Log in</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar