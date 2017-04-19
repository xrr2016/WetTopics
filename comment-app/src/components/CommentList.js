import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  onDeleteComment = (index) => {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render () {
    const comments = this.props.comments
    return (
      <ul className="comment-list">
        {comments.map((comment, index) => <Comment key={index} index={index} {...comment} onDeleteComment={this.onDeleteComment} />)}
      </ul>
    )
  }
}

export default CommentList