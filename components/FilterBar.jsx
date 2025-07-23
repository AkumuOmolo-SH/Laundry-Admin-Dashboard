export default function FilterBar({
  selectedFilter,
  onFilterChange,
  orderCounts,
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
    onFilterChange(filterValue);
  };

  return (
    <div className="filter-bar">
      <div className="filter-header">
        <h3>Filter by Status</h3>
      </div>

      <div className="filter-buttons">
        {filterOptions.map((option) => {
          // Check if this filter is currently selected
          const isActive = selectedFilter === option.value;

          // Get count for this filter (default to 0 if not found)
          const count = orderCounts[option.value] || 0;

          return (
            <button
              key={option.value}
              className={`filter-button ${isActive ? "active" : ""}`}
              onClick={() => handleFilterClick(option.value)}
              type="button"
            >
              <span className="filter-label">{option.label}</span>
              <span className="filter-count">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
