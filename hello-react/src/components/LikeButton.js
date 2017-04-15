import React, { Component } from 'react'

class LikeButton extends Component {
  state = {
    isLiked: false
  } 
  handleClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render () {
    const isLiked = this.state.isLiked
    return (
      <div>
        <button onClick={this.handleClick}>{isLiked ? '取消': '点赞'}👍</button>
      </div>
    )
  }
}

export default LikeButton