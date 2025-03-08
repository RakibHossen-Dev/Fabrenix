import Image from "next/image";

const Offer = () => {
  return (
    <div className="relative my-10">
      <Image
        src="/images/Slider/poster.jpg"
        alt="Discount Offer"
        className="h-[600px] w-full object-cover"
        width={1200}
        height={600}
      />

      <div className="absolute inset-0  flex flex-col items-center justify-center text-white bg-black/50">
        <p className="md:text-xl text-lg uppercase font-bold mb-4">
          New arrivals
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Coupon for 20% Discount
        </h2>
        <p className="md:text-2xl text-sm font-semibold text-[#92614c]  mb-4">
          Coupon: <span className="font-bold text-white">FAB20</span>
        </p>
        <button className="px-6 py-2 bg-[#92614c] md:text-lg text:md font-semibold  ">
          View More
        </button>
      </div>
    </div>
  );
};

export default Offer;
