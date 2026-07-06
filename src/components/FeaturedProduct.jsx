function FeaturedProduct({ image, title, description }) {
  return (
    <section id="featured-product">
      <h1 className="categories-title">Featured Product</h1>

      <div className="featured-product-card">
        <div className="featured-product-image">
          <img src={image} alt={title} />
        </div>

        <div className="featured-product-content">
          <h2>{title}</h2>

          <p>{description}</p>

          <button className="btn-learn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;
