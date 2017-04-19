import React, { Component } from 'react'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import './CommentApp.css';

class CommentApp extends Component {
  state = {
    comments: []
  }
  componentWillMount() {
    this._loadComments()
  }
  _loadComments() {
    const comments = localStorage.getItem('comments')
    if (comments) {
      this.setState({
        comments: JSON.parse(comments)
      })
    }
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleNewComment = (comment) => {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const updatedComments = this.state.comments.concat(comment)
    this.setState({comments: updatedComments})
    this._saveComments(updatedComments)
  }
  onDeleteComment = (index) => {
    const comments = this.state.comments
    console.log(index)
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput handleNewComment={this.handleNewComment} />
        <CommentList comments={this.state.comments}
        onDeleteComment={this.onDeleteComment} />
      </div>
    )
  }
}

export default CommentApp;
