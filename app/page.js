"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const topDestinations = [
    { name: "Lake Nakuru", image: "/Rhino.jpg", short: "L. Nakuru" },
    { name: "Lake Naivasha", image: "/Antelope.jpg", short: "L. Naivasha" },
    { name: "Maasai Mara", image: "/Lion.jpg", short: "Maasai Mara" },
  ];

  const featuredTours = [
    {
      name: "3 Days 2 Nights Masai Mara Migration Safari",
      nights: 2,
      price: "$658 / Per Person",
      image: "/3-days-2-nights-masai-mara.jpg",
    },
    {
      name: "5 Days 4 Nights Masai Mara Photo Safari",
      nights: 4,
      price: "$1200 / Per Person",
      image: "/5-days-4-nights-masai-mara.jpg",
    },
    {
      name: "6 Days 5 Nights Masai Mara Safari",
      nights: 5,
      price: "$1624 / Per Person",
      image: "/6-days-5-nights-masai-mara.jpg",
    },
    {
      name: "5-Day Kenya Wildlife Heritage Safari",
      nights: 4,
      price: "$1395 / Per Person",
      image: "/5-days-kenya-heritage.jpg",
    },
  ];

  const whyTravelCards = [
    {
      title: "Experienced Guides",
      description: "Our guides are highly trained professionals with unmatched wildlife knowledge.",
    },
    {
      title: "Tailor-Made Safaris",
      description: "Every itinerary is customized to your interests and travel style.",
    },
    {
      title: "Premium Service",
      description: "From planning to execution, we deliver a seamless travel experience.",
    },
    {
      title: "Responsible Travel",
      description: "We support conservation, sustainability, and community-based tourism.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO SLIDER */}
      <section className="w-full h-[90vh]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full"
        >
          {[
            "Antelope.jpg","Big 5.jpg","Birdd.jpg","Buffallo.jpg",
            "Cat.jpg","Cats.jpg","Lion.jpg","Lions.jpg","Ostritch.jpg",
            "Rhhino.jpg","Rhino.jpg","water.jpg","Wildd.jpg"
          ].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[90vh]">
                <Image
                  src={`/${img}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg px-4">
                    {index % 2 === 0
                      ? "Discover the Wild, Discover Yourself"
                      : "Your Safari Adventure Starts Here"}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* TOP DESTINATIONS */}
      <section className="py-16 px-6 md:px-16 bg-amber-50">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900 tracking-wide uppercase">
          Top Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topDestinations.map((dest, i) => (
            <div
              key={i}
              className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image src={dest.image} alt={dest.name} fill className="object-cover" />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 text-lg font-bold">
                {dest.short}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TRAVEL WITH US */}
      <section
        className="py-24 px-6 md:px-16 bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: "url('/travel-us.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center uppercase tracking-wide">
            Why Travel With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyTravelCards.map((card, i) => (
              <div
                key={i}
                className="bg-white/90 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">{card.title}</h3>
                <p className="text-center text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900 tracking-wide uppercase">
          Featured Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredTours.map((tour, i) => (
            <Link key={i} href="/packages">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
                <div className="relative w-full h-64">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <h3 className="text-lg font-bold mb-2">{tour.name}</h3>
                  <p className="text-sm text-gray-700 mb-1">{tour.nights} nights</p>
                  <p className="text-sm text-yellow-600 font-semibold">{tour.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FIXED BADGE */}
      <div className="fixed bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm z-50">
        Chief Tech Solutions
      </div>

    </main>
  );
}
