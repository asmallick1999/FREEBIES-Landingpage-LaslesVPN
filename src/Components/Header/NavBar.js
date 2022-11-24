import React from 'react'
import Logo from "../../Assets/Logo.svg"

export default function NavBar
    () {
    return (
        <div className='navBar'>

            <img src={Logo} alt="" />
            <div className="navMenu">
                <a href="/">About</a>
                <a href="/">Features</a>
                <a href="/">Pricing</a>
                <a href="/">Testimonials</a>
                <a href="/">Help</a>
            </div>
            <div className="navButton">
                <button className='navBtn1'>Sign In</button>
                <button className='navBtn2'>Sign Up</button>
            </div>
        </div>

    )
}
