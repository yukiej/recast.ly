class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: props.exampleVideoData[0],
      videoList: props.exampleVideoData,
      term: ''
    };
  }
  render() {
    // console.log(this.props)
    // console.log(this.state.currentVideo)
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> view goes here</h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// export default App;
window.App = App; 

