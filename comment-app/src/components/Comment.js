import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// const Comment = (props) => (
//   <li className="comment">
//     <span className="comment-username">{props.username}:</span>
//     {props.content}
//   </li>
// )
class Comment extends Component {
  // static propTypes = {
  //   createAt: PropTypes.number.isRequired
  // }
  state = {
    timeString: ''
  }

  componentWillMount() {
    this._updateTimeString()
    this._timer = setInterval(this._updateTimeString, 5000)
  }
  componentWillUnmount() {
    clearInterval(this._timer)
  }
  _updateTimeString = () => {
    const createAt = this.props.createAt
    const duration = (Date.now() - createAt) / 1000
    this.setState({
      timeString: duration > 60 
          ? `${Math.round(duration / 60)} 分钟前`
          : `${Math.round(Math.max(duration, 1))} 秒前` 
    })
  }
  _getProcessedContent = (content) => {
    return content
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;')
              .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  handleDeleteComment = () => {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }
  render() {
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.username}</span>
        </div>
        <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(this.props.content)}} />
        <span className="comment-createtime">{this.state.timeString}</span>
        <button className="comment-delete" onClick={this.handleDeleteComment}>删除</button>
      </div>
    )
  }
}

export default Comment