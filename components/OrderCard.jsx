import { useState, useEffect } from "react";

export default function OrderCard({ order }) {
  // State to track if component has mounted (fixes hydration issues with dates)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function to format date in a readable way
  const formatDate = (dateString) => {
    if (!dateString || !isMounted) return "Loading...";

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return "Invalid Date";
    }
  };

  // Function to get status-specific CSS class
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "status-pending";
      case "ready":
        return "status-ready";
      case "completed":
        return "status-completed";
      case "cancelled":
        return "status-cancelled";
      default:
        return "status-default";
    }
  };

  // Function to format price
  const formatPrice = (price) => {
    if (!price && price !== 0) return "N/A";
    return `$${parseFloat(price).toFixed(2)}`;
  };

  return (
    <div className="order-card">
      {/* Order header with ID and status */}
      <div className="order-header">
        <div className="order-id">
          <strong>Order #{order.id}</strong>
        </div>
        <div className={`order-status ${getStatusClass(order.status)}`}>
          {order.status || "Unknown"}
        </div>
      </div>

      {/* Customer information */}
      <div className="order-section">
        <h4>Customer Details</h4>
        <p className="customer-name">
          <strong>{order.customerName || "Unknown Customer"}</strong>
        </p>
        {order.customerPhone && (
          <p className="customer-phone">📞 {order.customerPhone}</p>
        )}
        {order.customerEmail && (
          <p className="customer-email">✉️ {order.customerEmail}</p>
        )}
      </div>

      {/* Order details */}
      <div className="order-section">
        <h4>Order Information</h4>
        <div className="order-details">
          <div className="detail-row">
            <span className="detail-label">Service:</span>
            <span className="detail-value">
              {order.serviceType || "Standard Wash"}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Items:</span>
            <span className="detail-value">{order.itemCount || 0} items</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Total:</span>
            <span className="detail-value price">
              {formatPrice(order.totalPrice)}
            </span>
          </div>
        </div>
      </div>

      {/* Dates */}
      <div className="order-section">
        <h4>Timeline</h4>
        <div className="order-dates" suppressHydrationWarning>
          <div className="date-row">
            <span className="date-label">Order Date:</span>
            <span className="date-value">{formatDate(order.orderDate)}</span>
          </div>

          {order.pickupDate && (
            <div className="date-row">
              <span className="date-label">Pickup Date:</span>
              <span className="date-value">{formatDate(order.pickupDate)}</span>
            </div>
          )}

          {order.deliveryDate && (
            <div className="date-row">
              <span className="date-label">Delivery Date:</span>
              <span className="date-value">
                {formatDate(order.deliveryDate)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Special notes if available */}
      {order.notes && (
        <div className="order-section">
          <h4>Notes</h4>
          <p className="order-notes">{order.notes}</p>
        </div>
      )}

      {/* Action buttons area (can be expanded later) */}
      <div className="order-actions">
        <button className="action-button view-button" type="button">
          View Details
        </button>
        {order.status === "Pending" && (
          <button className="action-button update-button" type="button">
            Update Status
          </button>
        )}
      </div>
    </div>
  );
}
