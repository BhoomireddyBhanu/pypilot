// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './UserRegistrationPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import CodeEditorApp from './CodeEditorApp';
import TutorialsPage from './TutorialsPage';
import PythonExercises from './Exercises';
import Quizzes from './quizzes';
import References from './References';

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/code-editor" element={<CodeEditorApp />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/exercises" element={<PythonExercises />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
  );
};

export default MainApp;
