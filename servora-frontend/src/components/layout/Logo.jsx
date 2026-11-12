import { Link } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
        <FaBolt />
      </div>

      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Servora
        </h1>

        <p className="-mt-1 text-xs text-slate-500">
          Trusted Local Services
        </p>
      </div>
    </Link>
  );
}

export default Logo;