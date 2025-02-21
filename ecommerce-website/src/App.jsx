import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './pages/Profile/Profile';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Wishlist from './pages/Wishlist/Wishlist';
import NotFound from './pages/NotFound';
import Search from './pages/Search/Search';
import Shop from './pages/Shop/Shop';

function App() {
  const [ loading, setLoading ] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  

  const importAllCSS = async () => {
    const cssModules = import.meta.glob('./styles/*.css');
    for (const path in cssModules) {
      await cssModules[path]();
    }
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    importAllCSS();
    // setTimeout(() => {
      setLoading(false);
    // }, 3000);
  }, []);

  useEffect(() => { 
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    loading ? <div className="loading"></div> :
    <>
      <div className="app-container">
        <Router>
          <Header username="" />
          <NavBar />
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/About" element={<About />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Wishlist" element={<Wishlist />} />
              <Route path="/Categories/:id" element={<Categories />} />
              <Route path="/Search" element={<Search />} />
              <Route path="*" element={ <NotFound /> } />
            </Routes>
          </main>
          <Footer />
        </Router>
        <button className='scrollToTop' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{ display: isVisible? 'block' : 'none' }}><i className="bi bi-caret-up-fill"></i></button>
      </div>
    </>
  );
}

export default App;
