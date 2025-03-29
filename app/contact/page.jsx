// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
  FaFacebook,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaClock,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="w-11/12  lg:w-[1100px] mx-auto  mt-32 mb-10">
      <h2 className="text-2xl uppercase  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
        Contact <span className="font-bold text-gray-800">Us</span>
        <span className=" w-12 h-[2px] bg-gray-800"></span>
      </h2>
      <div className="grid lg:grid-cols-2 grid-col-1 gap-10">
        <div>
          <h3 className="uppercase text-xl mb-4">Send Your Question</h3>
          <form className="space-y-4">
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email" className="uppercase text-sm">
                Your name
              </Label>
              <Input
                type="text"
                id="email"
                className="rounded-none"
                placeholder="Name"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email" className="uppercase text-sm">
                Your Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="rounded-none"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email" className="uppercase text-sm">
                Your Message
              </Label>
              <Textarea
                placeholder="Type your message here."
                className="rounded-none min-h-[150px]"
              />
            </div>
            <Button className="rounded-none w-full uppercase">
              send message
            </Button>
          </form>
        </div>
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="uppercase text-xl mb-3">Address</h3>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg text-[#92614c] " />
                <p className="text-sm">1238 Fashion Street, Comilla, BD</p>
              </div>
            </div>
            <div>
              <h3 className="uppercase text-xl mb-3">Phones</h3>

              <div className="flex items-center gap-2 mb-2">
                <FaPhone className="text-md text-[#92614c] " />
                <p className="text-sm"> (+880) 1760445403</p>
              </div>
              <div className="flex items-center gap-2 ">
                <FaPhone className="text-md text-[#92614c] " />
                <p className="text-sm"> (+880) 1860445891</p>
              </div>
            </div>
            <div>
              <h3 className="uppercase text-xl mb-3">Email</h3>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-lg text-[#92614c]" />
                <p className="text-sm">support@fabrenix.com</p>
              </div>
            </div>
            <div>
              <h3 className="uppercase text-xl mb-3">Working Hours</h3>

              <div className="flex items-center gap-2">
                <FaClock className="text-lg text-[#92614c]" />
                <p className="text-sm">Mon-Fri: 10:00 - 18:00</p>
              </div>
            </div>
            <div>
              <h3 className="uppercase text-xl mb-3">Follow Us</h3>

              <div className="flex items-center gap-2">
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
        </div>
      </div>
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29355.71850996475!2d91.07478755!3d23.11667945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1742633181029!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
