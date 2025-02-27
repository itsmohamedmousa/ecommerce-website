import { NavLink } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="upper">
        <div className="logo">
          <NavLink to="/" className="logo">
            <img src="/src/assets/image.jpg" alt="Logo" width="80px" />
          </NavLink>
          <h3>E-Commerce Website</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="opening">
          <h3>Opening hours</h3>
          <ul>
            <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
            <li>Saturday: 9:00 AM - 11:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact us</h3>
          <ul>
            <li>
              <i className="bi bi-envelope-fill" />
              <a href="mailto:support@example.com">Email: support@example.com</a>
            </li>
            <li>
              <i className="bi bi-telephone-fill" />
              <a href="#">Phone: +123 456 7890</a>
            </li>
            <li>
              <i className="bi bi-geo-alt-fill" />
              <a href="#">Address: 123 Main St, City, State, ZIP</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <i className="bi bi-caret-right-fill" />
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <i className="bi bi-caret-right-fill" />
              <NavLink to="/Shop">Shop</NavLink>
            </li>
            <li>
              <i className="bi bi-caret-right-fill" />
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <i className="bi bi-caret-right-fill" />
              <NavLink to="/ContactUs">Contact us</NavLink>
            </li>
            <li>
              <i className="bi bi-caret-right-fill" />
              <NavLink to="/Cart">Cart</NavLink>
            </li>
            <li>
              <i className="bi bi-caret-right-fill" />
              <NavLink to="/Wishlist">Wishlist</NavLink>
            </li>
            <li>
              <i className="bi bi-caret-right-fill" />
              <NavLink to="/Profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="lower">
        <p>&copy; 2025 E-Commerce Website. All rights reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com">
            <i className="bi bi-facebook" />
          </a>
          <a href="https://instagram.com">
            <i className="bi bi-instagram" />
          </a>
          <a href="https://whatsapp.com">
            <i className="bi bi-whatsapp" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
