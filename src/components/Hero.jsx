import hero from "../assets/images/background3.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-6">
            AI POWERED MARKETPLACE
          </span>

          <h1 className="text-6xl font-bold text-indigo-900 leading-tight">
            Discover the Future
            <br />
            of Work with AI
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Explore a curated marketplace of AI-powered tools designed to
            transform your workflow.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-indigo-900 text-white px-8 py-4 rounded-full">
              Start Exploring
            </button>

            <button className="border px-8 py-4 rounded-full">
              Watch Demo
            </button>
          </div>
        </div>

        <div>
          <img src={hero} alt="hero" className="rounded-3xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
