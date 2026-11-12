import { useParams, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaCalendarCheck,
} from "react-icons/fa";

function ProviderDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const providers = [
    {
      name: "Michael Mensah",
      profession: "Electrician",
      location: "Cape Coast",
      rating: "4.9",
      reviews: "210",
      price: 120,
      image: "/images/provider1.jpg",
      verified: true,

      description:
        "Certified electrician providing home wiring, repairs, installations and emergency electrical services.",

      services: [
        "Electrical Installation",
        "Emergency Repairs",
        "Home Inspection",
      ],
    },

    {
      name: "Akosua Owusu",
      profession: "Professional Cleaner",
      location: "Takoradi",
      rating: "4.8",
      reviews: "180",
      price: 90,
      image: "/images/provider2.jpg",
      verified: true,

      description:
        "Professional cleaner specializing in homes, offices and commercial cleaning.",

      services: ["Home Cleaning", "Office Cleaning", "Deep Cleaning"],
    },

    {
      name: "Daniel Asare",
      profession: "Phone Repair Technician",
      location: "Accra",
      rating: "5.0",
      reviews: "95",
      price: 150,
      image: "/images/provider3.jpg",
      verified: false,

      description:
        "Mobile phone repair expert handling screen replacement, software issues and hardware repairs.",

      services: ["Screen Repair", "Software Fix", "Phone Diagnosis"],
    },
  ];

  const provider = providers.find(
    (item) => item.name.toLowerCase().replaceAll(" ", "-") === id,
  );

  if (!provider) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Provider Not Found</h1>
      </div>
    );
  }

  return (
    <main className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          className="
          mb-8
          flex
          items-center
          gap-2
          font-semibold
          text-emerald-600
          "
        >
          <FaArrowLeft />
          Back
        </button>

        <div
          className="
          grid
          gap-10
          lg:grid-cols-3
        "
        >
          {/* Profile Card */}

          <div
            className="
            rounded-3xl
            bg-white
            p-8
            shadow-xl
            ring-1
            ring-slate-200
          "
          >
            <img
              src={provider.image}
              alt={provider.name}
              className="
              mx-auto
              h-40
              w-40
              rounded-3xl
              object-cover
              "
            />

            <h1
              className="
              mt-6
              text-center
              text-3xl
              font-black
            "
            >
              {provider.name}
            </h1>

            <p
              className="
              mt-2
              text-center
              text-emerald-600
              font-semibold
            "
            >
              {provider.profession}
            </p>

            <div
              className="
              mt-5
              flex
              justify-center
              gap-2
              text-slate-500
            "
            >
              <FaMapMarkerAlt />

              {provider.location}
            </div>

            <div
              className="
              mt-5
              flex
              justify-center
              items-center
              gap-2
              text-amber-500
            "
            >
              <FaStar />

              <span className="font-bold text-slate-900">
                {provider.rating}
              </span>

              <span className="text-slate-500">({provider.reviews})</span>
            </div>

            {provider.verified && (
              <div
                className="
              mt-6
              flex
              justify-center
              items-center
              gap-2
              rounded-xl
              bg-emerald-50
              py-3
              text-emerald-700
              font-semibold
              "
              >
                <FaCheckCircle />
                Verified Provider
              </div>
            )}
          </div>

          {/* Details */}

          <div className="lg:col-span-2 space-y-8">
            <div
              className="
              rounded-3xl
              bg-white
              p-8
              shadow-lg
            "
            >
              <h2
                className="
                text-3xl
                font-bold
              "
              >
                About Provider
              </h2>

              <p
                className="
                mt-5
                leading-8
                text-slate-600
              "
              >
                {provider.description}
              </p>
            </div>

            <div
              className="
              rounded-3xl
              bg-white
              p-8
              shadow-lg
            "
            >
              <h2
                className="
              text-3xl
              font-bold
              "
              >
                Services Offered
              </h2>

              <div
                className="
              mt-6
              grid
              gap-4
              md:grid-cols-3
              "
              >
                {provider.services.map((service) => (
                  <div
                    key={service}
                    className="
                  rounded-xl
                  bg-slate-50
                  p-5
                  font-semibold
                  "
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
              flex
              items-center
              justify-between
              rounded-3xl
              bg-gradient-to-r
              from-emerald-600
              to-teal-500
              p-8
              text-white
            "
            >
              <div>
                <p className="text-emerald-100">Starting Price</p>

                <h2
                  className="
                text-4xl
                font-black
                "
                >
                  GH₵{provider.price}
                </h2>
              </div>

              <button
                onClick={() => navigate("/booking")}
                className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-white
              px-8
              py-4
              font-bold
              text-emerald-600
              hover:bg-slate-100
              "
              >
                <FaCalendarCheck />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProviderDetails;
