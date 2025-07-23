 "use client"; // This directive marks the component as a Client Component

import React, { useState } from 'react';

function ordersForm ({onOderCreated}) {
  const [customerName, setCustomerName] = useState('');
  const [clothType, setClothType] = useState('');
  const [dateSubmitted, setDateSubmitted] = useState('');
  const [dateCompleted, setDateCompleted] = useState('');
  const [price, setPrice] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    await createOrder({
      customerName,
      clothType,
      dateSubmitted,
      dateCompleted,
      price,
      status:"Pending",
    });
    onOderCreated();
    setCustomerName("");
    setClothType("");
    setDateSubmitted("");
    setDateCompleted("");
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create New Order</h1>
      
       <form className="space-y-6"  onSubmit={handleSubmit}>         
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
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Cloth Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
           <label htmlFor="clothType" className="text-sm font-medium text-gray-700 mb-1">
              Cloth Type
            </label>
             <select
              id="clothType"
              name="clothType"
              value={clothType}
              onChange={(e) => setClothType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Type</option>
              <option value="cotton">Jacket</option>
              <option value="cotton">Trauser</option>
              <option value="cotton">Leather Jacket</option>
              <option value="silk">Suit</option>
              <option value="silk">Towels</option>
              <option value="silk">Duvet</option>
              <option value="polyester">Bedsheet</option>
              <option value="polyester">Shirt</option>
              <option value="polyester">Curtains</option>
              <option value="wool">Trench Coat</option>
              <option value="wool">Bed Cover</option>
              <option value="wool">Robe</option>
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
              onChange={(e) => setDateSubmitted(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
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
              onChange={(e) => setDateCompleted(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
            onChange={(e) => setPrice(e.target.value)}
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

export default ordersForm;

