
import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Whatsapp from './components/Whatsapp';


function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading content
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false when your content is ready
    }, 3000); // Simulate a 3-second loading time (adjust as needed)
  }, []);
  return (
    <div className="App">
      {loading ? (
        // Render the preloader while loading
        <Preloader />
      ) : (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Whatsapp />
      <Footer />
    </>
    )}
    </div>
  );
}

export default App;
