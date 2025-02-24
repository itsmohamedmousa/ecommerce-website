import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const Layout = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);

  return (
    <div className="app-container">
      <Header username="" />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <button
        className="scrollToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <i className="bi bi-caret-up-fill"></i>
      </button>
    </div>
  );
};

export default Layout;
