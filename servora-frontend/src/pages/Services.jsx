import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBolt,
  FaPaintRoller,
  FaBroom,
  FaHammer,
  FaTools,
  FaLaptopCode,
  FaSnowflake,
  FaCar,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Electrical",
      icon: <FaBolt className="text-4xl text-yellow-500" />,
      description:
        "Professional electrical installation, repairs and maintenance.",
      color: "from-yellow-100 to-yellow-50",
    },
    {
      title: "Painting",
      icon: <FaPaintRoller className="text-4xl text-pink-500" />,
      description:
        "Interior and exterior painting services for homes and offices.",
      color: "from-pink-100 to-pink-50",
    },
    {
      title: "Cleaning",
      icon: <FaBroom className="text-4xl text-emerald-500" />,
      description:
        "Residential and commercial cleaning by trusted professionals.",
      color: "from-emerald-100 to-emerald-50",
    },
    {
      title: "Carpentry",
      icon: <FaHammer className="text-4xl text-amber-600" />,
      description: "Furniture repairs, custom woodwork and installations.",
      color: "from-amber-100 to-amber-50",
    },
    {
      title: "Plumbing",
      icon: <FaTools className="text-4xl text-blue-500" />,
      description: "Pipe installation, leak repairs and maintenance.",
      color: "from-blue-100 to-blue-50",
    },
    {
      title: "Computer Repair",
      icon: <FaLaptopCode className="text-4xl text-indigo-500" />,
      description: "Laptop, desktop and software troubleshooting.",
      color: "from-indigo-100 to-indigo-50",
    },
    {
      title: "Air Conditioning",
      icon: <FaSnowflake className="text-4xl text-cyan-500" />,
      description: "AC installation, servicing and repair.",
      color: "from-cyan-100 to-cyan-50",
    },
    {
      title: "Auto Mechanic",
      icon: <FaCar className="text-4xl text-red-500" />,
      description: "Vehicle diagnostics, repairs and maintenance.",
      color: "from-red-100 to-red-50",
    },
  ];

  return (
    <main className="bg-slate-50 pt-16">
      {/* Hero */}

      <section className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 py-16 text-white">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            Our Services
          </span>

          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            Find the Right
            <br />
            Professional for Every Job
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-100">
            Browse trusted professionals across multiple service categories and
            book with confidence.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center rounded-xl bg-white p-2 shadow-xl">
            <FaSearch className="ml-3 text-slate-400" />

            <input
              type="text"
              placeholder="Search for a service..."
              className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-700 outline-none"
            />

            <button className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-md
                  ring-1
                  ring-slate-200
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div
                  className={`flex h-32 items-center justify-center bg-gradient-to-br ${service.color}`}
                >
                  {service.icon}
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    to="/providers"
                    className="
                      mt-5
                      inline-flex
                      rounded-xl
                      bg-emerald-600
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-white
                      hover:bg-emerald-700
                    "
                  >
                    Browse Providers
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Servora */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Why Choose Servora?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
              We make it easier to find trusted professionals for every service
              you need.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-md">
              <h3 className="text-xl font-bold text-slate-900">
                Verified Professionals
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Every provider is reviewed before joining the Servora platform.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-md">
              <h3 className="text-xl font-bold text-slate-900">Fast Booking</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Request professional services quickly and easily.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-md">
              <h3 className="text-xl font-bold text-slate-900">
                Secure Platform
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Your bookings and information stay protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-emerald-600 to-teal-500 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center text-white">
          <h2 className="text-3xl font-black md:text-4xl">
            Ready to Book a Professional?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-emerald-100">
            Explore verified providers and book trusted professionals for your
            next project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/providers"
              className="
          rounded-xl
          bg-white
          px-6
          py-3
          text-sm
          font-semibold
          text-emerald-600
          transition
          hover:bg-slate-100
        "
            >
              Explore Providers
            </Link>

            <Link
              to="/register"
              className="
          rounded-xl
          border
          border-white
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-white
          hover:text-emerald-600
        "
            >
              Join Servora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
