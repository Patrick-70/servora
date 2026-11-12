import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function CustomerInfo({ booking, updateField }) {
  return (
    <section className="space-y-6">

      {/* Heading */}

      <div>

        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Step 1
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900">
          Customer Information
        </h3>

        <p className="mt-2 text-slate-500">
          Tell the provider who you are.
        </p>

      </div>

      {/* Full Name */}

      <div>

        <label className="mb-2 block font-medium text-slate-700">
          Full Name
        </label>

        <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-emerald-500 focus-within:bg-white">

          <div className="px-5 text-slate-400">
            <FaUser />
          </div>

          <input
            type="text"
            placeholder="John Doe"
            value={booking.fullName}
            onChange={(e) =>
              updateField("fullName", e.target.value)
            }
            className="w-full bg-transparent px-2 py-4 outline-none"
            required
          />

        </div>

      </div>

      {/* Phone + Email */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* Phone */}

        <div>

          <label className="mb-2 block font-medium text-slate-700">
            Phone Number
          </label>

          <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-emerald-500 focus-within:bg-white">

            <div className="px-5 text-slate-400">
              <FaPhoneAlt />
            </div>

            <input
              type="tel"
              placeholder="+233 24 123 4567"
              value={booking.phone}
              onChange={(e) =>
                updateField("phone", e.target.value)
              }
              className="w-full bg-transparent px-2 py-4 outline-none"
              required
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block font-medium text-slate-700">
            Email Address
          </label>

          <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-emerald-500 focus-within:bg-white">

            <div className="px-5 text-slate-400">
              <FaEnvelope />
            </div>

            <input
              type="email"
              placeholder="you@example.com"
              value={booking.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
              className="w-full bg-transparent px-2 py-4 outline-none"
              required
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default CustomerInfo;