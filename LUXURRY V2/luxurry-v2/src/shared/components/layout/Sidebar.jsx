"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  ShoppingBag,
  Landmark,
  BookOpen,
  Sparkles,
  Heart,
  ShoppingCart,
  Info,
  X,
} from "lucide-react";
import { User, LogIn } from "lucide-react";
import { useAuth } from "@/providers/AuthProvider";


export default function Sidebar({
  sidebarCollapsed,
  mobileSidebarOpen,
  setMobileSidebarOpen,
}) {
  const pathname = usePathname();
  const { user } = useAuth();
  
  const navigation = [
    { label: "Home", href: "/", icon: House },
    { label: "Products", href: "/products", icon: ShoppingBag },
    { label: "Brands", href: "/brands", icon: Landmark },
    { label: "Editorial", href: "/editorial", icon: BookOpen },
    { label: "Experiences", href: "/experiences", icon: Sparkles },
  
    ...(user
      ? [
        {
  label: "Luxury Academy",
  href: "/academy",
  icon: BookOpen,
},
          {
            label: "Wishlist",
            href: "/wishlist",
            icon: Heart,
          },
          {
            label: "Cart",
            href: "/cart",
            icon: ShoppingCart,
          },
          {
            label: "Profile",
            href: "/profile",
            icon: User,
          },
        ]
      : [
          {
            label: "Sign In",
            href: "/sign-in",
            icon: LogIn,
          },
        ]),
  
    {
      label: "About",
      href: "/about",
      icon: Info,
    },
  ];
  
  return (
    <>
      {/* Mobile Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-16
          left-0
          z-50
          h-[calc(100vh-4rem)]
          border-r
          border-[#E5DED6]
          bg-[#FDFCFB]
          transition-all
          duration-300

          ${
            mobileSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }

          ${
            sidebarCollapsed
              ? "lg:w-24"
              : "lg:w-64"
          }

          w-72
        `}
      >
        {/* Mobile Close */}
        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-[#F5F3EF]"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 px-2 py-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={`
                  flex
                  items-center
                  rounded-xl
                  transition-all
                  duration-200

                  ${
                    sidebarCollapsed
                      ? "justify-center p-3"
                      : "gap-3 px-4 py-3"
                  }

                  ${
                    active
                      ? "bg-[#3A3530] text-white"
                      : "text-[#3A3530] hover:bg-[#F5F3EF]"
                  }
                `}
              >
                <Icon size={20} />

                {!sidebarCollapsed && (
                  <span>{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}