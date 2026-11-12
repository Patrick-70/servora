import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Services",
      path: "/services",
    },

    {
      name: "Providers",
      path: "/providers",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header
      className="
      fixed
      top-0
      z-50
      w-full
      bg-white/80
      backdrop-blur-lg
      shadow-sm
    "
    >
      <nav
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-6
        py-4
      "
      >
        {/* Logo */}

        <Link
          to="/"
          className="
            text-3xl
            font-black
            text-emerald-600
          "
        >
          Servora
        </Link>

        {/* Desktop Links */}

        <div
          className="
          hidden
          items-center
          gap-8
          lg:flex
        "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="
                  font-medium
                  text-slate-600
                  transition
                  hover:text-emerald-600
                "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}

        <div
          className="
          hidden
          items-center
          gap-4
          lg:flex
        "
        >
          <Link
            to="/login"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              px-5
              py-2.5
              font-semibold
              text-emerald-600
              hover:bg-emerald-50
            "
          >
            <FaUserCircle />
            Login
          </Link>

          <Link
            to="/register"
            className="
              rounded-xl
              bg-emerald-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-emerald-700
            "
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
            text-2xl
            text-slate-700
            lg:hidden
          "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
            border-t
            bg-white
            px-6
            py-6
            lg:hidden
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
            "
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="
                      font-semibold
                      text-slate-700
                      hover:text-emerald-600
                    "
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="
                  rounded-xl
                  border
                  border-emerald-600
                  py-3
                  text-center
                  font-semibold
                  text-emerald-600
                "
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="
                  rounded-xl
                  bg-emerald-600
                  py-3
                  text-center
                  font-semibold
                  text-white
                "
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
