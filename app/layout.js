import "./globals.css";

export const metadata = {
  title: "Safari Savy Adventures",
  description: "Unforgettable Safari Tours across East Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">

        {/* Header */}
        <header className="bg-[#023047] text-white p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Safari Savy Adventures</h1>

          <nav className="space-x-6">
            <a href="/" className="hover:text-yellow-400">Home</a>
            <a href="/destinations" className="hover:text-yellow-400">Destinations</a>
            <a href="/packages" className="hover:text-yellow-400">Tours</a>
            <a href="/about" className="hover:text-yellow-400">About</a>
            <a href="/blog" className="hover:text-yellow-400">Blog</a>
            <a href="/contact" className="hover:text-yellow-400">Contact</a>
          </nav>
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 px-6 md:px-20 overflow-hidden">

          {/* Background Wrapper */}
          <div className="absolute inset-0">

            {/* Sharp, clearer background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: "url('/footer-safari.jpg')" }}
            ></div>

            {/* Dark overlay on top */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

          </div>

          {/* Actual footer content */}
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Column 1 - BRAND */}
            <div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
                Safari Savvy Adventures
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Discover breathtaking landscapes, wildlife encounters, and adventures
                tailored just for you. Your unforgettable journey begins here.
              </p>

              <div className="flex gap-4 mt-6">
                <a href="#" className="hover:text-yellow-500 transition"><svg className="h-6 w-6" fill="currentColor"><path d="M..." /></svg></a>
                <a href="#" className="hover:text-yellow-500 transition"><svg className="h-6 w-6" fill="currentColor"><path d="M..." /></svg></a>
                <a href="#" className="hover:text-yellow-500 transition"><svg className="h-6 w-6" fill="currentColor"><path d="M..." /></svg></a>
              </div>
            </div>

            {/* Column 2 - CONTACT */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative group">
                Contact Us
                <span className="block w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-yellow-500 mt-1"></span>
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>Email: <span className="text-white">safarisavvyadventures@gmail.com</span></li>
                <li>Call: <span className="text-white">+254 798 287 931</span></li>
                <li>WhatsApp: <span className="text-white">+254 746 187 233</span></li>
              </ul>
            </div>

            {/* Column 3 - QUICK LINKS */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative group">
                Quick Links
                <span className="block w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-yellow-500 mt-1"></span>
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li><a href="/" className="hover:text-yellow-500 transition">Home</a></li>
                <li><a href="/destination/lake-nakuru" className="hover:text-yellow-500 transition">Destinations</a></li>
                <li><a href="/tours/3-days-2-nights-masai-mara" className="hover:text-yellow-500 transition">Tours</a></li>
                <li><a href="/about" className="hover:text-yellow-500 transition">About Us</a></li>
              </ul>
            </div>

            {/* Column 4 - WHATSAPP BOX */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative group">
                Chat With Us
                <span className="block w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-yellow-500 mt-1"></span>
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                Need help planning? Chat instantly with our travel expert.
              </p>

              <a
                href="https://wa.me/254746187233"
                target="_blank"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded-xl shadow-lg transition w-fit"
              >
                <img src="/WhatsApp.jpg" alt="WhatsApp" className="h-6 w-6" />
                <span className="font-semibold">Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-12 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Safari Savvy Adventures — All Rights Reserved.
          </div>

        </footer>
      </body>
    </html>
  );
}
