'use strict';

let React = require('react');
let Comment = require('./comment');
let CommentForm = require('./comment-form');

class CommentBox extends React.Component {

  constructor() {
    super();

    this.state = {
      showComments: true,
      comments: []
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

  _getCommentsTitle(commentsCount) {
    if (commentsCount === 0) {
      return 'No comments yet.';
    } else if (commentsCount === 1) {
      return '1 comment';
    } else {
      return `${commentsCount} comments`;
    }
  }

  _getComments() {
    let commentList = this.state.comments || [];

    return commentList.map((comment) => {
      return (
        <Comment author={comment.author}
          body={comment.body}
          key={comment.id}
          onDelete={this._deteleComment.bind(this)}
          comment={comment} />
      );
    });
  }

  //this is one of react's lifecycle methods
  //it's invoked BEFORE render()
  componentWillMount() {
    this._fetchComments();
  }

  //this one is invoked AFTER render()
  componentDidMount() {
    this._timer = setInterval(() => this._fetchComments(), 5000);
  }

  //and this one is invoked right before the
  //compoent gets removed from the DOM
  componentWillUnmount() {
    clearInterval(this._timer);
  }

  _fetchComments() {
    jQuery.ajax({
      method: 'GET',
      url: 'api/comments.json',
      success: (comments) => {
        this.setState({comments});
      }
    });
  }

  _deteleComment(comment) {
    //this would be the call for a web service 
    /*
    $.ajax({
      method: 'DELETE',
      url: `/api/comments.json/${comment.id}`
    });
    */
    const comments = [ ...this.state.comments ];
    const commentIndex = comments.indexOf(comment);
    comments.splice(commentIndex, 1);

    this.setState({ comments });
  }

}

module.exports = CommentBox;
