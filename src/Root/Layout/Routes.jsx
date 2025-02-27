import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Categories from '../../pages/Categories/Categories';
import Cart from '../../pages/Cart/Cart';
import Profile from '../../pages/Profile/Profile';
import About from '../../pages/About/About';
import ContactUs from '../../pages/ContactUs/ContactUs';
import Wishlist from '../../pages/Wishlist/Wishlist';
import NotFound from '../../pages/NotFound/NotFound';
import Search from '../../pages/Search/Search';
import Shop from '../../pages/Shop/Shop';
import Layout from './Layout';
import Admin from '../../pages/Admin/Admin';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="About" element={<About />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Wishlist" element={<Wishlist />} />
          <Route path="Categories/:id" element={<Categories />} />
          <Route path="Search" element={<Search />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
