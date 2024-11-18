import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ShopCard from "./components/ShopCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Order from "./components/Order"

function App() {

  const [order,setOrder]=useState(null)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" element={<ShopCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout  setOrder={setOrder}/>} />
          <Route path="/order-Confirmation" element={<Order  order={order}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
