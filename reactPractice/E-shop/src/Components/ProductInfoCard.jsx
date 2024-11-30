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
    <div className="md:my-10 my-2">
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:gap-40">
        <div className="md:h-96 md:w-1/3 h-80 w-80 border-2 shadow-md p-10">
          <img className="h-full w-full" src={productItem?.image} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-medium">{productItem?.name}</h1>
          <p className="text-xl md:text-center">${productItem?.price}</p>
          <button className="bg-red-600 text-white w-full text-lg px-2 py-1" onClick={handleAddToCart}>Add To Cart</button>
          <p className="text-md flex items-center gap-2"><span><FaCarSide size={22}/></span>Delivery & Return</p>
          <p className="text-md flex items-center gap-2"><span><IoMdHelp size={20}/></span>Ask a Question</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-10 ml-8 md:ml-96">
        <p className="md:text-4xl text-2xl">Product Description here</p>
        <p className="md:text-xl text-[10px]">{productItem?.description}</p>
      </div>
    </div>
  );
}

export default ProductInfoCard;
