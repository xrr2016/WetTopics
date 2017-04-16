import React, { Component } from 'react'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import './CommentApp.css';

class CommentApp extends Component {
  state = {
    comments: []
  }
  handleNewComment = (comment) => {
    const updatedComments = this.state.comments.concat(comment)
    this.setState({comments: updatedComments})
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput handleNewComment={this.handleNewComment} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp;
