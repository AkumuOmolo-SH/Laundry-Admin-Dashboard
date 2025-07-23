"use client";

import { useState, useEffect } from "react";
import FilterBar from "../../../components/FilterBar";
import OrderList from "../../../components/OrderList";

// TEMPORARY MOCK DATA - i will to be Remove/replace when Mike sets up the backend
const MOCK_ORDERS = [
  {
    id: 1,
    customerName: "John Doe",
    customerPhone: "+1234567890",
    customerEmail: "john@example.com",
    status: "Pending",
    serviceType: "Standard Wash",
    itemCount: 5,
    totalPrice: 25.99,
    orderDate: "2024-01-15T10:30:00Z",
    pickupDate: "2024-01-16T14:00:00Z",
    notes: "Handle with care - delicate items",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    customerPhone: "+1987654321",
    status: "Ready",
    serviceType: "Express Wash",
    itemCount: 3,
    totalPrice: 18.5,
    orderDate: "2024-01-14T09:15:00Z",
    deliveryDate: "2024-01-15T16:00:00Z",
  },
  {
    id: 3,
    customerName: "Bob Wilson",
    status: "Completed",
    serviceType: "Dry Clean",
    itemCount: 2,
    totalPrice: 45.0,
    orderDate: "2024-01-13T14:20:00Z",
    deliveryDate: "2024-01-14T12:00:00Z",
    notes: "Suits and formal wear",
  },
  {
    id: 4,
    customerName: "Alice Brown",
    status: "Cancelled",
    serviceType: "Standard Wash",
    itemCount: 7,
    totalPrice: 32.75,
    orderDate: "2024-01-12T11:45:00Z",
  },
];

export default function OrderPage() {
  // State to store all orders from the API
  const [orders, setOrders] = useState([]);

  // State to track which filter is currently selected
  const [selectedFilter, setSelectedFilter] = useState("All");

  // State to handle loading state
  const [isLoading, setIsLoading] = useState(true);

  // State to handle any errors
  const [error, setError] = useState(null);

  // State to track if component has mounted (fixes hydration issues)
  const [isMounted, setIsMounted] = useState(false);

  // Fetch orders from json-server when component loads
  useEffect(() => {
    setIsMounted(true);
    fetchOrders();
  }, []);

  // Function to fetch orders from the API
  const fetchOrders = async () => {
    try {
      setIsLoading(true);

      // TODO: To Replace this with actual API call when Mike sets up backend
      // const response = await fetch('http://localhost:3001/orders');
      // if (!response.ok) {
      //   throw new Error('Failed to fetch orders');
      // }
      // const ordersData = await response.json();

      // TEMPORARY:  Useing mock data for now
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      const ordersData = MOCK_ORDERS;

      setOrders(ordersData);
      setError(null);
    } catch (err) {
      setError("Unable to load orders. Please try again.");
      console.error("Error fetching orders:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to filter orders based on selected status
  const getFilteredOrders = () => {
    if (selectedFilter === "All") {
      return orders;
    }
    return orders.filter((order) => order.status === selectedFilter);
  };

  // Function to handle filter changes from FilterBar
  const handleFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  // Show loading message while fetching data or before mounting
  if (!isMounted || isLoading) {
    return (
      <div className="order-page">
        <div className="loading-message">Loading orders...</div>
      </div>
    );
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <div className="order-page">
        <div className="error-message">
          {error}
          <button onClick={fetchOrders} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Get the filtered orders to display
  const filteredOrders = getFilteredOrders();

  return (
    <div className="order-page">
      <div className="page-header">
        <h1>Orders Management</h1>
        <p>Manage and track all laundry orders</p>
      </div>

      {/* Filter bar to select order status */}
      <FilterBar
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
        orderCounts={{
          All: orders.length,
          Pending: orders.filter((o) => o.status === "Pending").length,
          Ready: orders.filter((o) => o.status === "Ready").length,
          Completed: orders.filter((o) => o.status === "Completed").length,
          Cancelled: orders.filter((o) => o.status === "Cancelled").length,
        }}
      />

      {/* Display filtered orders */}
      <OrderList orders={filteredOrders} />

      {/* Show message if no orders match the filter */}
      {filteredOrders.length === 0 && orders.length > 0 && (
        <div className="no-orders-message">
          No orders found for &quot;{selectedFilter}&quot; status.
        </div>
      )}
    </div>
  );
}
