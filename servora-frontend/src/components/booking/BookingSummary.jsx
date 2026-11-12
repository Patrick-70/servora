import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaStar,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

function BookingSummary({ provider }) {
  const platformFee = 15;
  const tax = 5;
  const total = provider.price + platformFee + tax;

  return (
    <aside className="lg:sticky lg:top-28 h-fit">

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">

        {/* Provider Image */}

        <img
          src={provider.image}
          alt={provider.name}
          className="h-64 w-full object-cover"
        />

        <div className="p-7">

          {/* Provider */}

          <div className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-2xl font-bold text-slate-900">
                  {provider.name}
                </h2>

                {provider.verified && (
                  <FaCheckCircle className="text-emerald-500" />
                )}

              </div>

              <p className="mt-1 text-emerald-600">
                {provider.profession}
              </p>

            </div>

          </div>

          {/* Rating */}

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-4">

            <div className="flex items-center gap-2">

              <FaStar className="text-yellow-500" />

              <span className="font-semibold">
                {provider.rating}
              </span>

              <span className="text-slate-500">
                ({provider.reviews})
              </span>

            </div>

            <div className="flex items-center gap-2 text-slate-500">

              <FaMapMarkerAlt />

              {provider.location}

            </div>

          </div>

          {/* Booking Summary */}

          <div className="mt-8">

            <h3 className="text-lg font-bold text-slate-900">
              Booking Summary
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex justify-between">

                <span className="text-slate-600">
                  Service Fee
                </span>

                <span className="font-semibold">
                  GH₵{provider.price}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-600">
                  Platform Fee
                </span>

                <span className="font-semibold">
                  GH₵{platformFee}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-600">
                  Service Tax
                </span>

                <span className="font-semibold">
                  GH₵{tax}
                </span>

              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">

                <span>Total</span>

                <span className="text-emerald-600">
                  GH₵{total}
                </span>

              </div>

            </div>

          </div>

          {/* Trust */}

          <div className="mt-8 space-y-4 rounded-2xl bg-emerald-50 p-5">

            <div className="flex gap-3">

              <FaShieldAlt className="mt-1 text-emerald-600" />

              <div>

                <h4 className="font-semibold">
                  Secure Booking
                </h4>

                <p className="text-sm text-slate-500">
                  Your booking information is securely protected.
                </p>

              </div>

            </div>

            <div className="flex gap-3">

              <FaClock className="mt-1 text-emerald-600" />

              <div>

                <h4 className="font-semibold">
                  Fast Response
                </h4>

                <p className="text-sm text-slate-500">
                  Most providers respond within 1 hour.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default BookingSummary;