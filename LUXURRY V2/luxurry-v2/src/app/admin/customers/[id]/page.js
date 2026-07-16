import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function CustomerDetailsPage({ params }) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: customer } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", id)
    .order("created_at", { ascending: false });

  if (!customer) {
    return (
      <main className="p-10">
        <h1 className="text-3xl">Customer not found.</h1>
      </main>
    );
  }

  const totalSpent =
    orders?.reduce((sum, order) => sum + Number(order.total), 0) || 0;

  return (
    <main className="mx-auto max-w-6xl px-8 py-10 space-y-8">
      <Link href="/admin/customers" className="text-blue-600">
        ← Back
      </Link>

      <div className="rounded-xl border bg-white p-8">
        <h1 className="text-4xl font-semibold">{customer.full_name}</h1>

        <p className="mt-2 text-neutral-500">
          Joined {new Date(customer.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Orders" value={orders?.length || 0} />

        <StatCard
          title="Total Spent"
          value={`₹${totalSpent.toLocaleString("en-IN")}`}
        />

        <StatCard title="Customer ID" value={customer.id.slice(0, 8)} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-white">
        <table className="w-full">
          <thead className="border-b bg-neutral-100">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">View</th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-4">{order.id.slice(0, 8)}</td>

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

            {orders?.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-neutral-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <p className="text-sm text-neutral-500">{title}</p>

      <h2 className="mt-2 text-3xl font-semibold">{value}</h2>
    </div>
  );
}
