// import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-11/12 mx-auto my-8">
      <h2 className="text-center mb-5 uppercase text-3xl font-semibold tracking-wide">
        Contact us
      </h2>
      <div className="max-w-[900px] mx-auto text-center">
        <p className="text-gray-600 lg:w-9/12 mx-auto">
          We’d love to hear from you! Whether you have a question about our
          products, need assistance with an order, or just want to say hello,
          our team is here to help.
        </p>
        <h4 className="text-lg my-3 ">Get in Touch</h4>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center p-4 border rounded-sm shadow-sm">
            <FaMapMarkerAlt className="text-3xl text-[#92614c] mb-2" />
            <h2 className="font-semibold">Our Address</h2>
            <p className="text-gray-600">1238 Fashion Street, Comilla, BD</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-sm shadow-sm">
            <FaPhone className="text-3xl text-[#92614c] mb-2" />
            <h2 className="font-semibold">Call Us</h2>
            <p className="text-gray-600"> (+880) 1760445403</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-sm shadow-sm">
            <FaEnvelope className="text-3xl text-[#92614c] mb-2" />
            <h2 className="font-semibold">Email Us</h2>
            <p className="text-gray-600">support@fabrenix.com</p>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-4 mt-8">
        <div>Maap</div>
        <form className="mt-8 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows="4"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default page;
