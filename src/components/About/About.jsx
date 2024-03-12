import React from 'react'
import img from '../../assets/about-us.png'
import styles from './About.module.css'
import { Link } from 'react-router-dom'
export default function About() {

    const onButtonClick = () => {
        const pdfUrl = "mailto:aabdalnaby073@gmail.com";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.click();
    };


    return (
    <section id='About' className={`${styles.AboutSection}`}>

        <div className="row m-0">

            <div className="col-lg-6 my-5 d-flex align-items-center ">
                    <div className="inner">

                        <div className="content">
                            <h2 className={`titles position-relative ${styles.AboutHeader} my-3 text-center`}>About Me</h2>
                            <p className='text-desc p-4'>As a passionate third-year student in the Faculty of Computers and Artificial Intelligence at Cairo University, my commitment to expanding knowledge and skills within the field of computer science is unwavering. My primary focus as a React developer has allowed me to establish a robust foundation in front-end development, fostering a deep understanding of building responsive and user-friendly interfaces. In my pursuit of continuous improvement, I am actively seeking opportunities that not only align with my current expertise but also challenge me to explore new horizons in web development. I am determined to contribute meaningfully to dynamic projects that resonate with my passion for creating impactful digital experiences.
                            </p>
                        </div>
                        <div className={`${styles.btns} d-flex justify-content-around `}>
                                <button className= {styles.mailBtn}>
                                    <Link className= {`${styles.link}`}
                                        to="mailto:aabdalnaby073@gmail.com"
                                        >
                                            Send Me Mail
                                    </Link>
                                    </button>    


                                <button className={styles.linkedInBtn}>
                                    <Link className= {`${styles.link}`}
                                        to="https://www.linkedin.com/in/ahmed-mohamed-b44b7a240/"
                                    >
                                        View My LinkedIn
                                    </Link>
                                    </button>                       
                                            
                                </div>                    
                    </div>
                    </div>


                <div className="col-lg-6 my-5 ">
                    <figure className='d-flex'>
                <img src= {img} className='w-75 mx-auto' alt="" />
                    </figure>
                </div>
                </div>




    </section>
    )
}
