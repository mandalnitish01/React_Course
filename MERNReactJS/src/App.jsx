import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import videoDB from "./data/data";
import Assignment from './Components/Assignment/ResumeBuilder';
import resumedata from './resumedata/data';
import Addvideo from "./Components/Addvideo/AddVideo";
import VideoList from "./Components/Addvideo/VideoList";
import Resume from "./Components/Assignment/ResumeTemplate";
import DropDown from './Components/Assignment/DropDown'
import Videos from "./Components/Video";
import PlayButton from './Components/PlayButton/PlayButton'

function App() {


// Both the state and function are used to render parent to child relation ship add video when we click on this 
  const [videos, setVideos] = useState(videoDB) //video data is comming
  const [editableVideo, seteditableVideo] = useState(null) 

  function addvideos(video) {
    setVideos([...videos,
    { ...video, id: videos.length + 1 }
    ])
  }

  

  function deleteVideo(id) {
    // here the remove is the itteraor 
    setVideos(videos.filter(remove=> remove.id !== id))
    console.log(id)
  }

  function editVideo(id) {
    seteditableVideo(videos.find(remove=> remove.id === id));
    console.log(videos.find(remove=> remove.id === id))
  }

  return (
    // state update hone ke baad return wala part rerendur hota hai 
    <div>

   

      {/* <div onClick={()=> console.log('what is hapening bro!')}></div> */}


{/* click on this then it will add the video and it's content on the UI */}
      {/* <div>
        <button
          onClick={() => {
              setVideos(
                [...videos,{
                  title: "new Projects",
                  verify: false,
                  View: "100k",
                  time: "2 months ago",
                  id : videos.length+1
                },
                
              ]
              )
          }}
        >
          Add New Videos
        </button>
      </div> */}

{/* component to component call (parent child relationship) */}
      <div>
      {/* //it is a form control */}
      <Addvideo AddNewVideo={addvideos} editableVideo = {editableVideo}/> 
      {/* video control  */}
      <VideoList editVideo={editVideo} deleteVideo={deleteVideo} videos={videos} />
      </div>


      {/* Uses map function to render elements value on the UI */}
      {/* Single video and playbutton show on UI and console  */}
      {/* <div className="wrapper">

        {videoDB.map((video) => (
          <Videos

            key={video.id}
            title={video.title}
            verify={video.verify}
            View={video.View}
            time={video.time}
            image={video.image}
            id={video.id}
          >

            <PlayButton
              onPlay={() => console.log('playyyyyying', video.title)}
              onPause={() => console.log('Paused', video.title)}>
              {video.title}
            </PlayButton>
          </Videos>
        ))}
      </div> */}



{/* //this is for resume render on UI  */}
      {/* <div>
        {resumedata.map((resume) => (
          <Assignment
            key={resume.id}
            name={resume.name}
            interEducation={resume.interEducation}
            batchlorEducation={resume.batchlorEducation}
            skills={resume.skills}
            experience={resume.experience}
          />
        ))}
      </div> */}

{/* //play button show on ui or console  */}
{/* <div>
      <PlayButton message="playyy" onPlay={() => console.log('playyyyyy kro!')} onPause={() => console.log('Ruk ja bhai!')}>Play</PlayButton>
      <PlayButton message="Ruk Jao!" onPause={() => console.log('Ruk ja bhai!')}>Pause</PlayButton>
      <PlayButton message="playyy" onPlay={() => console.log('playyyyyy kro!')}/>
      <PlayButton message="Ruk Jao!" onPause={() => console.log('Ruk ja bhai!')}/>
      </div> */}


   {/* <DropDown/> */}
      {/* <Resume/> */}
    </div>
  );
}

export default App;