// TODO: Render the `App` component to the DOM
import exampleVideoData from '../src/data/exampleVideoData.js';
import App from '../src/components/App.js';


ReactDOM.render(<App exampleVideoData={exampleVideoData}/>, document.getElementById('app'));