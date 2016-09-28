'use strict';

let React = require('react');
let ReactDOM = require('react-dom');

class StoryBox extends React.Component {
  render() {
    return( <h1>Hello, component!</h1> );
  }
}

let target = document.getElementById('story-app');

ReactDOM.render(
  <StoryBox />,
  target
);
