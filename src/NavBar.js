import { useState } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import "./styles.css"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        SM
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/movie">Movie List</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <Outlet />
      </div>
    </nav>
  );
}