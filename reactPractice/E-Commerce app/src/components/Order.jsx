import React from "react";
import { useNavigate } from "react-router-dom";

function Order({ order }) {
  console.log(order);
  const navigate=useNavigate()

  return (
    <div className="mx-6 py-4 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Thank you for your order!</h1>
      <p className="text-lg">
        Your order has been placed succesfully. You will recieve an email for
        confirmation shortly.
      </p>

      <div className="bg-slate-200 p-3 rounded-md flex flex-col gap-4">
        <div>
          <h1 className="text-lg font-medium">Order Summary</h1>
          <p>Order Number: {order.orderNumber}</p>
        </div>
        <div>
          <h1 className="text-lg font-medium ">Shipping Information</h1>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.City}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h1 className="text-lg font-medium mb-2">Item Ordered</h1>
          <div>
            {order.product.map((item) => (
              <div className="flex justify-between mr-4" key={item.id}>
                <p className="text-md ">
                  {item.name} x{item.quantity}
                </p>
                <p>${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mr-4">
          <h1 className="text-lg font-medium ">Total price:</h1>
          <p>{order.totalPrice}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 text-sm bg-green-600 text-white">Track Order</button>
        <button onClick={()=> navigate('/shop')} className="px-4 py-2 text-sm bg-red-700 text-white">Continue Shopping</button>
      </div>
    </div>
  );
}

export default Order;
