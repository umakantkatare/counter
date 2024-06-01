import { useState } from 'react'
import '../App'

function App() {
  const [count, setCount] = useState(0)

  function increment (){
    const counter = count + 1
    setCount( counter )
    if (count < 10) {
      setCount (count + 1)
    }
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
    {/* <div className=' w-full min-h-screen flex justify-center items-center flex-col gap-5 '>
<h1 className=' text-5xl'> counter App : {count}</h1>
<div className=' flex gap-3 '>
<button onClick={increment} className=' bg-blue-400 text-white px-4 py-2 rounded ' disabled={count >=10}> increment</button>
<button onClick={decrement} className=' bg-blue-400 text-white px-4 py-2 rounded ' disabled={count <=0}> decrement</button>
</div>
<button onClick={reset} className=' bg-blue-400 text-white px-4 py-2 rounded '> reset Value</button>
    </div> */}


<div className=" w-full m-5 p-5 min-h-screen bg-gray-500 flex items-center justify-center flex-col">
      <div className=" bg-red-500 w-96 h-90 rounded-md text-center pb-5">
        <h1 className=" text-5xl mt-8 text-white">COUNTER</h1>
        <div className="  flex flex-col text-center items-center justify-center my-4">
          <div className=" font-semibold m-4 text-4xl">{count}</div>
          <div className="mx-5 my-2 ">
            <button
              className=" border rounded-sm p-2 m-4 bg-gray-400"
              onClick={increment}
              disabled={count >=10}
            >
              Increment
            </button>

            <button
              className=" border rounded-sm p-2 m-4 bg-gray-400"
              onClick={decrement}
              disabled={count <=0}
            >
              Decrement
            </button>
            <button
              className=" border rounded-sm p-2 m-4 bg-gray-400"
              onClick={reset}
            >
              Reset Value
            </button>
          </div>
        </div>
      </div>
    </div>
       
    </>
  )
}

export default App
