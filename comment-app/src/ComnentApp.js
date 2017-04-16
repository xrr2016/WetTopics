import React, { Component } from 'react'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import './CommentApp.css';

class CommentApp extends Component {
  state = {
    comments: []
  }
  handleNewComment = (comment) => {
    const comments = this.state.comments 
    comments.push(comment)
    this.setState({comments})
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
