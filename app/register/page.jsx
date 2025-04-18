import Link from "next/link";

import loginImage from "../../public/images/registerImage.jpg";
import Image from "next/image";
import RegisterForm from "./components/RegisterForm";

const page = () => {
  return (
    <div className="w-11/12 mx-auto  mb-7 mt-28 ">
      <div className="max-w-[800px] mx-auto  lg:h-[500px] flex lg:justify-between justify-center items-center gap-5">
        <div className="lg:w-1/2 p-4 max-w-[400px] w-full">
          <h3 className="text-xl font-bold  mb-2">Create Your Account</h3>
          <p className="text-gray-700 mb-5">
            Get started for seamless shopping experience.
          </p>

          <RegisterForm></RegisterForm>

          <p className="text-gray-700 mt-5">
            Already have an account?
            <Link href="/login" className="text-[#92614c] font-bold ">
              Login
            </Link>
          </p>
        </div>

        <div className="lg:w-1/2 bg-gray-100 hidden lg:block">
          <Image
            src={loginImage}
            className="lg:h-[500px] lg:col-span-2 order-1 lg:order-2 "
            alt="banner-image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default page;
