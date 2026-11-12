import { create } from "zustand";

const useBookingStore = create((set) => ({
  booking: {
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    landmark: "",
    date: "",
    time: "",
    description: "",
  },

  updateField: (field, value) =>
    set((state) => ({
      booking: {
        ...state.booking,
        [field]: value,
      },
    })),

  resetBooking: () =>
    set({
      booking: {
        fullName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        landmark: "",
        date: "",
        time: "",
        description: "",
      },
    }),
}));

export default useBookingStore;