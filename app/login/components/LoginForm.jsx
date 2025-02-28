"use client";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        await toast.success("Login successfully !");
        router.push("/");
      } else {
        await toast.error("Login failed !");
      }
    } catch (error) {
      await toast.error("Login failed !");
    }
  };

  const handleSocialLogin = async (providerName) => {
    console.log(providerName);
    const result = await signIn(providerName, { redirect: false });
    console.log(result);
  };

  return (
    <div>
      <div className=" flex  gap-4 items-center">
        <button
          onClick={() => handleSocialLogin("google")}
          className="py-2 w-full border rounded-sm flex justify-center items-center gap-2"
        >
          <FcGoogle />
          Google
        </button>
        <button
          onClick={() => handleSocialLogin("instagram")}
          className="py-2 w-full border rounded-sm flex justify-center items-center gap-2"
        >
          <FaInstagram className="text-red-500" />
          Instagram
        </button>
      </div>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-3 text-gray-500">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            {...register("email", { required: true })}
            id="email"
            placeholder="Email"
            className="rounded-sm"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            {...register("password", { required: true })}
            id="password"
            placeholder="password"
            className="rounded-sm"
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-sm bg-[#92614c] text-md"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
