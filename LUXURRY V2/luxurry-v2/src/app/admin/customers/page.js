import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function CustomersPage() {
  const supabase = await createClient();

  const { data: customers, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  console.log(customers);
  console.log(error);

  return (
    <main className="mx-auto max-w-7xl px-8 py-10">
      <h1 className="mb-8 text-4xl font-light">Customers</h1>

      <div className="overflow-hidden rounded-xl border bg-white">
        <table className="w-full">
          <thead className="border-b bg-neutral-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Joined</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {customers?.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="p-4">{customer.full_name || "Unknown"}</td>

                <td className="p-4">
                  {new Date(customer.created_at).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <Link
                    href={`/admin/customers/${customer.id}`}
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
    </main>
  );
}
