import React from 'react'
import NavBar from '../Navbar/NavBar'
import Home from '../Home/Home.jsx'
import About from '../About/About.jsx'
import Projects from '../Projects/Projects.jsx'
import { Helmet } from 'react-helmet'

export default function Layout() {
    return (
    <>
            <Helmet>
                <title>Ahmed's Portfolio</title>
            </Helmet>
    <NavBar/>
    <Home />
    <About />
    <Projects/>
    </>
    )
}
