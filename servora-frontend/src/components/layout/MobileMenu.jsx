import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Providers", path: "/providers" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white shadow-xl lg:hidden">
      <div className="flex flex-col p-6">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-emerald-50 font-semibold text-emerald-600"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        <div className="mt-6 flex flex-col gap-3">
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="rounded-xl border border-slate-300 px-4 py-3 text-center font-medium hover:bg-slate-100"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            onClick={() => setIsOpen(false)}
            className="rounded-xl bg-emerald-600 px-4 py-3 text-center font-semibold text-white hover:bg-emerald-700"
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;