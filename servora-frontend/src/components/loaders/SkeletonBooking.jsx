// src/components/loaders/SkeletonBooking.jsx

import { motion } from "framer-motion";

function SkeletonBooking({ className = "" }) {
  return (
    <motion.div
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={[
        "mx-auto w-full max-w-4xl rounded-3xl",
        "bg-white p-8 shadow-xl ring-1 ring-slate-200",
        className,
      ].join(" ")}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 h-8 w-56 rounded-lg bg-slate-200" />
        <div className="h-4 w-72 rounded bg-slate-200" />
      </div>

      {/* Provider Summary */}
      <div className="mb-8 flex items-center gap-4 rounded-2xl border border-slate-100 p-4">
        <div className="h-20 w-20 rounded-2xl bg-slate-200" />

        <div className="flex-1">
          <div className="mb-3 h-5 w-40 rounded bg-slate-200" />
          <div className="mb-2 h-4 w-28 rounded bg-slate-200" />
          <div className="h-4 w-20 rounded bg-slate-200" />
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <div className="mb-2 h-4 w-24 rounded bg-slate-200" />
            <div className="h-12 w-full rounded-xl bg-slate-200" />
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="mt-8">
        <div className="mb-4 h-5 w-40 rounded bg-slate-200" />

        <div className="rounded-2xl border border-slate-100 p-6">
          <div className="grid grid-cols-7 gap-3">
            {Array.from({ length: 35 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg bg-slate-200"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Time Slots */}
      <div className="mt-8">
        <div className="mb-4 h-5 w-36 rounded bg-slate-200" />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-12 rounded-xl bg-slate-200"
            />
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="mt-8">
        <div className="mb-2 h-4 w-20 rounded bg-slate-200" />
        <div className="h-28 w-full rounded-2xl bg-slate-200" />
      </div>

      {/* Summary */}
      <div className="mt-8 rounded-2xl border border-slate-100 p-6">
        <div className="mb-4 h-6 w-40 rounded bg-slate-200" />

        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-slate-200" />
          <div className="h-4 w-5/6 rounded bg-slate-200" />
          <div className="h-4 w-3/4 rounded bg-slate-200" />
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <div className="h-14 w-full rounded-2xl bg-slate-200" />
      </div>
    </motion.div>
  );
}

export default SkeletonBooking;