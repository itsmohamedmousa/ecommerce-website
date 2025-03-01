import { useState, useEffect } from 'react';
import Hero from './Hero';
import ItemsContainer from './ItemsContainer';
import './home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.in/api/products');

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        // Check if data is an array, or extract the array from the response
        // Sometimes APIs return { products: [...] } instead of directly returning an array
        const productsArray = Array.isArray(data)
          ? data
          : data.products
            ? data.products
            : data.data
              ? data.data
              : [];

        setProducts(productsArray);

        // Debug log to see the structure
        console.log('API Response:', data);
        console.log('Processed Products Array:', productsArray);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Only attempt to slice if products is an array with elements
  const featuredProducts =
    Array.isArray(products) && products.length > 0 ? products.slice(0, 4) : [];
  const hotDeals = Array.isArray(products) && products.length > 4 ? products.slice(4, 8) : [];
  const bestSellers = Array.isArray(products) && products.length > 8 ? products.slice(8, 12) : [];

  return (
    <div className="home-container">
      <Hero />

      {/* {loading && <div className="loading"></div>} */}
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <>
          <ItemsContainer title="Featured Products" products={featuredProducts} />
          <ItemsContainer title="Hot Deals" products={hotDeals} />
          <ItemsContainer title="Best Sellers" products={bestSellers} />
        </>
      )}
    </div>
  );
}

export default Home;
