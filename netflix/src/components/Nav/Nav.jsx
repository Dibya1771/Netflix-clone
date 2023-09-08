import React, { useEffect, useState } from 'react'
import Netflixlogo from "../../images/NetFlixLogo.png";
import NetflixAvtar from "../../images/NetflixAvatar.png";
import { Link } from 'react-router-dom';
import "./Nav.css"


const Nav = () => {
    const [show, setShow] = useState(false);
    const NavbarVisibility = () => {
        if (window.scrollY >= 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', NavbarVisibility);
        return () => {
            window.removeEventListener("scroll", NavbarVisibility)
        }
    }, [])
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <Link to={'/'}>
                <img src={Netflixlogo} className='nav-logo' alt='logo' />
            </Link>
            <img src={NetflixAvtar} className='nav-avatar' alt='avatar' />

        </div>
    )
}

export default Nav