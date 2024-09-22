import { useState } from 'react';

export default function Counter() {
  const [age, setAge] = useState(42);

  function increment() {
    // setAge(age + 1); //Passing the next state directly 
    setAge(age => age + 1); //Passing the updater function 
        console.log(` set render/call ${age}`)
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button 
      
      onClick={() => {
        increment();
        console.log(` first render/call ${age}`)
        increment();
        console.log(` second render/call ${age}`)

        increment();
        console.log(` third render/call ${age}`)

      }}>+3</button>
      <button onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}
















// import { useState } from "react";
// import React from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);


//   function handleIncrement() {
//     setCount(count + 1);

//   }

//   function handleDecrement() {
//     if(count > 0 )
//     {
//     setCount(count - 1);
//     }
    
//   }

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>number is {count % 2 == 0 ?"Even":"Odd"}</p>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;