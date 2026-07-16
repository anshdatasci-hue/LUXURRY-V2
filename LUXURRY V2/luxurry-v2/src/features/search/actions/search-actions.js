"use server";

import { createClient } from "@/lib/supabase/server";

export async function searchLuxury(query) {
  if (!query || query.trim() === "") {
    return {
      products: [],
      brands: [],
    };
  }

  const supabase = await createClient();

  const { data: products } = await supabase
    .from("products")
    .select("id, name, slug")
    .ilike("name", `%${query}%`)
    .limit(5);

  const { data: brands } = await supabase
    .from("brands")
    .select("id, name, slug")
    .ilike("name", `%${query}%`)
    .limit(5);

  return {
    products: products ?? [],
    brands: brands ?? [],
  };
}
