// src/components/provider/ProviderFilters.jsx

import { FaFilter, FaSortAmountDown } from "react-icons/fa";

function ProviderFilters({
  categories,
  category,
  setCategory,
  sortBy,
  setSortBy,
  totalProviders,
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left Side */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Available Providers
        </h2>

        <p className="mt-2 text-slate-500">
          {totalProviders} trusted professional
          {totalProviders !== 1 ? "s" : ""} available.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        {/* Sort */}
        <div className="flex items-center gap-2">
          <FaSortAmountDown className="text-emerald-600" />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 outline-none transition focus:border-emerald-500"
          >
            <option value="default">Default</option>
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviews</option>
            <option value="jobs">Most Jobs</option>
            <option value="price-low">Lowest Price</option>
            <option value="price-high">Highest Price</option>
          </select>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                category === item
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-emerald-50 hover:text-emerald-600"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaFilter className="text-xs" />
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProviderFilters;