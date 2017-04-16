import React, { Component } from 'react'

class CommentInput extends Component {
  state = {
    username: '',
    content: ''
  }
  handleUserNameChange = (event) => {
    const username = event.target.value
    this.setState({username})
  }
  handleContentChange = (event) => {
    const content = event.target.value
    this.setState({content})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const {username, content} = this.state
    if (username.length <= 0 || content.length <= 0) {
      return
    }
    this.props.handleNewComment({username, content})
    this.setState({content: ''})
  }
  componentDidMount() {
    // this.textarea.focus()
  }
  render () {
    return (
      <form className="comment-field-input">
        <div className="comment-field">
          <label className="comment-label" htmlFor="username">用户名 :</label>
          <input className="comment-field-name" 
          value={this.state.username}
          onChange={this.handleUserNameChange}
          id="username"/>
        </div>
        <div className="comment-field">
          <label className="comment-label" htmlFor="content">评论 :</label>
          <textarea ref={textarea => this.textarea = textarea} className="comment-field-input"
          onChange={this.handleContentChange}
          value={this.state.content}
          id="content" autoFocus></textarea>
        </div>
        <div className="comment-field-button">
          <button className="coment-submit" type="submit" onClick={this.handleSubmit}>发布</button>
        </div>
      </form>
    )
  }
}

export default CommentInput