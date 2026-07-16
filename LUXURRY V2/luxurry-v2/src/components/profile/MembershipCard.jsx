import Link from "next/link";

export default function MembershipCard({
  membership = "Basic",
  joinedDate,
}) {
  const isPremium = membership === "Premium";

  return (
    <section
      className={`rounded-2xl border p-8 transition-all ${
        isPremium
          ? "border-[#C8A96B] bg-gradient-to-r from-neutral-900 via-neutral-800 to-black text-white shadow-xl"
          : "border-neutral-200 bg-neutral-900 text-white"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p
            className={`text-sm uppercase tracking-[0.3em] ${
              isPremium
                ? "text-[#C8A96B]"
                : "text-neutral-400"
            }`}
          >
            {isPremium ? "Premium Member" : "Basic Member"}
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            {isPremium
              ? "Experience Luxury Without Limits"
              : "Your Luxury Journey Starts Here"}
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-neutral-300">
            {isPremium
              ? "Enjoy priority access to exclusive collections, VIP experiences, concierge support and premium privileges."
              : "Explore the world of luxury brands, immersive stories and a refined shopping experience."}
          </p>
        </div>

        <div
          className={`rounded-full px-6 py-2 text-sm font-semibold ${
            isPremium
              ? "bg-[#C8A96B] text-black"
              : "bg-neutral-700 text-white"
          }`}
        >
          {membership}
        </div>
      </div>

      {/* Features */}

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Feature text="Luxury Brand Discovery" />
        <Feature text="Wishlist" />
        <Feature text="Editorial Stories" />

        {isPremium ? (
          <>
            <Feature text="VIP Experiences" />
            <Feature text="Exclusive Product Launches" />
            <Feature text="Luxury Concierge" />
            <Feature text="Priority Customer Support" />
            <Feature text="Premium Member Badge" />
          </>
        ) : (
          <Feature text="Standard Shopping Experience" />
        )}
      </div>

      {/* Footer */}

      <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-400">
          Member Since {joinedDate}
        </p>

        {isPremium ? (
          <span className="rounded-full bg-[#C8A96B] px-6 py-2 font-semibold text-black">
            ✓ Premium Active
          </span>
        ) : (
          <Link
            href="/membership"
            className="rounded-full border border-[#C8A96B] px-6 py-2 text-sm font-medium text-[#C8A96B] transition hover:bg-[#C8A96B] hover:text-black"
          >
            Upgrade to Premium
          </Link>
        )}
      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C8A96B] text-sm font-bold text-black">
        ✓
      </div>

      <span className="text-sm">{text}</span>
    </div>
  );
}