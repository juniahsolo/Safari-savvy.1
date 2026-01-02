"use client";
import Image from "next/image";

export default function DestinationsPage() {
  const destinations = [
    {
      name: "Lake Nakuru",
      image: "/Rhino.jpg",
      description: `Discover the breathtaking Lake Nakuru, a haven for thousands of flamingos and the majestic white and black rhinos. Explore the park’s diverse wildlife while enjoying scenic views of the Rift Valley. Perfect for nature lovers and photographers alike.`,
    },
    {
      name: "Lake Naivasha",
      image: "/Antelope.jpg",
      description: `Experience the serene beauty of Lake Naivasha, where hippos play and birdlife thrives. Take a boat ride across the sparkling waters, walk through nearby flower farms, or simply relax and enjoy the tranquility of this gem in Kenya’s Great Rift Valley.`,
    },
    {
      name: "Maasai Mara",
      image: "/Lion.jpg",
      description: `Embark on an unforgettable safari adventure in the Maasai Mara, home to the Big Five and the spectacular Great Migration. Witness lions, elephants, and cheetahs in their natural habitat, and immerse yourself in the rich culture of the Maasai people.`,
    },
  ];

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/savannah-bg.jpg"  // Replace with your background image
          alt="Savannah Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Top Destinations
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {destinations.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl overflow-hidden shadow-lg bg-white transform transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:ring-1 hover:ring-yellow-400"
            >
              <div className="relative w-full h-64">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
