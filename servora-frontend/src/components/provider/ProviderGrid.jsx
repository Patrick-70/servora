// src/components/provider/ProviderGrid.jsx

import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

import ProviderCard from "./ProviderCard";
import { SkeletonProvider } from "../loaders";

function ProviderGrid({
  loading,
  providers,
  search,
}) {
  // Loading State
  if (loading) {
    return (
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonProvider key={index} />
        ))}
      </div>
    );
  }

  // Empty State
  if (providers.length === 0) {
    return (
      <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-lg ring-1 ring-slate-200">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
          <FaSearch className="text-3xl text-slate-400" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          No Providers Found
        </h3>

        <p className="mx-auto mt-3 max-w-md text-slate-500">
          We couldn't find any providers matching
          {search ? ` "${search}"` : " your search"}.
          Try another keyword or choose a different category.
        </p>
      </div>
    );
  }

  // Providers Grid
  return (
    <motion.div
      className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {providers.map((provider, index) => (
        <motion.div
          key={provider.id}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
            delay: index * 0.08,
          }}
        >
          <ProviderCard provider={provider} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProviderGrid;