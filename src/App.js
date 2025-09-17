// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProfileCard from './components/ProfileCard';
import Particles from './components/Backgrounds/Particles';
import Card from './components/Card';
function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles
        particleCount={100000}
        particleSpread={100}
        speed={0.15}
        particleColors={['#ffffff', '#00ffcc', '#00ffff']}
        moveParticlesOnHover={true}
        particleHoverFactor={2}
        alphaParticles={true}
        particleBaseSize={100}
        sizeRandomness={1}
        cameraDistance={20}
      />
      <div className="absolute top-0 left-0 w-full h-full z-10"></div>
      <div className="App">
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
          {/* <ProfileCard /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;
