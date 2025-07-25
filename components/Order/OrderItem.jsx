"use client";
import { useState } from "react";
import { updateOrder } from "../../lib/api";

export default function OrderItem({ order, onClose, onOrderUpdated }) {
  const [customerName, setCustomerName] = useState(order.customerName);
  const [clothType, setClothType] = useState(order.clothType);
  const [dateSubmitted, setDateSubmitted] = useState(order.dateSubmitted);
  const [dateCompleted, setDateCompleted] = useState(order.dateCompleted);
  const [price, setPrice] = useState(order.price);
  const [status, setStatus] = useState(order.status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateOrder(order.id, {
      customerName,
      clothType,
      dateSubmitted,
      dateCompleted,
      price,
      status,
    });
    onOrderUpdated();
    onClose();
  };

  return (
    <div className="form-wrapper">
      <form className="order-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Edit Order</h1>

        <label htmlFor="customerName">Customer Name</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />

        <label htmlFor="clothType">Cloth Type</label>
        <select
          id="clothType"
          value={clothType}
          onChange={(e) => setClothType(e.target.value)}
          required
        >
          <option value="">Select Type</option>
          <option value="Jacket">Jacket</option>
          <option value="Trouser">Trouser</option>
          <option value="Leather Jacket">Leather Jacket</option>
          <option value="Suit">Suit</option>
          <option value="Towels">Towels</option>
          <option value="Duvet">Duvet</option>
          <option value="Bedsheet">Bedsheet</option>
          <option value="Shirt">Shirt</option>
          <option value="Curtains">Curtains</option>
          <option value="Trench Coat">Trench Coat</option>
          <option value="Bed Cover">Bed Cover</option>
          <option value="Robe">Robe</option>
        </select>

        <label htmlFor="dateSubmitted">Date Submitted</label>
        <input
          type="date"
          id="dateSubmitted"
          value={dateSubmitted}
          onChange={(e) => setDateSubmitted(e.target.value)}
          required
        />

        <label htmlFor="dateCompleted">Date Completed</label>
        <input
          type="date"
          id="dateCompleted"
          value={dateCompleted}
          onChange={(e) => setDateCompleted(e.target.value)}
          required
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          min="0"
          required
        />

        <label htmlFor="status">Status</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <div className="form-actions">
          <button type="button" onClick={onClose} className="form-button cancel">
            Cancel
          </button>
          <button type="submit" className="form-button">Save</button>
        </div>
      </form>
    </div>
  );
}
