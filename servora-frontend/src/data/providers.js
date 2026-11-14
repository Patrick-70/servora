// src/data/providers.js

const providers = [
  {
    id: 1,
    slug: "michael-mensah",

    name: "Michael Mensah",
    profession: "Electrician",
    category: "Electrical",

    location: "Cape Coast",

    image: "/images/provider1.jpg",

    rating: 4.9,
    reviews: 210,

    price: 120,

    verified: true,
    online: true,

    experience: "8 Years",
    jobsCompleted: 530,

    featured: true,

    description:
      "Certified electrician specializing in home wiring, repairs, lighting installation and emergency electrical services.",

    services: [
      "House Wiring",
      "Fault Repairs",
      "Lighting Installation",
      "Electrical Inspection",
    ],
  },

  {
    id: 2,
    slug: "akosua-owusu",

    name: "Akosua Owusu",
    profession: "Professional Cleaner",
    category: "Cleaning",

    location: "Takoradi",

    image: "/images/provider2.jpg",

    rating: 4.8,
    reviews: 150,

    price: 90,

    verified: true,
    online: true,

    experience: "5 Years",
    jobsCompleted: 310,

    featured: true,

    description:
      "Professional home and office cleaning with attention to detail and eco-friendly cleaning products.",

    services: [
      "Home Cleaning",
      "Office Cleaning",
      "Deep Cleaning",
      "Move-out Cleaning",
    ],
  },

  {
    id: 3,
    slug: "daniel-asare",

    name: "Daniel Asare",
    profession: "Phone Repair Technician",
    category: "Technology",

    location: "Accra",

    image: "/images/provider3.jpg",

    rating: 5.0,
    reviews: 98,

    price: 150,

    verified: false,
    online: false,

    experience: "6 Years",
    jobsCompleted: 420,

    featured: false,

    description:
      "Phone and tablet repair specialist offering screen replacement, battery replacement and software troubleshooting.",

    services: [
      "Screen Replacement",
      "Battery Replacement",
      "Software Repair",
      "Water Damage Repair",
    ],
  },

  {
    id: 4,
    slug: "kwame-boateng",

    name: "Kwame Boateng",
    profession: "Plumber",
    category: "Plumbing",

    location: "Kumasi",

    image: "/images/provider4.jpg",

    rating: 4.7,
    reviews: 185,

    price: 100,

    verified: true,
    online: true,

    experience: "7 Years",
    jobsCompleted: 470,

    featured: false,

    description:
      "Reliable plumber offering installation, leak repairs, drain cleaning and bathroom maintenance services.",

    services: [
      "Pipe Installation",
      "Leak Repairs",
      "Drain Cleaning",
      "Bathroom Installation",
    ],
  },
];

export default providers;