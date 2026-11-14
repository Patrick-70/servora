import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageTransition from "../components/animations/PageTransition";

// Pages
import Home from "../pages/Home";
import Services from "../pages/Services";
import Providers from "../pages/Providers";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Booking from "../pages/Booking";
import ProviderDetails from "../pages/ProviderDetails";

function AppRoutes() {
  const location = useLocation();

  const withTransition = (Component) => (
    <PageTransition>
      <Component />
    </PageTransition>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={withTransition(Home)} />

        <Route path="/services" element={withTransition(Services)} />

        <Route path="/providers" element={withTransition(Providers)} />

        <Route
          path="/providers/:id"
          element={withTransition(ProviderDetails)}
        />

        <Route path="/about" element={withTransition(About)} />

        <Route path="/contact" element={withTransition(Contact)} />

        {/* Authentication */}
        <Route path="/login" element={withTransition(Login)} />

        <Route path="/register" element={withTransition(Register)} />

        {/* Booking */}
        <Route path="/booking" element={withTransition(Booking)} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <PageTransition>
              <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
                <div className="text-center">
                  <h1 className="text-7xl font-black text-emerald-600">
                    404
                  </h1>

                  <p className="mt-4 text-2xl font-semibold text-slate-800">
                    Oops! Page Not Found
                  </p>

                  <p className="mt-2 text-slate-500">
                    The page you're looking for doesn't exist or has been moved.
                  </p>
                </div>
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;