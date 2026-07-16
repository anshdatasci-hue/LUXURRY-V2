"use client";

import Link from "next/link";
import LogoutButton from "@/features/authentication/components/LogoutButton";
import { useAuth } from "@/providers/AuthProvider";

export default function WelcomeBar() {
  const { user } = useAuth();

  return (
    <section className="fixed top-16 left-0 right-0 z-40 border-b border-[#E5DED6] bg-[#F5F3EF]">
      {/* Desktop */}
      {/* Desktop */}
<div className="hidden h-12 items-center justify-between px-6 lg:flex">
  {/* Left */}
  <div className="w-40" />

  {/* Center */}
  <div className="flex-1 text-center text-sm text-[#7C6B58]">
    {user
      ? `Welcome back to LUXURRY, ${user.email?.split("@")[0]}.`
      : "Sign in to unlock your luxury experience."}
  </div>

  {/* Right */}
  <div className="flex w-40 items-center justify-end gap-4">
    {user ? (
      <>
        <Link
  href="/profile"
  className="rounded-full border border-[#C8A96B] px-5 py-2 text-sm font-medium text-[#3A3530] transition-all duration-300 hover:bg-[#C8A96B] hover:text-white"
>
  Profile
</Link>

        <LogoutButton />
      </>
    ) : (
      <>
        <Link
          href="/sign-in"
          className="transition-colors hover:text-[#7C6B58]"
        >
          Sign In
        </Link>

        <Link
          href="/sign-up"
          className="rounded-md bg-[#3A3530] px-3 py-1 text-white transition-colors hover:bg-[#4A443E]"
        >
          Sign Up
        </Link>
      </>
    )}
  </div>
</div>

      {/* Mobile */}
      <div className="space-y-3 px-5 py-4 lg:hidden">
        <div className="font-medium">
          {user
            ? `Hello, ${user.email?.split("@")[0]}`
            : "Welcome, Guest"}
        </div>

        <p className="text-sm text-[#7C6B58]">
          {user
            ? "Welcome back to LUXURRY."
            : "Sign in to unlock your luxury experience."}
        </p>

        <div className="flex gap-3">
          {user ? (
            <>
              <Link
                href="/profile"
                className="rounded-md border border-[#E5DED6] px-4 py-2"
              >
                Profile
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="rounded-md border border-[#E5DED6] px-4 py-2"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="rounded-md bg-[#3A3530] px-4 py-2 text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}