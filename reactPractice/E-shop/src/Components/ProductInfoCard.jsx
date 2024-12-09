import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { addToCart } from "../redux/CartSlice"

function ProductInfoCard() {
  const { id } = useParams();
  const products = useSelector(state => state.products.products);
  const [productItem, setProductItem] = useState();

  useEffect(() => {
    const newProduct = products.find(item => item.id=== parseInt(id));
    setProductItem(newProduct);
  }, [id]);

  const dispatch=useDispatch()
  const handleAddToCart=()=>{
    dispatch(addToCart(productItem))
  }

  return (
    <div className="md:my-8  my-4">
      <div className="flex md:flex-row mx-6 md:mx-20 flex-col justify-center items-center gap-10 md:gap-20">
        <div className="md:h-96 md:w-1/2 h-68 w-68 md:mx-0 mx-8 border-2 shadow-md p-3 md:p-4">
          <img className="h-full w-full" src={productItem?.image} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="md:text-3xl text-xl font-medium">{productItem?.title}</h1>
          <p className="text-xl font-semibold">${productItem?.price}</p>
         <div> <button className="bg-red-600 text-white text-lg px-2 py-1" onClick={handleAddToCart}>Add To Cart</button></div>
          <p className="text-md flex items-center gap-2"><span><FaCarSide size={22}/></span>Delivery & Return</p>
          <p className="text-md flex items-center gap-2"><span><IoMdHelp size={20}/></span>Ask a Question</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-14 md:ml-8 mx-6 md:mx-10">
        <p className="md:text-3xl font-semibold text-xl">{productItem?.title}</p>
        <p className="md:text-lg text-[12px]">{productItem?.description}</p>
      </div>
    </div>
  );
}

export default ProductInfoCard;
