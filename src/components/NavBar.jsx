import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './navbar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <i className="bi bi-list" />
      </button>

      <div className="dropdown">
        <button className="menu-btn" onClick={toggleDropdown}>
          <i className="bi bi-grid-fill" />
          Categories
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

      <div className={`nav-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
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

        <div className="nav-icons">
          <NavLink
            to="/Wishlist"
            className={({ isActive }) => `wishlist ${isActive ? 'active-link' : ''}`}
          >
            <i className="bi bi-heart-fill" />
          </NavLink>
          <NavLink to="/Cart" className={({ isActive }) => `cart ${isActive ? 'active-link' : ''}`}>
            <i className="bi bi-bag-fill" />
          </NavLink>
        </div>
      </div>

      <div
        className={`mobile-overlay ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={toggleMobileMenu}
      ></div>
    </nav>
  );
}

export default React.memo(NavBar);
