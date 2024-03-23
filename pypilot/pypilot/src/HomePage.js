// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/references">References</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/code-editor">Code Editor</Link>
      </div>

      <div className="content">
        <h1>Unlock the Power of Python!</h1>
        <p>Welcome to our Python e-learning platform, where you embark on a journey to master one of the most versatile and powerful programming languages - Python!</p>

        <h2>Why Learn Python with Us?</h2>
        <ul>
          <li>Comprehensive Tutorials: Dive into our engaging tutorials covering everything from Python basics to advanced topics.</li>
          <li>Hands-on Exercises: Apply your knowledge with hands-on exercises and real-world coding challenges.</li>
          <li>Interactive Quizzes: Reinforce your learning with interactive quizzes to test your understanding.</li>
          <li>Code Editor: Practice coding directly in our integrated code editor, making learning practical and fun.</li>
        </ul>

        <h2>Featured Topics:</h2>
        <ul>
          <li><strong>Web Development with Django:</strong> Build dynamic web applications using the popular Django framework.</li>
          <li><strong>Data Science and Machine Learning:</strong> Explore Python's capabilities in data analysis and machine learning.</li>
          <li><strong>Automation with Python:</strong> Learn to automate tasks and processes using Python scripts.</li>
        </ul>

        <p>Start your Python journey now and unlock a world of possibilities! Ready to code? Let's get started!</p>
      </div>
    </div>
  );
};

export default HomePage;
