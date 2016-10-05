'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let CommentBox = require('./components/comment-box');
let Styles = require('./styles/main.css');

let target = document.getElementById('comment-app');

ReactDOM.render(
  <CommentBox />,
  target
);
