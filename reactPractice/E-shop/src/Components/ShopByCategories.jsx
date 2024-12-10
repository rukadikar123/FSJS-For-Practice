import React, { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { NavLink, Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

function ShopByCategories({ categories }) {
  const [categoryData, setCategoryData] = useState(null);
  const { type } = useParams();
  console.log(type);

  const getCategory = async () => {
    await fetch(`https://fakestoreapi.in/api/products/category?type=${type}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setCategoryData(res.products);
      });
  };
  useEffect(() => {
    getCategory();
  }, [type]);

  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    console.log(product);

    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <div className="flex  gap-10 h-screen md:m-10">
      <div className="flex flex-col  md:w-[20%] w-[27vw] h-[30%] bg-gray-100 md:gap-6">
        <h1 className="md:text-xl text-md bg-red-600 p-2  text-white font-semibold ">
          SHOP BY CATEGORIES
        </h1>
        <ul className="flex flex-col md:gap-2 gap-1 pb-2">
          {categories?.map((category, idx) => (
            <li key={idx}>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#ff002f" , fontWeight:'bold' } : { color: "black" }
                }
                end
                to={`/category/${category}`}
                className={`flex md:text-md h-4 w-40 text-sm items-center md:gap-2 gap-1 cursor-pointer transform transition-transform duration-100 hover:scale-105`}
              >
                <span className="rounded-full h-2 w-2 md:ml-4 border  border-red-500"></span>
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid md:grid-cols-4 w-[80%] grid-cols-2 overflow-y-scroll relative h-full mb-10 gap-4 md:gap-10 ">
        {categoryData?.map((product) => (
          <Link
            to={`/product/${product?.id}`}
            className="flex flex-col rounded-md shadow-md cursor-pointer border-2 p-2 w-full flex-1 h-full transform  transition-transform duration-300 hover:scale-105"
            key={product?.id}
          >
            <div>
              <img
                className="w-full md:h-48 h-36 object-contain pb-2 md:pb-4"
                src={product?.image}
                alt=""
              />
            </div>
            <h3 className="mt-1 md:text-lg text-sm font-medium line-clamp-2">
              {product?.title}
            </h3>
            <p className="mt-1 md:text-lg text-sm">$ {product?.price}</p>
            <div className="flex justify-between relative items-center mt-2">
              <div className="flex md:gap-1 mt-2">
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
              </div>
              <div
                onClick={(e) => handleAddToCart(e, product)}
                className="bg-red-700 absolute right-2 flex items-center hover:w-28 justify-center group w-7 h-7 md:w-8 md:h-8 text-sm md:p-2 text-white rounded-full transition-all duration-100 hover:scale-105"
              >
                <span className="group-hover:hidden block">+</span>
                <span className="hidden group-hover:block">Add to Cart</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ShopByCategories;
