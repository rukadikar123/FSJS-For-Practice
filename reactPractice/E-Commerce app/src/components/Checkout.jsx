import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

function Checkout({setOrder}) {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [billingToggler, setBillingToggler] = useState(true);
  const [shippingToggler, setShippingToggler] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);

  
  const cart = useSelector((state) => state.cart);

  const navigate=useNavigate()

  const [shippingInfo,setShippingInfo]=useState({
      address:"",
      City:"",
      zip:""
  })

  const handleOrder=()=>{
    const newOrder={
      product:cart.products,
      orderNumber:"1234",
      shippingInformation:shippingInfo,
      totalPrice:cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order-Confirmation')

  } 

  return (
    <div className="flex w-full gap-10 px-4">
      <div className="my-10 w-[62vw]  ml-6 h-full flex flex-col gap-10">
        <h1 className="text-3xl font-medium">CHECKOUT</h1>
        <div className="flex flex-col gap-4 w-[96%] ">
          <div className="flex flex-col gap-4 border ">
            <div
              onClick={() => setBillingToggler(!billingToggler)}
              className="flex items-center justify-between cursor-pointer border p-2"
            >
              <h1 className="text-2xl">Billing Information </h1>
              <span>
                {billingToggler ? (
                  <FaAngleDown size={20} />
                ) : (
                  <FaAngleUp size={20} />
                )}
              </span>
            </div>
            <div className={` ${billingToggler ? "hidden" : "block"} p-2 `}>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="text-xl">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name "
                  required
                  className="border py-1 px-2 text-md rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="text-xl">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email "
                  required
                  className="border py-1 px-2 text-md rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="text-xl">
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="Enter Phone"
                  required
                  className="border py-1 px-2 text-md rounded-sm outline-none"
                />
              </div>
            </div>
          </div>
          <div className=" border">
            <div
              onClick={() => setShippingToggler(!shippingToggler)}
              className="flex items-center justify-between cursor-pointer border "
            >
              <h1 className="text-2xl p-2">Shipping Information </h1>
              <span className="mr-2">
                {shippingToggler ? (
                  <FaAngleDown size={20} />
                ) : (
                  <FaAngleUp size={20} />
                )}
              </span>
            </div>
            <div className={` ${shippingToggler ? "hidden" : "block"} p-2`}>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="text-xl">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Address "
                  onChange={((e)=>setShippingInfo({...shippingInfo , address:e.target.value}))}
                  required
                  className="border py-1 px-2 text-md rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="text-xl">
                  City
                </label>
                <input
                  type="email"
                  placeholder="Enter City Name"
                  onChange={((e)=>setShippingInfo({...shippingInfo , City:e.target.value}))}
                  required
                  className="border py-1 px-2 text-md rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="text-xl">
                  Zip Code
                </label>
                <input
                  type="number"
                  placeholder="Enter Zip Code"
                  onChange={((e)=>setShippingInfo({...shippingInfo , zip:e.target.value}))}
                  required
                  className="border py-1 px-2 text-md rounded-sm outline-none"
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div
              onClick={() => setPaymentToggle(!paymentToggle)}
              className="flex items-center justify-between border cursor-pointer"
            >
              <h1 className="text-2xl p-2">Payment Method </h1>
              <span className="mr-2">
                {paymentToggle ? (
                  <FaAngleDown size={20} />
                ) : (
                  <FaAngleUp size={20} />
                )}
              </span>
            </div>
            <div className={` ${paymentToggle ? "hidden" : "block"} p-2`}>
              <div className="mt-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label htmlFor="" className="text-lg pl-2 ">
                  Cash On Delivery
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "DC"}
                  onChange={() => setPaymentMethod("DC")}
                />
                <label htmlFor="" className="text-lg pl-2 ">
                  Debit Card
                </label>
              </div>
              <div className="mt-4 pl-2 rounded-lg bg-gray-300">
                {paymentMethod === "DC" && (
                  <div>
                    <h1 className="text-2xl py-4">Debit Card Information</h1>
                    <div className="py-4">
                      <div className="flex flex-col mb-4 gap-2">
                        <label className="text-xl" htmlFor="">
                          Card Number
                        </label>
                        <input
                          type="number"
                          required
                          placeholder="Enter Card Number"
                          className="border py-1 px-2 text-md rounded-sm mr-2 outline-none"
                        />
                      </div>
                      <div className="flex flex-col mb-4 gap-2">
                        <label className="text-xl" htmlFor="">
                          Card Holder Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Card Holder Name"
                          required
                          className="border py-1 px-2 text-md rounded-sm mr-2 outline-none"
                        />
                      </div>
                      <div className="flex  mb-6 mt-2 w-full gap-6 ">
                        <span className="flex flex-col w-full gap-2">
                          <label className="text-xl" htmlFor="">
                            Expiry Date
                          </label>
                          <input
                            type="date"
                            placeholder="MM/YY"
                            className="border py-1  px-2 text-md rounded-sm outline-none"
                          />
                        </span>
                        <span className="flex flex-col w-full gap-2">
                          <label className="text-xl" htmlFor="">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="CVV"
                            required
                            className="border py-1 px-2 text-md rounded-sm mr-2 outline-none"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 w-[25vw] h-full shadow-md border-2 p-4">
      <h1 className="text-2xl mb-8 font-semibold">Order Summary</h1>
        {cart.products.map((product) => (
          <div className="flex my-4 flex-col gap-6" key={product.id}>
            <div className="flex r justify-between">
              <img className="h-24 " src={product.image} alt="" />
              <div className="mt-2">
                <p className="font-medium text-lg">{product.name}</p>
                <p className=" text-md">
                  ${(product.price).toFixed(2)} x{product.quantity}
                </p>
              </div>
              <p className="mt-2">${product.totalPrice}</p>
            </div>
           
            
          </div>
        ))}
         <hr className="border-t-2 border-gray-300 w-full flex justify-center" />
        <div className="flex justify-between w-full my-6">
              <p className="font-medium text-lg">Total Price:</p>
              <p>${cart.totalPrice}</p>
            </div>
            <button onClick={handleOrder} className="bg-red-600 px-4 py-1 w-full text-white text-lg">Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;
