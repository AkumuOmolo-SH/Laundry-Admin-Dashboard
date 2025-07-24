import OrderCard from "./OrderCard";

export default function OrderList({ orders, onOrderUpdated }) {
  // Show message if no orders are provided
  if (!orders || orders.length === 0) {
    return (
      <div className="order-list">
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h3>No Orders Found</h3>
          <p>There are currently no orders to display.</p>
          <div className="empty-help">
            <p>Orders will appear here when:</p>
            <ul>
              <li>New orders are submitted through the order form</li>
              <li>The API successfully loads existing orders</li>
              <li>You refresh the page to fetch latest data</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Debug logging in development
  if (process.env.NODE_ENV === "development") {
    console.log("📋 OrderList rendering:", orders.length, "orders");
  }

  return (
    <div className="order-list">
      <div className="list-header">
        <h3>Orders ({orders.length})</h3>
        <div className="list-meta">
          <span className="last-updated">
            Updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      <div className="orders-grid">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onOrderUpdated={onOrderUpdated} // Pass down the update handler
          />
        ))}
      </div>
    </div>
  );
}
