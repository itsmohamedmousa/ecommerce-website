import PropTypes from 'prop-types';

function ItemCard({ product }) {
  // Function to truncate text to specific character length
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="item-card">
      <p className="categories">{product.category || 'Uncategorized'}</p>
      <h3 className="product-name">{truncateText(product.title, 50)}</h3>

      <div className="item-image-container">
        <img
          className="item-img"
          src={product.image || '/src/assets/image-not-found(1).jpg'}
          alt={product.title}
          onError={(e) => {
            e.target.src = '/src/assets/image-not-found(1).jpg'; // Fallback image
          }}
        />
      </div>

      <div className="item-card-content">
        <p className="product-description">{truncateText(product.description, 120)}</p>

        <div className="inline">
          <p className="price">${product.price?.toFixed(2) || 'N/A'}</p>
          <button className="add-to-cart" aria-label="Add to cart">
            <i className="bi bi-cart-plus-fill" />
          </button>
        </div>
      </div>

      <hr className="item-divider" />

      <button className="wishlist-btn">
        <i className="bi bi-heart-fill" />
        Add to Wishlist
      </button>
    </div>
  );
}

ItemCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ItemCard;
