import ProviderCard from "../provider/ProviderCard";

import provider1 from "../../assets/images/provider1.jpg";
import provider2 from "../../assets/images/provider2.jpg";
import provider3 from "../../assets/images/provider3.jpg";

function FeaturedProviders() {
  const providers = [
    {
      name: "Michael Mensah",
      profession: "Electrician",
      location: "Cape Coast",
      rating: "4.9",
      price: 120,
      image: provider1,
    },
    {
      name: "Akosua Owusu",
      profession: "Professional Cleaner",
      location: "Takoradi",
      rating: "4.8",
      price: 90,
      image: provider2,
    },
    {
      name: "Daniel Asare",
      profession: "Phone Repair Technician",
      location: "Accra",
      rating: "5.0",
      price: 150,
      image: provider3,
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Featured Professionals
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Hire Trusted Professionals
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Discover highly rated professionals ready to help you with your next project.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <ProviderCard
              key={provider.name}
              {...provider}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProviders;