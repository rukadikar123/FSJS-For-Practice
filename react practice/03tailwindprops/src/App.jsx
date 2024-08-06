import Cards  from "./components/Cards"

function App() {

  return (
    <>
      <h1 className="bg-green-400 rounded p-4 mb-10">Tailwind test</h1>

      <div className="flex justify-center gap-20">
      <Cards username="siddharth" btntext="click me"/>
      <Cards  username="siddharth" btntext="visit me"/>
      </div>

    </>
  )
}

export default App
