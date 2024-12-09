import React from "react";
import { useNavigate } from "react-router-dom";

function Order({ order }) {
  const navigate=useNavigate()

  return (
    <div className="mx-6 py-4 flex flex-col gap-4">
      <h1 className=" text-xl md:text-3xl font-semibold">Thank you for your order!</h1>
      <p className="md:text-lg text-md  ">
        Your order has been placed succesfully. You will recieve an email for
        confirmation shortly.
      </p>

      <div className="bg-slate-200 p-3 rounded-md flex flex-col gap-4">
        <div>
          <h1 className="md:text-lg text-md font-medium">Order Summary</h1>
          <p>Order Number: {order?.orderNumber}</p>
        </div>
        <div>
          <h1 className="md:text-lg text-md font-medium ">Shipping Information</h1>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.City}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h1 className="md:text-lg text-md font-medium mb-2">Item Ordered</h1>
          <div>
            {order?.product.map((item) => (
              <div className="flex justify-between mr-4" key={item.id}>
                <p className="text-sm md:text-md ">
                  {item.title} x{item.quantity}
                </p>
                <p>${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mr-4">
          <h1 className="text-md md:text-lg font-medium ">Total price:</h1>
          <p>{(order.totalPrice).toFixed(2)}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button  className="px-4 py-2 text-sm bg-green-600 text-white">Track Order</button>
        <button onClick={()=> navigate('/shop')} className="px-4 py-2 text-sm bg-red-700 text-white">Continue Shopping</button>
      </div>
    </div>
  );
}

export default Order;
