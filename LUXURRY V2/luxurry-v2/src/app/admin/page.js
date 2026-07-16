import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const { data: orders = [] } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  const { count: productCount } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  const total = orders.length;

  const pending = orders.filter((o) => o.status === "Pending").length;

  const confirmed = orders.filter((o) => o.status === "Confirmed").length;

  const revenue = orders.reduce((sum, order) => sum + Number(order.total), 0);

  return (
    <main className="mx-auto max-w-7xl px-8 py-10">
      <h1 className="mb-10 text-4xl font-semibold">Luxury Admin Dashboard</h1>

      {/* Statistics */}

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card title="Total Orders" value={total} />

        <Card title="Pending" value={pending} />

        <Card title="Confirmed" value={confirmed} />

        <Card title="Revenue" value={`₹${revenue.toLocaleString("en-IN")}`} />
      </div>

      {/* Admin Modules */}

      <h2 className="mb-4 text-2xl font-semibold">Management</h2>

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <DashboardCard
          title="Products"
          description={`${productCount ?? 0} Products`}
          href="/admin/products"
          button="Manage Products"
        />

        <DashboardCard
          title="Orders"
          description={`${total} Orders`}
          href="/admin/orders"
          button="Manage Orders"
        />

        <DashboardCard
          title="Customers"
          description="Registered Customers"
          href="/admin/customers"
          button="View Customers"
        />
      </div>

      {/* Recent Orders */}

      <h2 className="mb-4 text-2xl font-semibold">Recent Orders</h2>

      <div className="overflow-hidden rounded-2xl border bg-white">
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
            {orders.slice(0, 5).map((order) => (
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
                    className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}

            {orders.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-neutral-500">
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

function Card({ title, value }) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <p className="text-sm text-neutral-500">{title}</p>

      <h2 className="mt-3 text-3xl font-semibold">{value}</h2>
    </div>
  );
}

function DashboardCard({ title, description, href, button }) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-neutral-500">{description}</p>

      <Link
        href={href}
        className="mt-6 inline-block rounded-lg bg-black px-5 py-2 text-white hover:bg-neutral-800"
      >
        {button}
      </Link>
    </div>
  );
}
