// src/components/provider/ProviderSearch.jsx

import { FaSearch } from "react-icons/fa";

function ProviderSearch({
  search,
  setSearch,
  placeholder = "Search providers...",
}) {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-2xl items-center rounded-2xl bg-white p-2 shadow-xl">
      <FaSearch className="ml-4 text-slate-400" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400"
      />

      {search && (
        <button
          onClick={() => setSearch("")}
          className="mr-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default ProviderSearch;