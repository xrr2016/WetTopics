import React, { Component } from 'react'

class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unLikedText: '点赞'
  }
  state = {
    isLiked: false
  }
  handleClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
    this.props.handleComponentClick()
  };
  render () {
    const isLiked = this.state.isLiked
    return (
      <div>
        <button onClick={this.handleClick}>
          {isLiked
            ? <span>{this.props.likedText}</span>
            : <span>{this.props.unLikedText}</span>}
          👍
        </button>
      </div>
    )
  }
}

export default LikeButton
