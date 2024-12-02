import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "../../E-Commerce app/src/components/About";
import ContactSection from "./Components/ContactSection";
import ShopCard from "../../E-Commerce app/src/components/ShopCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Chechout";
import Order from "../../E-Commerce app/src/components/Order";
import FilteredData from "./Components/FilteredData";
import ProductInfoCard from "./Components/ProductInfoCard";
import { useEffect, useState } from "react";
import { setProducts } from "./redux/ProductSlice";
import { useDispatch } from "react-redux";
import ProductCard from "./Components/ProductCard";

function App() {
  const [order,setOrder]=useState(null)
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [categories,setcategories]=useState()

  const fetchCategories=async()=>{
      try{
        const res=await fetch("https://fakestoreapi.in/api/products/category")
        const data=await res.json()
        setcategories(data.categories)
      }catch(err){
        console.log(err);
        
      }
  }

  const fetchData=async()=>{
    try{
      const res=await fetch("https://fakestoreapi.in/api/products?limit=20")
      const data=await res.json()
      setData(data.products)
      dispatch(setProducts(data.products))
    }catch(err){
      console.log(err);
      
    }
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
        <Route path="/" exact element={<Home categories={categories} data={data} />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<ContactSection />} />
          <Route path="/shop" element={<ShopCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout  setOrder={setOrder}/>} />
          <Route path="/order-Confirmation" element={<Order  order={order}/>} />
          <Route path="/filtered-data" element={<FilteredData/>} />
          <Route path="/product/:id" element={<ProductInfoCard/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
