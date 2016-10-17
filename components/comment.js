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
          <button className="comment-footer-delete"
              onClick={this._handleDelete.bind(this)}>
            Delete Comment
          </button>
        </div>
      </div>
    );
  }

  _handleDelete(event) {
    event.preventDefault();
    if (confirm('Are you sure you want to delete it?')) {
      this.props.onDelete(this.props.comment);
    }
  }

}

module.exports = Comment;
