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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis reiciendis assumenda alias. Harum sequi velit ut adipisci consequuntur voluptatem recusandae, commodi numquam at earum quisquam facilis esse nihil illo?</p>
                    </div>
                    <div className="tools">
                        <h3>Development Tools</h3>
                        <p>+ Django</p>
                        <p>+ Html</p>
                        <p>+ Css</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis reiciendis assumenda alias. Harum sequi velit ut adipisci consequuntur voluptatem recusandae, commodi numquam at earum quisquam facilis esse nihil illo?</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis reiciendis assumenda alias. Harum sequi velit ut adipisci consequuntur voluptatem recusandae, commodi numquam at earum quisquam facilis esse nihil illo?</p>
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