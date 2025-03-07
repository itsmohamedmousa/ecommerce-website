import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './hero.css';

function Hero(props) {
  Hero.propTypes = {
    imgPath: PropTypes.string,
  };
  Hero.defaultProps = {
    imgPath: '/src/assets/image-not-found(1).jpg',
  };
  const image = props.imgPath;
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container hero">
      <div className="hero-content">
        <span className="hero-badge">New Collection</span>
        <h1>Elevate Your Style This Season</h1>
        <p>
          Discover our premium selection of thoughtfully crafted products designed to enhance your
          everyday life. Enjoy free shipping on all orders over $50.
        </p>
        <div className="button-group">
          <button onClick={() => scrollToSection('products')} className="cta-button">
            Shop Now
          </button>
          <NavLink to="/Shop">
            <button className="secondary-button">View Collection</button>
          </NavLink>
        </div>
      </div>
      <div className="hero-image">
        <img src={image} alt="Featured product showcase" />
      </div>
    </div>
  );
}

export default Hero;
