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
      orderNumber:Math.floor(Math.random() * 90000) + 10000,
      shippingInformation:shippingInfo,
      totalPrice:cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order-Confirmation')

  } 

  return (
    <div className="flex md:flex-row flex-col mx-2  md:gap-10 px-4">
      <div className="md:my-10 my-3 md:w-[62vw] w-full ml-6 h-full flex flex-col gap-4 md:gap-10">
        <h1 className="md:text-3xl text-xl font-medium">CHECKOUT</h1>
        <div className="flex flex-col gap-4 w-[96%] ">
          <div className="flex flex-col gap-4 border ">
            <div
              onClick={() => setBillingToggler(!billingToggler)}
              className="flex items-center justify-between cursor-pointer border p-2"
            >
              <h1 className="md:text-2xl text-lg">Billing Information </h1>
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
                <label htmlFor="" className="md:text-xl text-lg">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name "
                  required
                  className="border py-1 px-2 md:text-md text-sm  rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="md:text-xl text-lg">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email "
                  required
                  className="border py-1 px-2 md:text-md text-sm rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="md:text-xl text-md">
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="Enter Phone"
                  required
                  className="border py-1 px-2 md:text-md text-sm rounded-sm outline-none"
                />
              </div>
            </div>
          </div>
          <div className=" border">
            <div
              onClick={() => setShippingToggler(!shippingToggler)}
              className="flex items-center justify-between cursor-pointer border "
            >
              <h1 className="md:text-2xl text-lg p-2">Shipping Information </h1>
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
                <label htmlFor="" className="md:text-xl text-md">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Address "
                  onChange={((e)=>setShippingInfo({...shippingInfo , address:e.target.value}))}
                  required
                  className="border py-1 px-2 md:text-md text-sm rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="md:text-xl text-md">
                  City
                </label>
                <input
                  type="email"
                  placeholder="Enter City Name"
                  onChange={((e)=>setShippingInfo({...shippingInfo , City:e.target.value}))}
                  required
                  className="border py-1 px-2 md:text-md text-sm rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col mb-2 gap-1">
                <label htmlFor="" className="md:text-xl text-md">
                  Zip Code
                </label>
                <input
                  type="number"
                  placeholder="Enter Zip Code"
                  onChange={((e)=>setShippingInfo({...shippingInfo , zip:e.target.value}))}
                  required
                  className="border py-1 px-2 md:text-md text-sm rounded-sm outline-none"
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div
              onClick={() => setPaymentToggle(!paymentToggle)}
              className="flex items-center justify-between border cursor-pointer"
            >
              <h1 className="md:text-2xl text-lg p-2">Payment Method </h1>
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
                <label htmlFor="" className="md:text-lg text-md pl-2 ">
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
                <label htmlFor="" className="md:text-lg text-md pl-2 ">
                  Debit Card
                </label>
              </div>
              <div className="mt-4 pl-2 rounded-lg bg-gray-300">
                {paymentMethod === "DC" && (
                  <div>
                    <h1 className="md:text-2xl text-lg py-4">Debit Card Information</h1>
                    <div className="py-4">
                      <div className="flex flex-col md:mb-4 mb-2 gap-2">
                        <label className="md:text-xl text-md" htmlFor="">
                          Card Number
                        </label>
                        <input
                          type="number"
                          required
                          placeholder="Enter Card Number"
                          className="border py-1 px-2 md:text-md text-sm rounded-sm mr-2 outline-none"
                        />
                      </div>
                      <div className="flex flex-col mb-4 gap-2">
                        <label className="md:text-xl text-md" htmlFor="">
                          Card Holder Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Card Holder Name"
                          required
                          className="border py-1 px-2 md:text-md text-sm  rounded-sm mr-2 outline-none"
                        />
                      </div>
                      <div className="flex  mb-6 mt-2  gap-6 ">
                        <span className="flex flex-col w-full gap-2">
                          <label className="md:text-xl text-md" htmlFor="">
                            Expiry Date
                          </label>
                          <input
                            type="date"
                            placeholder="MM/YY"
                            className="border py-1  px-2 md:text-md text-sm  rounded-sm outline-none"
                          />
                        </span>
                        <span className="flex flex-col gap-2">
                          <label className="md:text-xl text-md" htmlFor="">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="CVV"
                            required
                            className="border py-1 w-[35vw] px-2 md:text-md text-sm  rounded-sm mr-2 outline-none"
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
      <div className="md:mt-32 mt-10 w-full md:w-[25vw] h-full shadow-md border-2 p-4">
      <h1 className="md:text-2xl text-xl mb-8 font-semibold">Order Summary</h1>
        {cart.products.map((product) => (
          <div className="flex my-4 flex-col gap-6" key={product.id}>
            <div className="flex r justify-between">
              <img className="md:h-24 h-20" src={product.image} alt="" />
              <div className="mt-2">
                <p className="font-medium md:text-lg text-md">{product.name}</p>
                <p className="text-sm md:text-md">
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
              <p>${(cart.totalPrice).toFixed(2)}</p>
            </div>
            <button onClick={handleOrder} className="bg-red-600 px-4 py-1 w-full text-white text-lg">Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;
