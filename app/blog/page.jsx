import axios from "axios";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const page = async () => {
  const res = await axios.get("http://localhost:3000/api/blog");
  const blogs = res.data;
  //   console.log(blogs);
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
        Our <span className="font-bold text-gray-800">Blogs</span>
        <span className=" w-12 h-[2px] bg-gray-800"></span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
        {blogs.map((blog) => (
          <div key={blog._id} className="space-y-2">
            <Link href={`/blog/${blog._id}`}>
              <img
                src={blog.image}
                className="w-full h-[300px] rounded-xl"
                alt="logo"
              />
            </Link>
            <h3 className="text-xl hover:text-[#92614c]">
              <Link href={`/blog/${blog._id}`}>{blog.title}</Link>
            </h3>
            <p className="flex items-center gap-2 text-[#92614c] text-sm">
              <Link
                href={`/blog/${blog._id}`}
                className="border-b border-b-[#92614c] "
              >
                Reed more
              </Link>
              <MdArrowOutward />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
