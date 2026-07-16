import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function SearchPage({ searchParams }) {
  const { q = "" } = await searchParams;

  const supabase = await createClient();

  const { data: products } = await supabase
    .from("products")
    .select("id, name, slug, price, image_url")
    .ilike("name", `%${q}%`);

  const { data: brands } = await supabase
    .from("brands")
    .select("id, name, slug")
    .ilike("name", `%${q}%`);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-light">Search Results</h1>

      <p className="mb-8 text-neutral-500">
        Results for "<strong>{q}</strong>"
      </p>

      {/* Products */}

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Products</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products?.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="rounded-xl border p-4 transition hover:shadow-lg"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="mb-4 h-56 w-full rounded-lg object-cover"
              />

              <h3 className="font-semibold">{product.name}</h3>

              <p className="mt-2">
                ₹{Number(product.price).toLocaleString("en-IN")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Brands */}

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Brands</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {brands?.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="rounded-xl border p-5 transition hover:bg-neutral-50"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
