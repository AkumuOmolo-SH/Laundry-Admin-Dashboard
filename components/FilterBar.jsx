export default function FilterBar({
  selectedFilter,
  onFilterChange,
  orderCounts = {}, // Default to empty object to prevent errors
}) {
  // Available filter options with their display names
  const filterOptions = [
    { value: "All", label: "All Orders" },
    { value: "Pending", label: "Pending" },
    { value: "Ready", label: "Ready" },
    { value: "Completed", label: "Completed" },
    { value: "Cancelled", label: "Cancelled" },
  ];

  // Function to handle filter button clicks
  const handleFilterClick = (filterValue) => {
    if (onFilterChange && typeof onFilterChange === "function") {
      onFilterChange(filterValue);
    } else {
      console.warn("FilterBar: onFilterChange prop is not a function");
    }
  };

  // Debug logging (remove in production)
  const debugMode = process.env.NODE_ENV === "development";

  if (debugMode) {
    console.log("FilterBar props:", {
      selectedFilter,
      orderCounts,
      hasOnFilterChange: typeof onFilterChange === "function",
    });
  }

  return (
    <div className="filter-bar">
      <div className="filter-header">
        <h3>Filter by Status</h3>
      </div>

      <div className="filter-buttons">
        {filterOptions.map((option) => {
          // Check if this filter is currently selected
          const isActive = selectedFilter === option.value;

          // Get count for this filter with better error handling
          let count = 0;
          if (orderCounts && typeof orderCounts === "object") {
            count = orderCounts[option.value] || 0;
          }

          // Ensure count is a number
          count = isNaN(count) ? 0 : parseInt(count, 10);

          return (
            <button
              key={option.value}
              className={`filter-button ${isActive ? "active" : ""}`}
              onClick={() => handleFilterClick(option.value)}
              type="button"
              aria-pressed={isActive}
              aria-label={`Filter by ${option.label} (${count} orders)`}
            >
              <span className="filter-label">{option.label}</span>
              <span className="filter-count">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Debug info - only shows in development */}
      {debugMode && (
        <div
          className="debug-info"
          style={{
            fontSize: "12px",
            color: "#666",
            marginTop: "10px",
            padding: "5px",
            backgroundColor: "#f0f0f0",
            borderRadius: "3px",
          }}
        >
          <strong>Debug:</strong> Selected: {selectedFilter}, Counts:{" "}
          {JSON.stringify(orderCounts)}
        </div>
      )}
    </div>
  );
}
