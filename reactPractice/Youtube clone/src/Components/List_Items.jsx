import React from 'react'

function List_Items() {

    const categories=[
        "All","Music","React Js","Javascript","React Routers","Computer Programming","Movie Musicals","India national cricket team","News","Mixes","1990s","Telugu cinema","Live","Dramedy","Dubbing","Indian soap opera","Football","Nodejs"
    ]

  return (
    <div className='flex flex-nowrap overflow-x-scroll px-2 py-1 gap-3 h-full w-full'>
        { 
            categories.map((category)=>(
                <div className=' flex-none py-1 px-1 bg-gray-200 hover:bg-gray-300 rounded-xl font-medium text-gray-700 cursor-pointer' key={category} >{category}</div>
            ))
        }

    </div>
  )
}

export default List_Items