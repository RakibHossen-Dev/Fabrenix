import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="border-t">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 lg:gap-10 gap-5 w-11/12 mx-auto py-10">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Fabrenix</h3>
          <p className="text-sm">
            Your ultimate destination for stylish fashion and trendy outfits.
          </p>
          <p className="text-sm mt-2">Address: 1238 Fashion Street, </p>
          <p className="text-sm mt-2">Comilla,Bangladesh</p>
          <p className="text-sm mt-2">Email: contact@fabrenix.com</p>
          <p className="text-sm mt-2">Phone: (+880) 1760445403</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-medium  mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/shop" className="hover:text-[#92614c]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#92614c]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#92614c]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#92614c]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#92614c]">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-medium  mb-3">Help</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/shop" className="hover:text-[#92614c]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#92614c]">
                Returns + Exchanges
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#92614c]">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#92614c]">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#92614c]">
                Compare
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-medium  mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to get updates on new arrivals and special offers.
          </p>
          <div className="flex border">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2  text-gray-900 w-full focus:outline-none"
            />
            <button className="bg-black px-4 py-2  text-white hover:bg-[#92614c]">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-[#92614c] text-gray-600 text-xl border p-2 rounded-full transition-all duration-200 hover:border-[#92614c] ease-linear"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-[#92614c] text-gray-600 text-xl border p-2 rounded-full transition-all duration-200 hover:border-[#92614c] ease-linear"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              className="hover:text-[#92614c] text-gray-600 text-xl border p-2 rounded-full transition-all duration-200 hover:border-[#92614c] ease-linear"
            >
              <RiTwitterXFill />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="hover:text-[#92614c] text-gray-600 text-xl border p-2 rounded-full transition-all duration-200 hover:border-[#92614c] ease-linear"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b"></div>
      <div className="py-4 w-11/12 mx-auto">
        <p className="text-sm text-center">
          © 2025 Fabrenix. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
