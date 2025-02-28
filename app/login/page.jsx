import Link from "next/link";

import loginImage from "../../public/images/registerImage.jpg";
import Image from "next/image";
import LoginForm from "./components/LoginForm";
const page = () => {
  return (
    <div className="w-11/12 mx-auto my-5 ">
      <div className="max-w-[800px] mx-auto  lg:h-[500px]  flex lg:justify-between justify-center items-center gap-5">
        <div className="lg:w-1/2 p-4 max-w-[400px] w-full">
          <h3 className="text-xl font-bold ">Welcome</h3>
          <p className="text-gray-700 mb-8">
            Enjoy a seamless shopping experience.
          </p>

          <LoginForm></LoginForm>

          <p className="text-gray-700 mt-5">
            Don't have an account{" "}
            <Link href="/register" className="text-[#92614c] font-bold">
              Register
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
