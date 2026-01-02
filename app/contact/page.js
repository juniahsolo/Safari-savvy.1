"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    formData.append("access_key", "2e3b13da-1cdf-48f4-b05e-b2bf85199311");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen relative">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/contact/hero.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <section className="flex flex-col items-center justify-center h-[80vh] px-6 text-center">
        <div className="bg-black/40 rounded-lg p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Contact Us
          </h1>

          <p className="max-w-2xl text-lg md:text-xl mb-10 text-white">
            We are here to help you plan your dream safari. Reach out and let’s create
            unforgettable memories together.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Send Us an Email
          </button>
        </div>
      </section>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center px-4 z-50">
          <div className="bg-white text-gray-800 rounded-lg p-8 max-w-md w-full shadow-xl relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Send an Email</h2>

            <form onSubmit={handleSubmit}>
              <label className="block mb-2 font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 mb-4"
                required
              />

              <label className="block mb-2 font-semibold">Your Email</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 mb-4"
                required
              />

              <label className="block mb-2 font-semibold">Your Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full rounded-md border border-gray-300 px-4 py-2 mb-4"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white w-full py-3 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                {status === "loading" ? "Sending..." : "Send Email"}
              </button>

              {status === "success" && (
                <p className="text-green-600 mt-4 text-center font-semibold">
                  Email sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 mt-4 text-center font-semibold">
                  Something went wrong. Try again.
                </p>
              )}
            </form>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/254712345678"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
              >
                Chat with us on WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
