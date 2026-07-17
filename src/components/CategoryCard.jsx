export default function CategoryCard({ icon, title, description, color }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${color}`}
      >
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
