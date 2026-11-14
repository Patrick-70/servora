// src/components/loaders/SkeletonProvider.jsx

import { motion } from "framer-motion";

function SkeletonProvider({ className = "" }) {
  return (
    <motion.div
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.4,
        ease: "easeInOut",
      }}
      className={[
        "group overflow-hidden rounded-3xl",
        "bg-white",
        "shadow-lg",
        "ring-1 ring-slate-200",
        "transition-all duration-300",
        className,
      ].join(" ")}
    >
      {/* Cover Image */}
      <div className="relative h-56 w-full bg-slate-200">
        {/* Favourite Button */}
        <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/80" />

        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 h-8 w-20 rounded-full bg-white/80" />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Name */}
        <div className="h-6 w-2/3 rounded bg-slate-200" />

        {/* Category */}
        <div className="h-4 w-1/3 rounded bg-slate-200" />

        {/* Location */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-slate-200" />
          <div className="h-4 w-1/2 rounded bg-slate-200" />
        </div>

        {/* Price */}
        <div className="h-5 w-24 rounded bg-slate-200" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-slate-200" />
          <div className="h-3 w-full rounded bg-slate-200" />
          <div className="h-3 w-2/3 rounded bg-slate-200" />
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 pt-2">
          <div className="h-8 w-20 rounded-full bg-slate-200" />
          <div className="h-8 w-24 rounded-full bg-slate-200" />
          <div className="h-8 w-16 rounded-full bg-slate-200" />
        </div>

        {/* Button */}
        <div className="pt-4">
          <div className="h-12 w-full rounded-xl bg-slate-200" />
        </div>
      </div>
    </motion.div>
  );
}

export default SkeletonProvider;