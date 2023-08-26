import React from 'react';
import './Profilephoto.css';
import { useNavigate } from 'react-router-dom';

function Profilephoto(){
    const navigate = useNavigate(); // Initialize navigate

    const goToContactMe = () => {
        navigate('/contact-me'); // Navigate to the ContactMe page
    }
    return(
        <section className='profile_sec'>
            <div className='p_content'>
                <p>Hi, I am</p>
                <h2>Shaik Javid Basha</h2>
                <h1>I am Web Developer</h1>
                <button className='get_in_touch'onClick={goToContactMe} >
                    <span>GET IN TOUCH</span>
                </button>
            </div>
            <div className='p_photo'>
                <img src="src\assets\IMG_20230429_125525.jpg"/>
            </div>
        </section>
    );
}

export default Profilephoto