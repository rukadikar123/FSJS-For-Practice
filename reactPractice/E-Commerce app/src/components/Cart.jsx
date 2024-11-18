import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import emptycart from "../assets/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import ChangeAddress from "./ChangeAddress";
import { increaseQuantity ,decreaseQuantity, removeFromCart } from "../redux/CartSlice";
import {useNavigate} from "react-router-dom"

function Cart() {
  const cart = useSelector((state) => state.cart.products);
  const product=useSelector((state) => state.cart)

  const [address, setAddress]=useState("Shipping to 132 Default St. Default City. DC")

  const [isModalOpen,setIsModalOpen]=useState(false)

  const dispatch=useDispatch()

  const navigate=useNavigate()

  const handleIncrease=(product)=>{
      dispatch(increaseQuantity(product))
  }


const handleDecrease=(product)=>{
  dispatch(decreaseQuantity(product))
}

const handleRemove=(product)=>{
    dispatch(removeFromCart(product))
}

  return (
    <>
      {cart.length > 0 ? (
        <div className="pl-6">
          <h1 className="mt-10 text-xl font-semibold">SHOPPING CART</h1>
          <div className="flex justify-between gap-10 w-full">
            <div className="w-full">
              <table className="table-auto w-full  mt-10 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="w-1/2 px-4 py-2 text-left border border-gray-300">
                      Product
                    </th>
                    <th className="w-1/6 px-4 py-2 text-center border border-gray-300">
                      Price
                    </th>
                    <th className="w-1/6 px-4 py-2 text-center border border-gray-300">
                      Quantity
                    </th>
                    <th className="w-1/6 px-4 py-2 text-center border border-gray-300">
                      Subtotal
                    </th>
                    <th className="w-1/6 px-4 py-2 text-center border border-gray-300">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id} className="">
                      <td className="px-4 py-2 text-xl font-semibold flex items-center gap-20 border border-gray-300">
                        <img className="h-28 w-24" src={product.image} alt="" />
                        {product.name}
                      </td>
                      <td className="px-4 py-2 text-center border border-gray-300">
                        ${product.price}
                      </td>
                      <td className="px-4 py-2 text-center border border-gray-300">
                        <span onClick={()=>handleDecrease(product)} className="border border-gray-300 px-1 cursor-pointer font-semibold text-xl">
                          -
                        </span>
                        <span className="border border-gray-300 px-1 cursor-pointer font-semibold text-xl">
                          {product.quantity}
                        </span>
                        <span onClick={()=>handleIncrease(product)} className="border border-gray-300 px-1 cursor-pointer font-semibold text-xl">
                          +
                        </span>
                      </td>
                      <td className="px-4 py-2 text-center border border-gray-300">
                        ${(product.quantity * product.price).toFixed(2)}
                      </td>
                      <td className="px-4 py-2 text-center border  border-gray-300">
                        <FaTrashAlt onClick={()=>handleRemove(product)} size={20} className="ml-4 cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col shadow-md items-start gap-8 w-[45vw] mt-10 border-2 p-6  border-gray-300">
              <h1 className="text-2xl font-semibold">CART TOTALS</h1>
              <div className="flex items-center w-full justify-between pr-4">
                <h3 className="text-xl">TOTAL ITEMS: </h3>
                <p className="text-xl">{product.totalQuantity}</p>
                
              </div>
              <hr className="border-t-2 border-gray-300 w-[26vw] mx-auto"/>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl">Shipping:</h1>
                <p className=" pl-2">{address}</p>
                <div><button onClick={()=> setIsModalOpen(true)}  className="underline ">Change Address</button></div>
              </div>
              <div className="flex w-full justify-between items-center pr-4">
                <h1 className="text-xl">Total Price:</h1>
                <p>{(product.totalPrice).toFixed(2)}</p>
              </div>
              <div className="w-full flex justify-center items-center">
                <button onClick={()=>navigate('/checkout')} className="bg-red-600 w-full text-white  font-medium rounded-sm py-2">Proceed to Checkout</button>
              </div>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} ><ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/></Modal>
        </div>
      ) : (
        <div > 
          <div className="ml-[320px] mt-10" > 
            <img src={emptycart} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
