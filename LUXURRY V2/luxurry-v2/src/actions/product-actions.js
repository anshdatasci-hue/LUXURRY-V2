"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function createProduct(formData) {
  const supabase = await createClient();

  const product = {
    name: formData.get("name"),
    slug: formData.get("slug"),
    brand_id: formData.get("brand_id"),
    category_id: formData.get("category_id"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    image_url: formData.get("image_url"),
    featured: formData.get("featured") === "on",
  };

  const { error } = await supabase.from("products").insert(product);

  if (error) {
    console.error("Supabase Error:", error);

    throw new Error(error.message);
  }

  revalidatePath("/admin/products");
  redirect("/admin/products?success=created");
}

export async function deleteProduct(id) {
  "use server";

  const supabase = await createClient();

  console.log("Deleting:", id);

  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("id", id)
    .select();

  console.log("Deleted rows:", data);
  console.log("Delete error:", error);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/products");
  redirect("/admin/products?success=deleted");
}

export async function updateProduct(id, formData) {
  const supabase = await createClient();

  const product = {
    name: formData.get("name"),
    slug: formData.get("slug"),
    brand_id: formData.get("brand_id"),
    category_id: formData.get("category_id"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    image_url: formData.get("image_url"),
    featured: formData.get("featured") === "on",
  };

  const { error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/products");
  redirect("/admin/products?success=updated");
}
