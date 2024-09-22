
import Counter from './Component/Counter'
import Objus from './Component/Objus'
import Anothercounter from './Component/Anothercounter'
import { useState } from 'react'
function App() {

  const [name, setName] = useState("Nitish")

  function handelchange(){
    setName("Rahul")
    console.log(`${name}! Calling the set function does not change the current state in the already executing code:`);
    console.log(`${name}! It only affects what useState will return starting from the next render.`);
  } 
  return (
    <>
    <h1>counter App</h1>
    <Anothercounter/>
<Objus/>
    {/* <Counter/> */}
    <h1>my name is {name}</h1>
    <h2 onClick={handelchange}>if you click me then my name is changed!</h2>
    <h2 onClick={handelchange}>if you click me second time my name is changed!</h2>

    </>
  )
}

export default App
