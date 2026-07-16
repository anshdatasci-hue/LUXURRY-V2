import Link from "next/link";
import { deleteProduct } from "@/actions/product-actions";

export default function ProductTable({ products }) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Featured</th>
            <th className="p-3 text-left">Slug</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t"
            >
              <td className="p-3">{product.name}</td>

              <td className="p-3">
                ₹{Number(product.price).toLocaleString()}
              </td>

              <td className="p-3">
                {product.featured ? "Yes" : "No"}
              </td>

              <td className="p-3">
                {product.slug}
              </td>
              <td className="p-3">
  <div className="flex gap-2">
    <Link
      href={`/admin/products/${product.id}/edit`}
      className="rounded bg-blue-600 px-3 py-1 text-white"
    >
      Edit
    </Link>

   <form
  action={async () => {
    "use server";
    await deleteProduct(product.id);
  }}
>
  <button
    type="submit"
    className="rounded bg-red-600 px-3 py-1 text-white"
  >
    Delete
  </button>
</form>
  </div>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}