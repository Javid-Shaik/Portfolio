import React from "react";
import './contactme.css';
import Contact from "./Contact";
import { useEffect  , useState} from "react";

import { ToastContainer, toast } from 'react-toastify'; // to display the toast message
import 'react-toastify/dist/ReactToastify.css';

function ContactMe(){
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      }

    const [formData, setFormData] = useState({
        fname: '',
        lname:'',
        email: '',
        subject: '',
        message: ''
      });
      const [emailValid, setEmailValid] = useState(true);

      const handleSubmit = async (e) => {
        e.preventDefault(); // preventing the form from submitting
        
        if (!emailValid) {
            toast.error('Please enter a valid email address');
            return;
          }
        if (
            formData.fname.trim() === '' ||
            formData.lname.trim() === '' ||
            formData.subject.trim() === '' ||
            formData.message.trim() === ''
            ) {
                toast.error('Please fill in all required fields');
                return;
        }
        
        try {
          const response = await fetch('http://localhost:3001/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          if (response.ok) {
            // Provide feedback to the user that the email was sent
            toast.success('Email sent successfully'); 
            console.log('Email sent successfully');

          } else {
            toast.success('Failed to send email');
            console.error('Failed to send email');
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'email') {
            setEmailValid(validateEmail(value));
        }
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      return (
        <>
        <div className="contact_me">
            <p className="c_t">LET'S BUILD A THING</p>
            <form method="POST" onSubmit={handleSubmit}>
                <ul>
                    {(formData.fname.trim() === '' || formData.lname .trim() === '') && <p className="error-message">* required</p>}
                    <li className="name-details">
                        <input type="text" name="fname" placeholder="FIRST NAME *"onChange={handleChange}/>
                        <input type="text" name="lname" placeholder="LAST NAME *"onChange={handleChange}/>
                    </li>
                    {!emailValid && <p className="error-message">Invalid email address</p>}
                    <li className="email-phone-details">
                        <input type="text" name="email" placeholder="EMAIL *" onChange={handleChange} className={emailValid ? '' : 'invalid'} />
                        
                        <input type="number" name="phone" placeholder="PHONE"onChange={handleChange}/>
                    </li>
                    {formData.subject.trim() === '' && <p className="error-message">* required</p>}
                    <li className="subject">
                        <input type="text" name="subject" placeholder="SUBJECT *"onChange={handleChange}/>
                    </li>
                    {formData.message.trim() === '' && <p className="error-message">* required</p>}
                    <li className="message">
                        <input type="text" name="message" placeholder="MESSAGE *"onChange={handleChange}/>
                    </li>
                    <li><input type="submit" name="submit" value="SEND IT"/></li>
                </ul>
            </form>
        </div>
        <Contact></Contact>
        <ToastContainer />
        </>

      );
    }
export default ContactMe;