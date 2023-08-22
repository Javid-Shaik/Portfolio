import React from 'react';
import './App.css'; // Import your CSS file for styling
// Import your custom components
import Header from './Header';
import Profilephoto from './Profilephoto';
import About from './About';
import Projects from './Projects';
// import Contact from './Contact';

function App() {
  return (
    <div className="App" id="home">
      <Header id="home"/>
      <Profilephoto />
      <About />
      <Projects id="projects"/>
      {/* <Contact /> */}
    </div>
  );
}

export default App;
