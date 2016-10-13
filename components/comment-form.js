'use strict';

let React = require('react');

class CommentForm extends React.Component {

  render() {
    return(
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h3>Join the discussion</h3>
        <div className="comment">
          <input placeholder="Name:" ref={(input) => this._author = input}
                  className="form-author" size="100"/>
          <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}
                    className="form-body">
          </textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    //prevents page from reloading
    event.preventDefault();

    //if any field is blank, do not add the comment
    if (!this._author.value || !this._body.value) {
      alert('Please fill up both fields to add a comment')
      return;
    }

    this.props.addComment(this._author.value, this._body.value);

    //clear form fields
    this._author.value = '';
    this._body.value = '';
  }

}

module.exports = CommentForm;
