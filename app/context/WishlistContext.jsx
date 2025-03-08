"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Wishlist Context তৈরি করা
const WishlistContext = createContext();

// Wishlist Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // ✅ Wishlist Data ফেচ করা (লোড হওয়ার সময়)
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/wishlist"); // Backend API Call
        setWishlist(res.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
    fetchWishlist();
  }, []);

  // ✅ Wishlist-এ নতুন আইটেম যোগ করা
  const addToWishlist = async (wishlistItem) => {
    try {
      const res = await axios.post("/api/shop", wishlistItem);
      if (res.data.acknowledged) {
        setWishlist((prev) => [...prev, wishlistItem]); // ✅ State Update
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook
export const useWishlist = () => {
  return useContext(WishlistContext);
};
