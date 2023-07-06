
import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file

const App = () => {
  const [currentSection, setCurrentSection] = useState('about'); // State to track the current section

  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header handleNavigationClick={handleNavigationClick} />
      {currentSection === 'about' && <AboutMe />}
      {currentSection === 'portfolio' && <Portfolio />}
      {currentSection === 'contact' && <Contact />}
      {currentSection === 'resume' && <Resume />}
      <Footer />
    </div>
  );
};

export default App;
