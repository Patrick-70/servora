import { motion } from "framer-motion";

function Spinner({
  size = "md",
  color = "emerald",
  className = "",
}) {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-[3px]",
    lg: "w-12 h-12 border-4",
    xl: "w-16 h-16 border-4",
  };

  const colors = {
    emerald: "border-emerald-600",
    teal: "border-teal-600",
    blue: "border-blue-600",
    white: "border-white",
    slate: "border-slate-600",
    gray: "border-gray-600",
  };

  return (
    <motion.div
      role="status"
      aria-label="Loading"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 0.8,
        ease: "linear",
      }}
      className={[
        "rounded-full",
        "border-t-transparent",
        sizes[size] || sizes.md,
        colors[color] || colors.emerald,
        className,
      ].join(" ")}
    />
  );
}

export default Spinner;