import "./App.css";

import { useState } from "react";
import videoDB from "./data/data";
import Assignment from './Components/Assignment/ResumeBuilder';
import resumedata from './resumedata/data';
import Addvideo from "./Components/Addvideo/AddVideo";
import VideoList from "./Components/Addvideo/VideoList";
import Resume from "./Components/Assignment/ResumeTemplate";
import DropDown from './Components/Assignment/DropDown'
// import Videos from "./Components/Video";
// import PlayButton from './Components/PlayButton/PlayButton'

function App() {
  // const [videos, setVideos] = useState(videoDB) //video data is comming

  // function addvideos(video) {
  //   setVideos([...videos,
  //   { ...video, id: videos.length + 1 }
  //   ])
  // }

  return (
    <div>

      {/* <DropDown/> */}
      {/* <Resume/> */}




      {/* <div onClick={()=> console.log('what is hapening bro!')}></div> */}

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


      <div>
        <Addvideo AddNewVideo={addvideos} />
        <VideoList videos={videos} />
      </div>


      {/* Uses map function to render elements value on the UI */}
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

      {/* <PlayButton message="playyy" onPlay={() => console.log('playyyyyy kro!')} onPause={() => console.log('Ruk ja bhai!')}>Play</PlayButton> */}
      {/* <PlayButton message="Ruk Jao!" onPause={() => console.log('Ruk ja bhai!')}>Pause</PlayButton> */}
      {/* <PlayButton message="playyy" onPlay={() => console.log('playyyyyy kro!')}/> */}
      {/* <PlayButton message="Ruk Jao!" onPause={() => console.log('Ruk ja bhai!')}/> */}
    </div>
  );
}

export default App;