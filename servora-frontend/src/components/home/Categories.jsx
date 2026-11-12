import {
  FaBolt,
  FaWrench,
  FaBroom,
  FaPaintRoller,
  FaLaptop,
  FaGraduationCap,
} from "react-icons/fa";

import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    {
      icon: <FaBolt />,
      title: "Electricians",
      providers: 120,
    },
    {
      icon: <FaWrench />,
      title: "Plumbers",
      providers: 95,
    },
    {
      icon: <FaBroom />,
      title: "Cleaning",
      providers: 210,
    },
    {
      icon: <FaPaintRoller />,
      title: "Painters",
      providers: 80,
    },
    {
      icon: <FaLaptop />,
      title: "Tech Repairs",
      providers: 140,
    },
    {
      icon: <FaGraduationCap />,
      title: "Tutors",
      providers: 65,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Categories
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Explore Popular Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Browse trusted professionals across different service categories.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              providers={category.providers}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;