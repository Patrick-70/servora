import ProviderSearch from "../components/provider/ProviderSearch";
import ProviderFilters from "../components/provider/ProviderFilters";
import ProviderGrid from "../components/provider/ProviderGrid";

import useProviders from "../hooks/useProviders";

function Providers() {
  const {
    loading,

    filteredProviders,

    categories,

    search,
    setSearch,

    category,
    setCategory,

    sortBy,
    setSortBy,
  } = useProviders();

  return (
    <main className="bg-slate-50 pt-20">
      {/* Hero */}

      <section className="bg-gradient-to-r from-emerald-600 to-teal-500 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-black">
            Find Trusted Professionals
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-emerald-100">
            Browse verified professionals and book reliable services
            across Ghana.
          </p>

          <ProviderSearch
            search={search}
            setSearch={setSearch}
            placeholder="Search electrician, cleaner, plumber..."
          />
        </div>
      </section>

      {/* Providers */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <ProviderFilters
          categories={categories}
          category={category}
          setCategory={setCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalProviders={filteredProviders.length}
        />

        <ProviderGrid
          loading={loading}
          providers={filteredProviders}
          search={search}
        />
      </section>
    </main>
  );
}

export default Providers;