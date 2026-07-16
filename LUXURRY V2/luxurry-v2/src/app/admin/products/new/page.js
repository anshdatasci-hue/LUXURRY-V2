import { createClient } from "@/lib/supabase/server";
import ProductForm from "../../components/ProductForm";

export default async function NewProductPage() {
  const supabase = await createClient();

  const { data: brands } = await supabase
    .from("brands")
    .select("id, name")
    .order("name");

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name")
    .order("name");

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Add Product</h1>

      <ProductForm brands={brands} categories={categories} />
    </main>
  );
}
