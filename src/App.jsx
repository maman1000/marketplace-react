import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCard from "./components/CategoryCard";
import FeaturedProduct from "./components/FeaturedProduct";
import TrendingCard from "./components/TrendingCard";
import Footer from "./components/Footer";

import productivity from "./assets/icon/productivity.png";
import marketing from "./assets/icon/marketing.png";

import aiWriting from "./assets/images/ai-writing-assistant.png";
import aiImage from "./assets/images/ai-image-generator.png";
import featuredImage from "./assets/images/featured-product.png";

function App() {
  const categories = [
    {
      image: productivity,
      title: "Productivity",
      description: "Boost your efficiency with AI-powered productivity tools.",
      bgClass: "productivity-bg",
    },
    {
      image: marketing,
      title: "Marketing",
      description: "Enhance your marketing strategies with AI-driven insights.",
      bgClass: "marketing-bg",
    },
  ];

  const trending = [
    {
      image: aiWriting,
      title: "AI Writing Assistant",
      description:
        "Generate high-quality content effortlessly with this AI writing assistant.",
    },
    {
      image: aiImage,
      title: "AI Image Generator",
      description:
        "Create stunning visuals with the power of AI image generation.",
    },
  ];

  return (
    <>
      <main className="hero-container">
        <section id="navbar">
          <Navbar />
        </section>

        <Hero />
      </main>

      <section id="categories">
        <h1 className="categories-title">Categories</h1>

        <div className="categories-list">
          {categories.map((item, index) => (
            <CategoryCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              bgClass={item.bgClass}
            />
          ))}
        </div>
      </section>

      <FeaturedProduct
        image={featuredImage}
        title="Top Rated AI Tool"
        description="Revolutionize your workflow with this highly-rated AI tool. Experience unparalleled efficiency and innovation."
      />

      <section id="trending">
        <h1 className="categories-title">Trending</h1>

        <div className="categories-list">
          {trending.map((item, index) => (
            <TrendingCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
