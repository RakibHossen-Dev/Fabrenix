"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { registerUser } from "@/app/actions/auth/registerUser";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const imageFile = { image: data.image[0] };

      const res = await axios.post(image_hosting_api, imageFile, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (res.data.success) {
        const response = await registerUser({
          name: data.name,
          email: data.email,
          photo: res.data.data.display_url,
          password: data.password,
          role: "user",
        });

        if (response.success) {
          toast.success("Registration Successful! 🎉");
        } else {
          toast.error(response.message || "User already exists! ⚠️");
        }
      }
    } catch (error) {
      toast.error("Registration failed! Try again. ❌");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            {...register("name", { required: true })}
            id="name"
            placeholder="Name"
            className="rounded-sm"
          />
        </div>
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
          <Label htmlFor="image">Photo (Upload your profile image)</Label>
          <Input
            type="file"
            {...register("image", { required: true })}
            id="image"
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
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
