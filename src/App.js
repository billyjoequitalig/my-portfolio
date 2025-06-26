// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Joe R. Quitalig</h1>
        <p>Application Developer</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>This is a short bio.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>Project 1 - Description</li>
            <li>Project 2 - Description</li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            📧 Email: <a href="mailto:billyjoequitalig@gmail.com">billyjoequitalig@gmail.com</a>
          </p>
          <p>
            💼 LinkedIn: <a href="https://www.linkedin.com/in/joe-quitalig/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/billyjoequitalig
            </a>
          </p>
          <p>
            🐱 GitHub: <a href="https://github.com/billyjoequitalig" target="_blank" rel="noopener noreferrer">
              github.com/billyjoequitalig
            </a>
          </p>
          <p>
            🌐 Website: <a href="https://billyjoequitalig.com" target="_blank" rel="noopener noreferrer">
              billyjoequitalig.com
            </a>
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Developed by Joe Rojales Quitalig</p>
      </footer>
    </div>
  );
}

export default App;
