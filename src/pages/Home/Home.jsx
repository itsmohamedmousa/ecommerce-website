import Hero from './Hero';
import ItemsContainer from './ItemsContainer';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <ItemsContainer title="Featured Products" />
      <ItemsContainer title="Hot Deals" />
      <ItemsContainer title="Best Sellers" />
    </div>
  );
}

export default Home;
