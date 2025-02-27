"use client";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";

const Navber = () => {
  const sideMenuRef = useRef();
  const pathname = usePathname();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  const routes = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT", path: "/product" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
    { name: "ADMIN PANEL", path: "/dashboard" },
  ];

  if (!pathname.includes("dashboard")) {
    return (
      <div className="border-b">
        <nav className="flex justify-between items-center py-5 w-11/12 mx-auto">
          <div>
            <h1 className="text-4xl font-semibold text-black">Fabrenix</h1>
          </div>
          <div>
            <ul className="lg:flex items-center hidden">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`px-2  ${
                      pathname === route.path
                        ? "text-[#92614c] font-bold"
                        : "text-black"
                    }`}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center gap-3 md:gap-5">
            <Link href="/" className="flex items-center gap-2">
              <GoSearch className="md:text-2xl" />
              Search
            </Link>
            <Link href="/">
              <LuUser className="md:text-2xl" />
            </Link>

            <Link href="/" className="relative  hidden lg:block">
              <MdOutlineFavoriteBorder className="text-2xl" />
              <p className="bg-[#92614c] text-white text-center  px-2  rounded-full absolute bottom-3 left-3">
                0
              </p>
            </Link>
            <Link href="/" className="relative hidden lg:block">
              <HiOutlineShoppingBag className="text-2xl" />
              <p className="bg-[#92614c] text-white text-center  px-2  rounded-full absolute bottom-3 left-3">
                0
              </p>
            </Link>
            <button onClick={openMenu} className="lg:hidden">
              <RiMenu3Line className="text-2xl" />
            </button>

            <ul
              ref={sideMenuRef}
              className="uppercase lg:hidden fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-100 transition duration-500 flex py-20 px-4 flex-col  gap-5"
            >
              <div
                onClick={closeMenu}
                className="absolute right-5 top-6 cursor-pointer"
              >
                <RxCross1 className="text-black text-xl" />
              </div>
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`px-4 py-2 ${
                      pathname === route.path
                        ? "text-[#92614c] font-bold"
                        : "text-black"
                    }`}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  } else {
    <></>;
  }
};

export default Navber;
