import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function ProductsPage() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select(
      `
      id,
      name,
      slug,
      price,
      image_url,
      featured,
      brands(name),
      categories(name)
    `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="mt-6 text-red-500">Failed to load products.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-10">
        <h1 className="text-5xl font-semibold text-[#3A3530]">
          Luxury Collection
        </h1>

        <p className="mt-4 text-[#7C6B58]">
          Discover carefully curated luxury products.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-3xl border border-[#E5DED6] bg-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="h-72 w-full object-cover"
            />

            <div className="space-y-3 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96B]">
                {product.brands?.name}
              </p>

              <h2 className="text-2xl font-semibold text-[#3A3530]">
                {product.name}
              </h2>

              <p className="text-[#7C6B58]">{product.categories?.name}</p>

              <p className="text-xl font-semibold">
                ₹{Number(product.price).toLocaleString()}
              </p>

              <Link
                href={`/products/${product.slug}`}
                className="inline-block rounded-xl border border-[#3A3530] px-5 py-2 transition hover:bg-[#3A3530] hover:text-white"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
