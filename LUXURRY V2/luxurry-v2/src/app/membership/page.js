import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/supabase/auth";

export default async function MembershipPage() {
  const user = await requireUser();
  const supabase = await createClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("membership")
    .eq("id", user.id)
    .single();

  const isPremium = profile?.membership === "Premium";
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="text-center">
        <h1 className="text-5xl font-light">Membership Plans</h1>

        <p className="mt-4 text-neutral-600">
          Choose the membership that best fits your luxury journey.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Basic */}
        <div className="rounded-3xl border bg-white p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            BASIC
          </p>

          <h2 className="mt-3 text-3xl font-semibold">Free</h2>

          <ul className="mt-8 space-y-4 text-neutral-700">
            <li>✓ Luxury Brand Discovery</li>
            <li>✓ Editorial Stories</li>
            <li>✓ Wishlist</li>
            <li>✓ Shopping Cart</li>
            <li>✓ Order Tracking</li>
          </ul>

          <button
            disabled
            className="mt-10 w-full rounded-xl bg-neutral-300 py-3 font-medium text-neutral-700"
          >
            Current Plan
          </button>
        </div>

        {/* Premium */}
        <div className="rounded-3xl border border-[#C8A96B] bg-gradient-to-br from-neutral-900 via-neutral-800 to-black p-8 text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-[#C8A96B]">
            PREMIUM
          </p>

          <h2 className="mt-3 text-3xl font-semibold">₹999 / Month</h2>

          <ul className="mt-8 space-y-4">
            <li>✓ Everything in Basic</li>
            <li>✓ Unlimited Experiences</li>
            <li>✓ Exclusive Product Launches</li>
            <li>✓ VIP Invitations</li>
            <li>✓ Concierge Support</li>
            <li>✓ Premium Member Badge</li>
          </ul>

          {isPremium ? (
            <div className="mt-10 rounded-xl border border-[#C8A96B] bg-[#C8A96B]/20 py-3 text-center font-semibold text-[#C8A96B]">
              ✓ You are already a Premium Member
            </div>
          ) : (
            <Link
              href="/membership/upgrade"
              className="mt-10 block w-full rounded-xl bg-[#C8A96B] py-3 text-center font-semibold text-black transition hover:opacity-90"
            >
              Upgrade to Premium
            </Link>
          )}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/profile" className="text-neutral-600 hover:text-black">
          ← Back to Profile
        </Link>
      </div>
    </main>
  );
}
