import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function ProductCard({ products, user }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(addToCart({ ...product })); //dispatching addToCart Function with product as action
  };
  return (
    <>
      <div className="grid md:grid-cols-5 w-full grid-cols-2 h-full mb-10 gap-4 md:gap-10 ">
        {/* mapping over products and doing slicing to get 5 product to show  */}
        {products?.slice(0, 5).map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="flex flex-col rounded-md shadow-md cursor-pointer border-2 p-2 w-full flex-1 h-full transform  transition-transform duration-300 hover:scale-105"
            key={product.id}
          >
            <div>
              <img
                className="w-full md:h-48 h-36 object-contain pb-2 md:pb-4"
                src={product.image}
                alt=""
              />
            </div>
            <h3 className="mt-1 text-lg md:text-xl font-medium">
              {product.name}
            </h3>
            <p className="mt-1 md:text-lg text-sm">$ {product.price}</p>
            <div className="flex justify-between items-center relative  mt-2">
              <div className="flex md:gap-1 mt-2">
                <RiStarSFill size={22} className=" text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
              </div>
              <div
                onClick={(e) => handleAddToCart(e, product)}
                className="bg-red-700 absolue flex items-center hover:w-28 justify-center group w-7 h-7 md:w-8 md:h-8 text-sm md:p-2 text-white rounded-full  transition-all duration-100 hover:scale-105"
              >
                <span className="group-hover:hidden block">+</span>
                <span className="hidden group-hover:block">Add to Cart</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
