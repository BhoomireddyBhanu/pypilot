// TutorialsPage.js

import React from 'react';
import tutorialsData from './Tutorials';  // Import the tutorials data
import './TutorialsPage.css';

const TutorialsPage = () => {
    
  return (
    <div className="tutorials-page">
      <h1>Tutorials</h1>
      {tutorialsData.map((tutorial) => (
        <div key={tutorial.id} className="tutorial-card">
          <h2>{tutorial.title}</h2>
          <p>{tutorial.description}</p>
          <p><strong>Difficulty:</strong> {tutorial.difficulty}</p>
          <p><strong>Duration:</strong> {tutorial.duration}</p>
          <p>{tutorial.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TutorialsPage;
