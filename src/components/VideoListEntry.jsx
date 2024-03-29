import VideoList from './VideoList.js';


var VideoListEntry = (props) => {
  const thumbnail = props.video.snippet.thumbnails.default.url;
  const title = props.video.snippet.title;
  const description = props.video.snippet.description;
  return (
    <div className="video-list-entry media" onClick={() => props.handleClick(props.video)} >
      <div className="media-left media-middle">
        <img className="media-object" src={thumbnail} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
