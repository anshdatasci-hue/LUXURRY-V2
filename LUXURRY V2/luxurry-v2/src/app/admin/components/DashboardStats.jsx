// "use client";

// import { useEffect, useState } from "react";

// export default function DashboardStats() {
//   const [stats, setStats] = useState({
//     total: 0,
//     pending: 0,
//     confirmed: 0,
//     revenue: 0,
//   });

//   useEffect(() => {
//     async function loadStats() {
//       try {
//         const res = await fetch("/api/admin/orders");
//         const orders = await res.json();

//         setStats({
//           total: orders.length,
//           pending: orders.filter((o) => o.status === "Pending").length,
//           confirmed: orders.filter((o) => o.status === "Confirmed").length,
//           revenue: orders.reduce(
//             (sum, order) => sum + Number(order.total || 0),
//             0
//           ),
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     loadStats();
//   }, []);

//   const cards = [
//     {
//       title: "Total Orders",
//       value: stats.total,
//     },
//     {
//       title: "Pending",
//       value: stats.pending,
//     },
//     {
//       title: "Confirmed",
//       value: stats.confirmed,
//     },
//     {
//       title: "Revenue",
//       value: `₹${stats.revenue.toLocaleString("en-IN")}`,
//     },
//   ];

//   return (
//     <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//       {cards.map((card) => (
//         <div
//           key={card.title}
//           className="rounded-xl border bg-white p-6 shadow-sm"
//         >
//           <p className="text-sm text-neutral-500">
//             {card.title}
//           </p>

//           <h2 className="mt-3 text-3xl font-semibold">
//             {card.value}
//           </h2>
//         </div>
//       ))}
//     </div>
//   );
// }