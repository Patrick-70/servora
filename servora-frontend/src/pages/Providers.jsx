import { useState } from "react";
import { FaSearch, FaFilter, FaMapMarkerAlt } from "react-icons/fa";

import ProviderCard from "../components/provider/ProviderCard";

function Providers() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const providers = [
    {
      name: "Michael Mensah",
      profession: "Electrician",
      location: "Cape Coast",
      rating: "4.9",
      price: 120,
      image: "/images/provider1.jpg",
      verified: true,
      category: "Electrical",
    },

    {
      name: "Akosua Owusu",
      profession: "Professional Cleaner",
      location: "Takoradi",
      rating: "4.8",
      price: 90,
      image: "/images/provider2.jpg",
      verified: true,
      category: "Cleaning",
    },

    {
      name: "Daniel Asare",
      profession: "Phone Repair Technician",
      location: "Accra",
      rating: "5.0",
      price: 150,
      image: "/images/provider3.jpg",
      verified: false,
      category: "Technology",
    },

    {
      name: "Kwame Boateng",
      profession: "Plumber",
      location: "Kumasi",
      rating: "4.7",
      price: 100,
      image: "/images/provider4.jpg",
      verified: true,
      category: "Plumbing",
    },
  ];

  const categories = [
    "All",

    "Electrical",

    "Cleaning",

    "Plumbing",

    "Technology",
  ];

  const filteredProviders = providers.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(search.toLowerCase()) ||
      provider.profession.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || provider.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-slate-50 pt-20">
      {/* Header */}

      <section
        className="
        bg-gradient-to-r
        from-emerald-600
        to-teal-500
        py-20
        text-white
      "
      >
        <div
          className="
          mx-auto
          max-w-7xl
          px-6
          text-center
        "
        >
          <h1
            className="
            text-5xl
            font-black
          "
          >
            Find Trusted Professionals
          </h1>

          <p
            className="
            mx-auto
            mt-5
            max-w-2xl
            text-lg
            text-emerald-100
          "
          >
            Browse verified professionals and book reliable services.
          </p>

          {/* Search */}

          <div
            className="
            mx-auto
            mt-10
            flex
            max-w-2xl
            items-center
            rounded-2xl
            bg-white
            p-2
            shadow-xl
          "
          >
            <FaSearch
              className="
              ml-4
              text-slate-400
            "
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search electrician, cleaner, plumber..."
              className="
                flex-1
                px-4
                py-3
                text-slate-700
                outline-none
              "
            />
          </div>
        </div>
      </section>

      {/* Content */}

      <section
        className="
        mx-auto
        max-w-7xl
        px-6
        py-16
      "
      >
        <div
          className="
          flex
          flex-col
          gap-5
          md:flex-row
          md:items-center
          md:justify-between
        "
        >
          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-slate-900
            "
            >
              Available Providers
            </h2>

            <p
              className="
              mt-2
              text-slate-500
            "
            >
              Choose from trusted professionals near you.
            </p>
          </div>

          {/* Categories */}

          <div
            className="
            flex
            flex-wrap
            gap-2
          "
          >
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    transition

                    ${
                      category === item
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-slate-600 ring-1 ring-slate-200"
                    }

                  `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}

        <div
          className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        "
        >
          {filteredProviders.length > 0 ? (
            filteredProviders.map((provider) => (
              <ProviderCard key={provider.name} provider={provider} />
            ))
          ) : (
            <div
              className="
              col-span-full
              rounded-3xl
              bg-white
              p-10
              text-center
              shadow
            "
            >
              <FaFilter
                className="
                mx-auto
                text-4xl
                text-slate-400
              "
              />

              <h3
                className="
                mt-4
                text-xl
                font-bold
              "
              >
                No providers found
              </h3>

              <p
                className="
                mt-2
                text-slate-500
              "
              >
                Try another search or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Providers;
