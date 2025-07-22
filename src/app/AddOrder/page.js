import React from 'react';

export default function OrderForm() {
  
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create New Order</h1>
      
      <form className="space-y-6">
        {/* Customer Name */}
        <div className="flex flex-col">
          <label htmlFor="customerName" className="text-sm font-medium text-gray-700 mb-1">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={customerName}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Cloth Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="clothType" className="text-sm font-medium text-gray-700 mb-1">
              Cloth Type
            </label>
            <select
              id="clothType"
              name="clothType"
              value={clothType}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Type</option>
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
              <option value="polyester">Polyester</option>
              <option value="wool">Wool</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="clothWeight" className="text-sm font-medium text-gray-700 mb-1">
              Cloth Weight
            </label>
            <select
              id="clothWeight"
              name="clothWeight"
              value={clothWeight}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Weight</option>
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="heavy">Heavy</option>
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="dateSubmitted" className="text-sm font-medium text-gray-700 mb-1">
              Date Submitted
            </label>
            <input
              type="date"
              id="dateSubmitted"
              name="dateSubmitted"
              value={dateSubmitted}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="dateCompleted" className="text-sm font-medium text-gray-700 mb-1">
              Date Completed
            </label>
            <input
              type="date"
              id="dateCompleted"
              name="dateCompleted"
              value={dateCompleted}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
          >
            Create Order
          </button>
        </div>
      </form>
    </div>
  );
}