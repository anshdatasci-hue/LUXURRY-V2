import { notFound } from "next/navigation";
import Link from "next/link";

import brands from "@/data/brands";

export default async function BrandPage({ params }) {
  const { slug } = await params;

  const brand = brands.find((item) => item.slug === slug);

  if (!brand) {
    notFound();
  }

  const relatedBrands = brands
    .filter((item) => item.slug !== brand.slug)
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero */}

      <section className="rounded-3xl border border-[#E5DED6] bg-white p-10 shadow-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-[#C8A96B]">
          Luxury Maison
        </p>

        <h1 className="mt-4 text-5xl font-light text-[#3A3530]">
          {brand.name}
        </h1>

        <p className="mt-4 text-lg text-[#7C6B58]">
          {brand.country} • Founded {brand.founded}
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5F564D]">
          {brand.description}
        </p>

        <Link
          href="/products"
          className="mt-10 inline-block rounded-full bg-[#C8A96B] px-6 py-3 text-white transition hover:bg-[#B89459]"
        >
          View Products
        </Link>
      </section>

      {/* Heritage */}

      <section className="mt-16 rounded-3xl border border-[#E5DED6] bg-[#FAF8F5] p-10">
        <h2 className="text-3xl font-light text-[#3A3530]">Heritage</h2>

        <p className="mt-6 leading-8 text-[#5F564D]">
          {brand.name} has established itself as one of the world's most
          prestigious luxury brands through exceptional craftsmanship,
          innovation, and timeless design. Every creation reflects decades of
          expertise, meticulous attention to detail, and a commitment to
          excellence that continues to inspire collectors and enthusiasts around
          the world.
        </p>
      </section>

      {/* Related Brands */}

      <section className="mt-20">
        <h2 className="text-3xl font-light text-[#3A3530]">
          Explore More Brands
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedBrands.map((item) => (
            <Link
              key={item.id}
              href={`/brands/${item.slug}`}
              className="rounded-2xl border border-[#E5DED6] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-medium text-[#3A3530]">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-[#C8A96B]">
                {item.country} • Founded {item.founded}
              </p>

              <p className="mt-4 text-[#6A625A]">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
