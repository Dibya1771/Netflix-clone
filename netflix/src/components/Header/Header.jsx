import React from 'react';
import "./Header.css";
import { useNavigate, Link } from 'react-router-dom';
// import logo from "../../images/NetFlixLogo.png";

const Header = () => {
    const navigate = useNavigate();

    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/login');
    }
    return (

        <div className='showcase-top'>
            <Link className='head-logo' to="/">
                <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
            </Link>
            <div className='top-nav-right'>

                <select>
                    <option >&#127760; English</option>
                    <option>&#127760; Hindi</option>
                </select>

                <button className="btn-header" onClick={clickHandler}>Sign In</button>
            </div>

        </div>


    )
}

export default Header