function TrendingCard({ image, title, description }) {
  return (
    <div className="category-card">
      <div className="trending-image">
        <img src={image} alt={title} />
      </div>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default TrendingCard;
