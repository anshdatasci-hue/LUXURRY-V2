// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function OrderTable() {
//   const [orders, setOrders] = useState([]);
// const [deletingId, setDeletingId] = useState(null);
// const router = useRouter();

//   useEffect(() => {
//     loadOrders();
//   }, []);

//   async function loadOrders() {
//     try {
//       const res = await fetch("/api/admin/orders");
//       const data = await res.json();
//       setOrders(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   async function deleteOrder(id) {
//   const confirmed = window.confirm(
//     "Are you sure you want to permanently delete this order?"
//   );

//   if (!confirmed) return;

//   try {
//     setDeletingId(id);

//     const res = await fetch(`/api/admin/orders?id=${id}`, {
//       method: "DELETE",
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.error || "Failed to delete order.");
//     }

//     // Remove the deleted order from the table
//     setOrders((prev) => prev.filter((order) => order.id !== id));

//     alert("Order deleted successfully.");
//     window.location.reload();
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   } finally {
//     setDeletingId(null);
//   }
// }

//   if (orders.length === 0) {
//     return (
//       <div className="rounded-xl border bg-white p-8">
//         No orders found.
//       </div>
//     );
//   }

//   return (
//     <div className="overflow-x-auto rounded-xl border bg-white">

//       <table className="min-w-full">

//         <thead className="border-b bg-neutral-100">

//           <tr>
//             <th className="p-4 text-left">Customer</th>
//             <th className="p-4 text-left">Email</th>
//             <th className="p-4 text-left">Phone</th>
//             <th className="p-4 text-left">Total</th>
//             <th className="p-4 text-left">Status</th>
//             <th className="p-4 text-left">Date</th>
//             <th className="p-4 text-left">Actions</th>
//           </tr>

//         </thead>

//         <tbody>

//           {orders.map((order) => (

//             <tr key={order.id} className="border-b">

//               <td className="p-4">{order.customer_name}</td>

//               <td className="p-4">{order.email}</td>

//               <td className="p-4">{order.phone}</td>

//               <td className="p-4">
//                 ₹{Number(order.total).toLocaleString("en-IN")}
//               </td>

//               <td className="p-4">{order.status}</td>

//               <td className="p-4">
//                 {new Date(order.created_at).toLocaleDateString()}
//               </td>

//               <td className="p-4">

//                 <button
//                   className="mr-2 rounded bg-blue-600 px-3 py-1 text-white"
//                   onClick={() =>
//                     alert(JSON.stringify(order.items, null, 2))
//                   }
//                 >
//                   View
//                 </button>

//                 <button
//   onClick={() => deleteOrder(order.id)}
//   disabled={deletingId === order.id}
//   className={`rounded px-3 py-1 text-white transition ${
//     deletingId === order.id
//       ? "cursor-not-allowed bg-red-300"
//       : "bg-red-600 hover:bg-red-700"
//   }`}
// >
//   {deletingId === order.id ? "Deleting..." : "Delete"}
// </button>

//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </div>
//   );
// }