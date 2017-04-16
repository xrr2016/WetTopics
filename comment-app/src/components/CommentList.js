import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render () {
    const comments = this.props.comments
    return (
      <ul className="comment-list">
        {comments.map((comment, index) => <Comment key={index} {...comment} />)}
      </ul>
    )
  }
}

export default CommentList