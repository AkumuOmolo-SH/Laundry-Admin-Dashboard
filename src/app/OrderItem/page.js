import { useState } from "react";
import ordersForm from "../AddOrder/page";
// import updateOrder from Mike

function EditOderForm({ order, onclose, onOrderUpdated }) {
    const [customerName, setCustomerName] = useState('');
    const [clothType, setClothType] = useState('');
    const [dateSubmitted, setDateSubmitted] = useState('');
    const [dateCompleted, setDateCompleted] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState(ordersForm.status);

   // handle edit update
    const hundleSubmit = async (e) => {
        e.preventDefault();
        await updateOrder(order.id, {
            customerName,
            clothType,
            dateSubmitted,
            dateCompleted,
            price,
            status,
        });
        onOrderUpdated();
        onclose();
    };

}

export default EditOderForm;