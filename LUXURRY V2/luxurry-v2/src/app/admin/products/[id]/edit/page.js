import { createClient } from "@/lib/supabase/server";
import ProductForm from "../../../components/ProductForm";

export default async function EditProductPage({ params }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  const { data: brands } = await supabase
    .from("brands")
    .select("id, name")
    .order("name");

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name")
    .order("name");

  if (error) {
    return <div className="text-red-500">Product not found.</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Product</h1>

      <ProductForm product={product} brands={brands} categories={categories} />
    </div>
  );
}
