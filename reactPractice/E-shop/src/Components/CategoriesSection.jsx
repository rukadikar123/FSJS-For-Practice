import React from 'react'
import MenImage from "../assets/man.png"
import WomenImage from"../assets/woman.png"
import kids from "../assets/kid.png"

function CategoriesSection() {

    const catogories=[
        {
            title:"Men",
            imagreUrl:MenImage
        },
        {
            title:"Women",
            imagreUrl:WomenImage
        },
        {
            title:"Kids",
            imagreUrl:kids
        },
    ]

  return (
    <>
        <div className='md:flex  md:items-center md:justify-center gap-8 md:pb-8 h-full md:px-20 w-full '>
           {catogories.map((item, idx)=>(
                <div className='md:flex relative md:flex-col h-full py-2 px-4 md:h-[42vh] md:w-[30vw] transform transition-transform duration-100 hover:scale-95 cursor-pointer' key={idx}>
                    <img className='w-full h-full rounded-md' src={item.imagreUrl} alt="" />
                    <div className='flex flex-col gap-2 absolute top-24 left-16'> 
                    <h3 className='text-2xl font-medium'>{item.title}</h3>
                    <p>View All</p>
                    </div>
                </div>
           ))}
        </div>   
    </>
  )
}

export default CategoriesSection