import { useState } from 'react'
import Select from 'react-select'
function App() {

  const [value, setValue]=useState(null)

 const options=[
  {value: "CHOCOLATE" , label: "chocolate"},
  {value: "CHANDY" , label: "candy"},
  {value: "BURGER" , label: "burger"},

 ]

  return (
    <>
      <div style={{width:"200px", margin:"20px"}}>
          <Select options={options} defaultValue={value} placeholder="select your snack" 
          onChange={setValue} 
          isSearchable
          isMulti
          noOptionsMessage={()=> "no snack found"}
          styles={{
            clearIndicator:()=>({
              color:"red"
            }),
            placeholder:(baseStyles,state)=>({
              ...baseStyles,
              color:"gray"
            })
          }}
          />
      </div>
    </>
  )
}

export default App
