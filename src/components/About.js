// src/components/About.js
import React from 'react';

const About = () => (
  <section id="about" className="my-16 px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
      <img
        src={`${process.env.PUBLIC_URL}/images/Profile.jpeg`}
        alt="Image Here"
        className="w-48 h-48 rounded-full object-cover shadow-lg"
      />
      <div className="text-left">
        <p className="text-lg text-gray-700 dark:text-black-300 mb-4">
           Hello! I'm <strong>Joe R. Quitalig</strong>, a dedicated IT professional with over four years of experience in software management and quality assurance. Proficient in SAP ABAP, Java, and Python, with a strong desire to expand my knowledge of SAP ABAP. Eager to apply my expertise in automation and data management to contribute to a progressive organization, enhancing operational efficiency and driving innovative solutions.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Tech Stack:</h3>
        <div className="flex gap-4 flex-wrap text-2xl">
          <span title="React ⚛️">⚛️</span>
          <span title="Tailwind CSS 🌬️">🌬️</span>
          <span title="JavaScript ⚡">⚡</span>
          <span title="Git 🔧">🔧</span>
        </div>
      </div>
    </div>
  </section>
);

export default About;

