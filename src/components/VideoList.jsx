import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  const videos = props.videos.map(element => {
    return ( 
      <VideoListEntry 
        key={element.etag}
        video={element}
        handleClick={props.handleClick}
      />
    );
  });
  // console.log(props.videoList);
  return (
    <div className="video-list">
      {videos}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
//window.VideoList = VideoList;


