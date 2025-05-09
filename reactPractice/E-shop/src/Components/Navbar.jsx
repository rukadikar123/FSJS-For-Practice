import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/ProductSlice";
import { removeAllCartItems } from "../redux/CartSlice";

function Navbar({ user, setUser }) {
  const [search, setSearch] = useState("");
  const cart = useSelector((state) => state.cart?.CartProducts); // Retrieve product state from CartSlice using Redux Toolkit's useSelector

  const dispatch = useDispatch();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(setSearchTerm(search)); //dispatching setSearchTerm function with value search
      navigate("/filtered-data"); // navigating to filtered-data page
      setSearch("")
    }
  };

  const handleLogOut = () => {
    setUser(null);
    dispatch(removeAllCartItems());
    navigate("/");
    alert("logged out succesfully");
  };

  const navigate = useNavigate();
  return (
    <>
      <nav className="flex flex-col bg-gray-50 gap-4 py-4 shadow-md sticky top-0 justify-center z-20">
        <div className={`flex items-center justify-center w-full md:gap-8 ${user ? "gap-1" : "gap-4"} `}>
          <Link to="/" className="md:text-2xl text-xl font-semibold">
            e-Shop
          </Link>
          <form onSubmit={handleSearch} className="flex relative items-center">
            <input
              className="md:w-[53vw] w-[42vw] flex-1 border-2 p-1 md:p-2 rounded-md outline-none"
              type="text"
              placeholder="Search Products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="cursor-pointer absolute md:right-3 right-1 top-2">
              <CiSearch className=" text-red-700" size={23} />
            </button>
          </form>
          <Link to="/cart" className="relative">
            <FaShoppingCart size={25} />
            {cart?.length > 0 && (
              <span className="absolute bottom-4 left-5 md:bottom-2 md:w-5 text-center h-5 w-5 md:h-6 md:left-6 bg-red-600 text-white rounded-full">
                {cart?.length}
              </span>
            )}
          </Link>
          {!user && (
            <button
              className="hidden md:block text-lg"
              onClick={() => navigate("/login")}
            >
              Login | Register
            </button>
          )}
          {user && ( // if user is there then this code will execute
            <div className="flex items-center">
              <span className=" md:px-3 inline-block ">
                <FaUser className="hidden md:block" size={26} />
              </span>
              <button
                className="md:ml-4 ml-2 bg-red-600 md:text-lg text-xs px-2 md:px-4 py-1 text-white rounded-md cursor-pointer"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          )}
          <button onClick={() => navigate("/login")} className="block md:hidden text-lg">
            <FaUser />
          </button>
        </div>
        <div className="flex items-center justify-center gap-12 text-md font-semibold">
          <Link to="/" className="hover:text-yellow-600">
            Home
          </Link>
          <Link to="/shop" className="hover:text-yellow-600">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-yellow-600">
            Contact
          </Link>
          <Link to="/about" className="hover:text-yellow-600">
            About
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
