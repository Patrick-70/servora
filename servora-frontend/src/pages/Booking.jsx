import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend will be connected later

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div
          className="
          max-w-lg
          rounded-3xl
          bg-white
          p-10
          text-center
          shadow-xl
          ring-1
          ring-slate-200
        "
        >
          <FaCheckCircle
            className="
            mx-auto
            text-6xl
            text-emerald-600
          "
          />

          <h1
            className="
            mt-6
            text-4xl
            font-black
          "
          >
            Booking Request Sent 🎉
          </h1>

          <p
            className="
            mt-5
            leading-7
            text-slate-600
          "
          >
            Your booking request has been received. A service provider will
            contact you shortly.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="
          mt-8
          rounded-xl
          bg-emerald-600
          px-8
          py-3
          font-semibold
          text-white
          hover:bg-emerald-700
          "
          >
            Make Another Booking
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 py-20">
      <div
        className="
        mx-auto
        max-w-6xl
        px-6
      "
      >
        {/* Header */}

        <div className="text-center">
          <span
            className="
          rounded-full
          bg-emerald-100
          px-5
          py-2
          font-semibold
          text-emerald-700
          "
          >
            Service Booking
          </span>

          <h1
            className="
          mt-6
          text-5xl
          font-black
          text-slate-900
          "
          >
            Book A Professional
          </h1>

          <p
            className="
          mx-auto
          mt-5
          max-w-2xl
          text-lg
          text-slate-500
          "
          >
            Tell us what service you need and we will connect you with a trusted
            professional.
          </p>
        </div>

        <div
          className="
          mt-16
          grid
          gap-10
          lg:grid-cols-3
        "
        >
          {/* Booking Form */}

          <form
            onSubmit={handleSubmit}
            className="
          lg:col-span-2
          rounded-3xl
          bg-white
          p-8
          shadow-xl
          ring-1
          ring-slate-200
          space-y-6
          "
          >
            <h2
              className="
            text-3xl
            font-bold
            "
            >
              Booking Details
            </h2>

            {/* Name */}

            <div>
              <label className="mb-2 block font-semibold">Full Name</label>

              <div
                className="
              flex
              items-center
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              "
              >
                <FaUser className="text-slate-400" />

                <input
                  required
                  type="text"
                  placeholder="Patrick Nyamekye"
                  className="
                w-full
                bg-transparent
                px-4
                py-4
                outline-none
                "
                />
              </div>
            </div>

            {/* Phone */}

            <div>
              <label className="mb-2 block font-semibold">Phone Number</label>

              <div
                className="
              flex
              items-center
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              "
              >
                <FaPhone className="text-slate-400" />

                <input
                  required
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                  className="
                w-full
                bg-transparent
                px-4
                py-4
                outline-none
                "
                />
              </div>
            </div>

            {/* Location */}

            <div>
              <label className="mb-2 block font-semibold">
                Service Location
              </label>

              <div
                className="
              flex
              items-center
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              "
              >
                <FaMapMarkerAlt className="text-slate-400" />

                <input
                  required
                  type="text"
                  placeholder="Cape Coast"
                  className="
                w-full
                bg-transparent
                px-4
                py-4
                outline-none
                "
                />
              </div>
            </div>

            <div
              className="
            grid
            gap-5
            md:grid-cols-2
            "
            >
              <div>
                <label className="mb-2 block font-semibold">
                  Preferred Date
                </label>

                <div
                  className="
                flex
                items-center
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                "
                >
                  <FaCalendarAlt className="text-slate-400" />

                  <input
                    required
                    type="date"
                    className="
                  w-full
                  bg-transparent
                  px-4
                  py-4
                  outline-none
                  "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold">Time</label>

                <div
                  className="
                flex
                items-center
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                "
                >
                  <FaClock className="text-slate-400" />

                  <input
                    required
                    type="time"
                    className="
                  w-full
                  bg-transparent
                  px-4
                  py-4
                  outline-none
                  "
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Describe Your Problem
              </label>

              <textarea
                rows="5"
                placeholder="Tell the provider what you need..."
                className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              p-5
              outline-none
              focus:border-emerald-500
              "
              />
            </div>

            <button
              type="submit"
              className="
            w-full
            rounded-2xl
            bg-emerald-600
            py-4
            font-bold
            text-white
            transition
            hover:bg-emerald-700
            "
            >
              Confirm Booking
            </button>
          </form>

          {/* Side Card */}

          <div
            className="
          rounded-3xl
          bg-gradient-to-br
          from-emerald-600
          to-teal-500
          p-8
          text-white
          h-fit
          "
          >
            <h2
              className="
            text-3xl
            font-black
            "
            >
              Why Book With Servora?
            </h2>

            <div
              className="
            mt-8
            space-y-6
            "
            >
              <div className="flex gap-4">
                <FaCheckCircle />
                Verified Professionals
              </div>

              <div className="flex gap-4">
                <FaCheckCircle />
                Secure Booking
              </div>

              <div className="flex gap-4">
                <FaCheckCircle />
                Transparent Pricing
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Booking;
