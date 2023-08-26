import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Profilephoto from './Profilephoto';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ContactMe from './ContactMe';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Place your Header component outside of Routes */}
        <Header/>

        {/* Use Routes to define your routing */}
        <Routes>
          {/* Each Route should wrap a component */}
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Profilephoto id="home" />
      <About />
      <Projects id="projects" />
      <Contact id="contact"/>
    </>
  );
}

export default App;
