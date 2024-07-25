import React from 'react'
import styles from './Projects.module.css'
import CineChil from '../../assets/CineChill.png'
import weather from '../../assets/weather.png'
import game from '../../assets/Game.png'
import freshCart from '../../assets/FreshCart.png'
import SnapGram from '../../assets/SnapGram.png'

import { Link } from 'react-router-dom'
export default function Projects() {
    return (
        <section id='Projects' className={`${styles.ProjectsSection} mt-5`}>
            <h2 className={`text-center titles my-5 ${styles.projectsHeader} position-relative`}>Projects</h2>
            <div className={`row mx-0 my-3 px-4 `}>
                <div className="col-lg-7">
                    <div className="ProjectDesc">
                        <h3 className={`titles position-relative ${styles.weatherHeader} my-3 text-center`}>Weather</h3>
                        <p className='text-desc p-4'>
                            I developed a dynamic and user-friendly weather application using a combination of Vanilla JavaScript, HTML, CSS, and Bootstrap. This web application provides real-time weather updates with a focus on delivering essential information at a glance. Users can easily access key weather metrics such as maximum temperature, minimum temperature, current temperature, wind speed, humidity, and more, ensuring a comprehensive overview of the current weather conditions. The user interface is designed for optimal usability, incorporating responsive design principles to guarantee a seamless experience across various devices. This project not only showcases my proficiency in front-end technologies but also demonstrates my ability to create intuitive and efficient applications that enhance user experience.
                            <p><span className='text-danger'>Note :</span>Make sure you enable unsecure content on your browser to make the Api work</p>
                        </p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="ProjectImg position-relative my-3 rounded">
                        <img src={weather} className='w-100 rounded' alt="Weather App" />
                        <div className={`${styles.layer} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center text-white rounded`}>
                            <a className= {`${styles.link}`}
                            href="https://aabdalnaby073.github.io/WeatherApp/"
                            >
                                <i className="fa-solid fa-link fa-3x"></i>
                            </a>                 
                        </div>
                    </div>
                </div>
            </div>




            <div className={`row mx-0 my-4 px-4 ${styles.ProjectRow}`}>
                <div className="col-lg-5">
                    <div className="ProjectImg position-relative my-3 rounded">
                        <img src={game} className='w-100 rounded' alt="Game App" />
                        <div className={`${styles.layer} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center text-white rounded`}>
                            <a className={`${styles.link}`}
                                href="https://aabdalnaby088.github.io/GameGlyphic/"
                                >
                                <i className="fa-solid fa-link fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="ProjectDesc">
                        <h3 className={`titles position-relative ${styles.GameHeader} my-3 text-center`}>GameGlyphic</h3>
                        <p className='text-desc p-4'>
                            I used my skills in Vanilla JavaScript, Bootstrap, CSS, and HTML to create a user-friendly website for gamers. The site lets users easily explore different game categories and find detailed information about each game. You can search for specific games and filter them by categories. It's a simple and fun way for gamers to discover and learn more about their favorite games. This project showcases my ability to build a website that looks good and works well, making it enjoyable for users who love gaming.
                        </p>
                    </div>
                </div>

            </div>




            <div className={`row mx-0 my-4 px-4`}>

                <div className="col-lg-7">
                    <div className="ProjectDesc">
                        <h3 className={`titles position-relative ${styles.CineChillHeader} my-3 text-center`}>CineChill</h3>
                        <p className='text-desc p-4'>
                            CineChill is an entertainment web application meticulously crafted using the
                            TMDB API to deliver a comprehensive and seamless user experience. This

                            product boasts an array of features, including the ability to browse media with
                            genre filters, conduct searches, and utilize an appealing slider showcasing the
                            day's popular movies. The application also offers in-depth movie details, video
                            trailers, and personalized recommendations for users exploring specific titles.
                            To enhance performance and user navigation, I employed advanced
                            technologies such as React Router for seamless single-page application (SPA)
                            functionality. Additionally, Context API was utilized for efficient state
                            management, while React Helmet ensured optimal SEO performance. The
                            incorporation of React Detect Offline contributes to a robust offline experience.
                            For media playback, React Player was integrated, and the sleek slider
                            component, Slick Slider, enhances the visual appeal of the application. These
                            technologies collectively contribute to creating a sophisticated and
                            user-friendly entertainment platform.
                        </p>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="ProjectImg position-relative my-3 rounded">
                        <img src={CineChil} className='w-100 rounded' alt="Game App" />
                        <div className={`${styles.layer} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center text-white rounded`}>
                            <a className={`${styles.link}`}
                                href="https://aabdalnaby088.github.io/CineChill-MoviesSPA/">
                                <i className="fa-solid fa-link fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>


            </div>





            <div className={`row mx-0 my-4 px-4 ${styles.ProjectRow}`}>



                <div className="col-lg-5">
                    <div className="ProjectImg position-relative my-3 rounded">
                        <img src={freshCart} className='w-100 rounded' alt="Game App" />
                        <div className={`${styles.layer} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center text-white rounded`}>
                            <a className={`${styles.link}`}
                                href="https://aabdalnaby088.github.io/FreshCart-Ecommerce/">
                                <i className="fa-solid fa-link fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="ProjectDesc">
                        <h3 className={`titles position-relative ${styles.FreshCartHeader} my-3 text-center`}>FreshCart</h3>
                        <p className='text-desc p-4'>
                            Freachcart is an e-commerce application offering a range of features for a
                            seamless shopping experience. Users can explore products, browse through
                            categories and brands, and create wishlists with the flexibility to add or remove
                            items. Each product has its own detailed page, and the shopping cart allows
                            users to manage their selections, including adjusting quantities. Payment
                            options include both cash on delivery and credit card transactions. To optimize
                            functionality and user interface, I integrated several libraries, such as React
                            Router DOM for navigation, Context API for state management, React Query for
                            efficient data fetching, Slick Slider for enhanced visuals, React Helmet for SEO
                            optimization, and Detect Offline for a resilient offline experience.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`row mx-0 my-4 px-4 ${styles.ProjectRow}`}>


                <div className="col-lg-7">
                    <div className="ProjectDesc">
                        <h3 className={`titles position-relative ${styles.SnapGramHeader} my-3 text-center`}>SnapGram</h3>
                        <p className='text-desc p-4'>
                            SnapGram is a new social media app that is easy to use and full of features. Built with React.js, Appwrite, React Query, TypeScript, Shadcn, and Tailwind CSS, SnapGram is fast, responsive, and looks great. Our strong authentication system keeps your account secure and private. On the Explore Page, you can discover posts and see top creators. You can like and save posts, and manage them on special pages. Each post has its own detailed page with related posts to keep you engaged.

                            On your Profile Page, you can see all your liked posts and edit your profile. You can also browse and explore other users' profiles and posts. Creating a post is simple with our user-friendly Create Post Page, which includes easy file management and a drag-and-drop feature. You can edit your posts anytime. Our responsive design with a bottom bar makes it feel like a mobile app, and React Query helps with fast and efficient data loading. Using Appwrite as our backend service, SnapGram makes backend development easy with features like authentication, database management, and file storage.
                        </p>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="ProjectImg position-relative my-3 rounded">
                        <img src={SnapGram} className='w-100 rounded' alt="Game Application" />
                        <div className={`${styles.layer} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center text-white rounded`}>
                            <a className={`${styles.link}`}
                                href="https://aabdalnaby088.github.io/SnapGram/">
                                <i className="fa-solid fa-link fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}
