var React = require('react');
var ReactDOM = require('react-dom');

class StoryBox extends React.Component {
  render() {
    return( <h1>Hello, component!</h1> );
  }
}

let target = document.getElementById('example');

ReactDOM.render(
  <StoryBox />,
  target
);
