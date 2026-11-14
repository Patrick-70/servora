// src/components/loaders/FullScreenLoader.jsx

import { motion } from "framer-motion";
import Spinner from "./Spinner";

function FullScreenLoader({
  title = "Servora",
  message = "Finding trusted professionals...",
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="absolute h-72 w-72 rounded-full bg-emerald-300 blur-3xl"
      />

      {/* Logo */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
        className="relative mb-8"
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-4xl font-bold text-white shadow-2xl">
          S
        </div>
      </motion.div>

      {/* Spinner */}
      <Spinner size="xl" color="emerald" />

      {/* Title */}
      <motion.h1
        className="mt-8 text-4xl font-bold tracking-tight text-slate-800"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-3 max-w-sm text-center text-base text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {message}
      </motion.p>

      {/* Animated Progress Bar */}
      <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "linear",
          }}
        />
      </div>

      {/* Footer */}
      <motion.p
        className="mt-8 text-sm text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Please wait while we prepare your experience.
      </motion.p>
    </motion.div>
  );
}

export default FullScreenLoader;