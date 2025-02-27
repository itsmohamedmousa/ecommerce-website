import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './navbar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="dropdown">
        <button className="menu-btn" onClick={toggleDropdown}>
          ☰ Categories
        </button>
        <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
          <a href="#">
            <img src="https://img.icons8.com/ios-filled/50/000000/laptop.png" /> Laptops, Tablets &
            Phones
          </a>
          <a href="#">
            <img src="https://img.icons8.com/ios-filled/50/000000/monitor.png" /> PC, Peripherals &
            Software
          </a>
          <a href="#">
            <img src="https://img.icons8.com/ios-filled/50/000000/laptop-coding.png" /> Laptops IT
            Products
          </a>
          <a href="#">
            <img src="https://img.icons8.com/ios-filled/50/000000/tv.png" /> TV, Audio-Video & Photo
          </a>
          <a href="#">
            <img src="https://img.icons8.com/ios-filled/50/000000/controller.png" /> Games &
            Consoles
          </a>
        </div>
      </div>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `${isActive ? 'active-link' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/Shop" className={({ isActive }) => `${isActive ? 'active-link' : ''}`}>
          Shop
        </NavLink>
        <NavLink to="/About" className={({ isActive }) => `${isActive ? 'active-link' : ''}`}>
          About
        </NavLink>
        <NavLink to="/ContactUs" className={({ isActive }) => `${isActive ? 'active-link' : ''}`}>
          Contact Us
        </NavLink>
        <NavLink to="/admin" className={({ isActive }) => `${isActive ? 'active-link' : ''}`}>
          Admin
        </NavLink>
      </div>
      <NavLink
        to="/Wishlist"
        className={({ isActive }) => `wishlist ${isActive ? 'active-link' : ''}`}
      >
        <i className="bi bi-heart-fill" />
      </NavLink>
      <NavLink to="/Cart" className={({ isActive }) => `cart ${isActive ? 'active-link' : ''}`}>
        <i className="bi bi-bag-fill" />
      </NavLink>
    </nav>
  );
}

export default React.memo(NavBar);
