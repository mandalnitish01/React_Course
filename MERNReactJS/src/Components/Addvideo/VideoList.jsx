import Videos from '../Video'
import PlayButton from '../PlayButton/PlayButton'
function VideoList({videos,deleteVideo,editVideo}){
    return <>
    {videos.map((video) => (
          <Videos
            key={video.id}
            title={video.title}
            verify={video.verify}
            View={video.View}
            time={video.time}
            image={video.image}
            id={video.id}
            deleteVideo = {deleteVideo}
            editVideo = {editVideo}
          >

            <PlayButton
              onPlay={() => console.log('playyyyyying', video.title)}
              onPause={() => console.log('Paused', video.title)}>
              {video.title}
            </PlayButton>

          </Videos>
        ))}
    </>
}
export default VideoList