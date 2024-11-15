import React from "react";
import { RiStarSFill } from "react-icons/ri";

function ProductCard({ products }) {
  return (
    <>
      <div className="grid grid-cols-5 w-full  h-full mb-10 gap-10 ">
        {products.slice(0, 5).map((product) => (
          <div
            className="flex flex-col rounded-md shadow-md cursor-pointer border-2 p-2 w-full flex-1 h-full transform  transition-transform duration-300 hover:scale-105"
            key={product.id}
          >
            <div>
              <img
                className="w-full h-48 object-contain pb-4"
                src={product.image}
                alt=""
              />
            </div>
            <h3 className="mt-1 text-xl font-medium">{product.name}</h3>
            <p className="mt-1">$ {product.price}</p>
            <div className="flex justify-between items-center relative  mt-2">
              <div className="flex gap-1 mt-2">
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
              </div>
              <div className="bg-red-700 absolue flex items-center hover:w-28 justify-center group w-8 h-8 text-sm p-2 text-white rounded-full  transition-all duration-100 hover:scale-105">
                <span className="group-hover:hidden block">+</span>
                <span className="hidden group-hover:block">Add to Cart</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
