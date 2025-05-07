import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import Educators from "./pages/Educators";
import LearningPaths from "./pages/LearningPath";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/educators" element={<Educators />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        
      </Routes>
    </Router>
  );
}

export default App;
