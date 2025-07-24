"use client";

import { useState, useEffect } from "react";
import FilterBar from "../../../components/FilterBar";
import OrderList from "../../../components/OrderList";
import { getOrders } from "../../../lib/api";

// // FALLBACK MOCK DATA - Used when API is unavailable
// const FALLBACK_ORDERS = [
//   {
//     id: 1,
//     customerName: "John Doe",
//     customerPhone: "+1234567890",
//     customerEmail: "john@example.com",
//     status: "Pending",
//     // Support both data structures
//     serviceType: "Standard Wash",
//     clothType: "Jacket",
//     itemCount: 5,
//     totalPrice: 25.99,
//     price: 25.99,
//     orderDate: "2024-01-15T10:30:00Z",
//     dateSubmitted: "2024-01-15T10:30:00Z",
//     pickupDate: "2024-01-16T14:00:00Z",
//     dateCompleted: null,
//     notes: "Handle with care - delicate items",
//   },
//   {
//     id: 2,
//     customerName: "Jane Smith",
//     customerPhone: "+1987654321",
//     status: "Ready",
//     serviceType: "Express Wash",
//     clothType: "Trousers",
//     itemCount: 3,
//     totalPrice: 18.5,
//     price: 18.5,
//     orderDate: "2024-01-14T09:15:00Z",
//     dateSubmitted: "2024-01-14T09:15:00Z",
//     deliveryDate: "2024-01-15T16:00:00Z",
//     dateCompleted: "2024-01-15T16:00:00Z",
//   },
//   {
//     id: 3,
//     customerName: "Bob Wilson",
//     status: "Completed",
//     serviceType: "Dry Clean",
//     clothType: "Leather",
//     itemCount: 2,
//     totalPrice: 45.0,
//     price: 45.0,
//     orderDate: "2024-01-13T14:20:00Z",
//     dateSubmitted: "2024-01-13T14:20:00Z",
//     deliveryDate: "2024-01-14T12:00:00Z",
//     dateCompleted: "2024-01-14T12:00:00Z",
//     notes: "Suits and formal wear",
//   },
//   {
//     id: 4,
//     customerName: "Alice Brown",
//     status: "Cancelled",
//     serviceType: "Standard Wash",
//     clothType: "Suit",
//     itemCount: 7,
//     totalPrice: 32.75,
//     price: 32.75,
//     orderDate: "2024-01-12T11:45:00Z",
//     dateSubmitted: "2024-01-12T11:45:00Z",
//     dateCompleted: null,
//   },
//   {
//     id: 5,
//     customerName: "Tom Green",
//     status: "Completed",
//     clothType: "Towels",
//     serviceType: "Standard Wash",
//     price: 12.5,
//     totalPrice: 12.5,
//     dateSubmitted: "2024-01-15T08:00:00Z",
//     orderDate: "2024-01-15T08:00:00Z",
//     dateCompleted: "2024-01-16T10:00:00Z",
//   },
//   {
//     id: 6,
//     customerName: "Lucy White",
//     status: "Pending",
//     clothType: "Duvet",
//     serviceType: "Premium Wash",
//     price: 55.0,
//     totalPrice: 55.0,
//     dateSubmitted: "2024-01-11T13:00:00Z",
//     orderDate: "2024-01-11T13:00:00Z",
//     dateCompleted: null,
//   },
// ];

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

  // State to track API availability
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  // Fetch orders when component loads
  useEffect(() => {
    setIsMounted(true);
    fetchOrders();
  }, []);

  // Function to fetch orders from the API with fallback
  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Try to fetch from API first
      const ordersData = await getOrders();

      setOrders(ordersData);
      setIsUsingFallback(false);

      // Debug logging in development
      if (process.env.NODE_ENV === "development") {
        console.log(
          "✅ Successfully fetched orders from API:",
          ordersData.length,
          "orders"
        );
      }
    } catch (err) {
      console.warn("⚠️ API unavailable, using fallback data:", err.message);

      // Use fallback data when API is unavailable
      setOrders(FALLBACK_ORDERS);
      setIsUsingFallback(true);

      // Only show error if fallback also fails (shouldn't happen)
      if (!FALLBACK_ORDERS || FALLBACK_ORDERS.length === 0) {
        setError("Unable to load orders. Please try again.");
      }
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

    // Debug logging
    if (process.env.NODE_ENV === "development") {
      console.log("🔍 Filter changed to:", filterValue);
    }
  };

  // Function to handle order updates from OrderCard
  const handleOrderUpdated = (updatedOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );

    // Optionally refetch from server to ensure consistency
    if (!isUsingFallback) {
      fetchOrders();
    }
  };

  // Calculate order counts for filter bar
  const getOrderCounts = () => {
    return {
      All: orders.length,
      Pending: orders.filter((o) => o.status === "Pending").length,
      Ready: orders.filter((o) => o.status === "Ready").length,
      Completed: orders.filter((o) => o.status === "Completed").length,
      Cancelled: orders.filter((o) => o.status === "Cancelled").length,
    };
  };

  // Show loading message while fetching data or before mounting
  if (!isMounted || isLoading) {
    return (
      <div className="order-page">
        <div className="loading-message">
          <div className="loading-spinner"></div>
          Loading orders...
        </div>
      </div>
    );
  }

  // Show error message if something went wrong and no fallback available
  if (error) {
    return (
      <div className="order-page">
        <div className="error-message">
          <h3>⚠️ Unable to Load Orders</h3>
          <p>{error}</p>
          <button onClick={fetchOrders} className="retry-button">
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  // Get the filtered orders to display
  const filteredOrders = getFilteredOrders();
  const orderCounts = getOrderCounts();

  return (
    <div className="order-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>Orders Management</h1>
        <p>Manage and track all laundry orders</p>

        {/* Show API status in development */}
        {process.env.NODE_ENV === "development" && isUsingFallback && (
          <div
            className="dev-notice"
            style={{
              backgroundColor: "#fff3cd",
              color: "#856404",
              padding: "8px 12px",
              borderRadius: "4px",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            ⚠️ Dev Mode: Using fallback data (API unavailable)
          </div>
        )}
      </div>

      {/* Filter Bar */}
      <FilterBar
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
        orderCounts={orderCounts}
      />

      {/* Main Content */}
      <div className="order-content">
        {/* Display filtered orders */}
        <OrderList
          orders={filteredOrders}
          onOrderUpdated={handleOrderUpdated}
        />

        {/* Show message if no orders match the filter */}
        {filteredOrders.length === 0 && orders.length > 0 && (
          <div className="no-orders-message">
            <h3>No orders found</h3>
            <p>
              No orders match the &quot;{selectedFilter}&quot; status filter.
            </p>
            <button
              onClick={() => setSelectedFilter("All")}
              className="show-all-button"
            >
              Show All Orders
            </button>
          </div>
        )}

        {/* Show message if no orders at all */}
        {orders.length === 0 && (
          <div className="empty-state">
            <h3>No orders available</h3>
            <p>There are currently no orders in the system.</p>
            <button onClick={fetchOrders} className="refresh-button">
              🔄 Refresh
            </button>
          </div>
        )}
      </div>

      {/* Footer with stats */}
      <div className="page-footer">
        <div className="stats-summary">
          <span>Total Orders: {orders.length}</span>
          <span>•</span>
          <span>Showing: {filteredOrders.length}</span>
          {isUsingFallback && (
            <>
              <span>•</span>
              <span className="fallback-indicator">Using Fallback Data</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
