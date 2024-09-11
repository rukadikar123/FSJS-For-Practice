import { useState } from 'react'
import Game from './components/Game'

function App() {


  return (
    <>
      <h1 className='text-center text-4xl my-10'>Tenzies Game</h1>
      <p className='text-center text-xl'>Roll untill all dice are the same. click each die to freeze it at its current value betn rolls.</p>
      <Game />
    </>
  )
}

export default App
