import React, { useEffect, useState } from "react";
import heroImg from '../assets/hero-page.png'
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/ProductSlice";
import { useNavigate } from "react-router-dom";
import InfoSection from "./InfoSection";
import CategoriesSection from "./CategoriesSection";
import ProductCard from "./ProductCard";

function Home({data,categories}) {
  
  const navigate = useNavigate();

  console.log(categories);
  



  return (
   <>
    <div className="mt-10  flex justify-center gap-3 md:gap-6">
      <div className="flex flex-col md:w-1/5 w-[27vw] h-full bg-gray-100 md:gap-6">
        <h1 className="md:text-xl text-md bg-red-600 p-2  text-white font-semibold ">
          SHOP BY CATEGORIES
        </h1>
        <ul className="flex flex-col md:gap-2 gap-1 pb-2">
          {categories?.map((category, idx) => (
            <li
              className="flex md:text-md text-sm items-center md:gap-2 gap-1 cursor-pointer transform transition-transform duration-100 hover:scale-105"
              key={idx}
            >
              <div className="rounded-full h-2 w-2 md:ml-4 border  border-red-500"></div>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-[67vw] md:h-[65vh]">
        <img
          src={heroImg}
          className="md:w-full w-[65vw] md:h-full h-[35vh]"
          alt=""
        />
        <div className="flex flex-col absolute  md:top-[80px] top-[20px] left-2 md:left-10">
          <p className="md:text-md text-sm md:pb-3 text-black/65">
            Siddharth | e-Shop
          </p>
          <h1 className="md:text-3xl text-md  pb-3 font-bold text-black/75">
            Welcome To E-Shop
          </h1>
          <p className="md:text-xl text-xs md:pb-3 font-semibold text-black/70">
            Million+ products
          </p>
          <div>
            <button
              onClick={() => navigate("/shop")}
              className="md:text-md text-[9px] mt-2 px-2 md:px-6 py-1 transform  transition-transform duration-300 hover:scale-105 text-white bg-red-500"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
    <InfoSection/>
    <CategoriesSection/>
    <div className="md:mx-20 mx-4">
        <h1 className="text-center font-semibold text-5xl py-8 ">
          Our Products
        </h1>
        <ProductCard products={data} />
      </div>
   </>
  );
}

export default Home;
