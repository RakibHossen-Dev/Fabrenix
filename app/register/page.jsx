import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import Link from "next/link";

import loginImage from "../../public/images/registerImage.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const page = () => {
    return (
        <div className="w-11/12 mx-auto my-5 ">
            <div className="max-w-[800px] mx-auto  lg:h-[500px] flex lg:justify-between justify-center items-center gap-5">
                <div className="lg:w-1/2 p-4 max-w-[400px] w-full">
                <h3 className="text-xl font-bold  mb-2">Create Your Account</h3>
                <p className="text-gray-700 mb-5">Get started for seamless shopping experience.</p>
                 

               





    <form className="space-y-4">
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Full Name</Label>
      <Input type="text" id="name" placeholder="Name" className="rounded-sm" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" className="rounded-sm" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="image">Photo (Upload Your Image)</Label>
      <Input type="file" id="image"  className="rounded-sm" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" placeholder="password" className="rounded-sm"/>
    </div>
    <Button className="w-full rounded-sm bg-[#92614c] text-md">Login</Button>
    </form>
    <p className="text-gray-700 mt-5">Aready have an account? <Link href="/login" className="text-[#92614c] font-bold">Login</Link></p>


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