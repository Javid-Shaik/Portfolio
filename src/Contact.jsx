import React, { useEffect, scrollTo } from "react";
import './contact.css';
import { useNavigate } from 'react-router-dom';
// import { colors } from "@material-ui/core";


function Contact() {

    const navigate = useNavigate(); // Initialize navigate

    const goToContactMe = () => {
        navigate('/contact-me'); // Navigate to the ContactMe page
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <a href="https://github.com/Javid-Shaik/">+ GITHUB</a>
                    <a href="https://www.linkedin.com/in/shaik-javid-basha-b03790267/">+ LINKEDIN</a>
                    <a href="https://www.instagram.com/javidshaikk._">+ INSTAGRAM</a>
                </div>
            </div>
            <div className="copyright">
                <p>© Copyright 2023 - Shaik Javid Basha</p>
            </div>
            <div className="endbar"></div>
        </div>
    );
}

export default Contact;
