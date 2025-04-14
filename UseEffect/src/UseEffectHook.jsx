import React from "react";
import { useEffect, useState } from "react";
const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    //Here you call the API 
    console.log("component  is mounting..");
    return function () {
      // in this function you want to show the initialstate .
      console.log("component is unmounting...");
    };
  }, []);
  useEffect(() => {
    console.log(`count gto updated by ${count}`);

    return function () {
      console.log("returning count at the initial state");
    };
  }, [count]);
  return (
    <div>
      <h1>UseEffectHook</h1>
      <p>Count : {count}</p>
      <p>Count2 : {count2}</p>
      <button onClick={() => setCount(count + 1)}>update </button>
      <button onClick={() => setCount2(count2 + 1)}>update2 </button>
    </div>
  );
};

export default UseEffectHook;
