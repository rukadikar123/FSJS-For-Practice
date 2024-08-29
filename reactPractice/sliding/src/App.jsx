
import Hero from './components/Hero'

function App() {

  const arr=[
    {
       name:"siddharth",
       age:22
    },
    {
       name:"rahul",
       age:69
    },
    {
       name:"sachin",
       age:35
    }
 ]
  return (
    <>
      <h1 className='text-center my-10 text-4xl text-white'>Sliding concept</h1>
      <Hero arr={arr}/>
    </>
  )
}

export default App
