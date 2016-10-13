'use strict';

let React = require('react');
let Comment = require('./comment');
let CommentForm = require('./comment-form');

class CommentBox extends React.Component {

  constructor() {
    super();

    this.state = {
      showComments: true,
      comments: [
        { id: 1, author: 'Morgan A. McCircuit', body: 'Great picture!' },
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff.' }
      ]
    };
  }

  render() {
    const comments = this._getComments() || [];

    let commentNodes;
    let buttonText = 'Show Comments';
    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)} />
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
          &nbsp;
          <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        </h4>
        <div className="comment-list">
          {commentNodes}
        </div>
      </div>
    );
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }

  _getComments() {
    let commentList = this.state.comments || [];

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
