import { useState } from "react";

import CustomerInfo from "./CustomerInfo";
import DateTimePicker from "./DateTimePicker";
import ServiceDetails from "./ServiceDetails";

function BookingForm({ provider }) {
  const [booking, setBooking] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    landmark: "",
    date: "",
    time: "",
    description: "",
  });

  function updateField(field, value) {
    setBooking((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Booking Data:", booking);
    console.log("Provider:", provider);

    alert(
      "Booking form submitted.\n\nBooking confirmation will be added in the next step."
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200"
    >
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Booking Information
        </h2>

        <p className="mt-2 text-slate-500">
          Complete the details below to request a booking with{" "}
          <span className="font-semibold text-emerald-600">
            {provider.name}
          </span>.
        </p>
      </div>

      <CustomerInfo
        booking={booking}
        updateField={updateField}
      />

      <DateTimePicker
        booking={booking}
        updateField={updateField}
      />

      <ServiceDetails
        booking={booking}
        updateField={updateField}
      />

      <div className="border-t pt-8">
        <button
          type="submit"
          className="w-full rounded-2xl bg-emerald-600 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
        >
          Continue Booking
        </button>
      </div>
    </form>
  );
}

export default BookingForm;