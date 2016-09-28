'use strict';

let React = require('react');
//let Styles = require('../styles/comment.css');

class Comment extends React.Component {

  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{this.props.body}</p>
        <div className="comment-footer">
          <button className="comment-footer-delete">
            Delete Comment
          </button>
        </div>
      </div>
    );
  }

}

module.exports = Comment;
