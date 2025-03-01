import ItemCard from './ItemCard';
import PropTypes from 'prop-types';

function ItemsContainer({ title, products }) {
  return (
    <div className="items-container">
      <h2 id="products" className="main-heading">
        {title}
      </h2>

      {products.length > 0 ? (
        <div className="items">
          {products.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="no-products">No products available in this category.</p>
      )}
    </div>
  );
}

ItemsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default ItemsContainer;
