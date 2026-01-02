"use client";
import Image from "next/image";

export default function ToursPage() {
  const tours = [
    {
      name: "3 Days 2 Nights Masai Mara Migration Safari",
      nights: 2,
      price: "$658 / Person",
      description: "Experience the ultimate wildlife adventure in Masai Mara. Witness the Great Migration.",
      activities: [
        "Evening game drive on Day 1",
        "Full-day safari on Day 2",
        "Morning game drive and departure on Day 3"
      ],
      image: "/3-days-2-nights-masai-mara.jpg"
    },
    {
      name: "5 Days 4 Nights Masai Mara Photo Safari",
      nights: 4,
      price: "$1200 / Person",
      description: "A photography-focused safari for capturing Kenya’s wildlife at its best.",
      activities: [
        "Relax on arrival Day 1",
        "Daily guided photography safaris Days 2-4",
        "Morning game drive and departure on Day 5"
      ],
      image: "/5-days-4-nights-masai-mara.jpg"
    },
    {
      name: "6 Days 5 Nights Masai Mara Safari",
      nights: 5,
      price: "$1624 / Person",
      description: "Explore the Mara deeply, including optional hot air balloon safari.",
      activities: [
        "Arrival and lodge welcome on Day 1",
        "Morning and evening game drives Days 2-5",
        "Optional hot air balloon safari",
        "Depart after breakfast on Day 6"
      ],
      image: "/6-days-5-nights-masai-mara.jpg"
    },
    {
      name: "5-Day Kenya Wildlife Heritage Safari",
      nights: 4,
      price: "$1395 / Person",
      description: "Discover Kenya's rich wildlife and culture across multiple parks.",
      activities: [
        "Visit David Sheldrick Wildlife Trust on Day 1",
        "Safaris at Amboseli, Lake Naivasha, and Masai Mara Days 2-4",
        "Morning game drive and departure on Day 5"
      ],
      image: "/5-days-kenya-heritage.jpg"
    }
  ];

  return (
    <main className="min-h-screen px-6 md:px-16 py-16 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">All Safari Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tours.map((tour, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition transform hover:scale-105">
            <div className="relative w-full h-64">
              <Image src={tour.image} alt={tour.name} fill className="object-cover" />
              <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold text-sm">{tour.nights} nights</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
              <p className="text-yellow-600 font-semibold text-lg mb-3">{tour.price}</p>
              <p className="text-gray-700 mb-3">{tour.description}</p>
              <ul className="list-disc list-inside text-gray-700">
                {tour.activities.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
