"use client";

import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative w-full h-[70vh]">
        <Image
          src="/blog/hero.jpg"
          alt="Kenya Savannah Sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Why You Should Visit Kenya
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto py-12 px-6 leading-relaxed text-lg">

        <p className="mt-6">
          Kenya is a diverse and vibrant country known globally for its incredible wildlife,
          breathtaking landscapes, and warm hospitality. Whether you are planning a safari,
          a holiday getaway, or a photography adventure, Kenya offers unforgettable
          experiences for every traveler.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Top Destinations</h2>

        {/* Maasai Mara */}
        <h3 className="text-xl font-semibold mt-8">Maasai Mara</h3>
        <p className="mt-2">
          The Maasai Mara is Kenya’s most iconic wildlife reserve and one of the best safari
          destinations in the world. It is home to the Big Five and the world-famous Great
          Wildebeest Migration. Visitors can enjoy game drives, hot-air balloon safaris, and
          cultural tours with the Maasai community.
        </p>

        {/* Naivasha */}
        <h3 className="text-xl font-semibold mt-8">Naivasha</h3>
        <p className="mt-2">
          Lake Naivasha is a beautiful freshwater lake surrounded by lush greenery and wildlife.
          It is perfect for boat rides, bird watching, hiking at Mount Longonot, and exploring
          Hell’s Gate National Park—one of the few parks where you can walk or cycle among wildlife.
        </p>

        {/* Nakuru */}
        <h3 className="text-xl font-semibold mt-8">Nakuru</h3>
        <p className="mt-2">
          Lake Nakuru National Park is famous for its flamingos, rhinos, and breathtaking viewpoints.
          The landscape includes acacia forests, waterfalls, and diverse wildlife that make Nakuru
          an excellent safari destination for families and adventure seekers.
        </p>

        <p className="mt-12">
          Kenya offers unmatched beauty, diverse ecosystems, and memorable adventures. Whether your
          goal is relaxation, exploration, or wildlife encounters, Kenya stands out as one of Africa’s
          top travel destinations.
        </p>
      </section>
    </main>
  );
}
