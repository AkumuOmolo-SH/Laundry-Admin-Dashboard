import React from "react";

export default function Formpreview() {
  return (
    <div className="form-wrapper">
      <form className="order-form">
        <h2 className="form-title">Add New Order</h2>

        <label htmlFor="customer">Customer Name</label>
        <input type="text" id="customer" name="customer" placeholder="e.g. John Doe" required />

        <label htmlFor="items">Order Items</label>
        <input type="text" id="items" name="items" placeholder="e.g. 2 Shirts, 1 Jacket" required />

        <label htmlFor="status">Order Status</label>
        <select id="status" name="status">
          <option value="pending">Pending</option>
          <option value="ready">Ready</option>
          <option value="picked-up">Picked Up</option>
        </select>

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
}
