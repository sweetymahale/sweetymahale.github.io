import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <>
      <header>Header</header>
      <div className="columns">
        <Navbar/>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default App;
