import React, { useEffect, useState } from 'react';
import "./ScrollToTop.css"

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
    }, []);
    return (
        <div className='scroll-to-top'>
            {isVisible && (
                <div onClick={ScrollToTop}>
                    <i class="fas fa-arrow-circle-up fa-2x"></i>
                </div>)}
        </div>
    )
}

export default ScrollToTop;