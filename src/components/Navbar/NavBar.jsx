import React from 'react';
import { Link } from "react-scroll";
import styles from './Navbar.module.css'

export default function NavBar() {
    return (



        <nav className="navbar navbar-expand-lg bg-secondary-subtle position-sticky top-0 w-100 z-3">
            <div className="container">
                <Link  className={` ${styles.brand}`} smooth={true} spy={true}
                    delay={0}
                    offset={-120}
                    to="Home">
                    Ahmed's Portfolio
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex flex-row my-2 my-md-0" >
                        <li>  
                            <a href="https://www.facebook.com/profile.php?id=100063503326411&mibextid=kFxxJD"><i className='fa-brands fa-solid fa-facebook-f'></i></a>
                        </li>
                        <li>  
                            <a href="https://github.com/aabdalnaby088"><i className='fa-brands fa-solid fa-github'></i></a>
                        </li>
                        <li>  
                            <a href="https://www.linkedin.com/in/ahmed-mohamed-b44b7a240/"><i className='fa-brands fa-solid fa-linkedin'></i></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li>
                            <Link activeClass="active" className='underlineHover' smooth={true} spy={true}
                                delay={0}
                                offset={-120}
                                to="Home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" className='underlineHover' smooth={true} spy={true}
                                delay={0}
                                offset={-120}
                                to="About">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" className='underlineHover'
                                delay={0}
                                offset={-120}
                            smooth={true} spy={true} to="Projects">
                                Projects
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>



/* <div className='text-center mb-4'>
            <header className="nav d-flex justify-content-center">
                <nav >
                    <ul >
                        <li>
                            <Link activeClass="active" className='underlineHover' smooth = {true} spy = {true}
                            delay={0}
                            offset={-120}
                            to="Home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" className='underlineHover' smooth = {true} spy = {true}
                                delay={0}
                                offset={-120}
                            to="About">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" className='underlineHover' smooth = {true} spy = {true} to="blog">
                                BLOG
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" className='underlineHover' smooth spy to="contact">
                                CONTACT ME
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

</div> */
    );
}
