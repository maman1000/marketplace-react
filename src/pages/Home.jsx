import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import FeaturedProduct from "../components/FeaturedProduct";
import TrendingCard from "../components/TrendingCard";
import Footer from "../components/Footer";

// gambar yang memang ada
import featuredImage from "../assets/images/featured-product.png";
import aiWriting from "../assets/images/ai-writing-assistant.png";
import aiImage from "../assets/images/ai-image-generator.png";

import { Bolt, Megaphone, FileText, BarChart3 } from "lucide-react";

function Home() {
  const categories = [
    {
      icon: <Bolt size={36} />,
      title: "Productivity",
      description: "Boost your workflow with AI-powered productivity tools.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <Megaphone size={36} />,
      title: "Marketing",
      description: "Enhance your marketing strategies with AI-driven insights.",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: <FileText size={36} />,
      title: "Content Creation",
      description:
        "Create articles, videos, and social media content instantly.",
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      icon: <BarChart3 size={36} />,
      title: "Data Analysis",
      description: "Analyze business data with powerful AI tools.",
      color: "bg-indigo-100 text-indigo-700",
    },
  ];

  const trending = [
    {
      image: aiWriting,
      title: "AI Writing Assistant",
      description:
        "Generate high-converting copy and creative stories with AI.",
      price: "$19/mo",
      trend: "+14%",
    },
    {
      image: aiImage,
      title: "AI Image Generator",
      description: "Create stunning visuals from simple text prompts.",
      price: "$29/mo",
      trend: "+28%",
    },
    {
      image: aiWriting,
      title: "CodeFlow Copilot",
      description: "AI-powered pair programming assistant for developers.",
      price: "$25/mo",
      trend: "+12%",
    },
  ];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">
      <Navbar />
      <Hero />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-indigo-900">Categories</h2>
            <p className="text-gray-600 mt-2">
              Specialized tools for every workflow.
            </p>
          </div>

          <button className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100 transition">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <CategoryCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <FeaturedProduct
        image={featuredImage}
        badge="TOP RATED AI TOOL"
        title="NeuroTask AI"
        description="The ultimate productivity companion powered by artificial intelligence."
      />

      {/* Trending */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-indigo-900">Trending</h2>
            <p className="text-gray-600 mt-2">
              Discover what creators are using right now.
            </p>
          </div>

          <button className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100 transition">
            Weekly Leaders
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trending.map((item, index) => (
            <TrendingCard key={index} {...item} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
