import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
// import loginImage from "../../public/images/loginImage.jpg";
import Link from "next/link";

import loginImage from "../../public/images/registerImage.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const page = () => {
    return (
        <div className="w-11/12 mx-auto my-5 ">
            <div className="max-w-[800px] mx-auto  lg:h-[500px] flex lg:justify-between justify-center items-center gap-5">
                <div className="lg:w-1/2 p-4 max-w-[400px] w-full">
                <h3 className="text-xl font-bold ">Welcome</h3>
                <p className="text-gray-700 mb-8">Enjoy a seamless shopping experience.</p>
                 <div className=" flex  gap-4 items-center">
<button className="py-2 w-full border rounded-sm flex justify-center items-center gap-2">
<FcGoogle />
    Google</button>
<button className="py-2 w-full border rounded-sm flex justify-center items-center gap-2">
<FaFacebook className="text-blue-500" />
    Facebook</button>
                </div>

               




                <div className="flex items-center my-4">
      <hr className="flex-grow border-t border-gray-300" />
      <span className="px-3 text-gray-500">OR</span>
      <hr className="flex-grow border-t border-gray-300" />
    </div>


    <form className="space-y-4">
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" className="rounded-sm" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" placeholder="password" className="rounded-sm"/>
    </div>
    <Button className="w-full rounded-sm bg-[#92614c] text-md">Login</Button>
    </form>
    <p className="text-gray-700 mt-5">Don't have an account <Link href="/register" className="text-[#92614c] font-bold">Register</Link></p>


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