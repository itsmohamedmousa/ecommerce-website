function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="hero">
        <div className="left">
          <h2>
            Welcome to our <div className="typing">E-COMMERCE WEBSITE</div>
          </h2>
        </div>
        <div className="right">
          <p>Discover our wide range of products</p>
        </div>
        <button className="shop-btn" onClick={() => scrollToSection('products')}>
          Shop Now
        </button>
      </div>
    </>
  );
}

export default Hero;
