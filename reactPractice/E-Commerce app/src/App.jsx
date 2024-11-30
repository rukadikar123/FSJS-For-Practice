import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ShopCard from "./components/ShopCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Order from "./components/Order"
import Login from "./components/Login";
import Register from "./components/Register";
import FilteredData from "./components/FilteredData";
import ProductInfoCard from "./components/ProductInfoCard";
import About from "./components/About";
import ContactSection from "./components/ContactSection";

function App() {

  const [order,setOrder]=useState(null)
  const [user,setUser]=useState()

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" exact element={<Home user={user}/>} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<ContactSection />} />
          <Route path="/shop" element={<ShopCard user={user}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout  setOrder={setOrder}/>} />
          <Route path="/order-Confirmation" element={<Order  order={order}/>} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/filtered-data" element={<FilteredData/>} />
          <Route path="/product/:id" element={<ProductInfoCard/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
