import Image from "next/image";
import banner from "../../public/images/banner/banner.jpg";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Roboto } from "next/font/google";
const Banner = () => {
  return (
    <div className="border  w-11/12 mx-auto my-5 grid grid-cols-1 gap-5 lg:grid-cols-3 items-center">
      <div className="lg:col-span-1 mr-5 ml-2 order-2 lg:order-1">
        <h3 className="text-4xl mb-3 text-black  ">
          Discover Timeless Style with Fabrenix
        </h3>
        <p className="text-gray-700">
          Premium clothing & footwear designed for elegance.
        </p>
        <Button className="hover:bg-[#92614c] rounded-sm mb-6 mt-5 poppins-text ">
          Shop Collection <ChevronRight />
        </Button>
      </div>
      <Image
        src={banner}
        className="lg:h-[500px] lg:col-span-2 order-1 lg:order-2"
        alt="banner-image"
      ></Image>
    </div>
  );
};

export default Banner;
