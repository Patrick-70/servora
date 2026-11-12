function CategoryCard({ icon, title, providers }) {
  return (
    <div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl transition group-hover:bg-emerald-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {providers} Providers
      </p>
    </div>
  );
}

export default CategoryCard;