import React, { useState, useEffect } from 'react';
import './ScrollToTopButton2.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Add event listener to window scroll event
        window.addEventListener('scroll', toggleVisibility);
       
    }, []);

    const toggleVisibility = () => {
        // Check if user has scrolled down enough to show the button
        if (window.pageYOffset > 1300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };



    return (
        <div>
            {isVisible && 
                 <div className="scroll-to-top-btn2 trans" >
              <a href="https://facebook.com" className="me-2"><FontAwesomeIcon icon={faFacebook} style={{
                color: '#1877F2', 
                cursor: 'pointer',
                transition: 'color 0.3s ease'}}
                onMouseEnter={(e) => e.target.style.color = '#3b5998'} 
                onMouseLeave={(e) => e.target.style.color = '#1877F2'} />
                </a>
              <a href="https://twitter.com" className="me-2"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="https://instagram.com/haroonlatif12"><FontAwesomeIcon icon={faInstagram} style={{ color: 'purple' }}/></a>
            </div>
            }
        </div>
    );
};

export default ScrollToTopButton;
