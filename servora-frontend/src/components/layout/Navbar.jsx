function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-emerald-600">
              Servora
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                Providers
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-700 hover:text-emerald-600 transition">
              Login
            </button>

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-3xl">
            ☰
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar