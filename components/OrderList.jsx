import OrderCard from "./OrderCard";

export default function OrderList({ orders }) {
  // Show message if no orders are provided
  if (!orders || orders.length === 0) {
    return (
      <div className="order-list">
        <div className="empty-state">
          <h3>No Orders Found</h3>
          <p>There are currently no orders to display.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="order-list">
      <div className="list-header">
        <h3>Orders ({orders.length})</h3>
      </div>

      <div className="orders-grid">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
