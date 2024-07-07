import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FutureOfCourse from './components/FutureOfCourse';
import AboutCourse from './components/AboutCourse';
import CourseHighlights from './components/CourseHighlights';
import './App.css'
// Import other components as needed

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Header />
      <CourseHighlights />
      <FutureOfCourse />
      <AboutCourse />
      {/* Add other components here */}
    </ThemeProvider>
  );
};

export default App;
