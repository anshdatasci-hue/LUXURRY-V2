import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
      {/* Heading */}

      <h1 className="max-w-4xl text-5xl font-light leading-tight tracking-tight text-[#3A3530] md:text-7xl">
        Experience Luxury
        <br />
        Like Never Before
      </h1>

      {/* Logo */}

      <img
        src="images\WhatsApp Image 2026-07-04 at 7.14.04 PM.jpeg"
        alt="LUXURRY"
        className="my-10 w-52 md:w-72 lg:w-80"
      />

      {/* Description */}

      <p className="max-w-3xl text-lg leading-8 text-[#7C6B58]">
        Discover the world's finest brands, timeless craftsmanship, iconic
        stories, and exclusive experiences—all in one destination.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/brands"
          className="rounded-full bg-[#C8A96B] px-8 py-4 text-white transition hover:opacity-90"
        >
          Explore Brands
        </Link>

        <Link
          href="/products"
          className="rounded-full border border-[#C8A96B] px-8 py-4 text-[#3A3530] transition hover:bg-[#C8A96B] hover:text-white"
        >
          Discover Products
        </Link>
      </div>
    </section>
  );
}