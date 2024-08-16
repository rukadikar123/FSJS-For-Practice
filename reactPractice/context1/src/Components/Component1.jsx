import { useContext } from "react"
import { counter } from "../Context"

const Component1 = () => {
 const val=useContext(counter)
  return (
    <div>{val.count}</div>
  )
}

export default Component1