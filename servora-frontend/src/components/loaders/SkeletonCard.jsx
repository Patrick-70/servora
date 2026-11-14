import { motion } from "framer-motion";

function SkeletonCard({
  className = "",
  showButton = true,
  showAvatar = true,
  lines = 3,
}) {
  return (
    <div
      className={[
        "overflow-hidden rounded-3xl",
        "border border-slate-200",
        "bg-white",
        "p-6",
        "shadow-lg",
        className,
      ].join(" ")}
    >
      <motion.div
        animate={{
          opacity: [0.45, 1, 0.45],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
          ease: "easeInOut",
        }}
      >
        {/* Image */}
        <div className="mb-5 h-48 w-full rounded-2xl bg-slate-200" />

        {/* Avatar */}
        {showAvatar && (
          <div className="mb-5 flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-slate-200" />

            <div className="flex-1">
              <div className="mb-2 h-4 w-32 rounded bg-slate-200" />
              <div className="h-3 w-20 rounded bg-slate-200" />
            </div>
          </div>
        )}

        {/* Text */}
        <div className="space-y-3">
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded bg-slate-200 ${
                index === lines - 1 ? "w-2/3" : "w-full"
              }`}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div className="h-5 w-24 rounded bg-slate-200" />

          {showButton && (
            <div className="h-10 w-28 rounded-xl bg-slate-200" />
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default SkeletonCard;