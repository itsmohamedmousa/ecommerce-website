function ItemCard() {
  return (
    <div className="item-card">
      <p className="categories">Categories goes here...</p>
      <h3 className="product-name">Product Name</h3>
      <img className="item-img" src="/src/assets/logo.jpg" width="100%" alt="Item Image" />
      <div className="inline">
        <p className="price">$99.99</p>
        <button className="add-to-cart">
          <i className="bi bi-cart-plus-fill" />
        </button>
      </div>
      <br />
      <hr />
      <br />
      <button>
        <i className="bi bi-heart-fill" />
        Add to Wishlist
      </button>
    </div>
  );
}

export default ItemCard;
