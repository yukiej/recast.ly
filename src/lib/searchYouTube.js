import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (term, callback = () => {}) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    method: 'GET',
    part: 'snippet',
    q: term,
    key: YOUTUBE_API_KEY,
    maxResults: 5
  }, (data) => callback(data)
    // return callback(data);
  );
};
  
export default searchYouTube;
//window.searchYouTube = searchYouTube;
