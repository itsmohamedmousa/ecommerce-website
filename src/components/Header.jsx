import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import PropTypes from 'prop-types';
import './header.css';

function Header(props) {
  Header.propTypes = {
    username: PropTypes.string,
  };
  const user = props.username;

  return (
    <header>
      <NavLink to="/" className="logo">
        <img src="/src/assets/image.jpg" alt="Logo" />
      </NavLink>
      <Searchbar />
      <NavLink
        to="/Profile"
        className={({ isActive }) => `profile ${isActive ? 'active-link' : ''}`}
      >
        <i className="bi bi-person-fill" />
        {user || 'Guest'}
      </NavLink>
    </header>
  );
}

export default Header;
