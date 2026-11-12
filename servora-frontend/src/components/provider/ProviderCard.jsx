import { FaStar, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function ProviderCard({ provider }) {
  const navigate = useNavigate();

  if (!provider) {
    return null;
  }

  const providerId = provider.name.toLowerCase().replaceAll(" ", "-");

  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-lg
      ring-1
      ring-slate-200
      transition
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
    >
      {/* Image */}

      <div
        className="
        relative
        h-64
        overflow-hidden
      "
      >
        <img
          src={provider.image}
          alt={provider.name}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-110
          "
        />

        {provider.verified && (
          <span
            className="
              absolute
              left-4
              top-4
              flex
              items-center
              gap-2
              rounded-full
              bg-emerald-600
              px-4
              py-2
              text-sm
              font-semibold
              text-white
            "
          >
            <FaCheckCircle />
            Verified
          </span>
        )}
      </div>

      {/* Content */}

      <div className="p-6">
        <h3
          className="
          text-2xl
          font-bold
          text-slate-900
        "
        >
          {provider.name}
        </h3>

        <p
          className="
          mt-1
          font-semibold
          text-emerald-600
        "
        >
          {provider.profession}
        </p>

        <div
          className="
          mt-4
          flex
          items-center
          gap-2
          text-slate-500
        "
        >
          <FaMapMarkerAlt />

          {provider.location}
        </div>

        <div
          className="
          mt-4
          flex
          items-center
          justify-between
        "
        >
          <div
            className="
            flex
            items-center
            gap-2
          "
          >
            <FaStar className="text-yellow-400" />

            <span className="font-bold">{provider.rating}</span>
          </div>

          <p
            className="
            font-bold
            text-slate-900
          "
          >
            GH₵{provider.price}
          </p>
        </div>

        <button
          onClick={() => navigate(`/providers/${providerId}`)}
          className="
            mt-6
            w-full
            rounded-2xl
            bg-emerald-600
            py-3
            font-semibold
            text-white
            transition
            hover:bg-emerald-700
          "
        >
          View Profile
        </button>
      </div>
    </div>
  );
}

export default ProviderCard;
