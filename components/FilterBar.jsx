// components/FilterBar.jsx
import React from "react";

export default function FilterBar({
  selectedFilter,
  onFilterChange,
  orderCounts = {},
}) {
  const filterOptions = [
    { value: "All", label: "All Orders" },
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
  ];

  return (
    <div className="filter-bar bg-white rounded-lg shadow-sm p-4">
      <div className="filter-header mb-3">
        <h3 className="text-lg font-semibold text-gray-700">
          Filter by Status
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => {
          const isActive = selectedFilter === option.value;
          const count = orderCounts[option.value] || 0;

          return (
            <button
              key={option.value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => onFilterChange(option.value)}
              type="button"
            >
              <span className="mr-1">{option.label}</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full">
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
