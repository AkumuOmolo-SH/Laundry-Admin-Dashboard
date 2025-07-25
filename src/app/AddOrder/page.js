"use client"; // This directive marks the component as a Client Component
import React, { useState } from "react";
import { createOrder } from "../../../lib/api"; // Import the createOrder function

export default function AddOrder({ onOrderCreated }) {
  const [customerName, setCustomerName] = useState("");
  const [clothType, setClothType] = useState("");
  const [dateSubmitted, setDateSubmitted] = useState("");
  const [dateCompleted, setDateCompleted] = useState("");
  const [price, setPrice] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    await createOrder({
      customerName,
      clothType,
      dateSubmitted,
      dateCompleted,
      price,
      status: "Pending",
    });
    if (typeof onOrderCreated === "function") {
      onOrderCreated(); // Call the callback function to notify parent component
    }
    setCustomerName("");
    setClothType("");
    setDateSubmitted("");
    setDateCompleted("");
    setPrice("");
  };

  return (
    <div className="form-wrapper">
      

      <form className="order-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Create New Order</h1>
        {/* Customer Name */}
        <div>
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        {/* Cloth Attributes */}
        <div>
          <div>
            <label htmlFor="clothType">Cloth Type</label>
            <select
              id="clothType"
              name="clothType"
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
          </div>
        </div>

        {/* Dates */}
        <div>
          <div>
            <label htmlFor="dateSubmitted">Date Submitted</label>
            <input
              type="date"
              id="dateSubmitted"
              name="dateSubmitted"
              value={dateSubmitted}
              onChange={(e) => setDateSubmitted(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="dateCompleted">Date Completed</label>
          <input
            type="date"
            id="dateCompleted"
            name="dateCompleted"
            value={dateCompleted}
            onChange={(e) => setDateCompleted(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            min="0"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="form-button">
            Create Order
          </button>
        </div>
      </form>
    </div>
  );
}
