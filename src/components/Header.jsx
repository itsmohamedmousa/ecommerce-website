import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './header.css';

function Header(props) {
  Header.propTypes = {
    username: PropTypes.string,
  };
  const user = props.username;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div className="header-left">
        <NavLink to="/" className="logo">
          <img src="/src/assets/image.jpg" alt="Logo" />
        </NavLink>
      </div>

      {!isMobile ? <Searchbar /> : ''}

      <div className="header-right">
        <NavLink
          to="/Profile"
          className={({ isActive }) => `profile ${isActive ? 'active-link' : ''}`}
        >
          <i className="bi bi-person-fill" />
          <span className="username">{user || 'Guest'}</span>
        </NavLink>
      </div>

      {isMobile && <Searchbar className="mobile-search" />}
    </header>
  );
}

export default Header;
