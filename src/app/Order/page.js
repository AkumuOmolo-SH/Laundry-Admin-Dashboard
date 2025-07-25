"use client";
import { useEffect, useState, useMemo } from "react";
import { getOrders, deleteOrder } from "../../../lib/api";
import EditOrderForm from "../../../components/Order/OrderItem";
import FilterBar from "../../../components/FilterBar";

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const fetchOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  const handleDelete = async (id) => {
    await deleteOrder(id);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const orderCounts = useMemo(() => {
    return orders.reduce((counts, order) => {
      counts["All"] = (counts["All"] || 0) + 1;
      counts[order.status] = (counts[order.status] || 0) + 1;
      return counts;
    }, {});
  }, [orders]);

  const filteredOrders = useMemo(() => {
    if (selectedFilter === "All") return orders;
    return orders.filter((order) => order.status === selectedFilter);
  }, [orders, selectedFilter]);

  return (
    <div className="mt-8">
      {/* Filter Bar */}
      <div className="mb-6">
        <FilterBar
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          orderCounts={orderCounts}
        />
      </div>

      {/* Card Grid Container */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="order-card">
              {/* Header */}
              <div className="order-header">
                <h3 className="order-customer">{order.customerName}</h3>
                <span
                  className={`order-status ${
                    order.status === "Completed"
                      ? "completed"
                      : order.status === "Pending"
                      ? "pending"
                      : ""
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Order Details */}
              <div className="order-details">
                <div className="order-row">
                  <span className="label">Clothe Type:</span>
                  <span>{order.clothType}</span>
                </div>
                <div className="order-row">
                  <span className="label">Submission:</span>
                  <span>{order.dateSubmitted}</span>
                </div>
                <div className="order-row">
                  <span className="label">Completion:</span>
                  <span>{order.dateCompleted || "N/A"}</span>
                </div>
                <div className="order-row">
                  <span className="label">Price:</span>
                  <span className="price">KSH {order.price}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="order-actions">
                <button onClick={() => setEditingOrder(order)} className="order-button update">
                  Edit
                </button>
                <button onClick={() => handleDelete(order.id)} className="order-button delete">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>
            {orders.length === 0
              ? "No orders available"
              : `No ${selectedFilter.toLowerCase()} orders found`}
          </p>
        )}
      </div>

      {/* Edit Form */}
      {editingOrder && (
        <EditOrderForm
          order={editingOrder}
          onClose={() => setEditingOrder(null)}
          onOrderUpdated={fetchOrders}
        />
      )}
    </div>
  );
}
