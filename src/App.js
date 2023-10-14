import React from 'react';
import { HashRouter, Route, NavLink, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './NavBar';
import MovieList from './MovieList/MovieList';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className='footer'><span>Thanks for visiting Sweety's Portfolio.</span></div>
    </>
  );
}

export default App;
