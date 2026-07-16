import Link from "next/link";
import { User, Heart, ShoppingCart, Package } from "lucide-react";
import MembershipCard from "@/components/profile/MembershipCard";
import { createClient } from "@/lib/supabase/server";

import LogoutButton from "@/features/authentication/components/LogoutButton";
import { requireUser } from "@/lib/supabase/auth";

export default async function ProfilePage({ searchParams }) {
  searchParams = await searchParams;

  const user = await requireUser();
  const supabase = await createClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      {searchParams.membership === "upgraded" && (
        <div className="mb-6 rounded-xl border border-green-300 bg-green-50 p-4 text-green-700">
          🎉 Congratulations! Your membership has been upgraded to Premium.
        </div>
      )}

      {/* Header */}
      <div className="rounded-2xl border border-[#E5DED6] bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
          {/* Avatar */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F5F3EF]">
            <User size={42} className="text-[#7C6B58]" />
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-[#3A3530]">
              Welcome Back{profile?.full_name ? `, ${profile.full_name}` : ""}
            </h1>

            <p className="mt-2 text-[#7C6B58]">{user.email}</p>
          </div>
        </div>
      </div>

      <MembershipCard
        membership={profile?.membership ?? "Basic"}
        joinedDate={new Date(profile.created_at).toLocaleDateString("en-IN")}
      />

      {/* Quick Actions */}
      <section className="mt-8">
        <h2 className="mb-4 text-xl font-semibold text-[#3A3530]">
          Quick Actions
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/wishlist"
            className="flex items-center gap-4 rounded-xl border border-[#E5DED6] bg-white p-5 transition hover:border-[#C8A96B]"
          >
            <Heart className="text-[#C8A96B]" />
            <div>
              <h3 className="font-medium">Wishlist</h3>
              <p className="text-sm text-[#7C6B58]">
                View your saved luxury products
              </p>
            </div>
          </Link>

          <Link
            href="/orders"
            className="flex items-center gap-4 rounded-xl border border-[#E5DED6] bg-white p-5 transition hover:border-[#C8A96B]"
          >
            <Package className="text-[#C8A96B]" />

            <div>
              <h3 className="font-medium">My Orders</h3>

              <p className="text-sm text-[#7C6B58]">
                View your purchase history
              </p>
            </div>
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-4 rounded-xl border border-[#E5DED6] bg-white p-5 transition hover:border-[#C8A96B]"
          >
            <ShoppingCart className="text-[#C8A96B]" />
            <div>
              <h3 className="font-medium">Shopping Cart</h3>
              <p className="text-sm text-[#7C6B58]">Continue your purchase</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Account */}
      <section className="mt-8 rounded-2xl border border-[#E5DED6] bg-white p-6">
        <h2 className="mb-5 text-xl font-semibold text-[#3A3530]">
          Account Information
        </h2>

        <div className="space-y-4 text-[#5F564E]">
          <div className="flex justify-between border-b border-[#F1ECE6] pb-3">
            <span>Email</span>
            <span>{user.email}</span>
          </div>

          <div className="flex justify-between border-b border-[#F1ECE6] pb-3">
            <span>Membership</span>
            <span>{profile?.membership ?? "Basic"}</span>
          </div>

          <div className="flex justify-between">
            <span>Status</span>
            <span className="text-green-600">Active</span>
          </div>
        </div>
      </section>

      {/* Logout */}
      <section className="mt-8 flex justify-end">
        <LogoutButton />
      </section>
    </main>
  );
}
