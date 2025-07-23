import React from "react";

export default function DesignPreview() {
  return (
    <div className="preview-wrapper">
      <div className="order-card">
        <div className="order-header">
          <div className="order-customer">Grace Baas</div>
          <div className="order-status ready">Ready/Pending</div>
        </div>
        <div className="order-details">
          <p>Order No.</p>
          <p>Items: 1 Shirt, Trousers</p>
        </div>
        <div className="order-actions">
          <button className="order-btn update">Mark as Picked Up</button>
          <button className="order-btn delete">Delete</button>
        </div>
      </div>
    </div>
  );
}
