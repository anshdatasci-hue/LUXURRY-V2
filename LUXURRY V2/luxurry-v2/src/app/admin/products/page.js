import { createClient } from "@/lib/supabase/server";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";
import Link from "next/link";

export default async function ProductsPage({ searchParams }) {
  const { success } = await searchParams;
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: brands } = await supabase
    .from("brands")
    .select("id, name")
    .order("name");

  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select("id, name")
    .order("name");

  console.log("Categories:", categories);
  console.log("Categories Error:", categoriesError);

  if (error) {
    return <div className="text-red-500">Failed to load products.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        {success === "created" && (
          <div className="rounded-lg bg-green-100 p-4 text-green-700">
            ✅ Product created successfully.
          </div>
        )}

        <Link
          href="/admin/products/new"
          className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          + Add Product
        </Link>
      </div>

      <ProductForm brands={brands} categories={categories} />

      <ProductTable products={products} />
    </div>
  );
}
