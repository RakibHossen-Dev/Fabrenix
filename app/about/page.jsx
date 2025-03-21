import Image from "next/image";
// import mission from "../../public/images/banner/our_mission.jpg";
import mission from "../../public/images/Slider/our_mission.jpg";
import { Palette, ShieldCheck, TrainTrack } from "lucide-react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="my-10 text-center w-[500px] mx-auto">
        <h3 className="text-2xl  mb-3">We are Fabrenix</h3>
        <p className="text-sm">
          Welcome to our classic clothing store, where we believe that timeless
          style never goes out of fashion. Our collection features classic
          pieces that are both stylish and versatile, perfect for building a
          wardrobe that will last for years.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 items-center">
        <div className="lg:w-1/2">
          <h4 className="text-xl mb-2">Our Mission</h4>
          <p className="text-sm w-9/12">
            Our mission is to empower people through sustainable fashion. We
            want everyone to look and feel good, while also doing our part to
            help the environment.We believe that fashion should be stylish,
            affordable and accessible to everyone. Body positivity and
            inclusivity are values that are at the heart of our brand.
          </p>
        </div>
        <Image
          src={mission}
          width="500"
          height="300"
          className="lg:w-1/2 h-[500px]"
          alt="Our Mission"
        ></Image>
      </div>

      <div className="md:w-1/2 text-center mx-auto my-8">
        <h3 className="mb-2 text-xl">Quality is our priority</h3>
        <p className="text-sm">
          Our talented stylists have put together outfits that are perfect for
          the season. They've variety of ways to inspire your next
          fashion-forward look.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="border p-8 rounded-lg flex flex-col justify-center items-center gap-3">
          <ShieldCheck />
          <h4 className="text-xl">High Quality Materials</h4>
          <p className="text-sm text-center">
            Crafted with premium materials, ensuring durability and long-lasting
            performance. Designed for comfort, style, and reliability.
            Experience excellence in every detail.
          </p>
        </div>
        <div className="border p-8 rounded-lg flex flex-col justify-center items-center gap-3">
          <Palette />
          <h4 className="text-xl">Iconic Design</h4>
          <p className="text-sm text-center">
            A timeless and stylish look that never goes out of fashion. Crafted
            with precision for elegance and durability. Perfect for any
            occasion.
          </p>
        </div>
        <div className="border p-8 rounded-lg flex flex-col justify-center items-center gap-3">
          <TrainTrack />
          <h4 className="text-xl">Various Sizes</h4>
          <p className="text-sm text-center">
            Available in multiple sizes to fit every preference and need.
            Designed for comfort and versatility. A perfect fit for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
