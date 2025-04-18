"use client";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
const Navber = () => {
  const sideMenuRef = useRef();
  const pathname = usePathname();
  const { data, status } = useSession();
  const router = useRouter();
  const { wishlist } = useWishlist();
  const { cart, forceUpdate } = useCart();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  const { data: currentUser = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/userRole");
      return res.data;
    },
  });
  const routes = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT", path: "/about" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
    ...(currentUser[0]?.role === "admin"
      ? [{ name: "ADMIN PANEL", path: "/dashboard" }]
      : []),
  ];

  const handleLogout = async () => {
    await signOut();
    await toast.success("Logout successfully");
  };

  // console.log("currentUser", currentUser[0].role);
  // console.log("currentUser", currentUser);

  if (!pathname.includes("dashboard")) {
    return (
      <div className="border-b fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md z-10 ">
        <nav className="flex justify-between items-center py-5 w-11/12 mx-auto">
          <div>
            <Link href="/" className="text-4xl font-semibold text-black">
              Fabrenix
            </Link>
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
            {status === "authenticated" ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <LuUser className="md:text-2xl cursor-pointer " />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href="/profile">Profile</Link>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/myOrder"> My Orders</Link>
                      <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/paymentHistory"> Payment</Link>

                      <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <LuUser className="md:text-2xl" />
              </Link>
            )}

            <Link href="/wishlist" className="relative  hidden lg:block">
              <MdOutlineFavoriteBorder className="text-2xl" />
              <p className="bg-[#92614c] text-white text-center  px-2  rounded-full absolute bottom-3 left-3">
                {wishlist?.length}
              </p>
            </Link>
            <Link href="/cart" className="relative hidden lg:block">
              <HiOutlineShoppingBag className="text-2xl" />
              <p
                key={forceUpdate}
                className="bg-[#92614c] text-white text-center  px-2  rounded-full absolute bottom-3 left-3"
              >
                {cart?.length}
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
