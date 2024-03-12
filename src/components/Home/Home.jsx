import React from 'react'
import coding from '../../assets/home-right.png'
import styles from './Home.module.css'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {

    const onButtonClick = () => {
        const pdfUrl = "https://drive.google.com/file/d/1Hv8dj8st8iUxmUPTBSdfOClJiPeNyZy3/view?usp=sharing";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.click();
    };


    return (
    <section id='Home' className='vh-100 text-center mt-3'>
        <div className="row m-0 align-content-center">
            <div className="col-lg-6">
                <figure className='my-5'>
                        <img src={coding} className='w-75' alt="coding" />
                </figure>
            </div>
                <div className='col-lg-6 d-flex flex-column  justify-content-center HomeDesc'>
                <div className='my-5'>
                    <h2 className={`position-relative titles ${styles.Hello}`}>Hello</h2>
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                'I am Ahmed Mohamed',
                                1000, 
                                'I am Front-End Developer',
                                1000,
                                'I am specialized in React.js',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.8em', display: 'inline-block', backgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, #4458dc, #854fee)' }}                            
                            repeat={Infinity}
                        />
                        <div className='my-4'>

                            <button className={` ${styles.resumeBtn}`} onClick={onButtonClick}>
                            View my Resume
                        </button>
                        </div>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
                <hr />
        </div>
    </section>
    )
}
