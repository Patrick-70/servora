import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

import { FullScreenLoader } from "./components/loaders";

function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization.
    // Later this will be replaced with:
    // - Firebase auth check
    // - API initialization
    // - User session loading
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return (
      <FullScreenLoader
        title="Servora"
        message="Preparing your experience..."
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-20">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;