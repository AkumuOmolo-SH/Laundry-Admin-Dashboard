const API_URL = "http://localhost:4000/orders";

// GET: Fetch all orders
export async function getOrders() {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch orders from json-server");
    return await response.json();
}

// GET a single order by ID
export async function getOrder(id) {
    const response = await fetch(`{API_URL}/${id}`);
    if (!response.ok) throw new Error("Order not found");
    return response.json();
}

// POST: Creates a new order
export async function createOrder(order) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),

    });

    if(!response.ok) throw new Error("Failed to create order");
    return await response.json();
}

// PATCH: Update an order
export async function updateOrder(id, updatedOrder) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedOrder), 
    });

    if(!response.ok) throw new Error("Failed to update order");
    return await response.json();
}


// DELETE: Remove an order
export async function deleteOrder(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if(!response.ok) throw new Error("Failed to delete order");
    return true;
}






