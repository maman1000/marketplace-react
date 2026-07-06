function CategoryCard({ image, title, description, bgClass }) {
  return (
    <div className="category-card">
      <div className={`category-image ${bgClass}`}>
        <img src={image} alt={title} />
      </div>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default CategoryCard;
