"use server";

import { createClient } from "@/lib/supabase/server";

export async function placeOrder(order) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("orders").insert([
    {
      user_id: user?.id ?? null,

      customer_name: order.customer_name,
      email: order.email,
      phone: order.phone,

      address: order.address,
      city: order.city,
      state: order.state,
      pincode: order.pincode,

      items: order.items,
      total: order.total,

      status: "Pending",
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}
