import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const timeSlots = [
  {
    period: "Morning",
    slots: [
      "8:00 AM",
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
    ],
  },

  {
    period: "Afternoon",
    slots: [
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
    ],
  },

  {
    period: "Evening",
    slots: [
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
    ],
  },
];

function DateTimePicker({
  booking,
  updateField,
}) {
  const [selectedDate, setSelectedDate] = useState(
    booking.date
      ? new Date(booking.date)
      : null
  );

  function handleDate(date) {
    setSelectedDate(date);

    updateField(
      "date",
      date ? date.toISOString() : ""
    );
  }

  return (
    <section className="space-y-8">

      <div>

        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Step 2
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900">
          Date & Time
        </h3>

        <p className="mt-2 text-slate-500">
          Choose when you'd like the provider to visit.
        </p>

      </div>

      {/* Date */}

      <div>

        <label className="mb-3 flex items-center gap-2 font-medium text-slate-700">

          <FaCalendarAlt />

          Preferred Date

        </label>

        <DatePicker
          selected={selectedDate}
          onChange={handleDate}
          minDate={new Date()}
          placeholderText="Select a booking date"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-emerald-500 focus:bg-white"
          dateFormat="MMMM d, yyyy"
        />

      </div>

      {/* Time */}

      <div>

        <label className="mb-4 flex items-center gap-2 font-medium text-slate-700">

          <FaClock />

          Preferred Time

        </label>

        <div className="space-y-6">

          {timeSlots.map((group) => (

            <div key={group.period}>

              <h4 className="mb-3 font-semibold text-slate-800">
                {group.period}
              </h4>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

                {group.slots.map((slot) => {

                  const active =
                    booking.time === slot;

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() =>
                        updateField(
                          "time",
                          slot
                        )
                      }
                      className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                        active
                          ? "border-emerald-600 bg-emerald-600 text-white shadow-lg"
                          : "border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:bg-emerald-50"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default DateTimePicker;