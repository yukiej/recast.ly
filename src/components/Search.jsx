var Search = (props) => {
  return (
    <div className="search-bar form-inline">
      <input className="form-control" 
        type="text" 
        value={props.term}
        onChange={(event)=> props.handleSearch(event.target.value)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

// <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 