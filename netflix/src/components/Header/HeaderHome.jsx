import React from 'react';
import Header from './Header';
import "./Header.css";
import { useNavigate, Link } from 'react-router-dom';

export const HeaderHome = () => {
    return (
        <header className='showcase'>
            <Header />
            <div className='showcase-content'>
                <h1>Unlimited movies,Tv shows and more.</h1>
                <p>Join Today. Cancel Anytime.</p>
                <p >Ready to watch? Enter your email to create or restart your membership.</p>
                <div>
                    <input type="text" className="form-control" placeholder="Email Address" />
                    <Link to={'/Show'}>
                        <button className="btn-start">Get Started<i className="fas fa-chevron-right btn-icon"></i></button>

                    </Link>

                </div>

            </div>
        </header>
    )
}
