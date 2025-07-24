 "use client";
import { useState } from "react";
// import updateOrder from Mike

const EditOderForm = ({ order, onClose, onOrderUpdated })=> {
    const [customerName, setCustomerName] = useState(order.customerName);
    const [clothType, setClothType] = useState(order.clothType);
    const [dateSubmitted, setDateSubmitted] = useState(order.dateSubmitted);
    const [dateCompleted, setDateCompleted] = useState(order.dateCompleted);
    const [price, setPrice] = useState(order.price);
    const [status, setStatus] = useState(order.status);

    // dumy placeholder function
    const updateOrder = async (id, order) => {
  console.log("Mock updateOrder called:", id, order);
};


   // handle edit update
    const handleSubmit = async (e) => {
        e.preventDefault();
        // get (updateOrder) from Mike
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
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Order</h1>
      
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

        {/*status*/}
        <div className="border p-2 w-full" >
            <select value={status} 
            onChange={(e) => setStatus(e.target.value)}
            class
            >
                <option>Pending</option>
                <option>Completed</option>

            </select>
        </div>

        {/*cancel & save button*/}
        <div className="flex justify-end space-x-2"> 
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
                Cancle
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Save
            </button>
        </div>        
    </form>
    </div>
    );

}

export default EditOderForm;