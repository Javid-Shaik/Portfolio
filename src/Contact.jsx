import React, { useEffect, scrollTo } from "react";
import './contact.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Contact() {

    const navigate = useNavigate(); // Initialize navigate

    const goToContactMe = () => {
        navigate('/contact-me'); // Navigate to the ContactMe page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const scrollToHome = () => {
        window.scrollTo({ top: 0});
    }
    return (
        <div className="contact" id="contact">
            <div className="con_container">
                <div className="con_content">
                    <div className="btn_desc">
                        <p>Let's Build Something together</p>
                        <button className='get_in_touch contact_btn' onClick={goToContactMe}>
                            <span>GET IN TOUCH</span>
                        </button>
                    </div>
                </div>
                <div className="links">
                    <a href="https://github.com/Javid-Shaik/"><FontAwesomeIcon icon={faGithub} /> GITHUB</a>
                    <a href="https://www.linkedin.com/in/shaik-javid-basha-b03790267/"><FontAwesomeIcon icon={faLinkedin} /> LINKEDIN</a>
                    <a href="https://www.instagram.com/javidshaikk._"><FontAwesomeIcon icon={faInstagram} /> INSTAGRAM</a>
                    <a href="mailto:shaikjavidbasha528@gmail.com"><FontAwesomeIcon icon={faEnvelope} />  Gmail</a>
                </div>
            </div>
            <div className="copyright">
                <p>© Copyright 2023 &nbsp;&nbsp;&nbsp;&nbsp;-<a href={`${window.location.origin}#home`} onClick={scrollToHome}>Shaik Javid Basha</a></p>
            </div>
            <div className="endbar"></div>
        </div>
    );
}

export default Contact;
