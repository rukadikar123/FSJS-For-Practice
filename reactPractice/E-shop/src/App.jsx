import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ContactSection from "./Components/ContactSection";
import ShopCard from "./Components/ShopCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Chechout";
import Order from "./Components/Order";
import FilteredData from "./Components/FilteredData";
import ProductInfoCard from "./Components/ProductInfoCard";
import { useEffect, useState } from "react";
import { setProducts } from "./redux/ProductSlice";
import { useDispatch } from "react-redux";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ShopByCategories from "./Components/ShopByCategories";
function App() {
  const [order,setOrder]=useState(null)
  const [user,setUser]=useState()
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
      const res=await fetch("https://fakestoreapi.in/api/products?limit=150")
      const data=await res.json()
      console.log(data);
      
      setData(data.products)
      console.log(data.products);
      
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
          <Navbar user={user} setUser={setUser}/>
        <Routes>
        <Route path="/" exact element={<Home user={user} categories={categories} data={data} />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<ContactSection />} />
          <Route path="/shop" element={<ShopCard  user={user}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout  setOrder={setOrder}/>} />
          <Route path="/order-Confirmation" element={<Order user={user} order={order}/>} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/filtered-data" element={<FilteredData/>} />
          <Route path="/product/:id" element={<ProductInfoCard/>} />
          <Route path="/category/:type" element={<ShopByCategories categories={categories}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
