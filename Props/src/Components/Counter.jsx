import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [Counter, setCounter] = useState(15);

    const addValue = ()=>{
      setCounter(Counter + 1)


      // setCounter(Counter + 1)
      // setCounter(Counter + 1)
      // setCounter(Counter + 1)
      // setCounter(Counter + 1)
      // it increase the value via 1
      
        // setCounter(Counter => Counter + 1);
        // setCounter(Counter => Counter + 1);
        // setCounter(Counter => Counter + 1);
        // setCounter(Counter => Counter + 1);
        // but it increase the value via 4 because we write same lines of code  4 times
    }
    const removeValue=()=>{
        setCounter(Counter - 1);
    }

  return (
    <>
    <div className='flex flex-col justify-center align-middle text-center'>

        <h1>Counter App</h1>
        <h2>Counter Default value = {Counter}</h2>
        <br />
        <button className='bg-gray-700 flex  align-middle justify-center ' onClick={addValue}>Add Value</button>
        <hr />
        <button  className='bg-gray-700 flex  align-middle justify-center ' onClick={removeValue}>Remove Value</button>
        </div>
    </>
  )
}

export default Counter