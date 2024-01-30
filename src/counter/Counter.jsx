/* eslint-disable no-unused-vars */

import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = (e) => {
    setCounter((count) => count + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <div className=" w-full m-5 p-5 min-h-screen bg-gray-500 flex items-center justify-center flex-col">
      <div className=" bg-red-500 w-96 h-90 rounded-md text-center pb-5">
        <h1 className=" text-5xl mt-8 text-white">COUNTER</h1>
        <div className="  flex flex-col text-center items-center justify-center my-4">
          <div className=" font-semibold m-4 text-4xl">{counter}</div>
          <div className="mx-5 my-2 ">
            <button
              className=" border rounded-sm p-2 m-4 bg-gray-400"
              onClick={increment}
            >
              Increment
            </button>

            <button
              className=" border rounded-sm p-2 m-4 bg-gray-400"
              onClick={decrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
