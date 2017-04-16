import React, { Component } from 'react'

class Clock extends Component {
  state = {
    currentTime: new Date()
  }
  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render () {
    return (
      <div>
        <h2>现在的时间是</h2>
        <p>{this.state.currentTime.toLocaleString()}</p>
      </div>
    )
  }
}

export default Clock