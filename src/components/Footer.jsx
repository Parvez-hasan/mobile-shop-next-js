
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="bg-[#CE8946] text-gray-900 pt-16 pb-10 mt-20">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            MobileShop
          </h2>
          <p className="text-sm leading-relaxed text-gray-800">
            Premium kitchen tools designed to make cooking faster, easier, and more enjoyable.
            Trusted by thousands of home cooks and professional chefs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-900">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm text-gray-900">
            <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/" className="p-3 bg-white rounded-full hover:scale-110 transition">
              <FaFacebookF className="text-[#1877F2]" />
            </a>
            <a href="https://www.instagram.com/" className="p-3 bg-white rounded-full hover:scale-110 transition">
              <FaInstagram className="text-[#E4405F]" />
            </a>
            <a href="https://www.linkedin.com/feed/" className="p-3 bg-white rounded-full hover:scale-110 transition">
              <FaLinkedinIn className="text-[#0A66C2]" />
            </a>
            <a href="https://www.youtube.com/" className="p-3 bg-white rounded-full hover:scale-110 transition">
              <FaYoutube className="text-[#FF0000]" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-black/10 mt-12 pt-6 text-center text-sm text-gray-900">
        © {new Date().getFullYear()} MobileShop. All rights reserved.
      </div>
    </footer>
  );
}