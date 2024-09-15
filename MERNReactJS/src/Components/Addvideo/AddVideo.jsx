import './AddVideo.css'
import { useEffect, useState } from 'react';

const InitialState = {

    verify: true,
    channel: "GullyCoder",
    title: '',
    View: '',
    time: '',
}

function AddVideos({ AddNewVideo, editableVideo }) {

    const [video, setVideos] = useState(InitialState)

    function handelSubmit(e) {
        e.preventDefault();
        AddNewVideo(video);
        setVideos(InitialState)
        console.log(video);
    }
    function handelchange(e) {
        // console.log(e.target.name, e.target.value);
        setVideos({
            ...video,
            [e.target.name]: e.target.value
        });


        useEffect(()=>{
            if (editableVideo) {
                setVideos(editableVideo)
            }
        }, [editableVideo])
        // in useeffect this [] array is dependency aray     

        // console.log(video)
    }
    return (
        <form >
            <input onChange={handelchange} value={video.title} type="text" name='title' placeholder="title" />
            <input onChange={handelchange} value={video.View} type="text" name='View' placeholder="view" />
            <input onChange={handelchange} value={video.time} type="text" name='time' placeholder="time" />
            <button
                onClick={handelSubmit}
            //   onClick={() => {
            //       setVideos(
            //         [...videos,{
            //           title: "new Projects",
            //           verify: false,
            //           View: "100k",
            //           time: "2 months ago",
            //           id : videos.length+1
            //         },

            //       ]
            //       )
            //   }}
            >
                Add New Videos
            </button>
        </form>
    )
}

export default AddVideos;