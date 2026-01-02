export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section
        className="w-full h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-white tracking-wide text-center">
        
        </h1>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Who We Are
        </h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Safari Savvy Adventures is a trusted safari company dedicated to
          delivering unforgettable wildlife and travel experiences across
          Kenya and East Africa. We believe that every safari is more than a
          trip—it is a personal journey filled with discovery, connection,
          and adventure.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Our team consists of passionate travel experts and top-tier guides
          who have spent years exploring Kenya’s parks, reserves, and hidden
          gems. With deep local knowledge and a commitment to exceptional
          service, we ensure every guest enjoys a seamless, enjoyable, and
          immersive safari experience.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Whether you're planning a family holiday, romantic escape, solo
          expedition, or photographic adventure, Safari Savvy Adventures is
          here to craft a trip that exceeds expectations.
        </p>
      </section>

      {/* WHY TRAVEL WITH US */}
      <section
        className="py-24 px-6 md:px-16 bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: "url('/travel-us.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-white uppercase tracking-wide">
            Why Travel With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="bg-white/90 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Experienced Guides
              </h3>
              <p className="text-center text-gray-700">
                Our guides are highly trained professionals with unmatched wildlife knowledge.
              </p>
            </div>

            <div className="bg-white/90 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Tailor-Made Safaris
              </h3>
              <p className="text-center text-gray-700">
                Every itinerary is customized to your interests and travel style.
              </p>
            </div>

            <div className="bg-white/90 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Premium Service
              </h3>
              <p className="text-center text-gray-700">
                From planning to execution, we deliver a seamless travel experience.
              </p>
            </div>

            <div className="bg-white/90 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Responsible Travel
              </h3>
              <p className="text-center text-gray-700">
                We support conservation, sustainability, and community-based tourism.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
