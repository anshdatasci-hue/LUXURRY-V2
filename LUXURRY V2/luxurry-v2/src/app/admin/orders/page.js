import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function OrdersPage() {
  const supabase = await createClient();

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-neutral-100 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-light">Orders</h1>

        <div className="overflow-hidden rounded-xl border bg-white">
          <table className="w-full">
            <thead className="border-b bg-neutral-100">
              <tr>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Total</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders?.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-4">{order.customer_name}</td>
                  <td className="p-4">{order.email}</td>
                  <td className="p-4">
                    ₹{Number(order.total).toLocaleString("en-IN")}
                  </td>
                  <td className="p-4">{order.status}</td>
                  <td className="p-4">
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="rounded bg-blue-600 px-3 py-1 text-white"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
