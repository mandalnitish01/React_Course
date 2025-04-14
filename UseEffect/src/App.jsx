import { useState } from 'react'
import UseEffectHook from './UseEffectHook'
import TimerApp from './TimerApp'
import './App.css'

function App() {
const [isVisible, setVisible] = useState(false);

  return (
   <main>
    <TimerApp/>

    {/* {!isVisible ? <UseEffectHook/> : <></>}
    <button onClick={()=>setVisible(!isVisible)} >Toogle</button> */}
   </main>
  )
}

export default App
