import { FaMapMarkerAlt, FaCity, FaLocationArrow, FaClipboardList, FaCloudUploadAlt } from "react-icons/fa";

function ServiceDetails({ booking, updateField }) {
  return (
    <section className="space-y-8">

      {/* Heading */}

      <div>

        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Step 3
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900">
          Service Details
        </h3>

        <p className="mt-2 text-slate-500">
          Tell the provider where the service is needed and describe the job.
        </p>

      </div>

      {/* Address */}

      <div>

        <label className="mb-2 block font-medium text-slate-700">
          Service Address
        </label>

        <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-emerald-500 focus-within:bg-white">

          <div className="px-5 text-slate-400">
            <FaMapMarkerAlt />
          </div>

          <input
            type="text"
            placeholder="House No. 12, Abura Road"
            value={booking.address}
            onChange={(e) =>
              updateField("address", e.target.value)
            }
            className="w-full bg-transparent px-2 py-4 outline-none"
            required
          />

        </div>

      </div>

      {/* City + Landmark */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium text-slate-700">
            City
          </label>

          <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-emerald-500 focus-within:bg-white">

            <div className="px-5 text-slate-400">
              <FaCity />
            </div>

            <input
              type="text"
              placeholder="Cape Coast"
              value={booking.city}
              onChange={(e) =>
                updateField("city", e.target.value)
              }
              className="w-full bg-transparent px-2 py-4 outline-none"
              required
            />

          </div>

        </div>

        <div>

          <label className="mb-2 block font-medium text-slate-700">
            Landmark / GPS
          </label>

          <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-emerald-500 focus-within:bg-white">

            <div className="px-5 text-slate-400">
              <FaLocationArrow />
            </div>

            <input
              type="text"
              placeholder="Near UCC Main Gate"
              value={booking.landmark}
              onChange={(e) =>
                updateField("landmark", e.target.value)
              }
              className="w-full bg-transparent px-2 py-4 outline-none"
            />

          </div>

        </div>

      </div>

      {/* Description */}

      <div>

        <label className="mb-2 flex items-center gap-2 font-medium text-slate-700">
          <FaClipboardList />
          Describe the Job
        </label>

        <textarea
          rows={6}
          placeholder="Describe the work you need done. Include any important details that will help the provider prepare."
          value={booking.description}
          onChange={(e) =>
            updateField("description", e.target.value)
          }
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 outline-none transition focus:border-emerald-500 focus:bg-white"
          required
        />

      </div>

      {/* Upload Placeholder */}

      <div>

        <label className="mb-3 block font-medium text-slate-700">
          Upload Photos (Optional)
        </label>

        <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center transition hover:border-emerald-500 hover:bg-emerald-50">

          <FaCloudUploadAlt className="mx-auto text-5xl text-emerald-500" />

          <h4 className="mt-5 text-lg font-bold text-slate-900">
            Drag & Drop Images
          </h4>

          <p className="mt-2 text-slate-500">
            Upload photos of the problem to help the provider understand the job.
          </p>

          <button
            type="button"
            className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Choose Files
          </button>

          <p className="mt-3 text-xs text-slate-400">
            Image upload functionality will be connected in a later step.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ServiceDetails;