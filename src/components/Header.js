// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="text-center py-12 bg-gray-900 text-white">
    {/* <img src={`${process.env.PUBLIC_URL}/images/Profile.jpeg`} alt="Image Here" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
    <h1 className="text-4xl font-bold">Joe Rojales Quitalig</h1>
    <p className="text-xl">Application Developer</p>
    <nav className="mt-6" >
      <a href="#about" className="mx-4 hover:underline">About</a>
      <a href="#projects" className="mx-4 hover:underline">Projects</a>
      <a href="#contact" className="mx-4 hover:underline">Contact</a>
    </nav>
  </header>
);

export default Header;
