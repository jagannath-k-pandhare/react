import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [count, setCount] = useState(10)

  const add = () => {
    setCount(count + 1)
  }

  const remove = () => {
    setCount(count -1)
  }

  return (
    <>
      <h1 className='bg-green-400 text-red p-4 rounded-xl mb-4 '>Tailwindcss</h1>
      <button
        // onClick={() => setCount(() => count+1)}
        className='button'
        onClick={add}
      >Counter {count}</button>
      <button
        onClick={remove}
      >reduce counter {count}</button>
    </>
  )
}

export default App
