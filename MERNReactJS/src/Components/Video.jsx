import "../Components/video.css";
// import PlayGround from "./PlayButton/PlayButton";
export default function ({
  channel = "GullyCoder",
  title,
  View,
  time,
  verify,
  id,
  children,
  deleteVideo,
  editVideo
}) {
  // let verified;

  return (
    <div className="wrapper" >
      <div className="header">
        <div className="buttonclass">
          <div>
            <button className="close" onClick={() => deleteVideo(id)}>X</button>
          </div>
          <div>
            <button className="edit" onClick={() => editVideo(id)}>edit</button>
          </div>

        </div>

        <div>
          <img src={`https://picsum.photos/id/${id}/260/160`} alt="" />
        </div>

        <div className="title">{title}</div>
        {/* 1 method  */}
        {/* <div>
          {verify ? (
            <div className="channel">{channel} ✅</div>
          ) : (
            <div className="channel">{channel} </div>
          )}
        </div> */}
        {/* 2nd method  */}
        {/* <div className="channel">{channel} { verify ? "✅": null}</div> */}
        {/* 3rd method  */}

        <div className="channel">{channel} {verify && "✅"}</div>
        <div>
          {children}
        </div>
        <div className="date">
          {View} Views <span>.</span> {time}
        </div>
      </div>
    </div>
  );
}
