import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full flex flex-col items-center justify-center md:flex-row md:justify-between px-8 text-white z-50 py-6 transition-colors duration-500 ${
      isScrolled ? 'bg-gray-900' : 'bg-transparent'
    }`}>
      <div>
        <h1 data-scroll data-scroll-speed="1" className="text-2xl font-bold">My Portfolio</h1>
        <p data-scroll data-scroll-speed="2" className="text-sm">Application Developer Support Engineer</p>
      </div>
      <nav className="mt-4 md:mt-0">
        <a href="#about" className="mx-4 hover:underline transition duration-500">About</a>
        <a href="#projects" className="mx-4 hover:underline transition duration-500">Projects</a>
        <a href="#Certificates" className="mx-4 hover:underline transition duration-500">Certificates</a>
        <a href="#contact" className="mx-4 hover:underline transition duration-500">Contact</a>
        
        
      </nav>
    </header>
  );
};

export default Header;
