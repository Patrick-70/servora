import { Routes, Route } from "react-router-dom";

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
  return (
    <Routes>
      {/* Main Pages */}

      <Route path="/" element={<Home />} />

      <Route path="/services" element={<Services />} />

      <Route path="/providers" element={<Providers />} />

      <Route path="/providers/:id" element={<ProviderDetails />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      {/* Authentication */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Booking */}

      <Route path="/booking" element={<Booking />} />

      {/* Future Pages */}

      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center bg-slate-50">
            <div className="text-center">
              <h1 className="text-6xl font-black text-emerald-600">404</h1>

              <p className="mt-4 text-xl text-slate-600">Page Not Found</p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
