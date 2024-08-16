import { useContext } from 'react'
import Component1 from './Component1'
import { counter } from '../Context'

const Button = () => {
const val1=useContext(counter)
    
  return (
    <>
    <div><button onClick={()=>val1.setCount((count)=> count +1)}>i am a button</button>
    <Component1/>
    </div>
    </>
  )
}

export default Button