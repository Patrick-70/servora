import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
      bg-slate-900
      text-white
    "
    >
      <div
        className="
        mx-auto
        grid
        max-w-7xl
        gap-10
        px-6
        py-16
        md:grid-cols-2
        lg:grid-cols-4
      "
      >
        {/* Brand */}

        <div>
          <h2
            className="
            text-3xl
            font-black
            text-emerald-400
          "
          >
            Servora
          </h2>

          <p
            className="
            mt-5
            leading-7
            text-slate-300
          "
          >
            Connecting customers with trusted professionals for reliable
            services across Ghana.
          </p>

          <div
            className="
            mt-6
            flex
            gap-4
          "
          >
            <a
              href="#"
              className="
              text-xl
              text-slate-300
              hover:text-emerald-400
              "
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="
              text-xl
              text-slate-300
              hover:text-emerald-400
              "
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="
              text-xl
              text-slate-300
              hover:text-emerald-400
              "
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="
              text-xl
              text-slate-300
              hover:text-emerald-400
              "
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3
            className="
            text-xl
            font-bold
          "
          >
            Quick Links
          </h3>

          <ul
            className="
            mt-5
            space-y-3
          "
          >
            <li>
              <Link to="/" className="text-slate-300 hover:text-emerald-400">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="text-slate-300 hover:text-emerald-400"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/providers"
                className="text-slate-300 hover:text-emerald-400"
              >
                Providers
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-slate-300 hover:text-emerald-400"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-slate-300 hover:text-emerald-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}

        <div>
          <h3
            className="
            text-xl
            font-bold
          "
          >
            Services
          </h3>

          <ul
            className="
            mt-5
            space-y-3
          "
          >
            <li className="text-slate-300">Electrical Repairs</li>

            <li className="text-slate-300">Cleaning Services</li>

            <li className="text-slate-300">Plumbing</li>

            <li className="text-slate-300">Technology Repair</li>

            <li className="text-slate-300">Home Maintenance</li>
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3
            className="
            text-xl
            font-bold
          "
          >
            Contact Us
          </h3>

          <div
            className="
            mt-5
            space-y-5
          "
          >
            <div
              className="
              flex
              gap-3
              text-slate-300
            "
            >
              <FaPhoneAlt className="text-emerald-400" />
              +233 53 631 2253 <br /> +233 59 567 1497{" "}
            </div>

            <div
              className="
              flex
              gap-3
              text-slate-300
            "
            >
              <FaEnvelope className="text-emerald-400" />
              support@servora.com
            </div>

            <div
              className="
              flex
              gap-3
              text-slate-300
            "
            >
              <FaMapMarkerAlt className="text-emerald-400" />
              Cape Coast, Ghana
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div
        className="
        border-t
        border-slate-700
        py-6
        text-center
        text-sm
        text-slate-400
      "
      >
        © {new Date().getFullYear()} Servora. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
