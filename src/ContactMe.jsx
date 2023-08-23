import React from "react";
import './contactme.css';
function ContactMe(){
    return (
        <div className="contact_me">
            <p>LET'S BUILD A THING</p>
            <ul>
                <li><input type="text" name="fname" placeholder="FIRST NAME *"/><input type="text" name="lname" placeholder="LAST NAME *"/></li>
                <li><input type="text" name="email" placeholder="EMAIL *"/><input type="number" name="phone" placeholder="PHONE"/></li>
                <li><input type="text" name="subject" placeholder="SUBJECT *"/></li>
                <li><input type="text" name="message" placeholder="MESSAGE *"/></li>
                <li><input type="submit" name="submit" placeholder="SUBMIT"/></li>
            </ul>
        </div>
    );
}
export default ContactMe