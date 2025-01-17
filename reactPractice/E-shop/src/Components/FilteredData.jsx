import React from 'react'
import { RiStarSFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

function FilteredData() {

    const products=useSelector(state=> state.products.filteredData)    // Retrieve filteredData state from ProductSlice using Redux Toolkit's useSelector

    const dispatch=useDispatch() 

  const handleAddToCart=(e,product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart({...product}))        // dispatching addToCart function
   
  }
    
  return (
    <>
       <div>{products.length>0 ? <div className="grid md:grid-cols-5 grid-cols-2 h-full mx-4 md:mx-10 my-10 gap-4 md:gap-10 ">

        {/* mapping over products  */}
        {products.map((product) => (
          <div
            className="flex flex-col rounded-md shadow-md cursor-pointer border-2 p-2 w-full flex-1 h-full transform  transition-transform duration-300 hover:scale-105"
            key={product.id}
          >
            <div>
              <img
                className="w-full md:h-48 h-36 object-contain pb-4"
                src={product.image}
                alt=""
              />
            </div>
            <h3 className="mt-1 text-xl line-clamp-2 font-medium">{product.title}</h3>
            <p className="mt-1">$ {product.price}</p>
            <div className="flex justify-between items-center relative  mt-2">
              <div className="flex gap-1 mt-2">
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
                <RiStarSFill size={22} className="text-orange-500" />
              </div>
              <div onClick={(e)=> handleAddToCart(e,product)} className="bg-red-700 absolue flex items-center hover:w-28 justify-center group w-8 h-8 text-sm p-2 text-white rounded-full  transition-all duration-100 hover:scale-105">
                <span className="group-hover:hidden block">+</span>
                <span className="hidden group-hover:block">Add to Cart</span>
              </div>
            </div>
          </div>
        ))}
      </div> :
      <div className='flex justify-center text-red-900 text-4xl my-40 items-center h-full'>Product Not Found!</div>} </div>
    </>
  )
}

export default FilteredData