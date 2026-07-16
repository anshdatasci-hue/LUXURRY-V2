import StatusBadge from "./StatusBadge";

export default function OrderCard({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-full max-w-2xl rounded-xl bg-white p-6">

        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">
            Order Details
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-3">

          <p>
            <strong>Customer:</strong> {order.customer_name}
          </p>

          <p>
            <strong>Email:</strong> {order.email}
          </p>

          <p>
            <strong>Phone:</strong> {order.phone}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {order.address}, {order.city}, {order.state},{" "}
            {order.pincode}, {order.country}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <StatusBadge status={order.status} />
          </p>

          <p>
            <strong>Total:</strong> ₹
            {Number(order.total).toLocaleString("en-IN")}
          </p>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold">
              Products
            </h3>

            {order.items.map((item) => (
              <div
                key={item.id}
                className="mb-3 rounded border p-3"
              >
                <p className="font-medium">
                  {item.name}
                </p>

                <p>Qty: {item.quantity}</p>

                <p>
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}