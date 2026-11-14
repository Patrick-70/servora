// src/hooks/useProviders.js

import { useEffect, useMemo, useState } from "react";
import providersData from "../data/providers";

function useProviders() {
  // -----------------------------
  // State
  // -----------------------------

  const [loading, setLoading] = useState(true);

  const [providers, setProviders] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sortBy, setSortBy] = useState("default");

  // -----------------------------
  // Simulate API Request
  // Replace this with a real API later.
  // -----------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      setProviders(providersData);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // -----------------------------
  // Categories
  // -----------------------------

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(providersData.map((provider) => provider.category)),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  // -----------------------------
  // Filter + Search + Sort
  // -----------------------------

  const filteredProviders = useMemo(() => {
    let results = [...providers];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      results = results.filter(
        (provider) =>
          provider.name.toLowerCase().includes(query) ||
          provider.profession.toLowerCase().includes(query) ||
          provider.location.toLowerCase().includes(query)
      );
    }

    // Category
    if (category !== "All") {
      results = results.filter(
        (provider) => provider.category === category
      );
    }

    // Sorting
    switch (sortBy) {
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;

      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;

      case "reviews":
        results.sort((a, b) => b.reviews - a.reviews);
        break;

      case "jobs":
        results.sort(
          (a, b) => b.jobsCompleted - a.jobsCompleted
        );
        break;

      default:
        break;
    }

    return results;
  }, [providers, search, category, sortBy]);

  // -----------------------------
  // Featured Providers
  // -----------------------------

  const featuredProviders = useMemo(() => {
    return providers.filter((provider) => provider.featured);
  }, [providers]);

  // -----------------------------
  // Provider Lookup
  // -----------------------------

  const getProviderBySlug = (slug) => {
    return providers.find((provider) => provider.slug === slug);
  };

  const getProviderById = (id) => {
    return providers.find(
      (provider) => provider.id === Number(id)
    );
  };

  return {
    loading,

    providers,

    filteredProviders,

    featuredProviders,

    categories,

    search,
    setSearch,

    category,
    setCategory,

    sortBy,
    setSortBy,

    getProviderBySlug,
    getProviderById,
  };
}

export default useProviders;