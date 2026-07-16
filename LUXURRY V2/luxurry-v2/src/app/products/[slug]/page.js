import { notFound } from "next/navigation";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import AddToWishlistButton from "@/features/products/components/AddToWishlistButton";
import AddToCartButton from "@/features/products/components/AddToCartButton";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: product } = await supabase
    .from("products")
    .select("name")
    .eq("slug", slug)
    .single();

  return {
    title: product ? `${product.name} | LUXURRY` : "Product Not Found",
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: product } = await supabase
    .from("products")
    .select(
      `
      *,
      brands(name),
      categories(name)
    `,
    )
    .eq("slug", slug)
    .single();

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Link
        href="/products"
        className="mb-8 inline-block text-sm text-[#7C6B58] hover:text-[#3A3530]"
      >
        ← Back to Products
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-[#E5DED6] bg-white">
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C8A96B]">
              {product.brands?.name}
            </p>

            <h1 className="mt-2 text-4xl font-semibold text-[#3A3530]">
              {product.name}
            </h1>

            <p className="mt-3 text-[#7C6B58]">{product.categories?.name}</p>
          </div>

          <p className="text-3xl font-semibold text-[#3A3530]">
            ₹{Number(product.price).toLocaleString()}
          </p>

          <p className="leading-8 text-[#6A625A]">{product.description}</p>

          <div className="flex flex-wrap gap-4">
            <AddToCartButton product={product} />
            <AddToWishlistButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
