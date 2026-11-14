// src/components/loaders/LoadingOverlay.jsx

import { AnimatePresence, motion } from "framer-motion";
import Spinner from "./Spinner";

function LoadingOverlay({
  show = false,
  title = "Loading...",
  message = "Please wait a moment.",
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center rounded-3xl bg-white/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 15 }}
            transition={{ duration: 0.25 }}
            className="mx-4 w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-slate-200"
          >
            <div className="flex flex-col items-center text-center">
              <Spinner size="lg" color="emerald" />

              <h3 className="mt-6 text-xl font-bold text-slate-800">
                {title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {message}
              </p>

              <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.4,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingOverlay;