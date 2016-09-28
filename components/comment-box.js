'use strict';

let React = require('react');
let Comment = require('./comment')

class CommentBox extends React.Component {

  render() {
    const comments = this._getComments() || [];

    return (
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }

  _getComments() {
    const commentList = [
      { id: 1, author: 'Morgan A. McCircuit', body: 'Great picture!' },
      { id: 2, author: 'Bending Bender', body: 'Excellent stuff.' }
    ];

    return commentList.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  }

  _getCommentsTitle(commentsCount) {
    if (commentsCount === 0) {
      return 'No comments yet.';
    } else if (commentsCount === 1) {
      return '1 comment';
    } else {
      return `${commentsCount} comments`;
    }
  }

}

module.exports = CommentBox;
