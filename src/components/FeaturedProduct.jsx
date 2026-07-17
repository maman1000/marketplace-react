export default function FeaturedProduct({ image, badge, title, description }) {
  return (
    <section className="py-24 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-200/30 blur-3xl rounded-full"></div>

            <img
              src={image}
              alt={title}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
              {badge}
            </div>

            <h2 className="text-5xl font-bold text-indigo-900">{title}</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-600">
                  check_circle
                </span>
                Autonomous Task Prioritization
              </li>

              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-600">
                  check_circle
                </span>
                Real-time Collaborative Insights
              </li>
            </ul>

            <div className="flex items-center gap-6 pt-4">
              <button className="bg-indigo-900 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Get Started — $49/mo
              </button>

              <div className="flex items-center gap-1 text-cyan-700 font-bold">
                <span className="material-symbols-outlined">star</span>
                4.9/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
