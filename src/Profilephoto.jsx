import React,{useState, useEffect} from 'react';
import './Profilephoto.css';
import { useNavigate } from 'react-router-dom';

function Profilephoto(){
    const navigate = useNavigate(); // Initialize navigate
    const [animateTyping, setAnimateTyping] = useState(false);

    useEffect(() => {
        setAnimateTyping(true);
      }, []);

    const goToContactMe = () => {
        navigate('/contact-me'); // Navigate to the ContactMe page
    }
    return(
        <section className='profile_sec'>
            <div className='p_content'>
                <p>Hi, I am</p>
                <h2 className={`typing-effect typing-cursor ${animateTyping ? 'animate' : ''}`} style={{maxWidth:'fit-content'}} >Shaik Javid Basha</h2>
                <h1>Turning Ideas into Seamless Web Solutions</h1>
                <button className='get_in_touch'onClick={goToContactMe} >
                    <span>GET IN TOUCH</span>
                </button>
            </div>
            <div className='p_photo'>
                <img src="i2.png"/>
            </div>
        </section>
    );
}

export default Profilephoto


