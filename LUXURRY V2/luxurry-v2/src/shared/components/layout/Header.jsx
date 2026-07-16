"use client";

// import Link from "next/link";
import SearchBar from "@/features/search/components/SearchBar";
import Link from "next/link";
import {
  Menu,
  Search,
  Heart,
  ShoppingBag,
  User,
  LogIn,
} from "lucide-react";

import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/providers/AuthProvider";

import { X } from "lucide-react";
import { useState } from "react";

export default function Header({
  sidebarCollapsed,
  setSidebarCollapsed,
  mobileSidebarOpen,
  setMobileSidebarOpen,
}) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { user } = useAuth();
  const { cart } = useCart();
  const toggleSidebar = () => {
    if (window.innerWidth >= 1024) {
      setSidebarCollapsed(!sidebarCollapsed);
    } else {
      setMobileSidebarOpen(!mobileSidebarOpen);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[#E5DED6] bg-[#FDFCFB]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">

        {/* Left */}
       {/* Left */}
<div className="flex items-center gap-3">

  {/* Sidebar Toggle */}
  <button
    onClick={toggleSidebar}
    className="rounded-lg p-2 transition-colors hover:bg-[#F5F3EF]"
    aria-label="Toggle Sidebar"
  >
    <Menu size={20} />
  </button>

  {/* Login / Profile */}
  {user ? (
    <Link
      href="/profile"
      className="rounded-lg p-2 transition-colors hover:bg-[#F5F3EF]"
      aria-label="Profile"
    >
      <User size={20} />
    </Link>
  ) : (
    <Link
      href="/sign-in"
      className="rounded-lg p-2 transition-colors hover:bg-[#F5F3EF]"
      aria-label="Sign In"
    >
      <LogIn size={20} />
    </Link>
  )}

  {/* Logo */}
  <Link
    href="/"
    className="text-lg font-semibold tracking-[0.28em]"
  >
    LUXURRY
  </Link>

</div>

        {/* Desktop Search */}
        <SearchBar />

        {/* Right */}
        <div className="flex items-center gap-2">

          {/* Mobile Search */}
          <button
  onClick={() => setMobileSearchOpen(true)}
  className="rounded-lg p-2 transition-colors hover:bg-[#F5F3EF] md:hidden"
  aria-label="Search"
>
  <Search size={20} />
</button>

          <Link
  href="/wishlist"
  className="rounded-lg p-2 transition-colors hover:bg-[#F5F3EF]"
  aria-label="Wishlist"
>
  <Heart size={20} />
</Link>
          <Link
  href="/cart"
  className="relative rounded-lg p-2 transition-colors hover:bg-[#F5F3EF]"
  aria-label="Cart"
>
  <ShoppingBag size={20} />

  {cart.length > 0 && (
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A96B] text-[11px] font-semibold text-white">
      {cart.length}
    </span>
  )}
</Link>


        </div>
      </div>
      {mobileSearchOpen && (
  <div className="fixed inset-0 z-[100] bg-[#FDFCFB] md:hidden">
    <div className="flex items-center gap-2 border-b border-[#E5DED6] p-4">

      <button
        onClick={() => setMobileSearchOpen(false)}
        className="rounded-lg p-2 hover:bg-[#F5F3EF]"
      >
        <X size={22} />
      </button>

      <div className="flex-1">
        <SearchBar
  mobile
  onClose={() => setMobileSearchOpen(false)}
/>
      </div>

    </div>
  </div>
)}
    </header>
  );
}