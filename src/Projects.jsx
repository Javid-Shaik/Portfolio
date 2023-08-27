import React from 'react';
import './Projects.css';
function Projects() {
    return (
        <div className='projects' >
            <div className="pro_header" >
                <h1 id="projects">Projects</h1>
            </div>
            <div className="full_container blue-container">
                <div className="container">
                    <div className="pro_title">
                        <h2>Library Management System</h2>
                    </div>
                    <div className="projects_content">
                        <p>Crafted a dynamic Library Management System (LMS) web app, facilitating efficient content organization and delivery. Combined a user-friendly interface with Django's robust backend, ensuring seamless performance and integration.</p>
                    </div>
                    <div className="tools">
                        <h3>Development Tools</h3>
                        <p>+ Django</p>
                        <p>+ Html</p>
                        <p>+ Css</p>
                        <p>+ Git</p>
                    </div>
                    <div className='pro_button' >
                        <button className='view_project' >
                            <span>VIEW PROJECT</span>
                        </button>
                    </div>
                </div> 
                <div className="pro_image">
                    <div className="frame">
                        <img src="src\assets\Screenshot (7).png" alt="Project Screenshot"/>
                    </div>
                    <div className="shelf-bar"></div>
                </div>
            </div>
            <div className="full_container grey-container">
                <div className="container">
                    <div className="pro_title">
                        <h2>Billing Software</h2>
                    </div>
                    <div className="projects_content">
                        <p>Created a user-friendly billing software with Python and Tkinter, utilizing a secure SQLite3 database for customer info, transactions, and seamless bill management. Empowered by features like bill generation, printing, and search for enhanced efficiency and customer service.</p>
                    </div>
                    <div className="tools">
                        <h3>Development Tools</h3>
                        <p>+ Python</p>
                        <p>+ Tkinter</p>
                        <p>+ SQL</p>
                    </div>
                    <div className='pro_button'>
                        <button className='view_project' style={{ backgroundColor: 'grey' }}>
                            <span>VIEW PROJECT</span>
                        </button>
                    </div>
                </div> 
                <div className="pro_image">
                    <div className="frame">
                        <img src="src\assets\Billing.png" alt="Project Screenshot"/>
                    </div>
                    <div className="shelf-bar"></div>
                </div>
            </div>
            <div className="full_container">
                <div className="container">
                    <div className="pro_title">
                        <h2>Speed Typing Lite</h2>
                    </div>
                    <div className="projects_content">
                        <p>Designed Speed Typing Lite, a web-based typing game using HTML, CSS, and JavaScript. Challenge yourself with random words under time constraints, boosting your score with each accurate keystroke.</p>
                    </div>
                    <div className="tools">
                        <h3>Development Tools</h3>
                        <p>+ Html</p>
                        <p>+ JavaScript</p>
                        <p>+ CSS</p>
                    </div>
                    <div className='pro_button'>
                        <button className='view_project' style={{ backgroundColor: '#1b1b1b' }}>
                            <span><a href='https://speed-typing-jk.netlify.app/'>VIEW PROJECT</a></span>
                        </button>
                    </div>
                </div> 
                <div className="pro_image">
                    <div className="frame">
                        <img src="src\assets\speedtyping.png" alt="Project Screenshot"/>
                    </div>
                    <div className="shelf-bar"></div>
                </div>
            </div>
        </div>
    );
}

export default Projects;