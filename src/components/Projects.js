// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <section id="projects" className="my-16 px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        title="Point of Sale System"
        desc="Developed with Java and J2EE, this system is designed for retail environments to manage sales transactions efficiently."
        link="https://billyjoequitalig.github.io/my-portfolio/"
        image="/images/Profile.jpeg"
        tags={['Java', 'J2EE', 'desktop', 'MySQL']}
      />
      <ProjectCard
        title="Attendance monitoring system with Biometric"
        desc="develiped with Java and MySQL."
        link="https://weatherdemo.com"
        image="/images/Profile.jpeg"
        tags={['Biometric', 'Java', , 'J2EE', 'MySQL', 'desktop']}
      />
    </div>
  </section>
);

export default Projects;
