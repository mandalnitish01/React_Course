import '../PlayButton/PlayButton.css'
import { useState } from 'react';
export default function PlayGround({onPlay,onPause,children}) {
  const [playing , setPlaying] = useState(false)
    // let playing = false
  function handelclick(e) {
    // e.stopPropagation();
    
if(playing) onPause();
else onPlay();

setPlaying(!playing);
  }
  return (
    <div>
      <button onClick={handelclick}>{children} : {playing ? '⏸️' : '⏯️'}</button>
    </div> 
  );
}



